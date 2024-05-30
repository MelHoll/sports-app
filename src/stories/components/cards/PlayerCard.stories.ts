import type { Meta, StoryObj } from '@storybook/react';
import 'src/index.css'
import PlayerCard from 'components/card/player-card';
import PlayerJson from 'src/mocks/data/player.json';
import { Player } from 'src/models/Player';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/PlayerCard',
  component: PlayerCard,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    player: PlayerJson as unknown as Player, 
  },
};