import { resolve, isAbsolute } from 'path';
import { defineConfig } from 'vite';
import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import dts from 'vite-plugin-dts';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import ViteFullReload from 'vite-plugin-full-reload';

function resolveTsconfigPaths(): Record<string, string> {
  const tsconfigContents = readFileSync('./tsconfig.json', 'utf-8').replace(/\/\/.*$/gm, '');
  const tsconfig = JSON.parse(tsconfigContents);
  const aliases = {};
  const paths = Object.entries(tsconfig.compilerOptions.paths) as [string, string[]][];
  for (const [key, value] of paths) {
    aliases[key] = resolve(__dirname, value[0]);
  }
  return aliases;
}

export default defineConfig({
  build: {
    lib: {
      entry: globSync(resolve('src/lib/**/index.ts')),
      formats: ['es']
    },
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: id => !(isAbsolute(id) || id.startsWith('.')),
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src/lib'
      }
    }
  },
  resolve: {
    alias: resolveTsconfigPaths()
  },
  plugins: [
    ViteEjsPlugin({
      site: {
        title: 'Tyler Forge™ AI Dev'
      }
    }),
    ViteFullReload(['./**/*.ejs']),
    dts({
      outDir: 'dist',
      exclude: ['node_modules/**', '**/*.test.ts', 'src/stories/**', 'src/dev/**'],
      compilerOptions: {
        rootDir: './src/lib'
      }
    })
  ]
});
