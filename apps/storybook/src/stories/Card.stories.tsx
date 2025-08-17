import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../../packages/ui/src/card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A clickable card component that displays title and content with hover effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The card title',
    },
    href: {
      control: { type: 'text' },
      description: 'The URL to navigate to when clicked',
    },
    children: {
      control: { type: 'text' },
      description: 'The card content',
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
    title: 'Documentation',
    href: 'https://docs.example.com',
    children: 'Find in-depth information about features and API.',
  },
};

export const LearnMore: Story = {
  args: {
    title: 'Learn',
    href: 'https://learn.example.com',
    children: 'Learn about our platform in an interactive course with quizzes!',
  },
};

export const Examples: Story = {
  args: {
    title: 'Examples',
    href: 'https://examples.example.com',
    children: 'Discover and deploy boilerplate example projects.',
  },
};

export const Deploy: Story = {
  args: {
    title: 'Deploy',
    href: 'https://deploy.example.com',
    children: 'Instantly deploy your project with a single command.',
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl'>
      <Card title='Documentation' href='https://docs.example.com'>
        Find in-depth information about features and API.
      </Card>
      <Card title='Learn' href='https://learn.example.com'>
        Learn about our platform in an interactive course with quizzes!
      </Card>
      <Card title='Examples' href='https://examples.example.com'>
        Discover and deploy boilerplate example projects.
      </Card>
      <Card title='Deploy' href='https://deploy.example.com'>
        Instantly deploy your project with a single command.
      </Card>
      <Card title='Support' href='https://support.example.com'>
        Get help from our community and support team.
      </Card>
      <Card title='Templates' href='https://templates.example.com'>
        Browse our collection of starter templates.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple cards displayed in a responsive grid layout.',
      },
    },
  },
};
