import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  root: 'src/demo',
  publicDir: resolve(__dirname, 'src/demo/public'),
  server: {
    port: 5174
  },
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/demo/index.html'),
        'renderer-demo': resolve(__dirname, 'src/demo/renderer-demo.html'),
        'form-builder-demo': resolve(__dirname, 'src/demo/form-builder-demo.html')
      }
    }
  }
});
