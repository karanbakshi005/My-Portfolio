import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Change to '/your-subpath/' if your hosting platform serves this site from a subpath.
  base: '/',
})