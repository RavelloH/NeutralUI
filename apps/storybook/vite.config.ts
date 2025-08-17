import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ravelloh/neutral-ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
  optimizeDeps: {
    exclude: ['@ravelloh/neutral-ui'],
  },
});
