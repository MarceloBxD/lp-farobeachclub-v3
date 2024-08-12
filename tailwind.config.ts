/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "faro-green": "#83A3A1",
      "faro-yellow": "#FFB236",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      borderRadius: {
        button: "40px",
      },
    },
    fontSize: {
      desktopTitle: "60px",
      desktopDesc: "20px",
      desktopButtonText: "16px",
      mobileTitle: "32px",
      mobileDescription: "14px",
      mobileButtonDesc: "12px",
    },
  },
  darkMode: "class",
};
