import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ImageCard from './ImageCard';
import styles from './styles';

interface Props {
  sectionLabel: string;
  labelTextColor: string;
  textColor: string;
  buttonImageOne: string;
  labelOne: string;
  buttonImageTwo: string;
  labelTwo: string;
  buttonImageThree: string;
  labelThree: string;
}

function ThreeImageButtons({
  sectionLabel = '',
  labelTextColor = '',
  textColor = '',
  buttonImageOne = '',
  labelOne = '',
  buttonImageTwo = '',
  labelTwo = '',
  buttonImageThree = '',
  labelThree = '',
}: Props): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Box sx={styles.threeImageButtonsContainer}>
        <Box sx={styles.threeImageButtonsContent}>
          <Typography sx={{ ...styles.threeImageButtonsTitle, color: labelTextColor }}>{sectionLabel}</Typography>
          <Box sx={styles.threeImageButtonsCards}>
            <ImageCard buttonImage={buttonImageOne} label={labelOne} textColor={textColor} />
            <ImageCard buttonImage={buttonImageTwo} label={labelTwo} textColor={textColor} />
            <ImageCard buttonImage={buttonImageThree} label={labelThree} textColor={textColor} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ThreeImageButtons;
