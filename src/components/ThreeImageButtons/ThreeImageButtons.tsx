import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import ImageCard from './ImageCard';
import styles from './styles';

interface Props {
  sectionLabel: string;
  labelTextColor: string;
  textColor: string;
  buttonImageOne: string;
  labelOne: string;
  linkOne: {
    url?: string;
    target?: string;
    title?: string;
    __typename?: string;
  };
  buttonImageTwo: string;
  labelTwo: string;
  linkTwo: {
    url?: string;
    target?: string;
    title?: string;
    __typename?: string;
  };
  buttonImageThree: string;
  labelThree: string;
  linkThree: {
    url?: string;
    target?: string;
    title?: string;
    __typename?: string;
  };
}

function ThreeImageButtons({
  sectionLabel = '',
  labelTextColor = '',
  textColor = '',
  buttonImageOne = '',
  labelOne = '',
  linkOne = {},
  buttonImageTwo = '',
  labelTwo = '',
  linkTwo = {},
  buttonImageThree = '',
  labelThree = '',
  linkThree = {},
}: Props): JSX.Element {
  const { url: urlOne } = linkOne;
  const { url: urlTwo } = linkTwo;
  const { url: urlThree } = linkThree;

  return (
    <Box sx={styles.threeImageButtonsContainer}>
      <Box sx={styles.threeImageButtonsContent}>
        <Typography sx={{ ...styles.threeImageButtonsTitle, color: labelTextColor }}>{sectionLabel}</Typography>
        <Box sx={styles.threeImageButtonsCards}>
          <ImageCard buttonImage={buttonImageOne} label={labelOne} link={urlOne} textColor={textColor} />
          <ImageCard buttonImage={buttonImageTwo} label={labelTwo} link={urlTwo} textColor={textColor} />
          <ImageCard buttonImage={buttonImageThree} label={labelThree} link={urlThree} textColor={textColor} />
        </Box>
      </Box>
    </Box>
  );
}

export default ThreeImageButtons;
