/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-dim": "#131313",
        "surface-bright": "#3a3939",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1c1b1b",
        "surface-container": "#201f1f",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c2c7ce",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        outline: "#8c9198",
        "outline-variant": "#42474d",
        "surface-tint": "#a8caed",
        primary: {
          DEFAULT: "#a8caed",
          foreground: "#0c334f",
          container: "#89aacc",
          "on-container": "#1b3f5c"
        },
        secondary: {
          DEFAULT: "#9ecaff",
          foreground: "#003258",
          container: "#004e84",
          "on-container": "#8ac0fd"
        },
        tertiary: {
          DEFAULT: "#edbe84",
          foreground: "#462a00",
          container: "#cb9f68",
          "on-container": "#543607"
        },
        error: {
          DEFAULT: "#ffb4ab",
          foreground: "#690005",
          container: "#93000a",
          "on-container": "#ffdad6"
        },
        bg: "hsl(0, 0%, 4%)",
        text: "hsl(0, 0%, 96%)",
        muted: {
          DEFAULT: "hsl(0, 0%, 53%)",
          foreground: "#c2c7ce"
        },
        stroke: "hsl(0, 0%, 12%)",
        "status-green": "#4ADE80",
        border: "hsl(0, 0%, 12%)",
        input: "hsl(0, 0%, 12%)",
        ring: "#a8caed",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Instrument Serif", "serif"]
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 14vw, 9rem)", "1"],
        "headline-hero": ["clamp(3.5rem, 12vw, 9rem)", "0.9"],
        "headline-section": ["clamp(2rem, 5vw, 3.2rem)", "1.05"],
        "subheading": ["clamp(1.1rem, 2.5vw, 1.5rem)", "1.4"],
        "body-lg": ["1.125rem", "1.6"],
        "body-md": ["0.95rem", "1.6"],
        "label-md": ["0.9rem", "1"],
        "label-sm": ["0.7rem", "1"]
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "1.5rem",
        bento: "24px",
        exploration: "20px",
        pill: "999px"
      },
      spacing: {
        "grid-margin": "24px",
        "grid-gutter": "24px",
        "section-v-padding": "64px",
        "bento-gap": "24px",
        "list-gap": "16px",
        "max-width-std": "1200px",
        "max-width-wide": "1400px"
      },
      boxShadow: {
        "cosmic-glow": "0 0 15px rgba(137, 170, 204, 0.35)"
      }
    }
  },
  plugins: [],
}
