import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CallToAction from '../../components/CallToAction/CallToAction';

import ctaSale from './ctaSale.png';

export default {
  title: 'Call to Action',
  component: CallToAction,
} as ComponentMeta<typeof CallToAction>;

const Template: ComponentStory<typeof CallToAction> = (args) => <CallToAction {...args} />;

export const CallToActionSection = Template.bind({});
CallToActionSection.args = {
  textHeadline: 'May Sale 2022',
  textParagraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonLabel: 'Shop now',
  textColor: '#ffffff',
  cardBackgroundColor: '#6AC283',
  media: ctaSale,
  buttonUrl: '/rugs',
  buttonTextColor: '#ffffff',
  buttonBackgroundColor: 'transparent',
};
