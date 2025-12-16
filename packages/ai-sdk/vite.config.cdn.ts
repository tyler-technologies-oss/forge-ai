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
          // Shared agent adapter/runner modules go into a shared chunk
          if (id.includes('/src/core/foundry-agent-adapter') || id.includes('/src/core/foundry-agent-runner')) {
            return 'foundry-agent-core';
          }

          // Shared chatbot modules go into a core chunk
          if (
            id.includes('/src/ui/foundry-base-chatbot') ||
            id.includes('/src/ui/foundry-chatbot-controller') ||
            id.includes('/src/ui/foundry-chatbot/')
          ) {
            return 'foundry-chatbot-core';
          }

          // Foundry Floating Chatbot and FAB modules go into their own chunk
          if (id.includes('/src/ui/foundry-floating-chatbot') || id.includes('src/ui/foundry-fab')) {
            return 'foundry-floating';
          }

          // Foundry Sidebar Chatbot module goes into its own chunk
          if (id.includes('/src/ui/foundry-sidebar-chatbot')) {
            return 'foundry-sidebar';
          }

          // Foundry Threads Chat module goes into its own chunk
          if (id.includes('/src/ui/foundry-threaded-chatbot')) {
            return 'foundry-threads';
          }

          // Forge AI modules go into their own chunk
          if (id.includes('packages/ai/dist/') || id.includes('@tylertech/forge-ai')) {
            return 'forge-ai';
          }

          // All other node_modules go into vendor chunk
          if (id.includes('node_modules')) {
            return 'foundry-vendor';
          }

          // console.log('UNMATCHED:', id.replace('/Users/kieran/Development/GitHub/tyler-technologies-oss/forge-ai', ''));

          return undefined;
        },
        chunkFileNames: '[name].js',
        entryFileNames: '[name].js'
      }
    },
    minify: 'terser',
    sourcemap: false
  }
});
