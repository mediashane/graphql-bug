import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroLeftJustified from '../../components/HeroLeftJustified/HeroLeftJustified';

import elizabethWeaving from './elizabethWeaving.png';

export default {
  title: 'Left Justifed Hero',
  component: HeroLeftJustified,
} as ComponentMeta<typeof HeroLeftJustified>;

const Template: ComponentStory<typeof HeroLeftJustified> = (args) => <HeroLeftJustified {...args} />;

export const LeftJustifedHero = Template.bind({});
LeftJustifedHero.args = {
  textOverline: 'Welcome to',
  textHeadline: 'Elizabeth Eakins',
  textParagraph:
    'Beloved for their richness, simplicity, and ease of use, the sophisticated colors of Elizabeth Eakins rugs, fabrics, and grasscloth wallpapers evoke the phenomenon of natural light gracing an organic form.',
  media: elizabethWeaving,
};
