import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0f23",
        "bg-light": "#1a1a2e",
        "bg-lighter": "#252542",
        primary: "#6366f1",
        "primary-light": "#818cf8",
        "primary-dark": "#4f46e5",
        secondary: "#10b981",
        accent: "#f59e0b",
        text: "#f8fafc",
        "text-muted": "#94a3b8",
        "text-dim": "#64748b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "pulse-slow": "pulse 2s infinite",
        "bounce-slow": "bounce 2s infinite",
        scroll: "scroll 2s infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        progress: "progress 2s ease forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(20px, -20px) scale(1.05)" },
          "50%": { transform: "translate(-10px, 20px) scale(0.95)" },
          "75%": { transform: "translate(-20px, -10px) scale(1.02)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(8px)", opacity: "0" },
        },
        progress: {
          to: { strokeDashoffset: "60" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6366f1, #4f46e5)",
        "gradient-text": "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
      },
    },
  },
  plugins: [],
};

export default config;
