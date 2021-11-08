import React from 'react';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  stickerText?: string;
  showSticker?: boolean;
}

function CardSticker({ stickerText = '', showSticker = false }: Props): JSX.Element {
  if (showSticker) {
    return <Box sx={styles.categoryCardSticker}>{stickerText}</Box>;
  }

  return null;
}

export default CardSticker;
