import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "media"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: "#04060D",
      },
      fontFamily: {
        labelle: ['LaBelleAurore', 'cursive'],
      },
      colors: {
        themeBlack: '#09090B',
        themeGray: '#27272A',
        themeDarkGray: '#27272A',
        themeTextGray: '#B4B0AE',
        themeTextWhite: '#F7ECE9',
        neutral: {
          950: "#04060D",
          900: "#0A0F1C",
          800: "#111827",
          700: "#1F2937",
          600: "#374151",
          500: "#4B5563",
          400: "#6B7280",
        },
      }
    }
  },
  plugins: []
};

export default config;
