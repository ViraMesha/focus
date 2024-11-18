import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#591ddd",
        foreground: "#8728e1",
      },
      backgroundImage: {
        body: "url('/body-bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
