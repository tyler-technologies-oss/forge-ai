import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      formats: ['es'],
      fileName: () => 'index.mjs'
    },
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: id => !(isAbsolute(id) || id.startsWith('.')),
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
      }
    }
  },
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      exclude: ['node_modules/**', 'src/demo/**'],
      compilerOptions: {
        rootDir: './src/lib'
      }
    })
  ]
});
