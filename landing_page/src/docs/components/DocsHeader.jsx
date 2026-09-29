function DocsHeader({ onOpenSearch, onToggleMobileSidebar, onNavigate }) {
  const handleHomeClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-[#e2e8f0] bg-white px-4 sm:px-8">
      {/* Left: Mobile Drawer Trigger + Brand */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#e2e8f0] text-[#091728] lg:hidden hover:bg-[#f8fafc]"
          aria-label="Toggle navigation sidebar"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a
          href="/"
          onClick={handleHomeClick}
          className="flex items-center gap-3"
          aria-label="JOCKY home"
        >
          {/* JOCKY brand mark */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center">
            <svg
              className="h-7 w-7 text-[#091728]"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 29L18 7"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M20.5 7.5L24.5 16"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M27 21.5L30.5 29"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[22px] font-extrabold tracking-[-0.04em] text-[#091728]">
              JOCKY
            </span>
            <span className="rounded bg-[#edf6ff] px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#1268d8]">
              DOCS
            </span>
          </div>
        </a>
      </div>

      {/* Middle: Search bar button */}
      <div className="flex flex-1 items-center justify-center px-4 max-w-lg">
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex w-full items-center justify-between rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2 text-xs text-[#64748b] transition-all hover:border-[#1268d8] hover:bg-white"
        >
          <span className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-[#94a3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[13px] text-[#64748b]">Search documentation...</span>
          </span>
          <div className="hidden sm:flex items-center gap-1">
            <kbd className="rounded border border-[#cbd5e1] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#64748b] shadow-2xs">
              Ctrl
            </kbd>
            <kbd className="rounded border border-[#cbd5e1] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#64748b] shadow-2xs">
              K
            </kbd>
          </div>
        </button>
      </div>

      {/* Right: GitHub & Back to Home */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="https://github.com/ashwanikumar-dev/JOCKY"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-[13px] font-medium text-[#334155] transition-colors hover:text-[#1268d8]"
        >
          <svg className="h-4 w-4 text-[#091728]" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>

        <span className="hidden sm:block h-4 w-px bg-[#e2e8f0]" />

        <a
          href="/"
          onClick={handleHomeClick}
          className="inline-flex items-center gap-1 rounded-md border border-[#cbd5e1] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[#091728] transition-colors hover:border-[#091728] hover:bg-[#edf6ff]"
        >
          <span>Home</span>
          <span className="text-[#1268d8]">↗</span>
        </a>
      </div>
    </header>
  );
}

export default DocsHeader;
