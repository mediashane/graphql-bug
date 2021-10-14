import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import MenuDrawer from './MenuDrawer';

export default {
  title: 'Menu Drawer',
  component: MenuDrawer,
} as ComponentMeta<typeof MenuDrawer>;

const Template: ComponentStory<typeof MenuDrawer> = (args) => <MenuDrawer {...args} />;

export const MenuDrawerSideBar = Template.bind({});
MenuDrawerSideBar.args = {
  drawerMenu: [
    {
      id: 'about-123',
      parentId: '',
      label: 'About',
      url: '/about',
    },
    {
      id: 'about-456',
      parentId: 'about-123',
      label: 'About Child',
      url: '/about-child',
    },
    {
      id: 'contact-123',
      parentId: '',
      label: 'Contact',
      url: '/contact',
    },
    {
      id: 'faq-123',
      parentId: '',
      label: 'FAQ',
      url: '/faq',
    },
    {
      id: 'faq-456',
      parentId: 'faq-123',
      label: 'FAQ Child',
      url: '/faq-child',
    },
    {
      id: 'shop-123',
      parentId: '',
      label: 'Shop',
      url: '/shop',
    },
  ],
};
