import { useState, useEffect, useRef } from "react";
import { allDocsPages } from "../data/docsNavigation";

function DocsSearch({ isOpen, onClose, onSelect }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter pages based on query
  const results = query.trim() === ""
    ? allDocsPages.slice(0, 5)
    : allDocsPages.filter((page) => {
        const q = query.toLowerCase();
        return (
          page.title.toLowerCase().includes(q) ||
          page.category.toLowerCase().includes(q) ||
          page.description.toLowerCase().includes(q) ||
          page.path.toLowerCase().includes(q)
        );
      });

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      onSelect(results[selectedIndex].path);
      onClose();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#091728]/50 p-4 pt-16 sm:pt-24 backdrop-blur-xs">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        className="relative w-full max-w-xl overflow-hidden rounded-xl border border-[#d9e5f1] bg-white shadow-2xl transition-all"
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-[#d9e5f1] px-4 py-3 bg-[#f8fbfe]">
          <svg className="h-5 w-5 text-[#627895] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search JOCKY documentation (e.g. IR, AST, Collectors, SHA-256)..."
            className="ml-3 flex-1 bg-transparent text-sm text-[#091728] placeholder-[#627895] outline-none"
          />
          <button
            onClick={onClose}
            className="rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold text-[#627895] hover:bg-[#d9e5f1]"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {results.length > 0 ? (
            <ul className="space-y-1">
              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => {
                        onSelect(item.path);
                        onClose();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex w-full flex-col rounded-lg px-3 py-2.5 text-left transition-colors ${
                        isSelected
                          ? "bg-[#1268d8] text-white"
                          : "text-[#091728] hover:bg-[#edf6ff]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[13.5px] font-semibold ${isSelected ? "text-white" : "text-[#091728]"}`}>
                          {item.title}
                        </span>
                        <span className={`font-mono text-[9px] uppercase tracking-wider ${isSelected ? "text-blue-100" : "text-[#627895]"}`}>
                          {item.category}
                        </span>
                      </div>
                      <p className={`mt-0.5 text-[12px] line-clamp-1 ${isSelected ? "text-blue-100" : "text-[#627895]"}`}>
                        {item.description}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="p-8 text-center text-sm text-[#627895]">
              No documentation pages found matching &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-[#d9e5f1] bg-[#f8fbfe] px-4 py-2 text-[11px] text-[#627895]">
          <div className="flex items-center gap-3">
            <span><kbd className="rounded border border-[#c6d8e9] bg-white px-1 font-mono text-[10px]">↑↓</kbd> Navigate</span>
            <span><kbd className="rounded border border-[#c6d8e9] bg-white px-1 font-mono text-[10px]">↵</kbd> Select</span>
          </div>
          <span>JOCKY Technical Reference</span>
        </div>
      </div>
    </div>
  );
}

export default DocsSearch;
