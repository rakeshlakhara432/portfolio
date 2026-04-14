import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use /portfolio/ for GitHub Pages, and / for Vercel/local dev
  base: process.env.GITHUB_ACTIONS || process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/portfolio/' : '/',
})
