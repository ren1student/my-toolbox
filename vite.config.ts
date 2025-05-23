import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 添加 __dirname 的 polyfill
const __dirname = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@': __dirname + '/src'
    }
  },
  server: {
    port: 5173,
    open: true
  },
  publicDir: 'public',
  build: {
    assetsDir: 'assets'
  }
});