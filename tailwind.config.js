/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#6100ff",
        gray: "#f0f0f0",
        grad1:
          "linear-gradient(90deg, #68EB53 0%, #FFD749 30.21%, #F3A610 63.02%, #FF6464 100%);",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto-mono)"],
      },
      spacing: {
        a4: "841px",
      },
    },
  },
  plugins: [],
};
