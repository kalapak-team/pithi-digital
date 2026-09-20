export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 31 31"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M13.6702 18.8528V30.375H16.7078V18.8551L24.8532 27.0006L27.0011 24.8528L18.8545 16.7063H30.375V13.6688H18.8543L27.0009 5.52226L24.853 3.37441L16.7078 11.5197V0H13.6702V11.522L5.52269 3.37439L3.37485 5.52226L11.5214 13.6688H0V16.7063H11.5211L3.37462 24.8528L5.52246 27.0006L13.6702 18.8528Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-serif text-[1.5rem] font-normal tracking-tight text-current">
        Pithi
      </span>
    </span>
  );
}
