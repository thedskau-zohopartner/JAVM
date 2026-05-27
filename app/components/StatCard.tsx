export default function StatCard() {
  return (
    <div className="absolute left-[4%] top-[8%] z-[6] flex w-[150px] flex-col gap-5 rounded-[3px] bg-black/25 p-3 backdrop-blur-sm sm:left-[6%] sm:top-[14%] sm:w-[240px] sm:gap-14 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="max-w-[140px] font-mono text-[10px] uppercase leading-[1.35] tracking-[-0.2px] text-white sm:text-[12px]">
          Pipeline clarity in 30 days.
        </span>
        <svg
          width="60"
          height="14"
          viewBox="0 0 60 14"
          fill="none"
          aria-hidden
          className="shrink-0 opacity-85"
        >
          <text x="0" y="11" fill="white" fontSize="11" fontFamily="serif" fontStyle="italic">
            Tate Etc.
          </text>
        </svg>
      </div>
      <div className="text-[28px] font-medium leading-none tracking-[-1px] text-white sm:text-[40px] sm:tracking-[-1.6px] lg:text-[54px] lg:tracking-[-2.18px]">
        94%
      </div>
    </div>
  );
}
