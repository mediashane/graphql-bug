import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  iconLayout: boolean;
  image: string;
  label: string;
  description?: string;
  textColor: string;
}

function ImageCard({ iconLayout, image, label, description, textColor }: Props): JSX.Element {
  const CardImage = () => {
    if (iconLayout)
      return (
        <Box
          sx={{
            ...styles.threeFeatureCardImage,
            backgroundImage: `url(${image})`,
          }}
        ></Box>
      );

    return null;
  };

  return (
    <Box sx={styles.threeFeatureCardsCardContainer}>
      <CardImage />
      <Typography sx={{ ...styles.threeFeatureCardsCardLabel, color: textColor }}>{label}</Typography>
      {description && <Typography sx={styles.threeFeatureCardsCardDescription}>{description}</Typography>}
    </Box>
  );
}

export default ImageCard;
