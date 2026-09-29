function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="mx-auto flex min-h-screen w-[calc(100%-2rem)] max-w-[1440px] flex-col justify-center pt-28 pb-16 lg:w-[calc(100%-5rem)] lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-14 flex items-center gap-3">
              <span className="h-px w-7 bg-[#091728]" />

              <span className="font-mono text-[9px] font-medium tracking-[0.24em] text-[#627895]">
                INVESTIGATE&nbsp; / &nbsp;PRESERVE&nbsp; / &nbsp;UNDERSTAND
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[650px] text-[48px] font-semibold leading-[1.02] tracking-[-0.055em] text-[#091728] sm:text-[58px] lg:text-[64px] xl:text-[68px]">
              Forensic
              <br />
              investigations,
              <br />
              expressed as code
              <span className="text-[#1268d8]">.</span>
              <span className="ml-1 inline-block h-[0.8em] w-[2px] translate-y-[0.08em] bg-[#1268d8]" />
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[555px] text-[15px] leading-[1.65] text-[#627895] sm:text-[16px]">
              JOCKY is a compiler-driven forensic platform that lets you define,
              execute and analyze investigations across multiple endpoints using
              a purpose-built language.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://jocky-dashboard.vercel.app/"
                className="group inline-flex h-12 items-center gap-5 rounded-[4px] bg-[#091728] px-6 text-[12px] font-semibold !text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#102642]"
              >
                <span className="!text-white">Open Investigator</span>
                <span className="!text-white transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#architecture"
                className="inline-flex h-12 items-center gap-5 rounded-[4px] border border-[#c6d8e9] px-6 text-[12px] font-semibold !text-[#091728] transition-all duration-200 hover:-translate-y-px hover:border-[#091728]"
              >
                <span>Explore Architecture</span>
                <span>→</span>
              </a>
            </div>

            {/* Principles */}
            <div className="mt-16 grid max-w-[650px] grid-cols-2 border-t border-[#d9e5f1] pt-4 sm:grid-cols-4">
              <div className="border-r border-[#d9e5f1] pr-4">
                <span className="font-mono text-[9px] text-[#627895]">01</span>
                <p className="mt-2 text-[11px] font-semibold text-[#091728]">
                  Language-first
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#627895]">
                  Define, not configure
                </p>
              </div>

              <div className="border-r border-[#d9e5f1] px-4">
                <span className="font-mono text-[9px] text-[#627895]">02</span>
                <p className="mt-2 text-[11px] font-semibold text-[#091728]">
                  Cross-platform
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#627895]">
                  Windows, Linux and more
                </p>
              </div>

              <div className="border-r border-[#d9e5f1] px-4">
                <span className="font-mono text-[9px] text-[#627895]">03</span>
                <p className="mt-2 text-[11px] font-semibold text-[#091728]">
                  Evidence-centric
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#627895]">
                  Preserve and verify
                </p>
              </div>

              <div className="pl-4">
                <span className="font-mono text-[9px] text-[#627895]">04</span>
                <p className="mt-2 text-[11px] font-semibold text-[#091728]">
                  Built for investigators
                </p>
                <p className="mt-1 text-[9px] leading-4 text-[#627895]">
                  From endpoints to answers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — APPROVED HERO IMAGE SPACE */}
          <div className="relative hidden min-h-[590px] lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/graphics/hero.png"
                alt="JOCKY investigation architecture"
                className="w-full max-w-[700px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom metadata */}
        <div className="mt-12 hidden items-center justify-between border-t border-[#d9e5f1] pt-4 lg:flex">
          <div className="flex items-center gap-5">
            <span className="h-px w-7 bg-[#091728]" />

            <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-[#091728]">
              JOCKY V0.1
            </span>

            <span className="font-mono text-[8px] tracking-[0.2em] text-[#627895]">
              A MORE TRANSPARENT DIGITAL WORLD
            </span>
          </div>

          <div className="flex items-center gap-7 font-mono text-[8px] tracking-[0.12em] text-[#627895]">
            <span className="font-semibold text-[#1268d8]">01</span>
            <span>02</span>
            <span>03</span>
            <span className="ml-3">SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
