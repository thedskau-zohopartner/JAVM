"use client";

import { useState } from "react";
import SectionTag from "./SectionTag";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

const LEFT_FAQS: FAQ[] = [
  {
    question:
      "Is this just talking like a typical consultant, or do you implement?",
    answer:
      "Yes, we implement tailored sales operations based on your unique business needs. Then advise, upskill the team to maximise clarity and adoption, giving you the best of both worlds.",
  },
  {
    question: "Will this work in my niche?",
    answer:
      "Yes, if your product or service requires a sales process to convert new revenue, this will absolutely work due to our tailored sales operations and approach. Allowing us to consult you based on your niche expertise and current client experiences. Meaning we can implement a tailored sales process best suited to your niche.",
  },
  {
    question: "Will this add or reduce my time?",
    answer:
      "Yes, this will reduce the time burden significantly, as most time wasting comes from poor time management and lack of know-how. We give you the know-how to reduce procrastination, and we efficiently manage sales time, focusing only on what drives results, not time-wasting!!",
  },
  {
    question: "Do you guys do the sales activities for me?",
    answer:
      "No, only you and your sales team can bring sales in for your company, we aren't an external sales team you plug in to make sales, we give you guys the systems, resources and process, along with managing the performance of your team with the new inputs we implement allowing you & your team to perform sales at the highest level and grow more consistently.",
  },
];

const RIGHT_FAQS: FAQ[] = [
  {
    question: "Do you manage my team's performance?",
    answer:
      "Yes, we manage your team's discipline & adoption of the new processes, and we assess weekly KPIs to stay consistently aligned with company goals through weekly meetings and 1-1 support channels.",
  },
  {
    question: "What results can we expect?",
    answer:
      "Results can vary depending on what we're aiming to achieve for your business; however, results can include having the correct sales structure and process for your business, better team performance & skill development, generating more sustainable & consistent revenue growth, just to name a few!!",
  },
  {
    question: "Are you a Lead agency?",
    answer:
      "No, we're not a lead generation agency; however, we do give you the tools and resources to prospect leads through alternative sales methods. We do not directly source and send your business leads, such as a 'marketing agency'.",
  },
  {
    question: "How are your engagements structured for implementation?",
    answer: (
      <div className="flex flex-col gap-2">
        <p>The engagement is structured into 3 key sections.</p>
        <p>
          First, we build your tailored sales process behind the scenes with
          blood, sweat and tears to ensure your complete satisfaction with the
          end operations product.
        </p>
        <p>
          Second, we have scheduled 1-1 weekly project management meeting to
          implement systems and project manage outcomes or performance.
        </p>
        <p>
          Third, we support you and the team daily through communication
          channels and trainings.
        </p>
      </div>
    ),
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="border border-black/[0.08] bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-black/[0.015] sm:px-7"
      >
        <span className="text-[16px] font-medium leading-[1.45] tracking-[-0.1px] text-ink sm:text-[17px]">
          {faq.question}
        </span>
        <span aria-hidden className="mt-0.5 shrink-0 text-ink">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-500 ease-out ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[15px] leading-[1.55] tracking-[-0.05px] text-ink/55 sm:px-7 sm:text-[16px]">
            {faq.answer}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  const [openLeft, setOpenLeft] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);
  const [openRight, setOpenRight] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleLeft = (idx: number) =>
    setOpenLeft((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  const toggleRight = (idx: number) =>
    setOpenRight((prev) => prev.map((v, i) => (i === idx ? !v : v)));

  return (
    <section className="relative w-full bg-[#FBFBF9] px-6 py-24 text-ink sm:px-12 sm:py-32 md:px-20 lg:px-32 lg:py-32 xl:px-48">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-12">
        <SectionTag variant="light">Frequently Asked Questions</SectionTag>

        <h2 className="text-center text-7xl text-ink">
          FAQ&apos;s
        </h2>

        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-6">
          <div className="flex flex-col gap-3">
            {LEFT_FAQS.map((faq, idx) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openLeft[idx]}
                onToggle={() => toggleLeft(idx)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {RIGHT_FAQS.map((faq, idx) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openRight[idx]}
                onToggle={() => toggleRight(idx)}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-brand-orange px-7 py-4 font-mono text-[14px] tracking-[0.08em] text-white transition hover:bg-[#e02e1c] active:scale-[0.98] sm:text-[15px]"
          >
            <span aria-hidden className="text-[15px]">
              ⌘
            </span>
            BOOK A DISCOVERY CALL
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-3 border border-ink/15 bg-white px-7 py-4 font-mono text-[14px] tracking-[0.08em] text-ink transition hover:bg-ink/[0.03] active:scale-[0.98] sm:text-[15px]"
          >
            SEE HOW WE WORK
          </button>
        </div>
      </div>
    </section>
  );
}
