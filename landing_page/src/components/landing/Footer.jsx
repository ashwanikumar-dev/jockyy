function Footer({ onNavigate }) {
  const handleDocsClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate("/docs");
    }
  };

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
          <div className="grid min-h-[300px] items-center py-10 lg:grid-cols-[55%_45%] lg:py-14">
            {/* =================================================
                LEFT CTA CONTENT
            ================================================= */}
            <div>
              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white" />

                <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-[#9db2c9]">
                  READY TO INVESTIGATE
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[700px] text-[44px] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-[52px]">
                Start an investigation<span className="text-[#2d8cff]">.</span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[540px] text-[15px] leading-[1.65] text-[#9db2c9]">
                Turn your investigative intent into a structured, repeatable
                and evidence-driven workflow.
              </p>
            </div>

            {/* =================================================
                RIGHT — ACTION & ANNOTATION
            ================================================= */}
            <div className="mt-8 flex flex-col items-start gap-6 lg:mt-0 lg:flex-row lg:items-center lg:justify-end lg:gap-10">
              <a
                href="#investigator"
                className="group inline-flex h-12 items-center gap-5 rounded-[4px] bg-white px-7 text-[12px] font-semibold text-[#091728] transition-all duration-200 hover:bg-[#edf6ff]"
              >
                <span>Open Investigator</span>

                <span className="text-[16px] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="flex items-center gap-3 font-mono text-[8px] tracking-[0.22em] text-[#627895]">
                <span className="text-[11px] text-[#2d8cff]">+</span>
                <span>INVESTIGATE<br />PRESERVE<br />UNDERSTAND</span>
              </div>
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
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 29L18 7"
                    stroke="#2d8cff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M20.5 7.5L24.5 16"
                    stroke="#2d8cff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27 21.5L30.5 29"
                    stroke="#2d8cff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
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
                href="/docs"
                onClick={handleDocsClick}
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Documentation
              </a>

              <a
                href="/docs/roadmap"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("/docs/roadmap");
                  }
                }}
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
                href="/docs"
                onClick={handleDocsClick}
                className="text-[13px] text-[#9db2c9] transition-colors hover:text-white"
              >
                Docs
              </a>

              <a
                href="/docs/language"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("/docs/language");
                  }
                }}
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
                href="https://github.com/ashwanikumar-dev/JOCKY"
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
              href="https://github.com/ashwanikumar-dev/JOCKY"
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
