const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37", // O nuanță de auriu elegant
        "dark-overlay": "rgba(0, 0, 0, 0.6)", // Suprapunere semi-transparentă
      },
      fontFamily: {
        serif: ["var(--font-playfair-display)", "serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
