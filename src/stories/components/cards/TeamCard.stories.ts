import type { Meta, StoryObj } from '@storybook/react';
import 'src/index.css'
import TeamCard from 'components/card/team-card';
import TeamJson from 'src/mocks/data/team.json';
import { Team } from 'src/models/Team';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/TeamCard',
  component: TeamCard,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    team: TeamJson as unknown as Team, 
  },
};