import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TwoColumnContent from '../../components/TwoColumnContent/TwoColumnContent';

import LivingRoom from './LivingRoom.png';

export default {
  title: 'Two Column Content',
  component: TwoColumnContent,
} as ComponentMeta<typeof TwoColumnContent>;

const Template: ComponentStory<typeof TwoColumnContent> = (args) => <TwoColumnContent {...args} />;

export const TwoColumnContentSection = Template.bind({});
TwoColumnContentSection.args = {
  flexDirection: 'row',
  includeParagraph: true,
  image: LivingRoom,
  alt: 'Living room with fireplace',
  textHeadline: 'Living with Elizabeth Eakins rugs is an intimate experience.',
  textParagraph:
    'Handmade with an indelible care for natural fibers, each rug is an artifact with its own history, designed to endure.',
  backgroundColor: 'transparent',
  headlineColor: '#826C4F',
  paragraphColor: '#333333',
};
