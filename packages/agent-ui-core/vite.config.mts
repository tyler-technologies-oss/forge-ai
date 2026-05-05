import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
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
        preserveModulesRoot: 'src'
      }
    }
  },
  plugins: [
    dts({
      outDir: 'dist',
      exclude: ['node_modules/**'],
      compilerOptions: {
        rootDir: './src'
      }
    })
  ]
});
