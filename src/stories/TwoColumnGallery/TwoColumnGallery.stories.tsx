import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TwoColumnGallery from '../../components/TwoColumnGallery/TwoColumnGallery';

const galleryListItems = [
  {
    textHeadline: 'QUALITIES',
    textParagraph:
      'Hand dyed handwoven warp variations in cotton or wool with wool weft. Most weave structures are reversible',
  },
  {
    textHeadline: 'MINIMUM',
    textParagraph: 'No minimum in width or length',
  },
  {
    textHeadline: 'MAXIMUM WEAVING',
    textParagraph: `Width 19' or 579 cm, Length 40' or 1219`,
  },
  {
    textHeadline: 'COLORS',
    textParagraph: 'Custom color available at no additional cost',
  },
  {
    textHeadline: 'FINISHING OPTIONS',
    textParagraph: 'Area rugs whip-stitched Installation rugs come prepped with latex edges',
  },
  {
    textHeadline: 'USES',
    textParagraph: 'Area rugs Stair runners & wall to wall — Latex backing would be applied prior to install',
  },
];

import elizabethsCloth from './elizabethsCloth.png';
import elizabethsClothDetails from './elizabethsClothDetails.png';
import newArrivals from './newArrivals.png';
import rugsLink from './rugsLink.png';

const galleryImages = [elizabethsClothDetails, elizabethsCloth, newArrivals, rugsLink];

export default {
  title: 'Two Column Gallery',
  component: TwoColumnGallery,
} as ComponentMeta<typeof TwoColumnGallery>;

const Template: ComponentStory<typeof TwoColumnGallery> = (args) => <TwoColumnGallery {...args} />;

export const TwoColumnGallerySection = Template.bind({});
TwoColumnGallerySection.args = {
  textOverline: 'Rugs',
  textHeadline: `Elizabeth's Cloth`,
  textParagraph:
    'Our new Elizabeth’s Cloth is handwoven in pure wool in many different types of weave structures. It is a versatile product line that requires no minimums and has the benefit of many loom systems so the designer is welcomed to cr eate new designs at any time. The weights range from extremely flat tight weaves to supple combinations of yarns, soft and durable. The products have excellent price points.',
  textColorPrimary: '#333333',
  textColorSecondary: '#826C4F',
  textAlign: 'left',
  images: galleryImages,
  listItems: galleryListItems,
};
