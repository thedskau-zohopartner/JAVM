import SectionTag from "./SectionTag";

const INDUSTRY_ROWS = [
  ["Logistics & Transport", "Health & Wellness", "SaaS", "IT Managed"],
  ["Cyber Security", "Professional Services", "Educations & Training"],
  ["Marketing", "Branding"],
];

const ENQUIRY_OPTIONS = [
  "Sales process & operations",
  "Team performance & training",
  "Pipeline & forecasting",
  "Something else",
];

const FIELD_CLASSES =
  "w-full rounded-lg border-[0.5px] border-[#0D0E13]/[0.12] bg-[#FAFAFA] p-2.5 text-sm leading-[22px] tracking-[-0.02em] text-[#0D0E13] outline-none transition-colors placeholder:text-[#0D0E13]/60 focus:border-[#003CFC]";

const LABEL_CLASSES =
  "text-sm font-medium leading-[22px] tracking-[-0.02em] text-[#0D0E13]";

export default function ContactForm() {
  return (
    <section className="w-full">
      <div className="relative bg-[#003CFC] px-6 py-16 sm:px-12 lg:px-20 lg:py-27 lg:min-h-[497px]">
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-10 lg:flex-row lg:gap-15">
          <div className="flex flex-col gap-5 lg:w-[582px]">
            <SectionTag
              variant="glass"
              className="border border-white/20 text-sm lg:text-sm mr-auto"
            >
              Send a message
            </SectionTag>

            <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[48px] lg:leading-[56px]">
              Got some questions, however, not ready to speak yet?
            </h2>
          </div>

          <div className="w-full lg:absolute lg:right-0 lg:top-[-44px] lg:z-10 lg:w-[584px]">
            <form className="flex w-full flex-col gap-8 rounded-md bg-white px-6 pb-8 pt-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.04)] sm:px-10 sm:pb-10 sm:pt-8">
              <div className="flex flex-col gap-7 lg:gap-[30px]">
                <p className="text-2xl font-medium leading-[1.5] tracking-[-0.02em] text-[#0D0E13]">
                  Drop us a message!
                </p>

                <div className="flex flex-col gap-2">
                  <label className={LABEL_CLASSES} htmlFor="contact-first-name">
                    Your details
                  </label>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3.5">
                      <input
                        id="contact-first-name"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First name"
                        className={FIELD_CLASSES}
                      />
                      <input
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        placeholder="Last name"
                        aria-label="Last name"
                        className={FIELD_CLASSES}
                      />
                    </div>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Work email"
                      aria-label="Work email"
                      className={FIELD_CLASSES}
                    />
                    <input
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company"
                      aria-label="Company"
                      className={FIELD_CLASSES}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className={LABEL_CLASSES} htmlFor="contact-enquiry">
                    Your enquiry
                  </label>
                  <div className="flex flex-col gap-2.5">
                    <div className="relative">
                      <select
                        id="contact-enquiry"
                        name="enquiry"
                        defaultValue=""
                        required
                        className={`${FIELD_CLASSES} appearance-none pr-9 invalid:text-[#0D0E13]/60`}
                      >
                        <option value="" disabled>
                          What do you need help with?
                        </option>
                        {ENQUIRY_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <svg
                        aria-hidden
                        viewBox="0 0 12 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-3 top-1/2 h-[7px] w-3 -translate-y-1/2 text-[#0D0E13]/60"
                      >
                        <path d="m1 1 5 5 5-5" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us a bit about your business and what you're looking to solve"
                      aria-label="Message"
                      className={`${FIELD_CLASSES} h-[150px] resize-none`}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="flex h-[49px] w-full items-center justify-center rounded-xs bg-[#EC3B0D] px-6.5 font-mono text-sm font-bold uppercase leading-[17px] text-white transition hover:bg-[#d43509] active:scale-[0.98]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#0130BA] px-6 pb-16 pt-10 sm:px-12 lg:px-20 lg:pb-30 lg:pt-15">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex w-full flex-col gap-6 lg:w-[650px]">
            <p className="font-mono text-xs uppercase leading-[1.6] text-white/60">
              Industries we&apos;ve worked with
            </p>

            <span aria-hidden className="block h-px w-full bg-white/20" />

            <div className="flex flex-col gap-5">
              {INDUSTRY_ROWS.map((row) => (
                <div
                  key={row.join()}
                  className="flex flex-wrap gap-x-8 gap-y-3 lg:gap-x-12.5"
                >
                  {row.map((industry) => (
                    <p
                      key={industry}
                      className="text-lg font-medium leading-[1.6] tracking-[-0.02em] text-white lg:text-xl"
                    >
                      {industry}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
