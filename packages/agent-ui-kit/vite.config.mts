import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      outDir: 'dist',
      entryRoot: 'src',
      tsconfigPath: './tsconfig.json',
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'forge/index': resolve(__dirname, 'src/forge/index.ts'),
        'forge/catalog': resolve(__dirname, 'src/forge/catalog.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'lit',
        'lit/decorators.js',
        'lit/directives/if-defined.js',
        'lit/directives/live.js',
        '@tylertech/agent-ui-core',
        '@tylertech/forge',
        'zod'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].mjs',
        format: 'es'
      }
    }
  }
});
