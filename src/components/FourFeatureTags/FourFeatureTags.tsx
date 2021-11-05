import React from 'react';

import FeatureTagsIcons from './FeatureTagsIcons';

interface Props {
  textColor: string;
  imageOne: string;
  labelOne: string;
  imageTwo: string;
  labelTwo: string;
  imageThree: string;
  labelThree: string;
  imageFour: string;
  labelFour: string;
}

function FourFeatureTags({ ...props }: Props): JSX.Element {
  return <FeatureTagsIcons {...props} />;
}

export default FourFeatureTags;
