module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}

