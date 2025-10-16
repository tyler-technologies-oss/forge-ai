import type { Preview } from '@storybook/web-components-vite';
import { addons } from 'storybook/preview-api';
import { light, dark } from './forge-theme';

import './preview.scss';

const toggleDarkTheme = value => document.body.classList.toggle('forge-storybook-dark', value);
const channel = addons.getChannel();
channel.on('DARK_MODE', isDark => toggleDarkTheme(isDark));
channel.off('DARK_MODE', isDark => toggleDarkTheme(isDark));

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        format: 'html',
        dark: true,
        transform: (source: string) => source.replace(/=""/g, '') // Remove empty attributes
      },
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h2,h3,h4'
      }
    },
    darkMode: { light, dark },
    options: {
      storySort: {
        order: [
          'Home',
          'Getting Started',
          ['Installation', 'Version Compatibility'],
          'Frameworks',
          ['Angular', 'React', 'Vue', 'Svelte'],
          'Components'
        ],
        method: 'alphabetical'
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
