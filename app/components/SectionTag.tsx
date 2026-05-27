type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export default function SectionTag({ variant = "light", className = "", children }: Props) {
  const tone =
    variant === "dark"
      ? "bg-ink text-white"
      : "bg-[#efefef] text-ink";
  const dot = variant === "dark" ? "bg-white/85" : "bg-ink";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[2px] px-3.5 py-1.5 font-mono text-xl tracking-[-0.15px] ${tone} ${className}`}
    >
      <span aria-hidden className={`block h-2 w-2 shrink-0 rounded-[1px] ${dot}`} />
      {children}
    </div>
  );
}
