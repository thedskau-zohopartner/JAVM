"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import SectionTag from "./SectionTag";
import TrustedBy from "./TrustedBy";

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="w-full bg-[#0D0E13]">
      <div className="flex w-full flex-col gap-12 px-4 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 lg:flex-row lg:items-stretch lg:gap-16 lg:px-20 lg:pb-12 lg:pt-28">
        <div className="flex w-full flex-col justify-between gap-10 lg:w-[45%] lg:shrink-0 lg:gap-16">
          <div className="flex flex-col items-start gap-8">
            <SectionTag variant="glass">Contact Us</SectionTag>

            <h2 className="max-w-[20ch] text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              The diagnostic your business needs
            </h2>

            <p className="max-w-[56ch] text-base font-light leading-relaxed text-white/60 sm:text-lg">
              If you&apos;re overwhelmed with messy operations, slow sales
              performance and lack the time or resources to fix it yourself, we
              might be exactly the partner for you. Click and book a time for an
              initial consult so we can understand your constraints, and you can
              understand exactly how we can help.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/about-us/james-and-jarrod.png"
                alt="James Musa"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-left"
              />
              <div>
                <p className="text-base font-medium text-white">James Musa</p>
                <p className="text-sm text-white/50">Co-founder &amp; CEO</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/about-us/james-and-jarrod.png"
                alt="Jarrod Musa"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover object-right"
              />
              <div>
                <p className="text-base font-medium text-white">Jarrod Musa</p>
                <p className="text-sm text-white/50">Co-founder &amp; CEO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] w-full lg:w-[55%]">
          <Cal
            namespace="15min"
            calLink="amay-lq6sbe/15min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </div>

      <TrustedBy />
    </section>
  );
}
