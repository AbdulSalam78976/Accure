/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accure: {
          green: "#7B9E73",
          dark: "#395A3A",
          darkgreen: "#395A3A",
          lime: "#C6D6B4",
          midlime: "#7B9E73",
          forest: "#395A3A",
          darkest: "#2E4B30",
          subtext: "#405B42",
          subtext2: "#6B7F64",
          panel: "#C6D6B4",
          cardbg: "#F3F6EE",
          footer: "#2E4B30",
        },
        brand: {
          dark: "#395A3A",
          mid: "#7B9E73",
          light: "#C6D6B4",
        },
        hero: {
          dark: "#2E4B30",
        },
        light: {
          bg: "#F3F6EE",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'var(--font-geist-sans)', 'sans-serif'],
        manrope: ['Manrope', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['IBM Plex Mono', 'var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
