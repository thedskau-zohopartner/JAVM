import type { SchemaTypeDefinition } from "sanity";

import { caseStudy } from "./caseStudy";
import { caseStudyPage } from "./caseStudyPage";

export const schemaTypes: SchemaTypeDefinition[] = [caseStudy, caseStudyPage];
