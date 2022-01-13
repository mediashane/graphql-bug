import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import FeatureCard from './FeatureCardImage';
import styles from './styles';

interface Props {
  sectionLabel?: string;
  iconLayout: boolean;
  textColor: string;
  labelColor?: string;
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

function FeatureCardImages({
  iconLayout,
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
    <Container maxWidth="xl">
      <Box sx={styles.threeFeatureCardsContainer}>
        <Box sx={styles.threeFeatureCardsContent}>
          <Box sx={styles.threeFeatureCardsCards}>
            <FeatureCard iconLayout={iconLayout} image={imageOne} label={labelOne} description={descriptionOne} />
            <FeatureCard iconLayout={iconLayout} image={imageTwo} label={labelTwo} description={descriptionTwo} />
            <FeatureCard iconLayout={iconLayout} image={imageThree} label={labelThree} description={descriptionThree} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default FeatureCardImages;
