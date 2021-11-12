import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FourCardsWithPrompt from '../../components/FourCardsWithPrompt/FourCardsWithPrompt';

import checkeredBoxInLoop from './checkeredBoxInLoop.png';
import latticeWithFlowers from './latticeWithFlowers.png';
import vectorCrossLoop from './vectorCrossLoop.png';
import zigZagInLoop from './zigZagInLoop.png';

export default {
  title: 'Four Cards with Prompt',
  component: FourCardsWithPrompt,
} as ComponentMeta<typeof FourCardsWithPrompt>;

const Template: ComponentStory<typeof FourCardsWithPrompt> = (args) => <FourCardsWithPrompt {...args} />;

export const FourCardsWithPromptSection = Template.bind({});
FourCardsWithPromptSection.args = {
  flexDirection: 'row-reverse',
  withButton: false,
  buttonLabel: 'Book an appointment',
  promptOverline: 'Designed with you in mind',
  promptTopline: 'Every pattern is customizable in color, shape, and size',
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
