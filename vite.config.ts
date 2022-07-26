import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      strict: true
    }
  },
  plugins: [
    createVuePlugin()
  ],
  build: {
    minify: 'esbuild'
  }
})
