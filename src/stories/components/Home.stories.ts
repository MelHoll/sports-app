import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from 'src/pages';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/Home',
  component: HomePage,
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {};
