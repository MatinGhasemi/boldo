import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenPalet:"#69E6A6",
        darkBlue:"#0A2640",
        lightDarkBlue:"#1C3D5B",
        lightGray:'#F1F1F1',
        lightLight:"#777777",
        lighPrimary:"#65E4A3",
      },
    },
  },
  plugins: [],
} satisfies Config;
