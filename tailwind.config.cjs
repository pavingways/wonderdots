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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'body *': {
              fontSize: '16px',
            },
            'blockquote': {
              fontStyle: 'normal',
              borderLeftColor: theme('colors.black'),
              borderLeftWidth: '4px',
            },
            'blockquote p': {
              fontWeight: '400',
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
            '--tw-prose-bullets': theme('colors.black'),
            'ul': {
              paddingInlineStart: '0',
              lineHeight: '1.5',
            },
            'ul > li::marker': {
              color: theme('colors.black'),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
