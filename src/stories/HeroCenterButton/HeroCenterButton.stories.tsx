import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroCenterButton from '../../components/HeroCenterButton/HeroCenterButton';

export default {
  title: 'Center Justified Hero',
  component: HeroCenterButton,
} as ComponentMeta<typeof HeroCenterButton>;

const Template: ComponentStory<typeof HeroCenterButton> = (args) => <HeroCenterButton {...args} />;

export const CenterJustifedHero = Template.bind({});
CenterJustifedHero.args = {
  introTitle: 'Elizabeth Eakins',
  title: 'Rugs',
  description: 'View the Newest Source Guide',
  backgroundImage: 'images/rugsCollection.png',
};
