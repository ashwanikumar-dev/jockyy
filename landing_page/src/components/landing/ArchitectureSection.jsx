function ArchitectureSection() {
  return (
    <section id="architecture" className="border-t border-[#d9e5f1] bg-white">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        {/* =========================================================
            MAIN
        ========================================================= */}
        <div className="grid items-start lg:grid-cols-[36%_64%]">
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="flex flex-col justify-center py-14 pr-10 lg:min-h-[610px] lg:pr-12">
            {/* LABEL */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-[#091728]" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-[#627895]">
                ARCHITECTURE
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[520px] text-[48px] font-bold leading-[1.01] tracking-[-0.055em] text-[#091728] sm:text-[54px] lg:text-[58px]">
              Built as a system,
              <br />
              not a collection
              <br />
              of tools
              <span className="text-[#1268d8]">.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.65] text-[#627895]">
              JOCKY turns your investigation intent into a validated execution
              flow. A compiler, a structured intermediate representation and
              secure agents work together to collect, preserve and analyze
              evidence across endpoints.
            </p>

            {/* =====================================================
                ARCHITECTURE PRINCIPLES
            ===================================================== */}
            <div className="mt-8 max-w-[520px]">
              {/* 01 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">▤</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Compiler-driven
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Validates and transforms your investigation
                    <br />
                    logic into a forensic intermediate representation.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">⌘</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Modular agents
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Secure agents execute on target endpoints
                    <br />
                    with platform-specific collectors.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">◉</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Structured evidence
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Collected data is preserved with context,
                    <br />
                    metadata and integrity information.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="flex gap-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">▥</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Extensible analysis
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Timelines, detection logic and reporting
                    <br />
                    built on a common evidence model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT — ARCHITECTURE DIAGRAM
          ======================================================= */}
          <div className="relative border-l border-[#d9e5f1] bg-[#fbfdff]">
            {/* TOP ANNOTATION */}
            <div className="absolute right-5 top-7 z-10 w-[110px]">
              <div className="mb-2 h-px w-8 bg-[#c6d8e9]" />

              <p className="font-mono text-[8px] leading-[1.55] tracking-[0.11em] text-[#627895]">
                FROM INTENT
                <br />
                TO EVIDENCE.
                <br />
                A UNIFIED
                <br />
                ARCHITECTURE.
              </p>
            </div>

            {/* DIAGRAM */}
            <div className="flex h-[580px] items-center justify-center p-6 lg:h-[650px] lg:p-8">
              <div className="relative h-full w-full max-w-[780px] overflow-hidden border border-[#edf2f7] bg-[#f8fbff]">
                <img
                  src="/graphics/Architecture.png"
                  alt="JOCKY system architecture"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* BOTTOM METRICS BAR */}
            <div className="border-t border-[#d9e5f1] bg-white px-4 py-4 lg:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {/* Modular Design */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      ▤
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Modular Design
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        EASY TO EXTEND
                      </p>
                    </div>
                  </div>

                  {/* Secure by Default */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                      🛡
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Secure by Default
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        ISOLATED EXECUTION
                      </p>
                    </div>
                  </div>

                  {/* Standardized Model */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      ◉
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Standardized Model
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        CONSISTENT RESULTS
                      </p>
                    </div>
                  </div>

                  {/* Research-friendly */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      ⚙
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Research-friendly
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        BUILT FOR EVOLUTION
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureSection;
