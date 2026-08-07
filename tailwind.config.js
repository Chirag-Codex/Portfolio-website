/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          soft: "#12151C",
          softer: "#171A23",
          line: "#242833"
        },
        paper: {
          DEFAULT: "#EDEEF2",
          dim: "#9198A9",
          faint: "#5B6272"
        },
        signal: {
          violet: "#6E5BFF",
          violetSoft: "#8C7CFF",
          amber: "#FFB74A",
          amberSoft: "#FFCB7D"
        }
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
