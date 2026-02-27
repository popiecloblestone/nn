import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      tailwindcss(),
      react()
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      assetsInlineLimit: 4096, // Inline assets < 4KB as base64 (no extra HTTP request)
      rollupOptions: {
        output: {
          manualChunks: {
            // Heavy animation lib gets its own chunk – cached separately
            'framer-motion': ['framer-motion'],
            // React core chunks (cached across deploys)
            vendor: ['react', 'react-dom'],
          }
        }
      }
    }
  };
});
