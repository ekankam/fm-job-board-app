/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "#5964E0",
        "primary-light-violet": "#939BF4",
        "primary-violet-100": "#5964E01A",
        "primary-violet-200": "#5964E059",
        "primary-violet-300": "#5964E04A",
        "primary-dark-blue": "#19202D",
        "primary-dark-blue-100": "#19202D33",
        "primary-dark-blue-200": "#19202D80",
        "primary-midnight": "#121721",
        "secondary-white": "#FFFFFF",
        "secondary-white-100": "#FFFFFF03",
        "secondary-white-200": "#FFFFFF40",
        "secondary-light-gray": "#F4F6F8",
        "secondary-gray": "#9DAEC2",
        "secondary-dark-gray": "#6E8098",
        test: "hsl(295, 55%, 21%)",
      },
      backgroundImage: {
        "mobile-header": "url('/assets/mobile/bg-pattern-header.svg')",
        "mobile-footer": "url('/assets/mobile/bg-pattern-detail-footer.svg')",
        "tablet-header": "url('/assets/tablet/bg-pattern-header.svg')",
        "desktop-header": "url('/assets/desktop/bg-pattern-header.svg')",
        "desktop-footer": "url('/assets/desktop/bg-pattern-detail-footer.svg')",
      },
      screens: {
        "xs-screen": "320px",
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
