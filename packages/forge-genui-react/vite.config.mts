import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: id => !(isAbsolute(id) || id.startsWith('.'))
    }
  },
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      compilerOptions: {
        rootDir: './src'
      }
    })
  ]
});
