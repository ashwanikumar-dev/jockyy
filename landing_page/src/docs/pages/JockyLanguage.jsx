import CodeBlock from "../components/CodeBlock";

function JockyLanguage() {
  const exampleCode = `// Basic Syntax Example
investigation "System Investigation" {
    // 1. Collect system information
    sys = System.info()

    // 2. Collect and filter running processes
    procs = Process.collect()
    suspicious = Process.filter(procs, name == "suspicious.exe")

    // 3. Preserve evidence
    Evidence.preserve(suspicious)
}`;

  const keyConcepts = [
    { name: "Investigation blocks", desc: "Top-level container scoping forensic actions." },
    { name: "Statements", desc: "Immutable bindings and preservation calls." },
    { name: "Expressions", desc: "Module invocations and comparisons." },
    { name: "Identifiers", desc: "Named references for evidence collections." },
    { name: "Operators", desc: "Comparison (==, !=, >, <) and logical operators." },
    { name: "Literals", desc: "Strings, Integers, Memory units (MB, GB)." },
    { name: "Comments", desc: "Single-line annotations starting with //." },
    { name: "Filters", desc: "Declarative condition expressions on collections." }
  ];

  const designPrinciples = [
    {
      title: "Human-readable",
      desc: "Intuitive syntax that non-developer forensic incident responders can easily read, audit, and write."
    },
    {
      title: "Domain-specific",
      desc: "Purpose-built forensic concepts (Processes, Sockets, Evidence) built directly into the language syntax."
    },
    {
      title: "Safe and controlled",
      desc: "Closed grammar with no raw OS command escapes, unbounded loops, or arbitrary execution paths."
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
          JOCKY Language
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          A simple, safe and expressive language for forensic investigations.
        </p>
      </div>

      {/* Split Section: Key Concepts (Left) + Basic Syntax Example (Right) */}
      <section id="constructs" className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1.3fr] items-start">
        {/* Left: Key Concepts */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-2xs">
          <h2 className="text-sm font-bold text-[#091728] mb-3.5 tracking-tight">
            Key Concepts
          </h2>
          <div className="space-y-2">
            {keyConcepts.map((item) => (
              <div key={item.name} className="flex items-start gap-2.5 rounded-lg border border-[#e2e8f0] bg-[#f8fbfe] p-2.5">
                <span className="font-mono text-[11px] font-bold text-[#1268d8]">
                  •
                </span>
                <div>
                  <span className="block text-xs font-bold text-[#091728]">{item.name}</span>
                  <span className="block text-[11px] text-[#64748b]">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Code Example */}
        <div id="example">
          <h2 className="text-sm font-bold text-[#091728] mb-2 tracking-tight">
            Basic Syntax Example
          </h2>
          <CodeBlock code={exampleCode} language="jocky" showLineNumbers />
        </div>
      </section>

      {/* Design Principles Section */}
      <section id="principles" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Design Principles</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {designPrinciples.map((dp) => (
            <div key={dp.title} className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-4.5 shadow-2xs">
              <h3 className="text-xs font-bold text-[#091728]">{dp.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">{dp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default JockyLanguage;
