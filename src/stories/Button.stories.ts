import { Button } from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
          detail: "'true' | 'false'",
        },
        defaultValue: {
          detail: 'false'
        },
      }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: 'select',
    },
    variant: {
      options: ['default', 'destructive', 'ghost', 'link', 'secondary', 'outline'],
      control: 'select',
    },
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Buttom',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Buttom',
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Buttom',
    variant: 'ghost',
  },
};

export const Loading: Story = {
  args: {
    variant: 'ghost',
  },
};
