import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "faq-gradient":
          "linear-gradient(11.37deg, #C944F7 -1.72%, #06DCC2 200.15%)",
      },

      colors: {
        black: "#000000",
        blue: "#588FFF",
        ferozi: "#28C2CB",
        pink: "#BF4CF4",
        "light-black": "#1D1E1C",
        "dark-gray": "#474747",
        "dark-silver": "#838383",
        "smoke-black": "#0D0D0D",
        "chinese-black": "#131313",
        "light-silver": "#C9C9C9",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      screens: {
        xs: "440px",
        "min-aspect": { raw: "(min-aspect-ratio: 1/1)" },
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
            paddingLeft: "2.625rem",
            paddingRight: "2.625rem",
          },
          "@screen xl": {
            maxWidth: "100%",
            paddingLeft: "4.375rem",
            paddingRight: "4.375rem",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
export default config;
