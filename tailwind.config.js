/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('../public/lines.svg')",
        'bgtext': 'linear-gradient(90deg, rgba(0,44,255,1) 0%, rgba(243,29,253,1) 50%, rgba(252,69,69,1) 100%)'
      },
      fontFamily: {
        'mainfont': ["'Alata', sans-serif"],
        // 'mainfont': ["'Forum', serif"],

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
