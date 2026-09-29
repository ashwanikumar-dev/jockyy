import { useState } from "react";

function CodeBlock({ code, language = "jocky", filename, showLineNumbers = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-[#d9e5f1] bg-[#091728] text-white shadow-sm">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-[#203957] bg-[#0d1f35] px-4 py-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]/70 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]/70 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]/70 inline-block" />
          </div>
          {filename && (
            <span className="ml-2 font-mono text-[11px] text-[#9db2c9]">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#627895]">
            {language}
          </span>
          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center gap-1.5 rounded bg-[#1b3453] px-2.5 py-1 text-[11px] font-medium text-[#d9e5f1] transition-all hover:bg-[#254670] hover:text-white active:scale-95"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5 text-[#9db2c9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[#e2ecf7]">
        <pre className="flex">
          {showLineNumbers && (
            <div className="mr-4 select-none text-right font-mono text-[13px] text-[#486588]">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code className="flex-1 whitespace-pre">{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
