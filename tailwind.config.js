/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", ...fontFamily.sans]
      },
      colors: {
        ink: "#0d1b2a",
        midnight: "#10243e",
        slate: "#1b2f4a",
        moss: "#2f6f56",
        amber: "#f0a500",
        sand: "#f4e9d7",
        accent: "#e85d3f",
        sky: "#e8f1ff",
        stone: "#d9e1ec",
        carbon: "#0a0f1a"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 31, 52, 0.12)",
        card: "0 10px 30px rgba(16, 36, 62, 0.12)"
      },
      borderRadius: {
        xl: "1.25rem",
        '2xl': "1.75rem"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(232, 241, 255, 0.9), transparent 35%), radial-gradient(circle at 80% 0%, rgba(244, 233, 215, 0.8), transparent 30%), linear-gradient(135deg, #0f1f34 0%, #0d1b2a 45%, #122a4a 100%)",
        "mesh": "radial-gradient(40% 50% at 20% 20%, rgba(43, 108, 79, 0.35), transparent 50%), radial-gradient(35% 45% at 80% 10%, rgba(240, 165, 0, 0.25), transparent 55%), radial-gradient(50% 60% at 50% 60%, rgba(16, 36, 62, 0.4), transparent 55%)"
      }
    }
  },
  plugins: []
};

