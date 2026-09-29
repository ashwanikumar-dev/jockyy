import CodeBlock from "../components/CodeBlock";

function EvidenceIntegrity() {
  const rawEvidenceCode = `{
  "evidence_id": "EVID-1042",
  "task_id": "TASK-893",
  "machine_id": "WIN-01",
  "collected_at": "2026-09-09T09:14:02.128Z",
  "sha256": "4a5e1e4baab89f3a32518a88...",
  "type": "ProcessSet",
  "raw_path": "/var/jocky/raw/EVID-1042.raw.json"
}`;

  const lifecycleSteps = [
    { name: "Collection", desc: "Raw evidence acquired by OS-specific collector" },
    { name: "Normalization", desc: "Converted to common structural schema" },
    { name: "Integrity (SHA-256)", desc: "Cryptographic hash computed at collection" },
    { name: "Provenance Metadata", desc: "Machine, agent, and timestamp attached" },
    { name: "Storage & Analysis", desc: "Saved to central store and evaluated by rules" }
  ];

  const integrityMatters = [
    {
      title: "Tamper Detection",
      desc: "SHA-256 hash comparison across storage and transit identifies byte alterations immediately."
    },
    {
      title: "Reliable Analysis",
      desc: "Normalized structure ensures cross-platform queries and rules evaluate consistent fields."
    },
    {
      title: "Chain of Custody",
      desc: "Every action, user access, and verification step is permanently audited with timestamps."
    },
    {
      title: "Legal Admissibility",
      desc: "Forensically sound preservation safeguards evidence integrity for compliance audits."
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
          Evidence & Integrity
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          From raw data to verifiable forensic evidence.
        </p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-2">
        {["Raw Evidence", "Normalized Evidence", "Provenance", "Integrity", "Chain of Custody"].map((pill, idx) => (
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

      {/* Dual Column: Raw Evidence Preview (Left) + Evidence Lifecycle Stepper (Right) */}
      <section id="normalization" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_1fr] items-start">
        {/* Left: Raw Evidence Code Box */}
        <div>
          <h2 className="text-sm font-bold text-[#091728] mb-2 tracking-tight">Raw Evidence</h2>
          <p className="text-xs text-[#64748b] mb-2">
            Collector output is preserved immutably alongside normalized data:
          </p>
          <CodeBlock code={rawEvidenceCode} language="json" filename="evidence.json" showLineNumbers />
        </div>

        {/* Right: Evidence Lifecycle */}
        <div id="schema" className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
          <h2 className="text-xs font-bold text-[#091728] mb-4 tracking-tight uppercase font-mono">
            Evidence Lifecycle
          </h2>
          <div className="space-y-4">
            {lifecycleSteps.map((step, idx) => (
              <div key={step.name} className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1268d8] text-[10px] font-bold text-white shadow-2xs">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#091728]">{step.name}</h3>
                  <p className="text-[11px] leading-relaxed text-[#64748b]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Integrity Matters Grid */}
      <section id="integrity" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Why Integrity Matters</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrityMatters.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 shadow-2xs">
              <h3 className="text-xs font-bold text-[#091728]">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EvidenceIntegrity;
