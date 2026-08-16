import type { PortableTextBlock } from "next-sanity";

export type CaseStudyImage = {
  asset: { _ref: string; _type: string };
  alt?: string;
};

export type CaseStudyCard = {
  _id: string;
  slug: string;
  company: string;
  person: string;
  role: string;
  category: string;
  cardHeading: string;
  logo: CaseStudyImage | null;
  portrait: CaseStudyImage | null;
};

export type CaseStudy = CaseStudyCard & {
  title: string;
  subtitle: string | null;
  summary: string;
  facts: { label: string; value: string }[] | null;
  body: { heading: string; content: PortableTextBlock[] }[] | null;
  quote: string;
  quoteAuthor: string;
};

export type CaseStudiesPage = {
  heroEyebrow: string | null;
  heroHeading: string;
  heroSubheading: string | null;
  featuredEyebrow: string | null;
  featuredBlurb: string | null;
  listEyebrow: string | null;
  listHeading: string;
};
