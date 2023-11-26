import { defineConfig } from "$fresh/server.ts";
import tailwindPlugin from "https://deno.land/x/fresh_tailwind@v0.5.1/mod.ts";
import autoprefixer from "https://esm.sh/autoprefixer@10.4.16";
import pfm from "https://esm.sh/postcss-font-magician@3.0.0";
import postcssNesting from "https://esm.sh/postcss-nesting@12.0.1";
import cssnano from "npm:cssnano@6.0.1";

const postcssPlugins = [
  autoprefixer(),
  postcssNesting(),
  cssnano({
    preset: "default",
  }),
];

export default defineConfig({
  plugins: [
    // Ahead-of-time compilation of Tailwind CSS
    tailwindPlugin({
      css: "./src/style.css",
      dest: "./static/style.css",
      plugins: [
        ...postcssPlugins,
        pfm({
          variants: {
            Inter: {
              300: [],
              400: [],
              500: [],
              600: [],
              700: [],
              800: [],
              900: [],
            },
            "IBM Plex Mono": {
              300: [],
              400: [],
              500: [],
              600: [],
              700: [],
              800: [],
              900: [],
            },
          },
          foundries: ["google"],
        }),
      ],
    }),
    // Just-in-time compilation of Tailwind CSS
    tailwindPlugin({
      css: "./src/partials.css",
      plugins: postcssPlugins,
    }),
  ],
});
