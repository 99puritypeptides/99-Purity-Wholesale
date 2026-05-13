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
        brand: {
          bg: "#090C11",
          accent: "#4FC3D0",
          text: "#EDF2F7"
        }
      },
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)'],
        'dm-sans': ['var(--font-dm-sans)'],
        'dm-mono': ['var(--font-dm-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
