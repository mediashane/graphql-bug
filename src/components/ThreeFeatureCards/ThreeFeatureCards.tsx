import React from 'react';

import FeatureCardsIcons from './FeatureCardsIcons';
import FeatureCardsImages from './FeatureCardsImages';

interface Props {
  sectionLabel: string;
  iconLayout: boolean;
  textColor: string;
  labelColor: string;
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

function ThreeFeatureCards({ sectionLabel, ...props }: Props): JSX.Element {
  if (sectionLabel) {
    return <FeatureCardsIcons sectionLabel={sectionLabel} {...props} />;
  }
  if (!sectionLabel) {
    return <FeatureCardsImages sectionLabel={sectionLabel} {...props} />;
  }

  return null;
}

export default ThreeFeatureCards;
