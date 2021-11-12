import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThreeImageExplore from '../../components/ThreeImageExplore/ThreeImageExplore';

import fabricLink from './fabricLink.png';
import grassclothLink from './grassclothLink.png';
import rugsLink from './rugsLink.png';

export default {
  title: 'Three Image Explore',
  component: ThreeImageExplore,
} as ComponentMeta<typeof ThreeImageExplore>;

const Template: ComponentStory<typeof ThreeImageExplore> = (args) => <ThreeImageExplore {...args} />;

export const ThreeImageExploreSection = Template.bind({});
ThreeImageExploreSection.args = {
  backgroundImageOne: rugsLink,
  labelOne: 'Rugs',
  linkOne: '/rugs',
  backgroundImageTwo: fabricLink,
  labelTwo: 'Fabric',
  linkTwo: '/fabric',
  backgroundImageThree: grassclothLink,
  labelThree: 'Grasscloth',
  linkThree: '/grasscloth',
};
