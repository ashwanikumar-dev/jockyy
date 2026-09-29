import CodeBlock from "../components/CodeBlock";

function WhatIsJocky() {
  const exampleCode = `investigation "System Investigation" {
    // Collect system information
    sys = System.info()

    // Collect and filter running processes
    procs = Process.collect()
    suspicious = Process.filter(procs, name == "suspicious.exe")
}`;

  const whatNextSteps = [
    {
      num: "1",
      title: "The script is lexed and parsed",
      desc: "Syntax is checked and an AST is generated."
    },
    {
      num: "2",
      title: "Semantic validation",
      desc: "Operations and parameters are validated."
    },
    {
      num: "3",
      title: "Compiled to Forensic IR",
      desc: "A safe, platform-neutral representation."
    },
    {
      num: "4",
      title: "Executed on endpoints",
      desc: "Agents run validated IR using OS-specific collectors."
    },
    {
      num: "5",
      title: "Evidence is collected",
      desc: "Normalized evidence with integrity and provenance."
    }
  ];

  return (
    <div className="space-y-10">
      {/* Header & Hero Grid with Graphic */}
      <div id="overview" className="grid items-center gap-6 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
            JOCKY v0.1 SPECIFICATION
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
            What is JOCKY?
          </h1>
          <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
            A compiler-driven domain-specific language for unified forensic investigations.
          </p>

          <p className="mt-4 text-[14.5px] leading-relaxed text-[#334155]">
            <strong>JOCKY</strong> is a domain-specific language (DSL) and distributed investigation platform designed to help investigators define, execute and analyze computer and network forensics in a safe, structured and verifiable way. Instead of running ad-hoc scripts, JOCKY introduces a <strong>compiler-driven approach</strong> where investigator intent is expressed as a high-level language, validated, transformed into a <strong>Forensic Intermediate Representation (IR)</strong>, and executed on heterogeneous endpoints (Windows and Ubuntu/Linux) through secure agents and collectors.
          </p>
        </div>

        {/* Right Isometric graphic card */}
        <div className="relative flex items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#fbfdff] p-3 shadow-2xs">
          <img
            src="/graphics/hero.png"
            alt="JOCKY investigation architecture stack"
            className="w-full max-w-[240px] object-contain"
          />
        </div>
      </div>

      {/* 4 Value Pillars Cards Grid */}
      <section id="characteristics" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Pillar 1 */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 transition-all hover:border-[#cbd5e1] hover:shadow-2xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eff6ff] text-[#1268d8] mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xs font-bold text-[#091728]">Express Intent</h3>
          <p className="mt-1 text-[11.5px] leading-relaxed text-[#64748b]">
            Write investigations in a high-level, human-readable language.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 transition-all hover:border-[#cbd5e1] hover:shadow-2xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#faf5ff] text-[#7e22ce] mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
          <h3 className="text-xs font-bold text-[#091728]">Validate & Compile</h3>
          <p className="mt-1 text-[11.5px] leading-relaxed text-[#64748b]">
            Ensure safe, semantically validated operations with a compiler.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 transition-all hover:border-[#cbd5e1] hover:shadow-2xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0fdf4] text-[#15803d] mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xs font-bold text-[#091728]">Execute Safely</h3>
          <p className="mt-1 text-[11.5px] leading-relaxed text-[#64748b]">
            Run validated IR on endpoints through controlled agents.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 transition-all hover:border-[#cbd5e1] hover:shadow-2xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffbeb] text-[#b45309] mb-3">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 className="text-xs font-bold text-[#091728]">Collect Verifiable Evidence</h3>
          <p className="mt-1 text-[11.5px] leading-relaxed text-[#64748b]">
            Produce normalized evidence with integrity and provenance.
          </p>
        </div>
      </section>

      {/* Example JOCKY Investigation Section with Side-by-Side Step Flow */}
      <section id="intent" className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#091728]">Example JOCKY Investigation</h2>
          <p className="text-xs text-[#64748b] mt-0.5">
            A simple example showing how an investigator expresses intent in JOCKY:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr] items-start">
          {/* Code Block Container */}
          <div>
            <CodeBlock code={exampleCode} language="jocky" showLineNumbers />
          </div>

          {/* What Happens Next Card */}
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5 shadow-2xs">
            <h3 className="text-xs font-bold text-[#091728] mb-3.5 tracking-tight">
              What happens next?
            </h3>
            <div className="space-y-3">
              {whatNextSteps.map((step) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1268d8] text-[10px] font-bold text-white shadow-2xs">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#091728]">{step.title}</h4>
                    <p className="text-[11px] leading-relaxed text-[#64748b]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatIsJocky;
