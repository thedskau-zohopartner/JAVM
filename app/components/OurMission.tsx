import Image from "next/image";

export default function OurMission() {
  return (
    <section className="w-full px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1400px] rounded-md bg-white p-4 sm:p-5 lg:p-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between gap-10 p-2 sm:p-4 lg:py-6 lg:pl-6">
            <div className="flex flex-col items-start gap-6 lg:gap-8">
              <div className="inline-flex items-center gap-3 bg-[#F3F4EE] px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-[#3D3D41] capitalize">
                <span
                  aria-hidden
                  className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-ink/80"
                />
                Our Mission
              </div>

              <h2 className="max-w-[18ch] text-[32px] font-medium leading-[1.12] tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
                Helping Growth-Driven Companies Scale Faster
              </h2>
            </div>

            <div className="flex max-w-[46ch] flex-col gap-5 text-base leading-[1.5] tracking-[-0.02em] text-ink/60 lg:text-lg">
              <p>
                Our mission is to give growth-driven companies the sales system
                they don&rsquo;t have the time or capacity to build themselves.
              </p>
              <p>
                By creating scalable, repeatable sales infrastructure, we help
                businesses achieve levels of growth that weren&rsquo;t
                previously possible.
              </p>
            </div>
          </div>

          <Image
            src="/about-us/Our Mission - founder image.png"
            alt="James Musa and Jarrod Musa, founders of JAVM Partners"
            width={1200}
            height={900}
            className="block aspect-4/3 h-full w-full rounded-sm object-cover lg:aspect-auto lg:min-h-140"
          />
        </div>
      </div>
    </section>
  );
}
