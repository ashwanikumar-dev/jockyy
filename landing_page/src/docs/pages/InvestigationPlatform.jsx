function InvestigationPlatform() {
  const keyFeatures = [
    "Manage investigations & targets",
    "Monitor fleet agent heartbeats",
    "View raw & normalized evidence",
    "Detect suspicious activity via rules",
    "Unified multi-host timeline",
    "Explainable forensic findings"
  ];

  const dashboardModules = [
    { name: "Investigations", desc: "Script authoring & target dispatch" },
    { name: "Machines", desc: "Endpoint fleet posture & status" },
    { name: "Evidence", desc: "Dual raw & normalized explorer" },
    { name: "Findings", desc: "Rule engine alerts & severity" },
    { name: "Timeline", desc: "Chronological multi-host sequence" }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          Investigation Platform
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Centralized platform for managing investigations, evidence and findings.
        </p>
      </div>

      {/* Main Grid: Dashboard Architecture Flow (Left) + Key Features (Right) */}
      <section id="backend" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] items-start">
        {/* Left: Platform Architecture Visual */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-2xs space-y-4">
          <h2 className="text-xs font-bold text-[#64748b] font-mono tracking-wider uppercase">
            Platform Architecture
          </h2>

          {/* Web Dashboard */}
          <div className="rounded-lg border border-blue-100 bg-[#f8fbfe] p-3.5">
            <span className="text-xs font-bold text-[#1268d8] block mb-2">Web Dashboard</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {dashboardModules.map((m) => (
                <div key={m.name} className="rounded border border-[#e2e8f0] bg-white p-2 text-center">
                  <span className="text-xs font-bold text-[#091728] block">{m.name}</span>
                  <span className="text-[10px] text-[#64748b] block truncate">{m.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center text-xs text-[#64748b]">↓ REST API & WebSockets</div>

          {/* FastAPI Backend */}
          <div className="rounded-lg border border-purple-100 bg-[#faf5ff] p-3.5">
            <span className="text-xs font-bold text-[#7e22ce] block mb-2">FastAPI Backend</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 text-center text-xs">
              <div className="rounded border border-purple-200/60 bg-white p-2">Task Dispatch</div>
              <div className="rounded border border-purple-200/60 bg-white p-2">Evidence Vault</div>
              <div className="rounded border border-purple-200/60 bg-white p-2">Detection Engine</div>
              <div className="rounded border border-purple-200/60 bg-white p-2">Timeline Engine</div>
            </div>
          </div>

          <div className="flex justify-center text-xs text-[#64748b]">↓ Secure TLS Channel</div>

          {/* Agents */}
          <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3.5">
            <span className="text-xs font-bold text-[#091728] block mb-2">Agents (Endpoints)</span>
            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <div className="rounded border border-[#e2e8f0] bg-white p-2">Windows Fleet</div>
              <div className="rounded border border-[#e2e8f0] bg-white p-2">Linux Fleet</div>
            </div>
          </div>
        </div>

        {/* Right: Key Features */}
        <div id="views" className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#091728] mb-4 tracking-tight uppercase font-mono">
            Key Features
          </h2>
          <div className="space-y-3">
            {keyFeatures.map((feat) => (
              <div key={feat} className="flex items-center gap-2.5 text-xs text-[#334155]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestigationPlatform;
