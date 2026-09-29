function RuntimeAgentsCollectors() {
  const collectorContract = [
    {
      phase: "validate()",
      desc: "Checks local permissions and confirms target OS capability."
    },
    {
      phase: "collect()",
      desc: "Executes OS-native API calls and preserves raw payload."
    },
    {
      phase: "normalize()",
      desc: "Converts raw evidence into the common unified schema."
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          Runtime, Agents & Collectors
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Executing validated IR on heterogeneous endpoints.
        </p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-2">
        {["Overview", "Agent", "Collector", "Execution Flow", "Cross-Platform"].map((pill, idx) => (
          <span
            key={pill}
            className={`rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${
              idx === 0
                ? "bg-[#1268d8] text-white"
                : "border border-[#e2e8f0] bg-white text-[#64748b]"
            }`}
          >
            {pill}
          </span>
        ))}
      </div>

      {/* Two Column Architecture Section */}
      <section id="components" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Left: Execution on Endpoints Visual Flow */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#64748b] font-mono tracking-wider uppercase mb-4">
            Execution on Endpoints
          </h2>
          <div className="space-y-3 font-mono text-xs">
            <div className="rounded-lg border border-blue-200 bg-[#eff6ff] p-3 text-center">
              <span className="font-bold text-[#1268d8] block">Validated IR</span>
              <span className="text-[10px] text-[#64748b]">Arrives over secure TLS channel</span>
            </div>

            <div className="flex justify-center text-xs text-[#64748b]">↓</div>

            <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 text-center">
              <span className="font-bold text-[#091728] block">Runtime (Dispatcher)</span>
              <span className="text-[10px] text-[#64748b]">Independent local policy check</span>
            </div>

            <div className="flex justify-center text-xs text-[#64748b]">↓</div>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-[#e2e8f0] bg-white p-2.5 text-center">
                <span className="font-bold text-[#091728] block text-[11px]">Windows Collector</span>
                <span className="text-[10px] text-[#64748b]">Win32 APIs</span>
              </div>
              <div className="rounded-lg border border-[#e2e8f0] bg-white p-2.5 text-center">
                <span className="font-bold text-[#091728] block text-[11px]">Linux Collector</span>
                <span className="text-[10px] text-[#64748b]">/proc & sysfs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Collector Contract Box */}
        <div id="contract" className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#091728] mb-4 tracking-tight uppercase font-mono">
            Collector Contract
          </h2>
          <div className="space-y-4">
            {collectorContract.map((c, i) => (
              <div key={c.phase} className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1268d8] text-[10px] font-bold text-white shadow-2xs">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-[#091728]">{c.phase}</h3>
                  <p className="text-[11.5px] leading-relaxed text-[#64748b] mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section id="mismatch" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Supported Platforms</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3.5 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 shadow-2xs">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#1268d8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#091728]">Windows</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                Native collectors for Windows 10/11 and Server endpoints (Process, Network, System modules).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 shadow-2xs">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-[#15803d]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#091728]">Linux</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                Native collectors for Ubuntu, Debian and RHEL systems utilizing non-blocking kernel interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RuntimeAgentsCollectors;
