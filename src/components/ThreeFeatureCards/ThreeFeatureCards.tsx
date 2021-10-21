import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import FeatureCard from './FeatureCard';
import styles from './styles';

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

function ThreeFeatureCards({
  sectionLabel,
  iconLayout,
  labelColor,
  textColor,
  imageOne,
  labelOne,
  descriptionOne,
  imageTwo,
  labelTwo,
  descriptionTwo,
  imageThree,
  labelThree,
  descriptionThree,
}: Props): JSX.Element {
  return (
    <Box sx={styles.threeFeatureCardsContainer}>
      <Box sx={styles.threeFeatureCardsContent}>
        <Typography sx={{ ...styles.threeFeatureCardsTitle, color: labelColor }}>{sectionLabel}</Typography>
        <Box sx={styles.threeFeatureCardsCards}>
          <FeatureCard
            iconLayout={iconLayout}
            image={imageOne}
            label={labelOne}
            description={descriptionOne}
            textColor={textColor}
          />
          <FeatureCard
            iconLayout={iconLayout}
            image={imageTwo}
            label={labelTwo}
            description={descriptionTwo}
            textColor={textColor}
          />
          <FeatureCard
            iconLayout={iconLayout}
            image={imageThree}
            label={labelThree}
            description={descriptionThree}
            textColor={textColor}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ThreeFeatureCards;
