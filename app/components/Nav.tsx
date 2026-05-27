"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";

type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

type NavProps = {
  logoSrc?: string;
  logoClassName?: string;
  transparent?: boolean;
  links?: NavLink[];
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#" },
  { label: "Customer Stories", href: "#" },
  { label: "About", href: "/about-us" },
];

export default function Nav({
  logoSrc = "/logo.svg",
  logoClassName = "h-8 w-auto sm:h-10",
  transparent = false,
  links = DEFAULT_LINKS,
}: NavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isInternal = (href: string) => href.startsWith("/");

  const linkBase = "inline-flex items-center gap-1.5 text-[20px] tracking-[-0.4px] transition-colors";
  const activeColor = transparent ? "font-semibold text-ink" : "font-semibold text-white";
  const inactiveColor = transparent
    ? "font-normal text-ink/60 hover:text-ink"
    : "font-normal text-white/70 hover:text-white";

  const mobileLinkBase = "inline-flex items-center gap-2 text-2xl tracking-[-0.4px] transition-colors";

  const ctaClasses = `hidden lg:inline-flex items-center gap-3 rounded-[2px] bg-white px-4 py-3 font-mono text-[16px] font-semibold uppercase tracking-[-0.36px] text-ink transition-all hover:-translate-y-px hover:bg-gray-100 sm:px-6 sm:py-3.5 sm:text-[18px] ${
    transparent ? "border border-[#0D0E13]/20" : ""
  }`;

  const ctaArrowStroke = "#0D0E13";
  const hamburgerColor = transparent ? "bg-ink" : "bg-white";
  const hamburgerBtnColor = transparent
    ? "text-ink hover:bg-ink/10"
    : "text-white hover:bg-white/10";

  return (
    <nav
      className={`relative z-30 flex w-full items-center justify-between px-4 py-3.5 sm:px-8 lg:px-20 mt-3 ${
        transparent ? "bg-transparent" : "bg-ink"
      }`}
    >
      <Image
        src={logoSrc}
        alt="JAVM Partners"
        width={204}
        height={28}
        priority
        className={logoClassName}
      />

      <ul className="hidden items-center gap-9 lg:flex">
        {links.map((l) => {
          const active = isActive(l.href);
          const className = `${linkBase} ${active ? activeColor : inactiveColor}`;
          const content = (
            <>
              {l.label}
              {l.hasDropdown && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </>
          );
          return (
            <li key={l.label}>
              {isInternal(l.href) ? (
                <TransitionLink href={l.href} className={className}>
                  {content}
                </TransitionLink>
              ) : (
                <a href={l.href} className={className}>
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <a href="#" className={ctaClasses}>
        BOOK A DISCOVERY CALL
        <svg width="14" height="11" viewBox="0 0 12 9" fill="none" aria-hidden>
          <path
            d="M1 4.5H11M11 4.5L7 1M11 4.5L7 8"
            stroke={ctaArrowStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`relative z-40 flex h-10 w-10 items-center justify-center rounded-[2px] transition-colors lg:hidden ${hamburgerBtnColor}`}
      >
        <span className="relative block h-4 w-6">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-6 transition-transform duration-300 ${hamburgerColor} ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] block h-0.5 w-6 transition-opacity duration-200 ${hamburgerColor} ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] block h-0.5 w-6 transition-transform duration-300 ${hamburgerColor} ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-20 bg-ink/95 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        className={`fixed inset-x-0 top-0 z-20 flex flex-col gap-8 bg-ink px-6 pb-10 pt-24 shadow-xl transition-transform duration-300 ease-out sm:px-8 lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {links.map((l) => {
            const active = isActive(l.href);
            const className = `${mobileLinkBase} ${
              active ? "font-semibold text-white" : "font-normal text-white/70 hover:text-white"
            }`;
            const content = (
              <>
                {l.label}
                {l.hasDropdown && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </>
            );
            return (
              <li key={l.label}>
                {isInternal(l.href) ? (
                  <TransitionLink
                    href={l.href}
                    className={className}
                    onClick={() => setOpen(false)}
                  >
                    {content}
                  </TransitionLink>
                ) : (
                  <a href={l.href} className={className} onClick={() => setOpen(false)}>
                    {content}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="#"
          onClick={() => setOpen(false)}
          className="inline-flex w-fit items-center gap-3 rounded-[2px] bg-white px-6 py-3.5 font-mono text-[16px] font-semibold uppercase tracking-[-0.36px] text-ink transition-all hover:-translate-y-px hover:bg-gray-100"
        >
          BOOK A DISCOVERY CALL
          <svg width="14" height="11" viewBox="0 0 12 9" fill="none" aria-hidden>
            <path
              d="M1 4.5H11M11 4.5L7 1M11 4.5L7 8"
              stroke="#0D0E13"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
