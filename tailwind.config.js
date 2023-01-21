/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "#5964E0",
        "primary-light-violet": "#939BF4",
        "primary-dark-blue": "#19202D",
        "primary-midnight": "#121721",
        "secondary-white": "#FFFFFF",
        "secondary-light-gray": "#F4F6F8",
        "secondary-gray": "#9DAEC2",
        "secondary-dark-gray": "#6E8098",
      },
    },
    fontSize: {
      14: ["0.875rem", "1.125rem"],
      16: ["1rem", "1.625rem"],
      20: ["1.25rem", "1.5rem"],
      24: ["1.5rem", "1.8125rem"],
      28: ["1.75rem", "2.125rem"],
    },
  },
  plugins: [],
};
