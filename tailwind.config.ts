import animate from "https://esm.sh/tailwindcss-animate@1.0.7";

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
  ],
};
