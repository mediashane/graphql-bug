import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import FeatureCard from './FeatureCardIcon';
import styles from './styles';

interface Props {
  sectionLabel?: string;
  iconLayout: boolean;
  textColor: string;
  labelTextColor?: string;
  backgroundColor?: string;
  imageOne: string;
  labelOne: string;
  descriptionOne?: string;
  imageTwo: string;
  labelTwo: string;
  descriptionTwo?: string;
  imageThree: string;
  labelThree: string;
  descriptionThree?: string;
}

function FeatureCardsIcons({
  sectionLabel,
  iconLayout,
  backgroundColor = '#ffffff',
  labelTextColor,
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
    <Box sx={{ ...styles.threeFeatureCardsContainer, backgroundColor }}>
      <Container maxWidth="xl">
        <Box sx={styles.threeFeatureCardsContent}>
          {sectionLabel && (
            <Typography sx={{ ...styles.threeFeatureCardsTitle, color: labelTextColor }}>{sectionLabel}</Typography>
          )}
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
      </Container>
    </Box>
  );
}

export default FeatureCardsIcons;
