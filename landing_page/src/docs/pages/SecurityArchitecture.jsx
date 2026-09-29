function SecurityArchitecture() {
  const securityPrinciples = [
    "Validated Execution: Multi-phase compiler checking before task issuance",
    "Allowlisted Operations: Closed grammar with no arbitrary code execution",
    "Agent Security: Independent local IR re-validation before running",
    "Evidence Integrity: SHA-256 cryptographic hashes verified at every boundary",
    "Safety Boundary: Strict defensive investigation scope without exploit mechanisms",
    "No Arbitrary Code: Closed domain-specific instruction set"
  ];

  const securityLayers = [
    {
      title: "IR Validation",
      desc: "Compile-time and runtime schema and policy validation."
    },
    {
      title: "Controlled Agents",
      desc: "Restricted, allowlisted execution on endpoints."
    },
    {
      title: "Evidence Security",
      desc: "SHA-256 integrity verification and tamper detection."
    },
    {
      title: "Execution Boundary",
      desc: "Safe, audited collector interfaces to operating systems."
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
          Security Architecture
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Defense-in-depth design for safe and controlled investigations.
        </p>
      </div>

      {/* Grid: Security Layers Visual (Left) + Key Principles (Right) */}
      <section id="layers" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] items-start">
        {/* Left: Security Layers Visual Box */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-2xs">
          <h2 className="text-xs font-bold text-[#64748b] font-mono tracking-wider uppercase mb-5 text-center">
            Security Layers & Defense-in-Depth
          </h2>

          {/* Central Shield Graphic Layout */}
          <div className="relative flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {securityLayers.map((layer) => (
                <div key={layer.title} className="rounded-lg border border-[#e2e8f0] bg-[#f8fbfe] p-3 text-center">
                  <h3 className="text-xs font-bold text-[#091728]">{layer.title}</h3>
                  <p className="mt-1 text-[10.5px] text-[#64748b] leading-tight">{layer.desc}</p>
                </div>
              ))}
            </div>

            {/* Central Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-[#eff6ff] px-4 py-1.5 font-mono text-xs font-bold text-[#1268d8] shadow-2xs">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>JOCKY SECURITY CORE</span>
            </div>
          </div>
        </div>

        {/* Right: Key Principles Checklist */}
        <div id="safety" className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#091728] mb-4 tracking-tight uppercase font-mono">
            Key Principles
          </h2>
          <div className="space-y-3">
            {securityPrinciples.map((principle) => (
              <div key={principle} className="flex items-start gap-2.5 text-xs text-[#334155]">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1268d8] mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="leading-snug">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecurityArchitecture;
