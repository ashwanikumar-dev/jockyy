function DocsBreadcrumb({ category, title }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[11px] text-[#627895]">
      <a
        href="/docs"
        className="transition-colors hover:text-[#1268d8]"
      >
        Docs
      </a>
      <span>/</span>
      {category && (
        <>
          <span className="text-[#627895]">{category}</span>
          <span>/</span>
        </>
      )}
      <span className="font-medium text-[#091728]">{title}</span>
    </nav>
  );
}

export default DocsBreadcrumb;
