import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";

const TEXT = "text-[18px] font-medium leading-6.5 tracking-[-0.02em] text-[#0A0A0A]/70 opacity-80";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={TEXT}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className={`flex list-disc flex-col gap-3 pl-5 ${TEXT}`}>{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      <PortableText value={value} components={components} />
    </div>
  );
}
