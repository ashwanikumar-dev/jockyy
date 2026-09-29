function InvestigatorSection() {
  return (
    <section id="investigator" className="border-t border-[#d9e5f1] bg-white">
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
                INVESTIGATOR EXPERIENCE
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[500px] text-[48px] font-bold leading-[1.01] tracking-[-0.055em] text-[#091728] sm:text-[54px] lg:text-[58px]">
              An investigation
              <br />
              workspace,
              <br />
              not another tool
              <span className="text-[#1268d8]">.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.65] text-[#627895]">
              From endpoint selection to evidence review, findings and timelines
              — everything stays in one connected workspace. Focus on the
              investigation, not on switching between tools.
            </p>

            {/* =====================================================
                FEATURES
            ===================================================== */}
            <div className="mt-8 max-w-[520px]">
              {/* 01 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">▦</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    End-to-end workflow
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Plan, execute, monitor and analyze
                    <br />
                    in a single place.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">♧</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    All your endpoints
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    View and manage machines, agents
                    <br />
                    and their status.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="flex gap-4 border-b border-[#d9e5f1] py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">▤</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    Evidence at your fingertips
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Search, verify and explore collected
                    <br />
                    evidence with full context.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="flex gap-4 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[17px] text-[#1268d8]">⌁</span>
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#091728]">
                    From data to findings
                  </h3>

                  <p className="mt-1 text-[11px] leading-[1.5] text-[#627895]">
                    Connect the dots with timelines,
                    <br />
                    insights and reports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================
              RIGHT — DASHBOARD IMAGE
          ======================================================= */}
          <div className="relative border-l border-[#d9e5f1] bg-[#fbfdff]">
            {/* TOP ANNOTATION */}
            <div className="absolute right-5 top-7 z-10 w-[110px]">
              <div className="mb-2 h-px w-8 bg-[#c6d8e9]" />

              <p className="font-mono text-[8px] leading-[1.55] tracking-[0.11em] text-[#627895]">
                SAME INVESTIGATION.
                <br />
                DIFFERENT ENDPOINTS.
                <br />A CLEARER STORY.
              </p>
            </div>

            {/* DASHBOARD IMAGE */}
            <div className="flex h-[560px] items-center justify-center p-6 lg:h-[620px] lg:p-8">
              <div className="relative h-full w-full max-w-[760px] overflow-hidden border border-[#edf2f7] bg-[#f8fbff]">
                <img
                  src="/graphics/investigation.png"
                  alt="JOCKY investigator workspace dashboard"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* BOTTOM METRICS BAR */}
            <div className="border-t border-[#d9e5f1] bg-white px-4 py-4 lg:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {/* Faster Analysis */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      ⚡
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Faster Analysis
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        LESS TIME SWITCHING
                      </p>
                    </div>
                  </div>

                  {/* Better Context */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[14px] text-[#1268d8]">
                      ♢
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Better Context
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        CONNECTED WORKFLOWS
                      </p>
                    </div>
                  </div>

                  {/* Higher Confidence */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      👥
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Higher Confidence
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        TRACEABLE RESULTS
                      </p>
                    </div>
                  </div>

                  {/* Real Impact */}
                  <div className="flex min-h-[74px] items-center gap-3 border border-[#d9e5f1] px-3 py-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#d9e5f1] text-[15px] text-[#1268d8]">
                      📊
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-[#091728]">
                        Real Impact
                      </h3>

                      <p className="mt-1 font-mono text-[7px] tracking-[0.12em] text-[#627895]">
                        FROM ENDPOINTS TO ANSWERS
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

export default InvestigatorSection;
