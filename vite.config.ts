/// <reference lib="dom" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'ColorSense - Color Palette Generator',
        short_name: 'ColorSense',
        description: 'Professional color palette generator and design tool',
        theme_color: '#1F2937',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80'
      })
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'color-utils': ['./src/utils/color.ts', './src/utils/auto-palette.ts'],
          'react-color': ['react-color']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
