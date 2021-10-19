import React, { useState } from 'react';
import NextLink from 'next/link';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  backgroundImage: string;
  label: string;
  link: string;
}

function ImageCard({ backgroundImage, label, link }: Props): JSX.Element {
  const [overlay, setOverlay] = useState(0.2);

  return (
    <NextLink href={link}>
      <Box
        onMouseEnter={() => setOverlay(0.1)}
        onMouseLeave={() => setOverlay(0.2)}
        sx={{
          ...styles.threeImageExploreCard,
          backgroundImage: `linear-gradient( rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay}) ), url(${backgroundImage})`,
        }}
      >
        <Typography sx={styles.threeImageExploreCardLabel}>{label}</Typography>
      </Box>
    </NextLink>
  );
}

export default ImageCard;
