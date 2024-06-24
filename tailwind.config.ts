import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        b1: "var(--b1)",
        b2: "var(--b2)",
        b3: "var(--b3)",
        b4: "var(--b4)",
        b5: "var(--b5)",
        texto1: "var(--texto-1)",
        texto2: "var(--texto-2)",
        texto3: "var(--texto-3)",
        vermelho: "var(--vermelho)",
      },
    },
  },
  plugins: [],
};

export default config;
