type Variant = "light" | "dark" | "glass";

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const TONE: Record<Variant, string> = {
  light: "gap-2 px-3.5 py-1.5 bg-[#efefef] text-xl tracking-[-0.15px] text-ink",
  dark: "gap-2 px-3.5 py-1.5 bg-ink text-xl tracking-[-0.15px] text-white",
  glass:
    "gap-3 px-3 py-1.5 bg-white/10 text-[10px] leading-[1.6] tracking-[-0.01em] text-white lg:gap-4 lg:px-3.5 lg:text-[15px]",
};

const DOT: Record<Variant, string> = {
  light: "h-2 w-2 bg-ink",
  dark: "h-2 w-2 bg-white/85",
  glass: "h-2.5 w-2.5 bg-white/80",
};

export default function SectionTag({ variant = "light", className = "", children }: Props) {
  return (
    <div
      className={`inline-flex items-center rounded-[2px] font-mono ${TONE[variant]} ${className}`}
    >
      <span aria-hidden className={`block shrink-0 rounded-[1px] ${DOT[variant]}`} />
      {children}
    </div>
  );
}
