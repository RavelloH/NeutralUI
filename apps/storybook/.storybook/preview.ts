import type { Preview } from '@storybook/react';
import '../../../packages/ui/src/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
    docs: {
      story: {
        inline: true,
      },
      canvas: {
        sourceState: 'shown',
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
