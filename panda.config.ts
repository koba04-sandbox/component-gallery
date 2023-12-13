import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "src/styled-system",

  theme: {
    tokens: {
      colors: {
        blue5: { value: "hsl(212, 88%, 62%)"},
        blue9: { value: "hsl(204, 100%, 86%)"},
        grey5: { value: "hsl(211, 12%, 43%)"},
        grey8: { value: "hsl(211, 16%, 82%)" },
        grey9: { value: "hsl(214, 15%, 91%)"},
        grey10: { value: "hsl(216, 33%, 97%)"},
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.blue5}" },
        primaryLight: { value: "{colors.blue9}" },
        neutral: { value: "{colors.grey5}"},
        neutralLighter: { value: "{colors.grey8}"},
        neutralLight: { value: "{colors.grey9}"},
        neutralLightest: { value: "{colors.grey10}"},
      }
    }
  }
});
