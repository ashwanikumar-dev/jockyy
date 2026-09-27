function DocumentationSection() {
  return (
    <section id="docs" className="border-t border-[#d9e5f1] bg-white">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        <div className="grid items-stretch lg:grid-cols-[30%_70%]">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="flex flex-col justify-center py-14 pr-10 lg:min-h-[430px] lg:pr-12">
            {/* LABEL */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#091728]" />

              <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-[#627895]">
                DOCUMENTATION
              </span>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[390px] text-[42px] font-bold leading-[1.02] tracking-[-0.055em] text-[#091728] sm:text-[48px]">
              Go deeper
              <br />
              when you need to
              <span className="text-[#1268d8]">.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[370px] text-[14px] leading-[1.65] text-[#627895]">
              Explore the JOCKY language, investigation model, platform
              architecture and complete reference. Everything you need — in one
              place.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/docs"
                className="group inline-flex h-11 items-center gap-5 rounded-[4px] bg-[#091728] px-5 text-[11px] font-semibold !text-white transition-all duration-200 hover:bg-[#102642]"
              >
                <span className="!text-white">Read Documentation</span>

                <span className="!text-white transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/language"
                className="inline-flex h-11 items-center gap-4 rounded-[4px] border border-[#c6d8e9] px-5 text-[11px] font-semibold !text-[#091728] transition-colors duration-200 hover:border-[#091728]"
              >
                <span>View Language Reference</span>

                <span>→</span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT — ENTIRE DOCUMENTATION UI IMAGE
          ===================================================== */}
          <div className="relative border-l border-[#d9e5f1] bg-[#fbfdff]">
            <div className="flex min-h-[430px] items-center justify-center p-6 lg:p-7">
              <img
                src="/graphics/docs.png"
                alt="JOCKY documentation interface"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocumentationSection;
