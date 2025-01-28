import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/uploads': 'http://localhost:3000', // Proxy uploads to the backend
    },
  },
})
