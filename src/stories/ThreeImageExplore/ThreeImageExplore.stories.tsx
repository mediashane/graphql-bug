import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThreeImageExplore from '../../components/ThreeImageExplore/ThreeImageExplore';

export default {
  title: 'Three Image Explore',
  component: ThreeImageExplore,
} as ComponentMeta<typeof ThreeImageExplore>;

const Template: ComponentStory<typeof ThreeImageExplore> = (args) => <ThreeImageExplore {...args} />;

export const ThreeImageExploreSection = Template.bind({});
ThreeImageExploreSection.args = {
  backgroundImageOne: 'images/rugsLink.png',
  labelOne: 'Rugs',
  linkOne: '/rugs',
  backgroundImageTwo: 'images/fabricLink.png',
  labelTwo: 'Fabric',
  linkTwo: '/fabric',
  backgroundImageThree: 'images/grassclothLink.png',
  labelThree: 'Grasscloth',
  linkThree: '/grasscloth',
};
