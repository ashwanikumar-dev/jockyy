function Footer() {
  return (
    <footer className="bg-[#061525] text-white">
      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section
        id="get-started"
        className="relative overflow-hidden border-b border-[#29415d]"
      >
        {/* Subtle technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
          <div className="grid min-h-[360px] lg:grid-cols-[52%_48%]">
            {/* =================================================
                LEFT CTA CONTENT
            ================================================= */}
            <div className="flex flex-col justify-center py-10 lg:py-12">
              {/* Label */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-[#9db2c9]">
                  GET STARTED
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[700px] text-[44px] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-[52px] lg:text-[58px]">
                Ready to run
                <br />
                your first investigation
                <span className="text-[#2d8cff]">.</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[610px] text-[16px] leading-[1.65] text-[#9db2c9]">
                Write your investigation, run it across endpoints and see
                structured results — with JOCKY.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#investigator"
                  className="group inline-flex h-12 items-center gap-6 rounded-[4px] bg-white px-7 text-[12px] font-semibold text-[#091728] transition-all duration-200 hover:bg-[#edf6ff]"
                >
                  <span>Get Started</span>

                  <span className="text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#docs"
                  className="group inline-flex h-12 items-center gap-6 rounded-[4px] border border-[#7188a2] px-7 text-[12px] font-semibold text-white transition-all duration-200 hover:border-white"
                >
                  <span>Read Documentation</span>

                  <span className="text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT — IMAGE SPACE
            ================================================= */}
            <div className="relative min-h-[360px]">
              {/*
                ==================================================
                APPROVED FINAL CTA IMAGE GOES HERE

                Example:

                <img
                  src="/graphics/final-cta.png"
                  alt="JOCKY investigation workflow"
                  className="absolute inset-0 h-full w-full object-contain"
                />

                ==================================================
              */}

              {/* Technical corner marks */}
              <span className="absolute right-4 top-8 h-7 w-px bg-[#31506f]" />
              <span className="absolute right-4 top-8 w-7 h-px bg-[#31506f]" />

              <span className="absolute bottom-10 left-8 h-7 w-px bg-[#31506f]" />
              <span className="absolute bottom-10 left-8 w-7 h-px bg-[#31506f]" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER MAIN
      ========================================================= */}
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        <div className="grid gap-8 py-9 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.8fr_1.15fr] lg:gap-8">
          {/* =====================================================
              BRAND
          ===================================================== */}
          <div>
            <a
              href="/"
              className="flex items-center gap-3"
              aria-label="JOCKY home"
            >
              {/* JOCKY mark */}
              <div className="relative h-9 w-8">
                <span className="absolute left-0 top-2 h-6 w-1.5 -rotate-[25deg] rounded-full bg-[#1268d8]" />
                <span className="absolute left-2.5 top-0 h-6 w-1.5 rotate-[25deg] rounded-full bg-[#1268d8]" />
                <span className="absolute right-0 top-2.5 h-6 w-1.5 rotate-[25deg] rounded-full bg-[#1268d8]" />
              </div>

              <span className="text-[25px] font-bold tracking-[-0.04em] text-white">
                JOCKY
              </span>
            </a>

            <p className="mt-4 max-w-[330px] text-[14px] leading-[1.7] text-[#9db2c9]">
              A purpose-built investigation platform for collecting, preserving
              and analyzing evidence across endpoints.
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-[3px] border border-[#31506f] px-3 py-2 font-mono text-[8px] tracking-[0.16em] text-[#9db2c9]">
                FORENSICS
              </span>

              <span className="rounded-[3px] border border-[#31506f] px-3 py-2 font-mono text-[8px] tracking-[0.16em] text-[#9db2c9]">
                ENDPOINTS
              </span>

              <span className="rounded-[3px] border border-[#31506f] px-3 py-2 font-mono text-[8px] tracking-[0.16em] text-[#9db2c9]">
                EVIDENCE
              </span>
            </div>
          </div>

          {/* =====================================================
              PRODUCT
          ===================================================== */}
          <div>
            <h3 className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#d6e2ef]">
              PRODUCT
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              <a
                href="#platform"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Overview
              </a>

              <a
                href="#investigator"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Investigator
              </a>

              <a
                href="#architecture"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Architecture
              </a>

              <a
                href="#docs"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Documentation
              </a>

              <a
                href="#research"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Roadmap
              </a>
            </nav>
          </div>

          {/* =====================================================
              RESOURCES
          ===================================================== */}
          <div>
            <h3 className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#d6e2ef]">
              RESOURCES
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              <a
                href="#docs"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Docs
              </a>

              <a
                href="#language"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Language Reference
              </a>

              <a
                href="#docs"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Examples
              </a>

              <a
                href="#research"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Blog
              </a>

              <a
                href="#research"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Research
              </a>
            </nav>
          </div>

          {/* =====================================================
              COMPANY
          ===================================================== */}
          <div>
            <h3 className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#d6e2ef]">
              COMPANY
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              <a
                href="#about"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#privacy"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#terms"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Terms
              </a>

              <a
                href="#contact"
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* =====================================================
              STAY UPDATED
          ===================================================== */}
          <div>
            <h3 className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#d6e2ef]">
              STAY UPDATED
            </h3>

            <p className="mt-4 max-w-[260px] text-[13px] leading-[1.6] text-[#9db2c9]">
              Get updates on new features,
              <br />
              releases and research.
            </p>

            {/* Email */}
            <form className="mt-4 flex h-10   overflow-hidden rounded-[4px] border border-[#49627d]">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 text-[12px] text-white outline-none placeholder:text-[#70859c]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-12 shrink-0 items-center justify-center bg-[#29435f] text-[18px] text-white transition-colors hover:bg-[#365674]"
              >
                →
              </button>
            </form>

            <p className="mt-3 text-[10px] text-[#7188a2]">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* =========================================================
            COPYRIGHT / SOCIALS
        ========================================================= */}
        <div className="flex flex-col gap-4 border-t border-[#29415d] py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-[#9db2c9]">
            © 2026 JOCKY. All rights reserved.
          </p>

          <div className="flex items-center gap-7">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-[17px] text-white transition-colors hover:text-[#5ca4ff]"
            >
              ◉
            </a>

            <a
              href="#"
              aria-label="X"
              className="text-[17px] text-white transition-colors hover:text-[#5ca4ff]"
            >
              𝕏
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[16px] font-bold text-white transition-colors hover:text-[#5ca4ff]"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
