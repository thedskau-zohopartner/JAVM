import SectionTag from "./SectionTag";

const CARDS = [
  {
    text: "Every deal feels like starting from scratch.",
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </>
    ),
  },
  {
    text: "More leads won't fix a bucket full of holes.",
    icon: <path d="M3 4h18l-7 9v6l-4 2v-8Z" />,
  },
  {
    text: "Your team is busy. But the numbers aren't moving.",
    icon: <path d="M6 20V10M12 20V4M18 20v-6" />,
  },
];

export default function Problem() {
  return (
    <section className="relative flex min-h-screen w-full items-center bg-white px-6 py-24 text-ink sm:px-8 sm:py-32 lg:pb-40 lg:pt-32">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <SectionTag>The Problem</SectionTag>

        <h2 className="mt-10 max-w-[1080px] text-center text-[clamp(2.75rem,6.8vw,88px)] leading-[1.05] tracking-[-3px] text-ink">
          <span className="inline-block bg-brand-orange px-5 text-white">
            Growth has slowed
          </span>{" "}
          but not because of demand.
        </h2>

        <div className="mt-20 flex items-center gap-5 self-start font-mono text-[16px] tracking-[0.04em] text-ink sm:mt-28">
          <span aria-hidden className="block h-px w-24 bg-ink opacity-50" />
          <span>IT&apos;S A SALES INFRASTRUCTURE PROBLEM.</span>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-7 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.text}
              className="flex min-h-[340px] flex-col justify-between gap-16 rounded-lg bg-[#ededed] p-8 sm:gap-24"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {card.icon}
                </svg>
              </div>
              <p className="max-w-[300px] text-[20px] leading-[1.4] text-ink">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
