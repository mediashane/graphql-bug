import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThreeImageButtons from '../../components/ThreeImageButtons/ThreeImageButtons';

import fabricLink from './fabricLink.png';
import grassclothLink from './grassclothLink.png';
import rugsLink from './rugsLink.png';

export default {
  title: 'Three Image Buttons',
  component: ThreeImageButtons,
} as ComponentMeta<typeof ThreeImageButtons>;

const Template: ComponentStory<typeof ThreeImageButtons> = (args) => <ThreeImageButtons {...args} />;

export const ThreeImageButtonsSection = Template.bind({});
ThreeImageButtonsSection.args = {
  sectionLabel: 'Explore',
  buttonImageOne: rugsLink,
  labelTextColor: '#587DA9',
  textColor: '#ffffff',
  labelOne: 'Rugs',
  linkOne: '/rugs',
  buttonImageTwo: fabricLink,
  labelTwo: 'Fabric',
  linkTwo: '/fabric',
  buttonImageThree: grassclothLink,
  labelThree: 'Grasscloth',
  linkThree: '/grasscloth',
};
