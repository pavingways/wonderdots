/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        'xs': '480px',    // Extra small devices
        ...defaultTheme.screens, // Preserves the default breakpoints
        '4xl': '1920px',  // Extra large breakpoint
      },

    },
  },
  plugins: [require("@tailwindcss/typography")],
};
