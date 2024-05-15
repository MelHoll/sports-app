import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from 'components/button';
import Gear from 'assets/svg/settings.svg?react';
import User from 'assets/svg/user-profile.svg?react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    secondary: true
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  },
};

export const IconLeft: Story = {
  args: {
    label: 'Button',
    LeftIcon: Gear
  },
};

export const IconRight: Story = {
  args: {
    label: 'Button',
    RightIcon: User
  },
};

export const IconLeftSecondary: Story = {
  args: {
    label: 'Button',
    LeftIcon: Gear, 
    secondary: true
  },
};

export const IconLeftDisabled: Story = {
  args: {
    label: 'Button',
    LeftIcon: Gear,
    disabled: true
  },
};

export const IconLeftOnly: Story = {
  args: {
    LeftIcon: Gear,
  },
};
