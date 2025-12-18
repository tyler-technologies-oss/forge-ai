import { defineConfig } from 'vite';
import { resolve } from 'path';

/**
 * Vite configuration for building the AI SDK for CDN usage only.
 *
 * This build outputs ES modules optimized for loading via CDN, with
 * manual chunking to ensure optimal caching and loading performance.
 *
 * These bundles include *all* dependencies.
 */
export default defineConfig({
  build: {
    outDir: 'cdn',
    emptyOutDir: true,
    lib: {
      entry: {
        bootstrap: resolve(__dirname, 'src/bootstrap.ts'),
        'agent-runner': resolve(__dirname, 'src/agent-runner-bootstrap.ts'),
        'forge-ai-button': resolve(__dirname, 'src/ui/forge-ai/button.ts'),
        'forge-ai-icon': resolve(__dirname, 'src/ui/forge-ai/icon.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      output: {
        /**
         * IMPORTANT:
         *
         * We manually chunk the build output to optimize loading performance when
         * used via CDN. This ensures that shared dependencies are grouped together
         * and can be cached effectively by the browser.
         *
         * The UI components are loaded dynamically as needed, so we want to ensure that
         * each component is only loading the chunks it needs, without duplicating code
         * across multiple chunks.
         */
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

          // All other node_modules go into vendor chunk
          if (id.includes('node_modules')) {
            return 'foundry-vendor';
          }

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
