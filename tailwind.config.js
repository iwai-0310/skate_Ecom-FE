/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
      },
      animation: {
        "fade-up": "fadeUp 2s ease-in-out infinite",
        bounce: "bounce 2s infinite",
      },

      keyframes: {
        fadeUp: {
          "0%": {opacity: 0, transform: "translateY(20px)"},
          "100%": {opacity: 1, transform: "translateY(0)"},
        },
      },


      opacity: {
        30: ".40",
      },
    },

    fontFamily: {
      lora: ["Lora", "serif"],
    },
  },
  plugins: [],
}
