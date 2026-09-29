function ProblemSection() {
  return (
    <section
      id="platform"
      className="border-t border-[#d9e5f1] bg-white py-12 sm:py-14 lg:py-12"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        {/* TOP CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-7 bg-[#091728]" />

              <span className="font-mono text-[8px] font-medium tracking-[0.2em] text-[#627895]">
                THE PROBLEM
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[520px] text-[43px] font-bold leading-[1.02] tracking-[-0.055em] text-[#091728] sm:text-[48px] lg:text-[52px]">
              Forensics shouldn’t mean stitching tools together.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.6] text-[#627895] sm:text-[16px]">
              Modern investigations span multiple machines, data sources and
              analysis steps. Tools are powerful, but disconnected — making it
              hard to keep the investigation consistent, repeatable and
              traceable.
            </p>

            {/* PROBLEM POINTS */}
            <div className="mt-9 grid max-w-[520px] grid-cols-3 border-t border-[#d9e5f1]">
              {/* 01 */}
              <div className="border-r border-[#d9e5f1] py-5 pr-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[14px] text-[#1268d8]">◷</span>
                </div>

                <h3 className="text-[10px] font-semibold leading-[1.25] text-[#091728]">
                  Fragmented
                  <br />
                  workflows
                </h3>

                <p className="mt-2 text-[8px] leading-[1.5] text-[#627895]">
                  Switch between
                  <br />
                  tools and contexts.
                </p>
              </div>

              {/* 02 */}
              <div className="border-r border-[#d9e5f1] px-4 py-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[13px] text-[#1268d8]">▣</span>
                </div>

                <h3 className="text-[10px] font-semibold leading-[1.25] text-[#091728]">
                  Scattered
                  <br />
                  evidence
                </h3>

                <p className="mt-2 text-[8px] leading-[1.5] text-[#627895]">
                  Data lives in different
                  <br />
                  formats and places.
                </p>
              </div>

              {/* 03 */}
              <div className="py-5 pl-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center border border-[#d9e5f1]">
                  <span className="text-[13px] text-[#1268d8]">⌘</span>
                </div>

                <h3 className="text-[10px] font-semibold leading-[1.25] text-[#091728]">
                  Hard to
                  <br />
                  reproduce
                </h3>

                <p className="mt-2 text-[8px] leading-[1.5] text-[#627895]">
                  Investigations are often
                  <br />
                  manual and inconsistent.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE SPACE */}
          <div className="relative min-h-[420px] lg:min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/graphics/problem.png"
                alt="Traditional investigation and JOCKY investigation comparison"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS */}
        <div className="mt-14 border-t border-[#d9e5f1]">
          <div className="grid gap-6 py-7 lg:grid-cols-[0.7fr_0.7fr_0.75fr_1.85fr] lg:gap-0 lg:py-6">
            {/* 60%+ */}
            <div className="border-b border-[#d9e5f1] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
              <div className="text-[28px] font-bold tracking-[-0.04em] text-[#091728]">
                60%+
              </div>

              <div className="mt-2 font-mono text-[7.5px] font-semibold leading-[1.45] tracking-[0.16em] text-[#627895]">
                TIME LOST SWITCHING
                <br />
                BETWEEN TOOLS
              </div>
            </div>

            {/* Multiple */}
            <div className="border-b border-[#d9e5f1] pb-6 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0">
              <div className="text-[28px] font-bold tracking-[-0.04em] text-[#091728]">
                Multiple
              </div>

              <div className="mt-2 font-mono text-[7.5px] font-semibold leading-[1.45] tracking-[0.16em] text-[#627895]">
                DATA FORMATS
                <br />
                TO MANUALLY CORRELATE
              </div>
            </div>

            {/* Higher Risk */}
            <div className="border-b border-[#d9e5f1] pb-6 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0">
              <div className="text-[28px] font-bold tracking-[-0.04em] text-[#091728]">
                Higher Risk
              </div>

              <div className="mt-2 font-mono text-[7.5px] font-semibold leading-[1.45] tracking-[0.16em] text-[#627895]">
                OF INCOMPATS
                <br />
                OR INCONSISTENT RESULTS
              </div>
            </div>

            {/* RIGHT CALLOUT + CTA BUTTONS */}
            <div className="flex flex-col justify-between gap-4 lg:pl-8">
              <p className="max-w-[440px] text-[13px] leading-[1.55] text-[#627895]">
                JOCKY brings structure to the investigation — so you can focus
                on what matters: answers, not tool management.
              </p>
            </div>
          </div>

          {/* SOURCE NOTE */}
          <p className="mt-2 text-right font-mono text-[7.5px] tracking-[0.08em] text-[#9aabc0]">
            * Based on common digital forensics workflows and industry studies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
