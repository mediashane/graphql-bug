import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FourFeatureTags from '../../components/FourFeatureTags/FourFeatureTags';

import customizableIcon from './customizableIcon.png';
import durableIcon from './durableIcon.png';
import handmadeIcon from './handmadeIcon.png';
import naturalFibersIcon from './naturalFibersIcon.png';

export default {
  title: 'Four Feature Tags',
  component: FourFeatureTags,
} as ComponentMeta<typeof FourFeatureTags>;

const Template: ComponentStory<typeof FourFeatureTags> = (args) => <FourFeatureTags {...args} />;

export const FourFeatureTagsSection = Template.bind({});
FourFeatureTagsSection.args = {
  textColor: '#587DA9',
  imageOne: handmadeIcon,
  labelOne: 'Handmade',
  imageTwo: customizableIcon,
  labelTwo: 'Customizable',
  imageThree: naturalFibersIcon,
  labelThree: 'Natural Fibers',
  imageFour: durableIcon,
  labelFour: 'Durable',
};
