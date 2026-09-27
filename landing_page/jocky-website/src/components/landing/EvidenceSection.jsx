function EvidenceSection() {
  return (
    <section id="evidence" className="border-t border-[#d9e5f1] bg-white">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        {/* =========================================================
            MAIN EVIDENCE SECTION
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
                EVIDENCE-CENTRIC
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[510px] text-[48px] font-bold leading-[1.01] tracking-[-0.055em] text-[#091728] sm:text-[54px] lg:text-[58px]">
              Every result
              <br />
              has a story
              <span className="text-[#1268d8]">.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.65] text-[#627895]">
              JOCKY keeps evidence connected to its source, collection context
              and integrity information — so you can trust the results,
              understand how they were obtained, and use them with confidence.
            </p>

            {/* =====================================================
                FOUR PRINCIPLES
            ===================================================== */}
            <div className="mt-8 max-w-[520px]">
              {/* TRACEABLE */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">◉</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Traceable
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Link every finding to its source evidence
                    <br />
                    and collection context.
                  </p>
                </div>
              </div>

              {/* INTEGRITY */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">♢</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Integrity by design
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Cryptographic hash and metadata
                    <br />
                    preserved from collection to analysis.
                  </p>
                </div>
              </div>

              {/* CONTEXT */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">▤</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Complete context
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Know what, where, when and how
                    <br />
                    it was collected.
                  </p>
                </div>
              </div>

              {/* ANALYSIS */}
              <div className="flex gap-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">↗</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Ready for analysis
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Structured and standardized for
                    <br />
                    faster triage and reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* SMALL STATEMENT */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#091728]" />

              <span className="font-mono text-[8px] tracking-[0.18em] text-[#627895]">
                PRESERVE TODAY. ANSWER TOMORROW.
              </span>
            </div>
          </div>

          {/* =======================================================
              RIGHT — APPROVED EVIDENCE VISUAL
          ======================================================= */}
          <div className="flex flex-col overflow-hidden border-l border-[#d9e5f1] bg-[#fbfdff] lg:min-h-[590px]">
            <div className="relative flex-1 bg-[#f6f9ff]">
              {/* TOP ANNOTATION */}
              <div className="absolute right-5 top-7 z-10 w-[105px]">
                <div className="mb-2 h-px w-8 bg-[#c6d8e9]" />

                <p className="font-mono text-[8px] leading-[1.55] tracking-[0.11em] text-[#627895]">
                  EVIDENCE
                  <br />
                  IN CONTEXT.
                  <br />
                  BUILT FOR TRUST.
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex h-[500px] items-center justify-center px-0 pt-0 md:h-[520px] lg:h-[675px]">
                <div className="relative h-full w-full overflow-hidden border-t border-b border-[#edf2f7] bg-[#f8fbff]">
                  <img
                    src="/graphics/evidence.png"
                    alt="JOCKY evidence context, integrity and chain of custody"
                    className="absolute inset-0 h-full w-full object-contain object-center scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#d9e5f1] bg-white px-3 py-3 lg:px-4">
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                    ◉
                  </div>

                  <div>
                    <h3 className="text-[11px] font-semibold text-[#091728]">
                      Reliable Evidence
                    </h3>

                    <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                      PRESERVE AND VERIFY
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                    ♢
                  </div>

                  <div>
                    <h3 className="text-[11px] font-semibold text-[#091728]">
                      Built-in Integrity
                    </h3>

                    <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                      TRUST THE PROCESS
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                    ↗
                  </div>

                  <div>
                    <h3 className="text-[11px] font-semibold text-[#091728]">
                      Connected Context
                    </h3>

                    <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                      FROM DATA TO FINDINGS
                    </p>
                  </div>
                </div>

                <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                    ◷
                  </div>

                  <div>
                    <h3 className="text-[11px] font-semibold text-[#091728]">
                      Investigation Ready
                    </h3>

                    <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                      STRUCTURED FOR REAL CASES
                    </p>
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

export default EvidenceSection;
