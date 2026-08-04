"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

const DRAW_MS = 1000;

type RailSequenceValue = {
  /** highest line index allowed to start drawing */
  readyIndex: number;
  markDrawn: (index: number) => void;
};

const RailSequenceContext = createContext<RailSequenceValue>({
  readyIndex: 0,
  markDrawn: () => {},
});

/** Wraps the pillar rows so the rail lines draw one after another. */
export function RailSequence({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [readyIndex, setReadyIndex] = useState(0);

  const markDrawn = useCallback((index: number) => {
    setReadyIndex((current) => Math.max(current, index + 1));
  }, []);

  const value = useMemo(
    () => ({ readyIndex, markDrawn }),
    [readyIndex, markDrawn],
  );

  return (
    <RailSequenceContext.Provider value={value}>
      <div className={className}>{children}</div>
    </RailSequenceContext.Provider>
  );
}

/** Vertical connector between two pillar icons — draws downward when scrolled into view. */
export default function PillarRailLine({ index }: { index: number }) {
  const { readyIndex, markDrawn } = useContext(RailSequenceContext);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // this line waits for the one above it to reach its icon
  const drawing = inView && index <= readyIndex;

  useEffect(() => {
    if (!drawing) return;
    const timer = setTimeout(() => markDrawn(index), DRAW_MS);
    return () => clearTimeout(timer);
  }, [drawing, index, markDrawn]);

  return (
    <span ref={ref} aria-hidden className="w-0.5 flex-1 overflow-hidden">
      <span
        style={{ transitionDuration: `${DRAW_MS}ms` }}
        className={`block h-full w-full origin-top bg-[#003CFC] transition-transform ease-out motion-reduce:transition-none ${
          drawing ? "scale-y-100" : "scale-y-0"
        }`}
      />
    </span>
  );
}
