import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';
import customRules from './plugins/eslint/index.mjs';

export default defineConfig([
  {
    name: 'TypeScript',
    files: ['src/**/*.ts'],
    plugins: {
      custom: customRules
    },
    extends: [tylerPlugin.configs.tsRecommended, tylerPlugin.configs.tsStylistic],
    rules: {
      'custom/no-forge-imports': 'error'
    }
  }
]);
