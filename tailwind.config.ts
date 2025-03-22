import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@hero-ui/react/**/*.{js,ts,jsx,tsx}", // Ensure Hero UI components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};

export default config;
