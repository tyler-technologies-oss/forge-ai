import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
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
    dts({
      outDir: 'dist',
      compilerOptions: {
        rootDir: './src'
      }
    })
  ]
});
