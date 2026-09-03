import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // La escena 3D se sirve como un chunk diferido e independiente.
    chunkSizeWarningLimit: 900,
  },
})
