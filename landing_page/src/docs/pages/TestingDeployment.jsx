function TestingDeployment() {
  const testingPills = ["Testing Strategy", "Cross-Platform Testing", "Deployment", "Observability"];

  const testCoverage = [
    {
      title: "Unit Testing",
      desc: "Lexer, parser, compiler AST and semantic rules."
    },
    {
      title: "Integration Testing",
      desc: "End-to-end AST to IR emission and serialization."
    },
    {
      title: "Cross-Platform Testing",
      desc: "Windows & Linux collector normalization equality."
    },
    {
      title: "Failure Testing",
      desc: "Offline agents, network drops, and hash mismatch alerts."
    },
    {
      title: "End-to-End Testing",
      desc: "Complete script-to-report investigation flow."
    }
  ];

  const deploymentContainers = [
    { name: "JOCKY Web", desc: "Vite / React Dashboard", port: "3000:80" },
    { name: "FastAPI Backend", desc: "REST & WebSocket API", port: "8000:8000" },
    { name: "Database", desc: "SQLite (MVP) / PostgreSQL", port: "Internal" },
    { name: "Endpoints Agents", desc: "Windows & Linux Native Binaries", port: "TLS Channel" }
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center rounded-md bg-[#edf6ff] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1268d8] uppercase">
          JOCKY v0.1 SPECIFICATION
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#091728] sm:text-4xl">
          Testing & Deployment
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Reliable, cross-platform and production-ready deployment.
        </p>
      </div>

      {/* Feature Navigation Pills */}
      <div className="flex flex-wrap gap-2">
        {testingPills.map((pill, idx) => (
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

      {/* Testing Pyramid Visual (Left) + Testing Coverage List (Right) */}
      <section id="testing" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Left: Testing Pyramid */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#64748b] font-mono tracking-wider uppercase mb-4">
            Testing Pyramid
          </h2>
          <div className="space-y-2 text-center text-xs">
            <div className="mx-auto max-w-[180px] rounded-lg border border-purple-200 bg-purple-50 p-2.5 font-bold text-[#7e22ce]">
              End-to-End Tests
              <span className="block text-[10px] font-normal text-[#64748b]">Script to Report</span>
            </div>
            <div className="mx-auto max-w-[260px] rounded-lg border border-blue-200 bg-blue-50 p-2.5 font-bold text-[#1268d8]">
              Cross-Platform Tests
              <span className="block text-[10px] font-normal text-[#64748b]">Windows & Linux Parity</span>
            </div>
            <div className="mx-auto max-w-[340px] rounded-lg border border-sky-200 bg-sky-50 p-2.5 font-bold text-[#0369a1]">
              Integration Tests
              <span className="block text-[10px] font-normal text-[#64748b]">Compiler → IR → Runtime</span>
            </div>
            <div className="w-full rounded-lg border border-emerald-200 bg-emerald-50 p-2.5 font-bold text-[#15803d]">
              Unit Tests
              <span className="block text-[10px] font-normal text-[#64748b]">Lexer, Parser, AST, Validator</span>
            </div>
          </div>
        </div>

        {/* Right: Testing Coverage */}
        <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#091728] mb-4 tracking-tight uppercase font-mono">
            Testing Coverage
          </h2>
          <div className="space-y-3">
            {testCoverage.map((item, idx) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1268d8] text-[10px] font-bold text-white shadow-2xs">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#091728]">{item.title}</h3>
                  <p className="text-[11px] leading-relaxed text-[#64748b]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Architecture Section */}
      <section id="deployment" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Deployment Architecture</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {deploymentContainers.map((container) => (
            <div key={container.name} className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4 text-center shadow-2xs">
              <span className="block text-xs font-bold text-[#091728]">{container.name}</span>
              <span className="block text-[11px] text-[#64748b] mt-0.5">{container.desc}</span>
              <span className="mt-2 inline-block rounded bg-white px-2 py-0.5 font-mono text-[9.5px] text-[#1268d8] border border-[#e2e8f0]">
                {container.port}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TestingDeployment;
