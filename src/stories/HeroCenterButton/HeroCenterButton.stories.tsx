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
  textOverline: 'Elizabeth Eakins',
  textHeadline: 'Rugs',
  buttonLabel: 'View the Newest Source Guide',
  mediaDesktop: 'images/rugsCollection.png',
};
