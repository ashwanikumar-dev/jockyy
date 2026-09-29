function Introduction({ onNavigate }) {
  const handleNav = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className="space-y-10">
      {/* Header Badge & Title */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          JOCKY Documentation
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Compiler-driven forensic investigations, expressed as code.
        </p>
      </div>

      {/* Description Section */}
      <section id="overview" className="space-y-4 text-[15px] leading-relaxed text-[#334155]">
        <p>
          <strong>JOCKY</strong> is a domain-specific language (DSL) and distributed computer and network forensic investigation platform. It provides a formal, auditable bridge between what an incident investigator wants to inspect and what actually executes on heterogeneous endpoints (Windows and Ubuntu/Linux).
        </p>
        <p>
          By using a compiler-driven approach, JOCKY introduces a <strong>validated execution boundary</strong>, ensures consistent semantics across environments, and produces <strong>verifiable evidence</strong> with cryptographic integrity and provenance.
        </p>
      </section>

      {/* Core Investigation Flow Box */}
      <section id="flow" className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-2xs">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#f1f5f9] pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#091728]">Core Investigation Flow</h2>
              <p className="text-xs text-[#64748b]">
                A high-level view of how a JOCKY investigation flows from a human-readable script to verified findings.
              </p>
            </div>
          </div>
          <a
            href="/docs/architecture"
            onClick={(e) => handleNav(e, "/docs/architecture")}
            className="inline-flex items-center gap-1 rounded-md bg-[#f8fafc] px-3 py-1 font-mono text-[11px] font-semibold text-[#1268d8] transition-colors hover:bg-[#edf6ff]"
          >
            <span>From intent to evidence</span>
            <span>→</span>
          </a>
        </div>

        {/* 6 Step Visual Pipeline Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 items-stretch">
          {/* Step 1 */}
          <div className="flex flex-col items-center rounded-lg border border-blue-100 bg-[#eff6ff] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[#1d4ed8] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">JOCKY Script</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Investigator intent in JOCKY language</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center rounded-lg border border-purple-100 bg-[#faf5ff] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-[#7e22ce] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">Compiler</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Parse, validate and generate Forensic IR</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center rounded-lg border border-emerald-100 bg-[#f0fdf4] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#15803d] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">Forensic IR</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Validated, safe, platform-neutral IR</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center rounded-lg border border-amber-100 bg-[#fffbeb] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-[#b45309] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">Agent</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Execute on endpoints</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center rounded-lg border border-rose-100 bg-[#fff1f2] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-[#be123c] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">Evidence</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Normalized evidence with integrity & provenance</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center rounded-lg border border-sky-100 bg-[#f0f9ff] p-3.5 text-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[#0369a1] mb-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xs font-bold text-[#091728]">Detection & Timeline</h3>
            <p className="mt-1 text-[10.5px] leading-tight text-[#64748b]">Reconstruct events and surface findings</p>
          </div>
        </div>
      </section>

      {/* 3 Quick Action / Section Navigation Cards */}
      <section id="learning" className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Card 1 */}
        <a
          href="/docs/language"
          onClick={(e) => handleNav(e, "/docs/language")}
          className="group flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-5 transition-all hover:border-[#1268d8] hover:shadow-xs"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-[#091728] group-hover:text-[#1268d8] flex items-center justify-between">
              <span>Learn JOCKY</span>
              <span>→</span>
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
              Understand the language, syntax and standard library for writing investigations.
            </p>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="/docs/architecture"
          onClick={(e) => handleNav(e, "/docs/architecture")}
          className="group flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-5 transition-all hover:border-[#1268d8] hover:shadow-xs"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-[#091728] group-hover:text-[#1268d8] flex items-center justify-between">
              <span>Understand the Architecture</span>
              <span>→</span>
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
              Explore the compiler pipeline, runtime, agents, collectors and platform design.
            </p>
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="/docs/compiler"
          onClick={(e) => handleNav(e, "/docs/compiler")}
          className="group flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-5 transition-all hover:border-[#1268d8] hover:shadow-xs"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-[#091728] group-hover:text-[#1268d8] flex items-center justify-between">
              <span>Build Investigations</span>
              <span>→</span>
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
              See practical examples and learn how to write, validate and run real investigations.
            </p>
          </div>
        </a>
      </section>

      {/* Core Principles */}
      <section id="principles" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Core principles</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#091728]">Validated execution</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
                Investigations are compiled, semantically validated and executed through a controlled runtime on endpoints.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#091728]">Provenance & integrity</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
                All evidence is normalized, tagged with SHA-256 integrity and provenance metadata to maintain a chain of custody.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#edf6ff] text-[#1268d8]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#091728]">Cross-platform investigation</h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">
                A unified approach to investigate heterogeneous environments including Windows and Ubuntu/Linux.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
