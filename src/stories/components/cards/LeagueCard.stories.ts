import type { Meta, StoryObj } from '@storybook/react';
import 'src/index.css'
import LeagueCard from 'components/card/league-card';
import LeagueJson from 'src/mocks/data/league.json';
import { League } from 'src/models/League';
// import Button from 'src/shared/components/button';
import { withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'Example/LeagueCard',
  component: LeagueCard,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LeagueCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    league: LeagueJson as unknown as League, 
  },
};

//TODO
// export const OneButton: Story = {
//   args: {
//     title:"Cooed Doubles (BB)" ,
//     subtitle:"Thursdays / Miller Park / May 16 - August 30",
//     buttons: [
//       () => <Button LeftIcon={Placeholder} onClick={() => console.log("pressed!!")}/>
//     }]
//   },
// };

// export const TwoButtons: Story = {
//   args: {
//     title:"Cooed Doubles (BB)" ,
//     subtitle:"Thursdays / Miller Park / May 16 - August 30" ,
//     buttons: [
//       () => <Button LeftIcon={Placeholder} onClick={() => console.log("pressed!!")}/>, 
//       () => <Button LeftIcon={Edit} onClick={() => console.log("pressed!!")}/>, 
//     ]
//   },
// };
