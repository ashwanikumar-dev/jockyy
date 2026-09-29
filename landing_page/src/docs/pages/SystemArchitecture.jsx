function SystemArchitecture() {
  const controlPlaneItems = [
    { name: "Dashboard", desc: "Investigator UI & Query Editor" },
    { name: "Investigations", desc: "State & Lifecycle Management" },
    { name: "Findings", desc: "Rule Engine Alerts" },
    { name: "Timeline", desc: "Cross-Host Event Stream" },
    { name: "Correlation", desc: "Multi-Machine Relationships" }
  ];

  const compilerStages = [
    { step: "Lexer", desc: "Tokenization" },
    { step: "Parser", desc: "AST Tree" },
    { step: "Semantic Check", desc: "Type & Policy" },
    { step: "Forensic IR", desc: "Safe Plan" },
    { step: "IR Validator", desc: "Allowlist Gate" }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          System Architecture
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          A layered, distributed architecture for secure forensic investigations.
        </p>
      </div>

      {/* Layered Architecture Visual Diagram (Panel 3 Reference) */}
      <section id="overview" className="overflow-hidden rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-2xs">
        <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4 mb-6">
          <div>
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#1268d8] uppercase">
              TOPOLOGY OVERVIEW
            </span>
            <h2 className="text-base font-bold text-[#091728]">End-to-End Investigation Architecture</h2>
          </div>
          <span className="rounded bg-[#f1f5f9] px-2.5 py-1 font-mono text-[11px] font-semibold text-[#64748b]">
            V0.1 SPEC
          </span>
        </div>

        <div className="space-y-4">
          {/* Layer 1: Investigation Platform (Control Plane) */}
          <div className="rounded-xl border border-blue-100 bg-[#f8fbfe] p-4.5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xs text-[#091728] tracking-tight">
                Investigation Platform (Control Plane)
              </span>
              <span className="font-mono text-[10px] text-[#1268d8] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                Web & API Service
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {controlPlaneItems.map((item) => (
                <div key={item.name} className="rounded-lg border border-[#e2e8f0] bg-white p-2.5 text-center shadow-2xs">
                  <span className="block text-xs font-bold text-[#091728]">{item.name}</span>
                  <span className="block text-[10.5px] text-[#64748b] truncate">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center text-xs font-mono text-[#64748b]">
            ↓ Forensic Script Submission
          </div>

          {/* Layer 2: Compiler Service */}
          <div className="rounded-xl border border-purple-100 bg-[#faf5ff] p-4.5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xs text-[#7e22ce] tracking-tight">
                Compiler Service
              </span>
              <span className="font-mono text-[10px] text-[#7e22ce] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                Rust Toolchain
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {compilerStages.map((st) => (
                <div key={st.step} className="rounded-lg border border-purple-200/60 bg-white p-2.5 text-center shadow-2xs">
                  <span className="block text-xs font-bold text-[#091728]">{st.step}</span>
                  <span className="block text-[10.5px] text-[#7e22ce] truncate">{st.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center text-xs font-mono text-[#64748b]">
            ↓ Secure Task Channel (Authenticated IR)
          </div>

          {/* Layer 3: Agents on Endpoints */}
          <div className="rounded-xl border border-amber-100 bg-[#fffbeb] p-4.5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xs text-[#b45309] tracking-tight">
                Agents (on endpoints)
              </span>
              <span className="font-mono text-[10px] text-[#b45309] bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                Native Daemons
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-amber-200/60 bg-white p-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs font-bold text-[#091728]">Windows Agent</span>
                </div>
                <span className="text-[11px] text-[#64748b]">Local IR Validator & Runtime</span>
              </div>
              <div className="rounded-lg border border-amber-200/60 bg-white p-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-xs font-bold text-[#091728]">Linux Agent</span>
                </div>
                <span className="text-[11px] text-[#64748b]">Local IR Validator & Runtime</span>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center text-xs font-mono text-[#64748b]">
            ↓ OS Dispatcher Interface
          </div>

          {/* Layer 4: OS-specific Collectors */}
          <div className="rounded-xl border border-sky-100 bg-[#f0f9ff] p-4.5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xs text-[#0369a1] tracking-tight">
                OS-specific Collectors
              </span>
              <span className="font-mono text-[10px] text-[#0369a1] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                Hardware & Kernel Bridge
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-sky-200/60 bg-white p-3 text-center">
                <span className="block text-xs font-bold text-[#091728]">Windows Collectors</span>
                <span className="text-[11px] text-[#64748b]">Win32 APIs / NT Queries</span>
              </div>
              <div className="rounded-lg border border-sky-200/60 bg-white p-3 text-center">
                <span className="block text-xs font-bold text-[#091728]">Linux Collectors</span>
                <span className="text-[11px] text-[#64748b]">/proc, /sys & Netlink Sockets</span>
              </div>
            </div>
          </div>

          {/* Connection Arrow */}
          <div className="flex justify-center text-xs font-mono text-[#64748b]">
            ↓ Raw + Normalized Evidence Packages (SHA-256)
          </div>

          {/* Layer 5: Evidence Processing & Analysis */}
          <div className="rounded-xl border border-emerald-100 bg-[#f0fdf4] p-4.5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-xs text-[#15803d] tracking-tight">
                Evidence Processing & Analysis
              </span>
              <span className="font-mono text-[10px] text-[#15803d] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                Central Storage & Analytics
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded-lg border border-emerald-200/60 bg-white p-2.5 text-center">
                <span className="block text-xs font-bold text-[#091728]">Raw Evidence</span>
                <span className="text-[10.5px] text-[#64748b]">Preserved Ground Truth</span>
              </div>
              <div className="rounded-lg border border-emerald-200/60 bg-white p-2.5 text-center">
                <span className="block text-xs font-bold text-[#091728]">Normalized Schema</span>
                <span className="text-[10.5px] text-[#64748b]">Cross-OS Compatibility</span>
              </div>
              <div className="rounded-lg border border-emerald-200/60 bg-white p-2.5 text-center">
                <span className="block text-xs font-bold text-[#091728]">Detection Engine</span>
                <span className="text-[10.5px] text-[#64748b]">Rule Match & Findings</span>
              </div>
              <div className="rounded-lg border border-emerald-200/60 bg-white p-2.5 text-center">
                <span className="block text-xs font-bold text-[#091728]">Timeline Engine</span>
                <span className="text-[10.5px] text-[#64748b]">Cross-Machine Ordering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Plane vs Data Plane */}
      <section id="planes" className="space-y-4 text-[15px] leading-relaxed text-[#334155]">
        <h2 className="text-lg font-bold text-[#091728]">Control Plane vs. Data Plane</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
            <span className="font-mono text-[10px] font-bold text-[#1268d8] uppercase">
              CONTROL PLANE
            </span>
            <h3 className="mt-1 text-sm font-bold text-[#091728]">What Should Happen</h3>
            <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
              Manages investigator authentication, JOCKY script compilation, IR validation, task distribution, and agent scheduling. Enforces that only authorized, well-formed forensic intent is sent to the fleet.
            </p>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
            <span className="font-mono text-[10px] font-bold text-[#1268d8] uppercase">
              DATA PLANE
            </span>
            <h3 className="mt-1 text-sm font-bold text-[#091728]">What Was Collected</h3>
            <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
              Handles endpoint collection, local re-validation, raw evidence preservation, structural normalization, SHA-256 integrity computation, and encrypted upload back to the central evidence store.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SystemArchitecture;
