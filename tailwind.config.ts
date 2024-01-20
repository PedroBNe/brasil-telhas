import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'img_maquina_telhas': "url('../assets/maquina-telhas.png')"
    },
    extend: {
      brightness: {
        25: '.25'
      },
      colors: {
        'title': '#3259A6',
        'product': '#3259A6',
        'product-select': '#27447E',
        'social': '#3259A6',
        'text': '#010101',
        'button': '#009A22',
        'button-hover': '#005613',
        'text-select': '#009A22'
      }
    },
  },
  plugins: [],
}
export default config
