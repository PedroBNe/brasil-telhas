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
        'primary-color': '#000000',
        'second-color': '#FFFFFF',
        'button': '#009A22',
        'text-select': '#009A22;'
      }
    },
  },
  plugins: [],
}
export default config
