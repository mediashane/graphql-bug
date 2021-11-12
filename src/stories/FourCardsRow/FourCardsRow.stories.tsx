import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FourCardsRow from '../../components/FourCardsRow/FourCardsRow';

import checkeredBoxInLoop from './checkeredBoxInLoop.png';
import latticeWithFlowers from './latticeWithFlowers.png';
import vectorCrossLoop from './vectorCrossLoop.png';
import zigZagInLoop from './zigZagInLoop.png';

export default {
  title: 'Four Cards Row',
  component: FourCardsRow,
} as ComponentMeta<typeof FourCardsRow>;

const Template: ComponentStory<typeof FourCardsRow> = (args) => <FourCardsRow {...args} />;

export const FourCardsRowSection = Template.bind({});
FourCardsRowSection.args = {
  textColor: '#333333',
  imageOne: checkeredBoxInLoop,
  titleOne: 'Checkered Box in Loop',
  subtitleOne: '',
  linkOne: '/',
  showStickerOne: true,
  stickerTextOne: 'New',
  imageTwo: vectorCrossLoop,
  titleTwo: 'Vector Cross Loop',
  subtitleTwo: '',
  linkTwo: '/',
  showStickerTwo: false,
  stickerTextTwo: 'New',
  imageThree: zigZagInLoop,
  titleThree: 'Zig Zag in Loop',
  subtitleThree: '',
  linkThree: '/',
  showStickerThree: true,
  stickerTextThree: 'New',
  imageFour: latticeWithFlowers,
  titleFour: 'Lattice with Flowers',
  subtitleFour: '',
  linkFour: '/',
  showStickerFour: false,
  stickerTextFour: 'New',
};
