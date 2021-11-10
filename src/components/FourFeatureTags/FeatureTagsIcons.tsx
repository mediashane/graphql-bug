import React from 'react';

import Box from '@mui/material/Box';

import FeatureTagIcon from './FeatureTagIcon';
import styles from './styles';

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

function FeatureTagIcons({
  textColor,
  imageOne,
  labelOne,
  imageTwo,
  labelTwo,
  imageThree,
  labelThree,
  imageFour,
  labelFour,
}: Props): JSX.Element {
  return (
    <>
      <Box sx={styles.fourFeatureTagsContainer}>
        <Box sx={styles.fourFeatureTagsContent}>
          <Box sx={styles.fourFeatureTagsTags}>
            <FeatureTagIcon image={imageOne} label={labelOne} textColor={textColor} />
            <FeatureTagIcon image={imageTwo} label={labelTwo} textColor={textColor} />
            <FeatureTagIcon image={imageThree} label={labelThree} textColor={textColor} />
            <FeatureTagIcon image={imageFour} label={labelFour} textColor={textColor} />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.fourFeatureTagsDivider} />
    </>
  );
}

export default FeatureTagIcons;
