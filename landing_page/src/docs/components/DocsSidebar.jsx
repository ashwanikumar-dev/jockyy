import { docsNavigation } from "../data/docsNavigation";

// Helper icons mapping for each doc page
function getSidebarIcon(path) {
  switch (path) {
    case "/docs":
    case "/docs/what-is-jocky":
    case "/docs/architecture":
    case "/docs/compiler":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "/docs/language":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "/docs/standard-library":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case "/docs/evidence":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "/docs/runtime":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "/docs/platform":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "/docs/security":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case "/docs/development":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "/docs/roadmap":
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return (
        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
  }
}

function DocsSidebar({ currentPath, onNavigate, isMobileOpen, onCloseMobile }) {
  const handleClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col py-5">
      {/* Version Dropdown Box */}
      <div className="px-4 pb-4">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-[#e2e8f0] bg-white p-3 text-left shadow-2xs transition-all hover:border-[#cbd5e1]"
        >
          <div className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#091728]">
                <span>JOCKY v0.1</span>
                <span className="text-[10px] text-[#94a3b8]">▼</span>
              </div>
              <p className="text-[11px] text-[#64748b]">Compiler-driven forensic investigation</p>
            </div>
          </div>
        </button>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-4 pb-12" aria-label="Documentation navigation">
        {docsNavigation.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2.5 font-mono text-[10px] font-bold tracking-[0.16em] text-[#64748b] uppercase">
              {group.category}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = currentPath === item.path || (item.path === "/docs" && (currentPath === "/docs" || currentPath === "/docs/"));
                return (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={(e) => handleClick(e, item.path)}
                      className={`group relative flex items-center gap-2.5 rounded-md px-3 py-2 text-[13px] transition-all ${
                        isActive
                          ? "bg-[#edf6ff] text-[#1268d8] font-semibold"
                          : "text-[#334155] hover:bg-[#f8fafc] hover:text-[#091728]"
                      }`}
                    >
                      {/* Active left bar indicator */}
                      {isActive && (
                        <span className="absolute left-0 top-1 bottom-1 w-1 rounded-r-sm bg-[#1268d8]" />
                      )}

                      <span className={isActive ? "text-[#1268d8]" : "text-[#64748b] group-hover:text-[#091728]"}>
                        {getSidebarIcon(item.path)}
                      </span>

                      <span className="flex-1 truncate">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-[#e2e8f0] bg-[#fbfdff] lg:block lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#091728]/50 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />

          <div className="fixed inset-y-0 left-0 w-72 max-w-[80vw] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3.5">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-extrabold text-[#091728]">JOCKY Docs</span>
              </div>
              <button
                type="button"
                onClick={onCloseMobile}
                className="rounded-md p-1.5 text-[#64748b] hover:bg-[#edf6ff] hover:text-[#091728]"
                aria-label="Close sidebar"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}

export default DocsSidebar;
