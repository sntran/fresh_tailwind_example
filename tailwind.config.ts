import animate from "https://esm.sh/tailwindcss-animate@1.0.7";
import plugin from "https://esm.sh/tailwindcss/plugin";

export default {
  content: [
    "./routes/**/*.{ts,tsx}",
    "./islands/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        fresh: "#86efac",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addVariant }) {
      addVariant("progress-bar", ["&::-webkit-progress-bar", "&"]);
      addVariant("progress-value", ["&::-webkit-progress-value", "&::-moz-progress-bar", "&"]);
    }),
  ],
};
