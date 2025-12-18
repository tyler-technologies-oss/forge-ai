import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';

/**
 * Vite configuration for building the AI SDK and UI components.
 *
 * This build outputs ES modules with preserved module structure,
 * suitable for consumption via bundlers or direct ES module imports.
 *
 * The build excludes external dependencies to allow consumers to
 * manage their own versions of shared libraries.
 */
export default defineConfig({
  build: {
    lib: {
      // Entry points for the SDK and UI components
      // We need the glob to ensure index.ts files are included in the output
      entry: [resolve(__dirname, 'src/sdk.ts'), ...glob.sync('src/ui/**/index.ts')],
      formats: ['es']
    },
    rollupOptions: {
      // Externalize all non-relative dependencies that should not be bundled
      external: /^[^./]/,
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
