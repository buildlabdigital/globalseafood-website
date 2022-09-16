const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gse: {
          pacificBlue: "#002F3B",
          pacificBlueAccent: "#1D454F",
          pacificBlueMessage: "#009DC4",
          pacificGrey: "#909094",
          pacificGreen: "#2FD058",
          pacificRed: "#FF453A",
          pacificOrange: "#FEA00A",
          pacificYellow: "#FFD40B",
          blue: "#0ea5e9",
          green: "#22c55e",
          orange: "#fb923c",
          red: "#ef4444",
          yellow: "#eab308",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
