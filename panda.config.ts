import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  preflight: true,
  // define the content to scan 👇🏻
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  outdir: 'styled-system',
  theme: {
    extend: {
      breakpoints: {
          xsm: '320px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      }
  }
})