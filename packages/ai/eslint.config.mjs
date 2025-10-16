import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';
import customRules from './plugins/eslint/index.mjs';

export default defineConfig([
  {
    name: 'Forge AI',
    files: ['src/lib/**/*.ts'],
    plugins: {
      custom: customRules
    },
    extends: [tylerPlugin.configs.tsRecommended, tylerPlugin.configs.tsStylistic],
    rules: {
      'custom/no-forge-imports': 'error'
    }
  },
  {
    name: 'Forge AI Test',
    files: ['src/lib/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  },
  { ignores: ['storybook-static/**/*'] }
]);
