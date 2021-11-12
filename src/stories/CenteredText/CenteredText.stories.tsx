import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CenteredText from '../../components/CenteredText/CenteredText';

const exampleText =
  'Beloved for their richness, simplicity, and ease of use, the sophisticated colors of Elizabeth Eakins rugs are meant to evoke the phenomenon of natural light grace and organic form.';

export default {
  title: 'Centered Text',
  component: CenteredText,
} as ComponentMeta<typeof CenteredText>;

const Template: ComponentStory<typeof CenteredText> = (args) => <CenteredText {...args} />;

export const CenteredTextSection = Template.bind({});
CenteredTextSection.args = {
  text: exampleText,
};
