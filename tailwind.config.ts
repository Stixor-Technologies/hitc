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
        "text-gradient-1":
          "linear-gradient(11.37deg, #C944F7 -1.72%, #06DCC2 200.15%)",
        "text-gradient-2":
          "linear-gradient(5.37deg, #C944F7 -80.72%, #06DCC2 130.15%)",
        "text-gradient-3":
          "linear-gradient(11.37deg, #C944F7 -4.72%, #06DCC2 120.15%)",
        "gradient-4":
          "linear-gradient(15.65deg, #C944F7 6.14%, #06DCC2 229.57%)",
        swirls: " url('/assets/homepage/swirls-bg.svg') ",
      },

      colors: {
        black: "#000000",
        blue: "#588FFF",
        ferozi: "#28C2CB",
        pink: "#C944F7",
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
        mxl: "1360px",
        "min-aspect": { raw: "(min-aspect-ratio: 1/1)" },
      },
      boxShadow: {
        "custom-white": "14px 17px 32.2px 0px rgba(192,192,192,0.25)",
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
