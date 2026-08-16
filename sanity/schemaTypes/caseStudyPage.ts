import { defineField, defineType } from "sanity";

export const caseStudyPage = defineType({
  name: "caseStudyPage",
  title: "Case Studies Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "featured", title: "Featured" },
    { name: "list", title: "Grid" },
  ],
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
      group: "hero",
      initialValue: "Customer Stories",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue: "Proven results for businesses just like yours",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero subheading",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "A proven way to go from stalled to revenue growth that actually performs consistently, predictably, and at scale",
    }),

    defineField({
      name: "featuredEyebrow",
      title: "Featured eyebrow",
      type: "string",
      group: "featured",
      initialValue: "Featured Case Study",
    }),
    defineField({
      name: "featuredBlurb",
      title: "Featured blurb",
      description:
        'The short paragraph under the featured headline. Pick which study appears here with the "Feature on the Case Studies page" toggle on the study itself.',
      type: "text",
      rows: 3,
      group: "featured",
    }),

    defineField({
      name: "listEyebrow",
      title: "Grid eyebrow",
      type: "string",
      group: "list",
      initialValue: "Case Studies",
    }),
    defineField({
      name: "listHeading",
      title: "Grid heading",
      type: "text",
      rows: 2,
      group: "list",
      initialValue: "Built for the client. With the client",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Case Studies Page" }),
  },
});
