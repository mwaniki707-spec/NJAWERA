import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e40af',
          orange: '#f97316',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
      },
    },
  },
  plugins: [],
}
export default config

