import { defineConfig } from 'vite'
import { ripple } from 'vite-plugin-ripple'
import tenoxui from 'vite-plugin-tenoxui-beta'

export default defineConfig({
  plugins: [ripple(), tenoxui()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
