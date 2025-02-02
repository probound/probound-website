import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Import live reload plugin only in development
const liveReload = process.env.NODE_ENV === 'development'
  ? require('vite-plugin-live-reload')
  : null;

export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
  base: '/',
  plugins: [
    react(),
    // Only add live reload in development mode
    mode === 'development' && liveReload && liveReload('./src/**/*.{ts,tsx}'),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}));