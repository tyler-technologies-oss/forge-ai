import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'cdn',
    emptyOutDir: true,
    lib: {
      entry: {
        bootstrap: resolve(__dirname, 'src/bootstrap.ts'),
        'agent-runner': resolve(__dirname, 'src/agent-runner-bootstrap.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      output: {
        manualChunks: id => {
          // All SDK source files go into sdk-core
          if (id.includes('/src/') && !id.includes('node_modules')) {
            return 'sdk-core';
          }

          if (id.includes('ai-floating-chat') || id.includes('ai-fab')) {
            return 'floating-chat';
          }
          if (id.includes('ai-sidebar-chat')) {
            return 'sidebar-chat';
          }
          if (id.includes('ai-threads')) {
            return 'threads-chat';
          }

          if (id.includes('@tylertech/forge-ai')) {
            return 'shared-vendor';
          }
        },
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js'
      }
    },
    minify: 'terser',
    sourcemap: false
  }
});
