import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "identity", title: "Client", default: true },
    { name: "cards", title: "Cards & Headings" },
    { name: "article", title: "Article" },
    { name: "media", title: "Images" },
  ],
  fields: [
    defineField({
      name: "company",
      title: "Company name",
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "identity",
      options: { source: "company", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "person",
      title: "Contact name",
      description: 'Shown on the cards, e.g. "Kosta".',
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Contact role",
      description: 'e.g. "Founder at Lev Logistics".',
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      description: 'The small pill on the grid card, e.g. "Logistics & Transport".',
      type: "string",
      group: "identity",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Feature on the Case Studies page",
      description:
        "Shows this study in the large panel above the grid. If more than one is marked, the most recently published wins.",
      type: "boolean",
      group: "identity",
      initialValue: false,
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      description: "Controls grid order. Newest appears first.",
      type: "datetime",
      group: "identity",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "cardHeading",
      title: "Card headline",
      description: "The headline on the grid card and the featured panel.",
      type: "text",
      rows: 2,
      group: "cards",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Page headline",
      description: "The large H1 at the top of the case study page.",
      type: "text",
      rows: 2,
      group: "cards",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Page subheading",
      type: "text",
      rows: 2,
      group: "cards",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description:
        'The intro paragraph that sits under "Company Overview" on the case study page.',
      type: "text",
      rows: 3,
      group: "cards",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "facts",
      title: "Company facts",
      description:
        'The label/value list in the left sidebar, e.g. "Industry" / "Cybersecurity".',
      type: "array",
      group: "article",
      of: [
        defineArrayMember({
          type: "object",
          name: "fact",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "value",
              type: "text",
              rows: 2,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Article sections",
      description:
        '"Company Overview" and "In Their Words" are added automatically — only add the sections in between, e.g. The Challenge, The Intervention, The Results.',
      type: "array",
      group: "article",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "Paragraph", value: "normal" }],
                  lists: [{ title: "Bullet", value: "bullet" }],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          defineField({
                            name: "href",
                            type: "url",
                            title: "URL",
                          }),
                        ],
                      },
                    ],
                  },
                }),
              ],
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "heading" },
          },
        }),
      ],
    }),
    defineField({
      name: "quote",
      title: "Pull quote",
      type: "text",
      rows: 4,
      group: "article",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "quoteAuthor",
      title: "Pull quote attribution",
      description: 'e.g. "Kosta, Founder at Lev Logistics".',
      type: "string",
      group: "article",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Client logo",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "portrait",
      title: "Contact portrait",
      description: "The cut-out photo on the cards and the case study page.",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "cardHeading", media: "logo" },
  },
});
