/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A005E",
        "primary-light": "#F6F1FE",
        accent: "#A462F7",
        muted: "#F5F5F7",
        "pink-accent": "#F03DA8",
        success: "#00C48C",
        warning: "#FFBE00",
        dark: "#1E1E1E",
        gray: "#666666",
      },
    },
  },
  plugins: [],
}

