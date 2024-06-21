import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pomodoro-black': '#0F1108',
        'pomodoro-bg': "#241909",
        'pomodoro-sky': '#00F6ED',
        'pomodoro-purple': '#8A1C7C',
        'pomodoro-grey': '#CAD8DE',
        'pomodoro-brown': '#645853',
        'pomodoro-border': "#1E1E1E",
        'pomodoro-salmon': '#E16F7C',
        'pomodoro-green': '#2E382E',
      }
    },
  },
  plugins: [],
  safelist:[
    'bg-gray-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-red-300'
  ]
};
export default config;
