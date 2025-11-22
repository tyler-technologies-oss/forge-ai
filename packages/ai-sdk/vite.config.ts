import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: {
        sdk: resolve(__dirname, 'src/index.ts'),
        bootstrap: resolve(__dirname, 'src/bootstrap.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      external: ['@tylertech/forge-ai'],
      output: {
        preserveModules: false,
        inlineDynamicImports: false
      }
    },
    minify: 'terser',
    sourcemap: true,
    outDir: 'dist'
  },
  plugins: [
    dts({
      include: ['src'],
      outDir: 'dist',
      rollupTypes: true
    })
  ]
});
