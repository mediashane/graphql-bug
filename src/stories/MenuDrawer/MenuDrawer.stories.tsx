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
      id: 'contact-123',
      parentId: '',
      label: 'Contact',
      url: '/contact',
    },
    {
      id: 'contact-456',
      parentId: 'contact-123',
      label: 'Contact Child',
      url: '/contact-child',
    },
    {
      id: 'contact-456',
      parentId: 'contact-123',
      label: 'Contact Child',
      url: '/contact-child',
    },
    {
      id: 'contact-456',
      parentId: 'contact-123',
      label: 'Contact Child',
      url: '/contact-child',
    },
    {
      id: 'contact-456',
      parentId: 'contact-123',
      label: 'Contact Child',
      url: '/contact-child',
    },
    {
      id: 'faq-123',
      parentId: '',
      label: 'FAQ',
      url: '/faq',
    },
    {
      id: 'shop-123',
      parentId: '',
      label: 'Shop',
      url: '/shop',
    },
    {
      id: 'shop-456',
      parentId: 'shop-123',
      label: 'Shop Child ',
      url: '/shop-child',
    },
    {
      id: 'shop-456',
      parentId: 'shop-123',
      label: 'Shop Child ',
      url: '/shop-child',
    },
    {
      id: 'shop-456',
      parentId: 'shop-123',
      label: 'Shop Child ',
      url: '/shop-child',
    },
    {
      id: 'shop-456',
      parentId: 'shop-123',
      label: 'Shop Child ',
      url: '/shop-child',
    },
    {
      id: 'shop-456',
      parentId: 'shop-123',
      label: 'Shop Child ',
      url: '/shop-child',
    },
  ],
};
