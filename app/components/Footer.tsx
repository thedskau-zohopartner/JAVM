import Image from "next/image";
import TransitionLink from "./TransitionLink";

type FooterLink = {
  index: string;
  label: string;
  href: string;
};

const COLUMNS: FooterLink[][] = [
  [
    { index: "1.1", label: "Home", href: "/" },
    { index: "1.2", label: "About", href: "/about-us" },
    { index: "1.3", label: "How we work", href: "/how-it-works" },
    { index: "1.4", label: "What we do", href: "#" },
  ],
  [
    { index: "2.1", label: "Case studies", href: "#" },
    { index: "2.2", label: "Careers", href: "#" },
    { index: "2.3", label: "Contact", href: "/contact-us" },
  ],
  [
    { index: "3.1", label: "Cookie policy", href: "#" },
    { index: "3.2", label: "Terms & conditions", href: "#" },
    { index: "3.3", label: "Privacy policy", href: "#" },
  ],
  [
    { index: "4.1", label: "X [Twitter]", href: "#" },
    { index: "4.2", label: "Linkedin", href: "#" },
  ],
];

const ROW_CLASSES =
  "group flex h-11.25 w-fit items-center gap-8 px-3.5 font-mono text-sm uppercase leading-[17px] tracking-[-0.28px] text-white";

function RowContent({ link }: { link: FooterLink }) {
  return (
    <>
      <span className="w-6.25 shrink-0 opacity-50">{link.index}</span>
      {/* the label rolls up on hover, mirroring the duplicated label in the design */}
      <span className="block h-4.25 overflow-hidden whitespace-nowrap">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-6.7">
          <span className="block h-4.25 opacity-80">{link.label}</span>
          <span className="mt-2.45 block h-4.25">{link.label}</span>
        </span>
      </span>
    </>
  );
}

function FooterRow({ link }: { link: FooterLink }) {
  if (link.href.startsWith("/")) {
    return (
      <TransitionLink href={link.href} className={ROW_CLASSES}>
        <RowContent link={link} />
      </TransitionLink>
    );
  }

  return (
    <a href={link.href} className={ROW_CLASSES}>
      <RowContent link={link} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050170] pt-12.5 pb-12.5 lg:h-127 lg:pt-22.5 lg:pb-0">
      <div className="flex flex-col gap-12.5 px-4 lg:flex-row lg:justify-between lg:gap-10 lg:px-25">
        <div className="flex flex-col gap-7.5 lg:gap-16">
          <Image
            src="/logo.svg"
            alt="JAVM Partners"
            width={204}
            height={28}
            className="h-6 w-auto"
          />
          <p className="text-base leading-[22px] tracking-[-0.6px] text-white/60 lg:w-62.25">
            The platform behind modern support teams.
          </p>
        </div>

        <nav className="flex flex-col gap-10 lg:flex-row lg:gap-10">
          {COLUMNS.map((column) => (
            <ul key={column[0].index} className="flex flex-col gap-1.25">
              {column.map((link) => (
                <li key={link.index}>
                  <FooterRow link={link} />
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>

      <div
        aria-hidden
        className="mx-4 mt-12.5 aspect-1417/172 bg-[url('/javm-wordmark.svg')] bg-contain bg-bottom bg-no-repeat lg:absolute lg:inset-x-0 lg:bottom-0 lg:mx-0 lg:mt-0"
      />
    </footer>
  );
}
