import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.GITHUB_ACTIONS ? '/araujos-nest-website/' : '/',
  // The three.js Stage chunk is large but lazy-loaded after first paint.
  build: { chunkSizeWarningLimit: 1100 },
})
