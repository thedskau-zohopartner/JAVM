import SectionTag from "./SectionTag";

const CARDS = [
  {
    text: "No proven sales operations for efficient scaling, freeing you from daily tasks.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden>
        <rect width="50" height="50" rx="3.33333" fill="#0D0E13" />
        <path
          d="M21.101 24.6503L20.5281 29.9062L25.0552 28.7092L35.9312 17.8853C36.0526 17.3996 36.1185 16.1785 35.4108 15.1794C34.7031 14.1803 32.6181 14.2774 31.6641 14.4508L21.101 24.6503Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.8401 13.2423C32.1286 13.2912 31.4371 13.5606 30.8699 14.01C30.7582 14.0985 28.3219 16.5163 25.456 19.3828L20.2452 24.5948L19.608 27.8004C19.2575 29.5635 18.9759 31.0113 18.9822 31.0175C18.9885 31.0238 20.4363 30.7422 22.1996 30.3917L25.4055 29.7544L30.6173 24.5438C33.4838 21.678 35.9015 19.2418 35.9899 19.1301C36.3841 18.6325 36.6304 18.0645 36.7333 17.4156C36.7754 17.1498 36.7697 16.5704 36.722 16.2739C36.6722 15.9648 36.5339 15.5323 36.3991 15.2642C36.0518 14.574 35.4392 13.9553 34.768 13.617C34.3832 13.4231 33.8659 13.2764 33.4801 13.2518C33.3554 13.2438 33.2234 13.2341 33.1868 13.2302C33.1501 13.2262 32.9941 13.2317 32.8401 13.2423ZM32.7678 14.9311C32.489 14.9842 32.2296 15.0914 32.022 15.2392C31.9064 15.3214 30.0093 17.2002 26.8168 20.3942L21.7936 25.4197L21.4483 27.1457C21.2583 28.0949 21.1087 28.8773 21.1156 28.8843C21.1226 28.8913 21.905 28.7416 22.8543 28.5517L24.5802 28.2063L29.6182 23.1698C33.2253 19.5637 34.6904 18.0821 34.7767 17.9534C35.0027 17.6164 35.0915 17.3042 35.0897 16.8532C35.0884 16.5056 35.0416 16.3037 34.8919 15.9998C34.6482 15.5051 34.1448 15.0938 33.6202 14.9607C33.3828 14.9005 32.9982 14.8871 32.7678 14.9311ZM13.2201 25.9932L13.2268 36.7732L24.0068 36.7799L34.7868 36.7866V30.8932V24.9998H33.9468H33.1068V30.0532V35.1065H24.0001H14.8934V25.9998V16.8932H20.4534H26.0134V16.0532V15.2132H19.6134H13.2134L13.2201 25.9932Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    text: "Many opportunities exist, but consistently landing clients can be challenging.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden>
        <rect width="50" height="50" rx="3.33333" fill="#0D0E13" />
        <path
          d="M12.7783 14.9999H37.2228L25.0005 36.111L12.7783 14.9999ZM15.6672 16.6665L18.0839 20.8332H31.9172L34.3339 16.6665H15.6672ZM19.0561 22.4999L21.3061 26.3888H28.695L30.945 22.4999H19.0561ZM22.2783 28.0554L25.0005 32.7777L27.7228 28.0554H22.2783Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    text: "Relying on a few individuals instead of a proven process; if they leave, sales go too.",
    icon: (
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" aria-hidden>
        <rect width="50" height="50" rx="3.33333" fill="#0D0E13" />
        <path
          d="M15 34.9999V14.9999H16.6667V33.3332H35V34.9999H15ZM18.75 31.2499V21.1388H22.0556V31.2499H18.75ZM24.25 31.2499V17.9165H27.5556V31.2499H24.25ZM29.6389 31.2499V17.9165H32.9444V31.2499H29.6389Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="relative flex min-h-screen w-full items-center bg-white px-6 py-24 text-ink sm:px-8 sm:py-32 lg:pb-40 lg:pt-32">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <SectionTag>The Problem</SectionTag>

        <h2 className="mt-10 max-w-[1080px] text-center text-[clamp(2.75rem,6.8vw,88px)] leading-[1.05] tracking-[-3px] text-ink">
          <span className="block">
            <span className="inline-block bg-[#003CFC] px-5 text-white">
              Sales is holding you back
            </span>
          </span>
          <span className="block lg:whitespace-nowrap">when it should be driving</span>
          <span className="block lg:whitespace-nowrap">you forward</span>
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
              {card.icon}
              <p className="max-w-[300px] text-[22px] leading-[1.4] text-black">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
