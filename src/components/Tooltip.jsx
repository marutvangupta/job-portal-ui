const Tooltip = ({ text, id, children }) => {
  return (
    <span className="group relative inline-block" tabIndex={0} role="button" aria-describedby={id}>
      {children}
      <div
        id={id}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-max max-w-[220px] -translate-x-1/2 translate-y-1 whitespace-normal rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg shadow-black/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {text}
        <div className="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-gray-700 bg-gray-800"></div>
      </div>
    </span>
  );
};

export default Tooltip;
