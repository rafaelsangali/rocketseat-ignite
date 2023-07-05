/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'blue-dark': "#1E6F9F",
        'blue-neutral': "#4EA8DE",
        'purple-dark': "#5E60CE",
        'purple-neutral': "#8284FA",
        'gray-100': "#F2F2F2",
        'gray-200': "#D9D9D9",
        'gray-300': "#808080",
        'gray-400': "#333333",
        'gray-500': "#262626",
        'gray-600': "#1A1A1A",
        'gray-700': "#0D0D0D",
        'danger': "#E25858",
      },
      backgroundImage: {
        'icon-plus': "url('/icons/icon-plus.svg')",
        'icon-check': "url('/icons/icon-check.svg')",
      },
    },
  },
  plugins: [],
}
