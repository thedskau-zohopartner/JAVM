import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  href: string;
  image: string;
};

const LEADERS: Leader[] = [
  {
    name: "James Musa",
    role: "Co-Founder - CEO",
    href: "#",
    image: "/about-us/james-musa.png",
  },
  {
    name: "Jarrod Musa",
    role: "Co-Founder - COO",
    href: "#",
    image: "/about-us/jarrod-musa.png",
  },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="h-6.25 w-6.25"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21.5h5.16V9.75H2.4V21.5Zm7.7-11.75V21.5h5.15v-6.2c0-3.28 4.27-3.55 4.27 0v6.2h5.16v-7.98c0-5.55-6.03-5.35-9.43-2.62V9.75H10.1Z" />
    </svg>
  );
}

export default function OurLeadership() {
  return (
    <section className="w-full px-4 py-20 sm:px-6 lg:px-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-28.75">
        <div className="flex flex-col items-start gap-4 lg:w-114.5 lg:shrink-0">
          <div className="inline-flex items-center gap-3 bg-white px-3.5 py-1.5 text-sm leading-[1.6] tracking-[-0.02em] text-[#3D3D41] capitalize">
            <span
              aria-hidden
              className="block h-2.5 w-2.5 shrink-0 rounded-[1px] bg-ink/80"
            />
            Our Leadership
          </div>

          <h2 className="text-[36px] font-medium leading-[1.16] tracking-[-0.03em] text-ink lg:text-[48px] lg:leading-14">
            Meet the JAVM Partners Leadership Team
          </h2>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row lg:max-w-176.75">
          {LEADERS.map((leader) => (
            <article key={leader.name} className="flex flex-1 flex-col gap-5">
              <div className="relative h-87.5 w-full overflow-hidden rounded-lg bg-white">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(min-width: 1024px) 345px, (min-width: 640px) 50vw, 100vw"
                  quality={95}
                  className="object-cover object-top"
                />
              </div>

              <div className="flex h-12.5 items-center justify-between gap-4 px-2.5">
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-bold leading-[1.1] text-[#0B1956]">
                    {leader.name}
                  </span>
                  <span className="text-base font-medium leading-none text-ink/60">
                    {leader.role}
                  </span>
                </div>

                <a
                  href={leader.href}
                  aria-label={`${leader.name} on LinkedIn`}
                  className="grid h-12.5 w-12.5 shrink-0 place-items-center rounded-[4px] border border-ink/30 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
