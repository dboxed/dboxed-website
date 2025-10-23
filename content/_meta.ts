import { MetaRecord } from "nextra";

export default {
  index: {
    title: "Dboxed",
    type: "page",
    display: "hidden",
    theme: {
      copyPage: false,
      toc: false,
    },
  },
  imprint: {
    title: "Imprint",
    type: "page",
    display: "hidden",
  },
  privacy: {
    title: "Data Privacy",
    type: "page",
    display: "hidden",
  },
  docs: {
    title: "Docs",
    type: "page",
  },
} satisfies MetaRecord;