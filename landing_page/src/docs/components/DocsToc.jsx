function DocsToc({ currentPath }) {
  const getTocForPath = (path) => {
    switch (path) {
      case "/docs/what-is-jocky":
        return [
          { id: "overview", title: "Overview" },
          { id: "characteristics", title: "Key characteristics" },
          { id: "intent", title: "Investigator intent" }
        ];
      case "/docs/architecture":
        return [
          { id: "overview", title: "System Topology" },
          { id: "planes", title: "Control & Data Planes" },
          { id: "layers", title: "Six Architectural Layers" }
        ];
      case "/docs/compiler":
        return [
          { id: "stages", title: "6-Stage Compilation" },
          { id: "validation", title: "Syntax vs Semantic" },
          { id: "ir", title: "Forensic IR" }
        ];
      case "/docs/language":
        return [
          { id: "principles", title: "Language Principles" },
          { id: "constructs", title: "Grammar & Constructs" },
          { id: "example", title: "Complete Example" }
        ];
      case "/docs/standard-library":
        return [
          { id: "overview", title: "Standard Modules" },
          { id: "system", title: "System Module" },
          { id: "process", title: "Process Module" },
          { id: "network", title: "Network Module" },
          { id: "evidence", title: "Evidence Module" }
        ];
      case "/docs/evidence":
        return [
          { id: "normalization", title: "Raw vs Normalized" },
          { id: "schema", title: "Evidence Schema" },
          { id: "integrity", title: "SHA-256 Integrity" },
          { id: "custody", title: "Chain of Custody" }
        ];
      case "/docs/runtime":
        return [
          { id: "components", title: "Agent, Runtime, Collector" },
          { id: "contract", title: "Collector Contract" },
          { id: "mismatch", title: "Cross-Platform Handling" }
        ];
      case "/docs/platform":
        return [
          { id: "backend", title: "Central Backend" },
          { id: "timeline", title: "Cross-Machine Timeline" },
          { id: "views", title: "Dashboard Views" }
        ];
      case "/docs/security":
        return [
          { id: "safety", title: "Safety Boundary" },
          { id: "layers", title: "Defense-in-Depth" },
          { id: "agent", title: "Local Re-Validation" }
        ];
      case "/docs/development":
        return [
          { id: "testing", title: "Testing Matrix" },
          { id: "deployment", title: "Docker Deployment" },
          { id: "observability", title: "Observability" }
        ];
      case "/docs/roadmap":
        return [
          { id: "mvp", title: "30-Day MVP Scope" },
          { id: "phase2", title: "Phase 2 Enhancements" },
          { id: "future", title: "Future Research" }
        ];
      case "/docs":
      default:
        return [
          { id: "overview", title: "Overview" },
          { id: "flow", title: "Core investigation flow" },
          { id: "learning", title: "What you'll learn" },
          { id: "principles", title: "Core principles" }
        ];
    }
  };

  const tocItems = getTocForPath(currentPath);

  return (
    <aside className="hidden w-56 shrink-0 xl:block xl:sticky xl:top-20 xl:h-[calc(100vh-5rem)]">
      <div className="flex h-full flex-col justify-between py-6 pl-6">
        <div>
          <h4 className="font-semibold text-xs text-[#091728] tracking-tight">
            On this page
          </h4>

          <nav className="mt-3 space-y-2 border-l border-[#e2e8f0] text-xs" aria-label="Table of contents">
            {tocItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block pl-3 text-[12.5px] transition-colors ${
                  idx === 0
                    ? "border-l-2 -ml-px border-[#1268d8] font-semibold text-[#1268d8]"
                    : "text-[#64748b] hover:text-[#091728]"
                }`}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Need Help Box */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 text-xs">
          <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-[#edf6ff] text-[#1268d8]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <h5 className="font-bold text-[#091728]">Need help?</h5>
          <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
            Found an issue or have a question? Visit our GitHub repository.
          </p>

          <a
            href="https://github.com/ashwanikumar-dev/JOCKY"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#cbd5e1] bg-white py-1.5 text-[11.5px] font-semibold text-[#091728] shadow-2xs transition-all hover:border-[#091728] hover:bg-[#f8fafc]"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Open on GitHub</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default DocsToc;
