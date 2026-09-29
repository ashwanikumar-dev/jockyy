function Navbar({ onNavigate }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 w-[calc(100%-5rem)] max-w-[1440px] items-center justify-between">
        {/* BRAND */}
        <a
          href="/"
          className="flex items-center gap-3.5"
          aria-label="JOCKY home"
        >
          {/* Logo icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center">
            <svg
              className="h-8 w-8 text-[#091728]"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 29L18 7"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M20.5 7.5L24.5 16"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M27 21.5L30.5 29"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
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
            href="/docs"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate("/docs");
              }
            }}
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
            href="https://github.com/ashwanikumar-dev/JOCKY"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-medium text-[#091728] transition-colors hover:text-[#1268d8]"
          >
            <svg
              className="h-4 w-4 text-[#091728]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub
          </a>

          <span className="h-5 w-px bg-[#c6d8e9]" />

          <a
            href="https://jocky-dashboard.vercel.app/"
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
