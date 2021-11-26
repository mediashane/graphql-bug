import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroCenterTop from '../../components/HeroCenterTop/HeroCenterTop';

import fromTheFarmHero from './fromTheFarmHero.png';

export default {
  title: 'Center Top Justified Hero',
  component: HeroCenterTop,
} as ComponentMeta<typeof HeroCenterTop>;

const Template: ComponentStory<typeof HeroCenterTop> = (args) => <HeroCenterTop {...args} />;

export const CenterTopHero = Template.bind({});
CenterTopHero.args = {
  textColor: '#333333',
  textOverline: 'From the Farm',
  textHeadline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada hendrerit sodales',
  textSubline: 'By Jerry Wigglesworth',
  media: fromTheFarmHero,
};
