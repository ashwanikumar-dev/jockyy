function Callout({ type = "info", title, children }) {
  const configs = {
    info: {
      borderColor: "border-[#1268d8]",
      bgColor: "bg-[#edf6ff]",
      titleColor: "text-[#091728]",
      badgeText: "INFO",
      badgeBg: "bg-[#1268d8]/10 text-[#1268d8]",
      icon: (
        <svg className="h-5 w-5 text-[#1268d8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    important: {
      borderColor: "border-[#091728]",
      bgColor: "bg-[#f4f7fb]",
      titleColor: "text-[#091728]",
      badgeText: "IMPORTANT",
      badgeBg: "bg-[#091728]/10 text-[#091728]",
      icon: (
        <svg className="h-5 w-5 text-[#091728] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    warning: {
      borderColor: "border-[#d97706]",
      bgColor: "bg-[#fffbeb]",
      titleColor: "text-[#92400e]",
      badgeText: "WARNING",
      badgeBg: "bg-[#d97706]/15 text-[#b45309]",
      icon: (
        <svg className="h-5 w-5 text-[#d97706] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    security: {
      borderColor: "border-[#059669]",
      bgColor: "bg-[#ecfdf5]",
      titleColor: "text-[#065f46]",
      badgeText: "SECURITY BOUNDARY",
      badgeBg: "bg-[#059669]/15 text-[#047857]",
      icon: (
        <svg className="h-5 w-5 text-[#059669] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  };

  const config = configs[type] || configs.info;

  return (
    <div className={`my-5 rounded-md border-l-4 ${config.borderColor} ${config.bgColor} p-4 text-[14px] leading-relaxed text-[#203957] shadow-xs`}>
      <div className="flex items-start gap-3">
        {config.icon}
        <div className="flex-1">
          <div className="mb-1.5 flex items-center gap-2">
            <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider ${config.badgeBg}`}>
              {config.badgeText}
            </span>
            {title && <span className={`font-semibold ${config.titleColor}`}>{title}</span>}
          </div>
          <div className="text-[13.5px] [&>p]:mt-1.5 [&>p:first-child]:mt-0 text-[#203957]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Callout;
