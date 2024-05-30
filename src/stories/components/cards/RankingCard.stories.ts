import type { Meta, StoryObj } from '@storybook/react';
import 'src/index.css'
import RankingCard from 'components/card/ranking-card';
import RankingJson from 'src/mocks/data/ranking.json';
import { Ranking } from 'src/models/Ranking';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/RankingCard',
  component: RankingCard,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RankingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    ranking: RankingJson as unknown as Ranking, 
  },
};