import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import EmailSubscribe from '../../components/EmailSubscribe/EmailSubscribe';

import emailSubscribe from './emailSubscribe.png';

export default {
  title: 'Email Subscribe',
  component: EmailSubscribe,
} as ComponentMeta<typeof EmailSubscribe>;

const Template: ComponentStory<typeof EmailSubscribe> = (args) => <EmailSubscribe {...args} />;

export const EmailSubscribeSection = Template.bind({});
EmailSubscribeSection.args = {
  title: 'Get new products and promotions in your inbox',
  placeholder: 'Your email',
  buttonLabel: 'Subscribe',
  subtitle: 'Keep up with what we’re up to. Unsubscribe at any time.',
  backgroundImage: emailSubscribe,
};
