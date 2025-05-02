/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%, 100%": { width: "0ch" },
          "50%": { width: "14.3ch" }, // Adjust based on your text length
        },
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typewriter: "typewriter 5s steps(20) infinite",
        caret: "caret 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
