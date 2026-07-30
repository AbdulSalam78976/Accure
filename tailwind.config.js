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
          green: "#687D6B",
          darkgreen: "#27382B",
          lime: "#b9dd93",
          midlime: "#95c168",
          forest: "#4f8a2b",
          dark: "#141c0d",
          subtext: "#3a4a2e",
          subtext2: "#5a6a4c",
          panel: "#cfe0e2",
          cardbg: "#eef4ec",
          footer: "#0d1408",
        },
        brand: {
          dark: "#27382B",
          mid: "#687D6B",
          light: "#C6CCC1",
        },
        hero: {
          dark: "#0B120E",
        },
        light: {
          bg: "#F6F8F5",
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
