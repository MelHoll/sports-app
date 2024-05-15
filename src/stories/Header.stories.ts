import type { Meta, StoryObj } from '@storybook/react';
import { Header } from 'src/shared/components';
import { withRouter } from 'storybook-addon-remix-react-router';
import 'src/App.css'

const meta = {
  title: 'Example/Header',
  component: Header,
  decorators: [withRouter],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

