import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Nav Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderBar = Template.bind({});
HeaderBar.args = {
  title: 'Site Title',
  mainMenu: [
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
    {
      label: 'FAQ',
      url: '/faq',
    },
    {
      label: 'Shop',
      url: '/shop',
    },
  ],
};
