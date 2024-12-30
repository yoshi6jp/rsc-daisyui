import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/rsc-daisyui/dist/**/*.js",
  ],
  plugins: [typography, daisyui],
  daisyui: {
    themes: true,
  },
};
export default config;
