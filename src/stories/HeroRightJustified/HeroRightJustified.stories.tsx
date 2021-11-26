import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroRightJustified from '../../components/HeroRightJustified/HeroRightJustified';

import AnalogPortrait from './AnalogPortrait.png';
import playIcon from './playIcon.png';

export default {
  title: 'Hero Right Justified',
  component: HeroRightJustified,
} as ComponentMeta<typeof HeroRightJustified>;

const Template: ComponentStory<typeof HeroRightJustified> = (args) => <HeroRightJustified {...args} />;

export const RightJustifedHero = Template.bind({});
RightJustifedHero.args = {
  textColor: '#ffffff',
  textHeadline:
    'It begins in 1978 with one woman who had a talent for textile design and believed in the discipline of doing things by hand.',
  textMediaLabel: 'Watch Portraits in Creativity',
  textSubline:
    'A special look into Elizabeth Eakins’ process, passion and work. Directed by Gael Towey with cinematography by Victoria Pearson.',
  mediaIcon: `/${playIcon}`,
  image: AnalogPortrait,
};
