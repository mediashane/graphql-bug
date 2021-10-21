import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThreeFeatureCards from '../../components/ThreeFeatureCards/ThreeFeatureCards';

export default {
  title: 'Three Feature Cards',
  component: ThreeFeatureCards,
} as ComponentMeta<typeof ThreeFeatureCards>;

const Template: ComponentStory<typeof ThreeFeatureCards> = (args) => <ThreeFeatureCards {...args} />;

export const ThreeFeatureCardsSection = Template.bind({});
ThreeFeatureCardsSection.args = {
  sectionLabel: 'Values',
  iconLayout: true,
  labelColor: '#587DA9',
  textColor: '#826C4F',
  imageOne: 'images/sustainability.png',
  labelOne: 'Sustainability',
  descriptionOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
  imageTwo: 'images/naturalFibers.png',
  labelTwo: 'Natural Fibers',
  descriptionTwo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
  imageThree: 'images/handmade.png',
  labelThree: 'Handmade',
  descriptionThree:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
};
