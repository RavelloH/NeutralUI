import type { Preview } from '@storybook/react';
import '../../../packages/ui/src/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', '*'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
