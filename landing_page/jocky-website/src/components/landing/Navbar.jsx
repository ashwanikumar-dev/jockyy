function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 w-[calc(100%-5rem)] max-w-[1440px] items-center justify-between">
        {/* BRAND */}
        <a href="/" className="flex items-center gap-4" aria-label="JOCKY home">
          {/* Logo image space */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center">
            {/* Put your logo image here */}
          </div>

          {/* Wordmark + subtitle */}
          <div className="flex items-start gap-3">
            <span className="text-[24px] font-extrabold leading-none tracking-[-0.05em] text-[#091728]">
              JOCKY
            </span>

            <span className="mt-[1px] text-[7px] font-semibold leading-[1.2] tracking-[0.09em] text-[#627895]">
              FORENSIC INTELLIGENCE
              <br />
              THROUGH LANGUAGE
            </span>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          <a
            href="#platform"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            Platform
          </a>

          <a
            href="#architecture"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            Architecture
          </a>

          <a
            href="#language"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            Language
          </a>

          <a
            href="#docs"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            Docs
          </a>

          <a
            href="#research"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            Research
          </a>

          <a
            href="#about"
            className="text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            About
          </a>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            {/* GitHub icon space */}
            <span className="h-4 w-4" />
            GitHub
          </a>

          <span className="h-5 w-px bg-[#c6d8e9]" />

          <a
            href="#investigator"
            className="group inline-flex h-11 items-center gap-3 rounded-[5px] bg-[#091728] px-5 text-[12px] font-semibold !text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#102642]"
          >
            <span className="!text-white">Open Investigator</span>

            <span className="text-base !text-white transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
