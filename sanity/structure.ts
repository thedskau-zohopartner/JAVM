import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Case Studies Page")
        .id("caseStudyPage")
        .child(
          S.document()
            .schemaType("caseStudyPage")
            .documentId("caseStudyPage")
            .title("Case Studies Page"),
        ),
      S.divider(),
      S.documentTypeListItem("caseStudy").title("Case Studies"),
    ]);
