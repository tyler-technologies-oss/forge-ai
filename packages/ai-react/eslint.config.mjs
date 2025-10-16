import { defineConfig } from 'eslint/config';
import tylerPlugin from '@tylertech-eslint/eslint-plugin';

export default defineConfig([
  {
    name: 'Forge AI React',
    files: ['**/*.{ts,tsx}'],
    extends: [tylerPlugin.configs.tsRecommended, tylerPlugin.configs.tsStylistic]
  }
]);
