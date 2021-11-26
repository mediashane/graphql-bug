import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroCenterButton from '../../components/HeroCenterButton/HeroCenterButton';

import rugsCollection from './rugsCollection.png';

export default {
  title: 'Hero Center Justified',
  component: HeroCenterButton,
} as ComponentMeta<typeof HeroCenterButton>;

const Template: ComponentStory<typeof HeroCenterButton> = (args) => <HeroCenterButton {...args} />;

export const CenterButtonHero = Template.bind({});
CenterButtonHero.args = {
  textColor: '#ffffff',
  textOverline: 'Elizabeth Eakins',
  textHeadline: 'Rugs',
  buttonLabel: 'View the Newest Source Guide',
  media: rugsCollection,
};
