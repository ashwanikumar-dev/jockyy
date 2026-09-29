function ArchitectureDiagram() {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-[#d9e5f1] bg-[#091728] p-6 text-white shadow-md">
      <div className="mb-4 flex items-center justify-between border-b border-[#203957] pb-3">
        <div>
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#1268d8]">
            SYSTEM TOPOLOGY
          </span>
          <h4 className="text-base font-bold text-white">JOCKY Master Architecture</h4>
        </div>
        <span className="rounded bg-[#1268d8]/20 px-2 py-0.5 font-mono text-[10px] text-[#5ca4ff]">
          CONTROL & DATA PLANE
        </span>
      </div>

      <div className="space-y-4 font-mono text-xs">
        {/* Layer 1: Authoring */}
        <div className="rounded-lg border border-[#203957] bg-[#0d1f35] p-3.5">
          <div className="flex items-center justify-between text-[#9db2c9]">
            <span className="font-bold text-white">1. INVESTIGATOR & COMPILER (Central Plane)</span>
            <span className="text-[10px] text-[#627895]">Rust / Web UI</span>
          </div>
          <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-4 text-center">
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">JOCKY Script</span>
              <span className="text-[10px] text-[#627895]">Forensic Intent</span>
            </div>
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">Compiler</span>
              <span className="text-[10px] text-[#627895]">Lexer → Parser → AST</span>
            </div>
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">Semantic Check</span>
              <span className="text-[10px] text-[#627895]">Type & Policy Validator</span>
            </div>
            <div className="rounded bg-[#1268d8]/30 p-2 border border-[#1268d8]">
              <span className="block text-[#5ca4ff] font-bold">Forensic IR</span>
              <span className="text-[10px] text-blue-200">Validated JSON Plan</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-[#5ca4ff] text-xs">
          ↓ Secure Channel (HTTPS / Signed Tasks)
        </div>

        {/* Layer 2: Endpoint Fleet */}
        <div className="rounded-lg border border-[#203957] bg-[#0d1f35] p-3.5">
          <div className="flex items-center justify-between text-[#9db2c9]">
            <span className="font-bold text-white">2. DISTRIBUTED ENDPOINT EXECUTION (Data Plane)</span>
            <span className="text-[10px] text-[#627895]">Rust Endpoint Agent</span>
          </div>
          <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Windows Target */}
            <div className="rounded border border-[#203957] bg-[#162c4a] p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-white">
                <span>Windows Endpoint (WIN-01)</span>
                <span className="text-[10px] text-emerald-400">Agent Active</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px] text-[#9db2c9]">
                <div className="rounded bg-[#0d1f35] px-2 py-1">Local IR Re-Validation</div>
                <div className="rounded bg-[#0d1f35] px-2 py-1">Runtime Dispatcher</div>
                <div className="rounded bg-[#0d1f35] px-2 py-1 text-blue-300">Windows Collectors (API / Win32)</div>
              </div>
            </div>

            {/* Linux Target */}
            <div className="rounded border border-[#203957] bg-[#162c4a] p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-white">
                <span>Ubuntu Endpoint (UBUNTU-01)</span>
                <span className="text-[10px] text-emerald-400">Agent Active</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px] text-[#9db2c9]">
                <div className="rounded bg-[#0d1f35] px-2 py-1">Local IR Re-Validation</div>
                <div className="rounded bg-[#0d1f35] px-2 py-1">Runtime Dispatcher</div>
                <div className="rounded bg-[#0d1f35] px-2 py-1 text-blue-300">Linux Collectors (/proc / sysfs)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center text-[#5ca4ff] text-xs">
          ↓ Raw & Normalized Evidence + SHA-256 + Provenance
        </div>

        {/* Layer 3: Central Analysis Platform */}
        <div className="rounded-lg border border-[#203957] bg-[#0d1f35] p-3.5">
          <div className="flex items-center justify-between text-[#9db2c9]">
            <span className="font-bold text-white">3. EVIDENCE, DETECTION & TIMELINE PLATFORM</span>
            <span className="text-[10px] text-[#627895]">Python FastAPI / SQLite</span>
          </div>
          <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-4 text-center">
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">Evidence Store</span>
              <span className="text-[10px] text-[#627895]">Raw + Normalized</span>
            </div>
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">Detection Engine</span>
              <span className="text-[10px] text-[#627895]">Rule-based Findings</span>
            </div>
            <div className="rounded bg-[#162c4a] p-2 border border-[#203957]">
              <span className="block text-white font-semibold">Timeline Engine</span>
              <span className="text-[10px] text-[#627895]">Cross-Machine Events</span>
            </div>
            <div className="rounded bg-[#1268d8]/30 p-2 border border-[#1268d8]">
              <span className="block text-[#5ca4ff] font-bold">Investigator UI</span>
              <span className="text-[10px] text-blue-200">Custody Audit & Report</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
