import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '../../../../packages/ui/src/code';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A component for displaying inline code snippets with proper styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The code content to display',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'npm install @neutralui/ui',
  },
};

export const JavaScriptCode: Story = {
  args: {
    children: 'const greeting = "Hello, World!";',
  },
};

export const TypeScriptCode: Story = {
  args: {
    children: 'interface User { name: string; age: number; }',
  },
};

export const HTMLCode: Story = {
  args: {
    children: '<div className="container">Content</div>',
  },
};

export const ShellCommand: Story = {
  args: {
    children: 'git clone https://github.com/example/repo.git',
  },
};

export const InParagraph: Story = {
  render: () => (
    <p className='text-gray-700 max-w-md'>
      To get started, install the package using <Code>npm install @neutralui/ui</Code> and then
      import the components you need: <Code>import &#123; Button &#125; from '@neutralui/ui'</Code>
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Code component used inline within a paragraph of text.',
      },
    },
  },
};

export const MultipleCodeBlocks: Story = {
  render: () => (
    <div className='space-y-4 max-w-2xl'>
      <div>
        <h3 className='text-lg font-semibold mb-2'>Installation</h3>
        <p>
          Install the package: <Code>npm install @neutralui/ui</Code>
        </p>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-2'>Usage</h3>
        <p>
          Import components: <Code>import &#123; Button, Card &#125; from '@neutralui/ui'</Code>
        </p>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-2'>TypeScript</h3>
        <p>
          Type definitions: <Code>import type &#123; ButtonProps &#125; from '@neutralui/ui'</Code>
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple code snippets used in different contexts.',
      },
    },
  },
};
