import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        theme: "var(--theme-color)",
      },
    },
  },
  plugins: [],
};

export default config;
