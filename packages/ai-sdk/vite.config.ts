import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/sdk.ts'),
      formats: ['es'],
      fileName: 'sdk'
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
      include: ['src', 'typings'],
      outDir: 'dist'
    })
  ]
});
