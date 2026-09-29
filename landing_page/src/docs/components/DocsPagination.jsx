import { getAdjacentPages } from "../data/docsNavigation";

function DocsPagination({ currentPath, onNavigate }) {
  const { prev, next } = getAdjacentPages(currentPath);

  const handleClick = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className="mt-14 flex flex-col gap-4 border-t border-[#d9e5f1] pt-8 sm:flex-row sm:items-center sm:justify-between">
      {prev ? (
        <a
          href={prev.path}
          onClick={(e) => handleClick(e, prev.path)}
          className="group flex flex-1 flex-col rounded-lg border border-[#d9e5f1] p-4 text-left transition-all hover:border-[#1268d8] hover:bg-[#edf6ff]/30 sm:max-w-[48%]"
        >
          <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#627895] group-hover:text-[#1268d8]">
            <span className="transition-transform group-hover:-translate-x-0.5">←</span> PREVIOUS
          </span>
          <span className="mt-1 text-[14px] font-bold text-[#091728] group-hover:text-[#1268d8]">
            {prev.title}
          </span>
        </a>
      ) : (
        <div className="hidden sm:block sm:max-w-[48%] sm:flex-1" />
      )}

      {next && (
        <a
          href={next.path}
          onClick={(e) => handleClick(e, next.path)}
          className="group flex flex-1 flex-col rounded-lg border border-[#d9e5f1] p-4 text-right transition-all hover:border-[#1268d8] hover:bg-[#edf6ff]/30 sm:max-w-[48%]"
        >
          <span className="flex items-center justify-end gap-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#627895] group-hover:text-[#1268d8]">
            NEXT <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
          <span className="mt-1 text-[14px] font-bold text-[#091728] group-hover:text-[#1268d8]">
            {next.title}
          </span>
        </a>
      )}
    </div>
  );
}

export default DocsPagination;
