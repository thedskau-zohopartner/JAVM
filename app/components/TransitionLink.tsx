"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type Props = ComponentProps<typeof Link>;

export default function TransitionLink({ href, onClick, ...rest }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (typeof href !== "string") return;
    if (href.startsWith("#") || /^https?:\/\//.test(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const start = (
      document as Document & {
        startViewTransition?: (cb: () => void) => unknown;
      }
    ).startViewTransition;
    if (!start) return;

    e.preventDefault();
    start.call(document, () => router.push(href));
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
