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
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
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
