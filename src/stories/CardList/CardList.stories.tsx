import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardList from '../../components/CardList/CardList';

const exampleCards = [
  {
    image: { mediaItemUrl: 'images/newArrivals.png' },
    title: 'New  Arrivals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesClassic.png' },
    title: 'Master Series Classic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesLinenWool.png' },
    title: 'Master Series Linen Wool',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesPrivateReserve.png' },
    title: 'Master Series Private Reserve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/cotton.png' },
    title: 'Cotton',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/teff.png' },
    title: 'Teff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/wovenTextures.png' },
    title: 'Woven Textures',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/elizabethsCloth.png' },
    title: 'Elizabeth’s Cloth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/elizabeths-cloth',
  },
  {
    image: { mediaItemUrl: 'images/hagga.png' },
    title: 'Hagga',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/belden.png' },
    title: 'Belden',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: true,
    link: '/',
  },
  {
    image: { mediaItemUrl: 'images/handTufted.png' },
    title: 'Hand Tuffed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    stickerText: 'New',
    showSticker: false,
    link: '/',
  },
];

export default {
  title: 'Card List',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => <CardList {...args} />;

export const CardListSection = Template.bind({});
CardListSection.args = {
  cards: exampleCards,
};
