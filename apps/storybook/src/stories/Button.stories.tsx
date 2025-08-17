import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../../packages/ui/src/button';

// 模拟 fn 函数
const fn = () => () => {
  // 处理按钮点击事件
  console.log('Button clicked!'); // eslint-disable-line no-console
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes.',
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
        { name: 'blue', value: '#3b82f6' },
      ],
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    appName: {
      control: { type: 'text' },
      description: 'The application name for the button action',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
  args: {
    appName: 'Storybook',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
    appName: 'Storybook1',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
    appName: 'Storybook1',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary' appName='Demo'>
        Primary
      </Button>
      <Button variant='secondary' appName='Demo'>
        Secondary
      </Button>
      <Button variant='outline' appName='Demo'>
        Outline
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Button size='sm' appName='Demo'>
        Small
      </Button>
      <Button size='md' appName='Demo'>
        Medium
      </Button>
      <Button size='lg' appName='Demo'>
        Large
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes displayed together.',
      },
    },
  },
};
