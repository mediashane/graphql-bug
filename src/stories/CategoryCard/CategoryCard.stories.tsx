import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CategoryCard from '../../components/CategoryCard/CategoryCard';

import handTufted from './handTufted.png';

const exampleCard = {
  image: handTufted,
  title: 'Hand Tuffed',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  stickerText: 'New',
  showSticker: true,
  link: '/',
};

export default {
  title: 'Category Card',
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

const Template: ComponentStory<typeof CategoryCard> = (args) => <CategoryCard {...args} />;

export const CategoryCardSection = Template.bind({});
CategoryCardSection.args = {
  ...exampleCard,
};
