import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardsCarousel from '../../components/CardsCarousel/CardsCarousel';

const exampleCards = [
  {
    image: { mediaItemUrl: 'images/newArrivals.png' },
    title: 'New  Arrivals',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesClassic.png' },
    title: 'Master Series Classic',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: false,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesLinenWool.png' },
    title: 'Master Series Linen Wool',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/masterSeriesPrivateReserve.png' },
    title: 'Master Series Private Reserve',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: false,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/cotton.png' },
    title: 'Cotton',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/teff.png' },
    title: 'Teff',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: false,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/wovenTextures.png' },
    title: 'Woven Textures',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/elizabethsCloth.png' },
    title: 'Elizabeth’s Cloth',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: false,
    link: '/elizabeths-cloth',
  },
  {
    image: { mediaItemUrl: 'images/hagga.png' },
    title: 'Hagga',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/belden.png' },
    title: 'Belden',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: true,
    link: { url: '/' },
  },
  {
    image: { mediaItemUrl: 'images/handTufted.png' },
    title: 'Hand Tuffed',
    subtitle: 'Lorem ipsum dolor',
    stickerText: 'New',
    showSticker: false,
    link: { url: '/' },
  },
];

export default {
  title: 'Cards Carousel',
  component: CardsCarousel,
} as ComponentMeta<typeof CardsCarousel>;

const Template: ComponentStory<typeof CardsCarousel> = (args) => <CardsCarousel {...args} />;

export const CardsCarouselSection = Template.bind({});
CardsCarouselSection.args = {
  cards: exampleCards,
  textColor: '#333333',
  labelColor: '#826C4F',
  sectionLabel: 'More Rug Collections',
  textLinkUrl: '/rugs',
  textLinkLabel: 'See all >',
};
