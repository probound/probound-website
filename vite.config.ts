
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
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
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-radix': ['@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-navigation-menu', '@radix-ui/react-accordion', '@radix-ui/react-toast'],
          'vendor-icons': ['lucide-react'],
          'vendor-utils': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'components': ['@/components/ui/button', '@/components/ui/card', '@/components/ui/accordion']
        }
      }
    },
    minify: 'esbuild',
    target: 'esnext',
    chunkSizeWarningLimit: 1000
  }
}));
