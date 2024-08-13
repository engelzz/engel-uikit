import { Button } from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
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
