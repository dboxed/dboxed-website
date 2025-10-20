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
  docs: {
    title: "Docs",
    type: "page",
  },
} satisfies MetaRecord;