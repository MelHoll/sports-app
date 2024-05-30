import type { Meta, StoryObj } from '@storybook/react';
import 'src/index.css'
import MatchCard from 'components/card/match-card';
import MatchJson from 'src/mocks/data/match.json';
import { Match } from 'src/models/Match';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/MatchCard',
  component: MatchCard,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MatchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    match: MatchJson as unknown as Match, 
  },
};

export const WithResults: Story = {
  args: {
    match: {
      ...MatchJson, 
    results: [
      {
        homeScore: 15, 
        awayScore: 17
      }
    ]} as unknown as Match, 
  },
};