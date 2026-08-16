import { defineQuery } from "next-sanity";

export const caseStudyPageQuery = defineQuery(`
  *[_type == "caseStudyPage"][0]{
    heroEyebrow,
    heroHeading,
    heroSubheading,
    featuredEyebrow,
    featuredBlurb,
    listEyebrow,
    listHeading
  }
`);

export const featuredCaseStudyQuery = defineQuery(`
  *[_type == "caseStudy" && featured == true && defined(slug.current)]
    |order(publishedAt desc)[0]{
    _id,
    "slug": slug.current,
    company,
    person,
    role,
    category,
    cardHeading,
    logo,
    portrait
  }
`);

export const caseStudyCardsQuery = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)]|order(publishedAt desc){
    _id,
    "slug": slug.current,
    company,
    person,
    role,
    category,
    cardHeading,
    logo,
    portrait
  }
`);

export const caseStudySlugsQuery = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)]{
    "slug": slug.current
  }
`);

export const caseStudyBySlugQuery = defineQuery(`
  *[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    company,
    person,
    role,
    category,
    title,
    subtitle,
    summary,
    facts[]{ label, value },
    body[]{ heading, content },
    quote,
    quoteAuthor,
    logo,
    portrait
  }
`);
