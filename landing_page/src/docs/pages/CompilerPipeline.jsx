import CodeBlock from "../components/CodeBlock";

function CompilerPipeline() {
  const exampleCode = `// Example: Compilation Flow
investigation "Process Audit" {
    procs = Process.collect()
    heavy = Process.filter(procs, memory > 500MB)
    Evidence.preserve(heavy)
}`;

  const irPreview = `{
  "schema_version": "0.1.0",
  "investigation_id": "INV-2026-0909",
  "instructions": [
    {
      "op": "COLLECT_PROCESSES",
      "target_module": "Process",
      "filter": { "field": "memory_usage", "op": "GT", "val": 524288000 }
    },
    {
      "op": "PRESERVE_EVIDENCE",
      "target": "heavy"
    }
  ]
}`;

  const pipelineStages = [
    {
      stage: "Source",
      subtitle: "JOCKY Script",
      desc: "Human-readable forensic script written by an investigator."
    },
    {
      stage: "Lexer",
      subtitle: "Token Stream",
      desc: "Scans characters into keywords, identifiers, and literals."
    },
    {
      stage: "Parser",
      subtitle: "Abstract Syntax Tree",
      desc: "Builds a structured AST according to Grammar v0.1."
    },
    {
      stage: "Semantic Check",
      subtitle: "Type & Policy Validation",
      desc: "Verifies type signatures, module existence, and permissions."
    },
    {
      stage: "IR Generator",
      subtitle: "Forensic IR",
      desc: "Lowers validated AST into a closed JSON instruction set."
    },
    {
      stage: "IR Validator",
      subtitle: "Security Gate",
      desc: "Re-verifies schema, version, and allowlisted opcodes."
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
          Compiler Pipeline
        </h1>
        <p className="mt-2 text-lg text-[#64748b] leading-relaxed">
          From high-level forensic intent to verified intermediate representation.
        </p>
      </div>

      {/* Code and Pipeline Stages Visual */}
      <section id="stages" className="space-y-6">
        <div>
          <h2 className="text-base font-bold text-[#091728]">Example: Compilation Flow</h2>
          <div className="mt-2">
            <CodeBlock code={exampleCode} language="jocky" showLineNumbers />
          </div>
        </div>

        {/* Pipeline Stepper Cards */}
        <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-2xs">
          <h3 className="text-xs font-bold text-[#64748b] font-mono tracking-wider uppercase mb-4">
            COMPILER STAGES
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pipelineStages.map((st, i) => (
              <div key={st.stage} className="rounded-lg border border-[#e2e8f0] bg-[#f8fbfe] p-4 transition-all hover:border-[#cbd5e1]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#1268d8]">0{i + 1}</span>
                  <span className="font-mono text-[10px] text-[#64748b] bg-white px-2 py-0.5 rounded border border-[#e2e8f0]">
                    {st.subtitle}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-bold text-[#091728]">{st.stage}</h4>
                <p className="mt-1 text-xs text-[#64748b] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syntax vs Semantic Validation */}
      <section id="validation" className="space-y-4">
        <h2 className="text-lg font-bold text-[#091728]">Syntax vs. Semantic Validation</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
            <span className="font-mono text-[10px] font-bold text-[#1268d8] uppercase">
              SYNTAX VALIDATION (GRAMMAR)
            </span>
            <h3 className="mt-1 text-sm font-bold text-[#091728]">Grammatical Structure</h3>
            <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
              Verifies lexical tokens and grammatical productions (e.g. matching braces, valid identifier names, properly terminated statements).
            </p>
            <div className="mt-3 rounded-lg bg-red-50 p-2.5 font-mono text-[11px] text-red-700 border border-red-200">
              SyntaxError: Unterminated string literal at line 2:14
            </div>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fbfe] p-5 shadow-2xs">
            <span className="font-mono text-[10px] font-bold text-[#1268d8] uppercase">
              SEMANTIC VALIDATION (MEANING)
            </span>
            <h3 className="mt-1 text-sm font-bold text-[#091728]">Type Safety & Policy Checks</h3>
            <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
              Checks whether referenced standard-library modules exist, verifies argument type signatures, and confirms parameter boundaries.
            </p>
            <div className="mt-3 rounded-lg bg-amber-50 p-2.5 font-mono text-[11px] text-amber-700 border border-amber-200">
              TypeError: Field &apos;memory&apos; on &apos;ProcessSet&apos; requires comparison operator
            </div>
          </div>
        </div>
      </section>

      {/* Generated IR Section */}
      <section id="ir" className="space-y-3">
        <h2 className="text-lg font-bold text-[#091728]">Emitted Forensic IR (Output)</h2>
        <p className="text-xs text-[#64748b]">
          The validated execution plan output by the compiler generator:
        </p>
        <CodeBlock code={irPreview} language="json" filename="compiled_ir.json" showLineNumbers />
      </section>
    </div>
  );
}

export default CompilerPipeline;
