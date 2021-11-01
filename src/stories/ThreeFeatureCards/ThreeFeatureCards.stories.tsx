import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThreeFeatureCards from '../../components/ThreeFeatureCards/ThreeFeatureCards';

import thirdImage from './CloseUpBnW.png';
import secondImage from './PiledRugs.png';
import firstImage from './WomanWeaving.jpg';

export default {
  title: 'Three Feature Cards With Icons',
  component: ThreeFeatureCards,
} as ComponentMeta<typeof ThreeFeatureCards>;

const Template: ComponentStory<typeof ThreeFeatureCards> = (args) => <ThreeFeatureCards {...args} />;

export const ThreeFeatureCardsSectionIcons = Template.bind({});
ThreeFeatureCardsSectionIcons.args = {
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

export const ThreeFeatureCardsSectionImages = Template.bind({});
ThreeFeatureCardsSectionImages.args = {
  iconLayout: true,
  textColor: '#826C4F',
  imageOne: firstImage,
  labelOne: 'Tour our Facility',
  descriptionOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
  imageTwo: secondImage,
  labelTwo: 'Explore our inventory',
  descriptionTwo:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
  imageThree: thirdImage,
  labelThree: 'Lead Time expectations',
  descriptionThree:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo leo, aliquam vitae bibendum ut, dictum sed nulla.',
};