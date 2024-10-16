import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
  },
  server: {
    port: 3000,  // Development server port
  },
  // Fix for SPA routing on Vercel
  base: '/',
  resolve: {
    alias: {
      '@': '/src', // Just in case you have any custom path aliases
    },
  },
});
