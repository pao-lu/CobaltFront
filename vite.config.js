import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),legacy({
      targets: ['defaults', 'IE > 8']
    }),splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    }
  },
  build: {
    assetsInlineLimit: 0
  }
})
