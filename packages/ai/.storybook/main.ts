import type { StorybookConfig } from '@storybook/web-components-vite';
import remarkGfm from 'remark-gfm';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@vueless/storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    }
  ],
  staticDirs: ['../src/stories/assets'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern'
          }
        }
      },
      plugins: [tsconfigPaths()]
    });
  }
};
export default config;
