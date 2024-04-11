import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        stronger: ["Stronger", "cursive"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        twitch: "var(--color-twitch)",
        ice: "var(--color-twitch-ice)",
      },
    },
  },
  plugins: [animations],
};
