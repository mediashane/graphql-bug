import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import OneColumnContent from '../../components/OneColumnContent/OneColumnContent';

import weavingRepeated from './weavingRepeated.png';

export default {
  title: 'One Column Content',
  component: OneColumnContent,
} as ComponentMeta<typeof OneColumnContent>;

const Template: ComponentStory<typeof OneColumnContent> = (args) => <OneColumnContent {...args} />;

export const OneColumnContentSection = Template.bind({});
OneColumnContentSection.args = {
  includeParagraph: true,
  textHeadline: 'From the beginning, the handwoven rug has been the heart of Elizabeth Eakins.',
  textParagraph:
    'Diversity of techniques and yarn systems, expert coloration, and attention to quality in production set the industry standard.',
  image: weavingRepeated,
  textColor: '#ffffff',
};
