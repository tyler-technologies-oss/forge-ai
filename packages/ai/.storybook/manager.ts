import { addons } from 'storybook/manager-api';

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: ['Getting Started', 'Components'],
    filters: {
      hidden: item => !item.tags?.includes('hidden')
    }
  }
});
