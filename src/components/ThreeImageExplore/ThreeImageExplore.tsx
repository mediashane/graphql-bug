import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import ImageCard from './ImageCard';
import styles from './styles';

interface Props {
  backgroundImageOne: string;
  labelOne: string;
  linkOne: string;
  backgroundImageTwo: string;
  labelTwo: string;
  linkTwo: string;
  backgroundImageThree: string;
  labelThree: string;
  linkThree: string;
}

function ThreeImageExplore({
  backgroundImageOne,
  labelOne,
  linkOne,
  backgroundImageTwo,
  labelTwo,
  linkTwo,
  backgroundImageThree,
  labelThree,
  linkThree,
}: Props): JSX.Element {
  return (
    <Box sx={styles.threeImageExploreContainer}>
      <Box sx={styles.threeImageExploreContent}>
        <Typography sx={styles.threeImageExploreTitle}>Explore</Typography>
        <Box sx={styles.threeImageExploreCards}>
          <ImageCard backgroundImage={backgroundImageOne} label={labelOne} link={linkOne} />
          <ImageCard backgroundImage={backgroundImageTwo} label={labelTwo} link={linkTwo} />
          <ImageCard backgroundImage={backgroundImageThree} label={labelThree} link={linkThree} />
        </Box>
      </Box>
    </Box>
  );
}

export default ThreeImageExplore;
