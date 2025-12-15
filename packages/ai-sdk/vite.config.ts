import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['@tylertech/forge-ai', /@tylertech\/forge-ai\/.*/, 'lit', /lit\/.*/, 'rxjs', /rxjs\/.*/],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js'
      }
    },
    minify: false,
    sourcemap: true,
    outDir: 'dist'
  },
  plugins: [
    dts({
      include: ['src'],
      outDir: 'dist'
    })
  ]
});
