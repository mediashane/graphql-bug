import React from 'react';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  stickerText?: string;
  showSticker?: boolean;
}

function CarouselCardSticker({ stickerText = '', showSticker = false }: Props): JSX.Element {
  if (showSticker) {
    return <Box sx={styles.carouselCardSticker}>{stickerText}</Box>;
  }

  return null;
}

export default CarouselCardSticker;
