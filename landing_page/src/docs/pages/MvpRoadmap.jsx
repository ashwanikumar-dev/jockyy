function MvpRoadmap() {
  const mvpItems = [
    "JOCKY language v0.1",
    "Compiler pipeline with Forensic IR",
    "Windows and Linux agents",
    "Core collectors (system, process, network)",
    "Evidence normalization and integrity",
    "Basic detection and timeline",
    "Investigation dashboard UI",
    "Multi-machine execution"
  ];

  const futureScopeItems = [
    "Additional forensic modules",
    "Advanced detection and correlation",
    "Expanded standard library",
    "More operating systems",
    "Enhanced visualization",
    "Scalability and performance",
    "Extended evidence sources"
  ];

  const roadmapPhases = [
    { phase: "MVP (Current)", title: "Core language & platform", color: "bg-[#1268d8] text-white" },
    { phase: "Phase 2", title: "Advanced detection", color: "bg-white text-[#091728] border border-[#cbd5e1]" },
    { phase: "Phase 3", title: "Extended OS platform", color: "bg-white text-[#091728] border border-[#cbd5e1]" },
    { phase: "Phase 4", title: "Scaling & ecosystem", color: "bg-white text-[#091728] border border-[#cbd5e1]" }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          MVP & Roadmap
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Current capabilities and future vision for JOCKY.
        </p>
      </div>

      {/* Two Column Grid: MVP Scope (Current) vs Future Scope */}
      <section id="mvp" className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start">
        {/* Left: MVP Scope (Current) */}
        <div className="rounded-xl border border-emerald-200 bg-[#f0fdf4] p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
            <h2 className="text-xs font-bold text-[#15803d] font-mono tracking-wider uppercase">
              MVP Scope (Current)
            </h2>
          </div>
          <div className="space-y-2.5">
            {mvpItems.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#166534]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-emerald-800">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Future Scope */}
        <div id="future" className="rounded-xl border border-blue-200 bg-[#f8fbfe] p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1268d8] inline-block" />
            <h2 className="text-xs font-bold text-[#1268d8] font-mono tracking-wider uppercase">
              Future Scope
            </h2>
          </div>
          <div className="space-y-2.5">
            {futureScopeItems.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#1e40af]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1268d8]">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Development Roadmap */}
      <section id="phase2" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Development Roadmap</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roadmapPhases.map((phase, idx) => (
            <div key={phase.phase} className={`rounded-xl p-4.5 shadow-2xs transition-all ${phase.color}`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                  {phase.phase}
                </span>
                <span className="font-mono text-[11px] opacity-70">0{idx + 1}</span>
              </div>
              <h3 className="mt-2 text-xs font-bold">{phase.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MvpRoadmap;
