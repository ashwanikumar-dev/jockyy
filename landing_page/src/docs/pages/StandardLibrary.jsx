import CodeBlock from "../components/CodeBlock";

function StandardLibrary() {
  const systemInfoCode = `sys = System.info()`;

  const otherOperations = [
    {
      name: "Process.collect()",
      desc: "Collect running processes from the endpoint.",
      tag: "Process",
      color: "border-blue-200 bg-blue-50/40"
    },
    {
      name: "Process.filter()",
      desc: "Filter process data using declarative conditions.",
      tag: "Process",
      color: "border-purple-200 bg-purple-50/40"
    },
    {
      name: "Network.connections()",
      desc: "Collect active network connections and sockets.",
      tag: "Network",
      color: "border-sky-200 bg-sky-50/40"
    },
    {
      name: "Network.listeners()",
      desc: "Collect listening ports and interfaces.",
      tag: "Network",
      color: "border-emerald-200 bg-emerald-50/40"
    },
    {
      name: "Evidence.preserve()",
      desc: "Preserve evidence with metadata and SHA-256.",
      tag: "Evidence",
      color: "border-amber-200 bg-amber-50/40"
    },
    {
      name: "Evidence.verify()",
      desc: "Verify evidence integrity against baseline hash.",
      tag: "Evidence",
      color: "border-rose-200 bg-rose-50/40"
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
          Standard Library
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          Built-in operations for common forensic tasks.
        </p>
      </div>

      {/* Featured Operation: System.info() */}
      <section id="system" className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[#1268d8] px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
              System
            </span>
            <h2 className="text-base font-bold text-[#091728]">System.info()</h2>
          </div>
          <span className="text-xs text-[#64748b]">Collects basic system information from the endpoint</span>
        </div>

        <CodeBlock code={systemInfoCode} language="jocky" />

        {/* Details Table */}
        <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fbfe] p-4 text-xs">
          <h3 className="font-bold text-[#091728] mb-2.5">Details</h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
            <div>
              <span className="font-semibold text-[#64748b]">Purpose: </span>
              <span className="text-[#334155]">Collect system metadata</span>
            </div>
            <div>
              <span className="font-semibold text-[#64748b]">Arguments: </span>
              <span className="text-[#334155]">None</span>
            </div>
            <div>
              <span className="font-semibold text-[#64748b]">Returns: </span>
              <span className="text-[#334155]">System Information object</span>
            </div>
            <div>
              <span className="font-semibold text-[#64748b]">Notes: </span>
              <span className="text-[#334155]">Provides OS, hostname, user and environment details.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Standard Library Operations Grid */}
      <section id="overview" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Other Standard Library Operations</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherOperations.map((op) => (
            <div key={op.name} className={`rounded-xl border p-4.5 bg-white transition-all hover:border-[#cbd5e1] hover:shadow-2xs`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#091728]">{op.name}</span>
                <span className="font-mono text-[9px] font-semibold text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded">
                  {op.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-[#64748b] leading-relaxed">{op.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StandardLibrary;
