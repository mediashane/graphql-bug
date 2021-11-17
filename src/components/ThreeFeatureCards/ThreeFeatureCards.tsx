import React from 'react';

import FeatureCardsIcons from './FeatureCardsIcons';
import FeatureCardsImages from './FeatureCardsImages';

interface Props {
  sectionLabel?: string;
  iconLayout: boolean;
  textColor: string;
  labelColor?: string;
  imageOne: string;
  labelOne: string;
  descriptionOne: string;
  imageTwo: string;
  labelTwo: string;
  descriptionTwo: string;
  imageThree: string;
  labelThree: string;
  descriptionThree: string;
}

function ThreeFeatureCards({ iconLayout = false, ...props }: Props): JSX.Element {
  if (iconLayout) {
    return <FeatureCardsIcons iconLayout={iconLayout} {...props} />;
  }
  if (!iconLayout) {
    return <FeatureCardsImages iconLayout={iconLayout} {...props} />;
  }

  return null;
}

export default ThreeFeatureCards;
