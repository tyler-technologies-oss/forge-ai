import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/lib/**/*'],
      outDir: 'dist',
      entryRoot: 'src/lib',
      tsconfigPath: './tsconfig.json',
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      formats: ['es'],
      fileName: () => 'index.mjs'
    },
    rollupOptions: {
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/if-defined.js',
        '@tylertech/agent-ui',
        '@tylertech/forge',
        '@tylertech/forge-ai'
      ],
      output: {
        preserveModules: false
      }
    }
  }
});
