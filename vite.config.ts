
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
  },
  base: mode === 'development' ? '/' : './',
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-navigation-menu']
        }
      }
    },
    minify: 'esbuild',
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  }
}));
