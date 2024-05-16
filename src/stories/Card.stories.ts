import type { Meta, StoryObj } from '@storybook/react';
import Card from 'src/shared/components/card';
import 'src/index.css'
import { IconLeft } from './Button.stories';
import Edit from 'assets/svg/edit.svg?react';
import Placeholder from 'assets/svg/slider.svg?react';
import Button from 'src/shared/components/button';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    title:"Cooed Doubles (BB)" ,
    subtitle:"Thursdays / Miller Park / May 16 - August 30" ,
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
