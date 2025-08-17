import type { Meta, StoryObj } from '@storybook/react';
import { within, expect } from '@storybook/test';

// 简单的介绍组件
const Introduction = () => (
  <div className='p-8 max-w-4xl mx-auto'>
    <h1 className='text-4xl font-bold mb-6 text-gray-900'>NeutralUI Design System</h1>
    <p className='text-lg text-gray-600 mb-8'>
      A modern, accessible, and customizable React component library built with TypeScript and
      Tailwind CSS.
    </p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='border border-gray-200 rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-3 text-gray-800'>🎨 Design Principles</h2>
        <ul className='space-y-2 text-gray-600'>
          <li>• Modern and clean design</li>
          <li>• Accessibility-first approach</li>
          <li>• Consistent spacing and typography</li>
          <li>• Responsive and mobile-friendly</li>
        </ul>
      </div>

      <div className='border border-gray-200 rounded-lg p-6'>
        <h2 className='text-xl font-semibold mb-3 text-gray-800'>🚀 Features</h2>
        <ul className='space-y-2 text-gray-600'>
          <li>• TypeScript support</li>
          <li>• Tailwind CSS styling</li>
          <li>• Tree-shakeable components</li>
          <li>• Comprehensive documentation</li>
        </ul>
      </div>
    </div>

    <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
      <h2 className='text-xl font-semibold mb-3 text-blue-800'>Getting Started</h2>
      <p className='text-blue-700 mb-4'>
        Install the package and start using our components in your React application.
      </p>
      <code className='block bg-white p-3 rounded border text-sm text-gray-800'>
        npm install @neutralui/ui
      </code>
    </div>
  </div>
);

const meta: Meta<typeof Introduction> = {
  title: 'Introduction/Welcome',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the NeutralUI Design System documentation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 验证主标题存在
    await expect(canvas.getByText('NeutralUI Design System')).toBeInTheDocument();

    // 验证功能列表存在
    await expect(canvas.getByText('TypeScript support')).toBeInTheDocument();

    // 验证设计原则存在
    await expect(canvas.getByText('Modern and clean design')).toBeInTheDocument();
  },
};
