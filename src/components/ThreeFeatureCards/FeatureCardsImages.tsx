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
  backgroundColor?: string;
  roundImages?: boolean;
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
  backgroundColor = '#ffffff',
  roundImages = true,
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
      <Container sx={styles.threeFeatureCardsWrapper} maxWidth="xl">
        <Box sx={styles.threeFeatureCardsContent}>
          <Box sx={styles.threeFeatureCardsCards}>
            <FeatureCard
              iconLayout={iconLayout}
              roundImages={roundImages}
              image={imageOne}
              label={labelOne}
              description={descriptionOne}
            />
            <FeatureCard
              iconLayout={iconLayout}
              roundImages={roundImages}
              image={imageTwo}
              label={labelTwo}
              description={descriptionTwo}
            />
            <FeatureCard
              iconLayout={iconLayout}
              roundImages={roundImages}
              image={imageThree}
              label={labelThree}
              description={descriptionThree}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FeatureCardImages;
