import React from 'react';

import { Avatar, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { colorDarkGrey } from '../../style';

import styles from './styles';

interface Props {
  iconLayout: boolean;
  image: string;
  roundImages?: boolean;
  label: string;
  description: string;
  textColor?: string;
}

function ImageCard({ image, roundImages = true, label, description, textColor = colorDarkGrey }: Props): JSX.Element {
  return (
    <Box sx={styles.threeFeatureCardsCardContainer}>
      <Avatar src={image} sx={{ ...styles.threeFeatureCardsCardImage, borderRadius: roundImages ? '50%' : 0 }} />
      <Typography sx={{ ...styles.threeFeatureCardsCardImageLabel, color: textColor }}>{label}</Typography>
      <Typography sx={styles.threeFeatureCardsCardImageDescription}>{description}</Typography>
    </Box>
  );
}

export default ImageCard;
