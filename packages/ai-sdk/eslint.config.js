import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';

export default defineConfig([
  {
    name: 'TypeScript',
    files: ['src/**/*.ts'],
    extends: [tylerPlugin.configs.tsRecommended, tylerPlugin.configs.tsStylistic]
  }
]);
