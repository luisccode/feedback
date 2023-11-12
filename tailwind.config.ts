import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  safelist: ["w-[10%]", "text-blue-500"],
  theme: {
    extend: {
      colors: {
        red: {
          500: "#F45D6F",
        },
        blue: {
          900: "#55577E",
          500: "#532EE4",
        },
        purple: {
          100: "#8F90BE",
        },
      },

      boxShadow: {
        lg: "0px 0px 24px 0px rgba(76, 67, 114, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
