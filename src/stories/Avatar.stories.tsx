import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/engelzz.png" alt="matheusEngel" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
};
