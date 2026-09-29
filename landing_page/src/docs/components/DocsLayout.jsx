import { useState, useEffect } from "react";
import DocsHeader from "./DocsHeader";
import DocsSidebar from "./DocsSidebar";
import DocsSearch from "./DocsSearch";
import DocsBreadcrumb from "./DocsBreadcrumb";
import DocsPagination from "./DocsPagination";
import DocsToc from "./DocsToc";
import { getPageByPath } from "../data/docsNavigation";

function DocsLayout({ currentPath, onNavigate, children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const currentPage = getPageByPath(currentPath);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#091728] font-sans antialiased selection:bg-[#1268d8] selection:text-white">
      {/* Documentation Top Header */}
      <DocsHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        onNavigate={onNavigate}
      />

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1440px]">
        {/* Left Sidebar */}
        <DocsSidebar
          currentPath={currentPath}
          onNavigate={onNavigate}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center Content Area */}
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-10 lg:py-9">
          <div className="mx-auto max-w-[840px]">
            {/* Breadcrumb Navigation */}
            <DocsBreadcrumb
              category={currentPage?.category}
              title={currentPage?.title}
            />

            {/* Page Content */}
            <article className="prose prose-slate max-w-none text-[#334155]">
              {children}
            </article>

            {/* Previous / Next Footer Pagination */}
            <DocsPagination
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          </div>
        </main>

        {/* Right Table of Contents */}
        <DocsToc currentPath={currentPath} />
      </div>

      {/* Global Search Modal */}
      <DocsSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelect={(path) => {
          onNavigate(path);
          setIsSearchOpen(false);
        }}
      />
    </div>
  );
}

export default DocsLayout;
