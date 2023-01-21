/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        14: ["0.875rem", "1.125rem"],
        16: ["1rem", "1.625rem"],
        20: ["1.25rem", "1.5rem"],
        24: ["1.5rem", "1.8125rem"],
        28: ["1.75rem", "2.125rem"],
      },
      colors: {
        violet: {
          700: "#5964E0",
          500: "#939BF4",
        },
        "dark-blue": "#19202D",
        midnight: "#121721",
        white: "#FFFFFF",
        "custom-gray": {
          200: "#F4F6F8",
          500: "#9DAEC2",
          700: "#6E8098",
        },
      },
    },
  },
  plugins: [],
};
