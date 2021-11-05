import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  image: string;
  label: string;
  textColor: string;
}

function FeatureTagIcon({ image, label, textColor }: Props): JSX.Element {
  const TagIcon = () => {
    return (
      <Box
        sx={{
          ...styles.fourFeatureTagImage,
          backgroundImage: `url(${image})`,
        }}
      ></Box>
    );
  };

  return (
    <Box sx={styles.fourFeatureTagsTagContainer}>
      <TagIcon />
      <Typography sx={{ ...styles.fourFeatureTagsTagLabel, color: textColor }}>{label}</Typography>
    </Box>
  );
}

export default FeatureTagIcon;
