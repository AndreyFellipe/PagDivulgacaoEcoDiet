import { type Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10': '10px',
        '12': '12px',
        '18': '18px',
        '19': '19px',
        '20': '20px',
        '25': '25px',
        '24': '24px',
        '70': '70px',
        '30': '30px',
        '40': '40px',
        '14': '14px',
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
} satisfies Config;