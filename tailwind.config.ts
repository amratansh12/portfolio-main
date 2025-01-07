import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      shine: {
        "0%": { "background-position": "100%" },
        "100%": { "background-position": "-100%" },
      },
      "star-movement-bottom": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
      },
      "star-movement-top": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(100%, 0%)", opacity: "0" },
      },
    },
    animation: {
      shine: "shine 5s linear infinite",
      "star-movement-bottom": "star-movement-bottom linear infinite alternate",
      "star-movement-top": "star-movement-top linear infinite alternate",
    },
  },
  plugins: [],
};

export default config;
