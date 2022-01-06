import React, { useState } from 'react';
import NextLink from 'next/link';

import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';

import CardSticker from './CategoryCardSticker';
import styles from './styles';

interface Props {
  image: string;
  title: string;
  description?: string;
  stickerText?: string;
  showSticker?: boolean;
  link?: string;
  target?: string;
  mobileSizeWide?: boolean;
}

function CategoryCard({
  image = '',
  title = '',
  description = '',
  stickerText = '',
  showSticker = false,
  link = '/',
  target = '_blank',
  mobileSizeWide = false,
}: Props): JSX.Element {
  const [overlay, setOverlay] = useState(0);

  const cardBackground = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay}) ), url(${image})`,
  };

  const cardContainer = Object.assign(
    styles.categoryCardContainer,
    mobileSizeWide ? styles.categoryCardWide : styles.categoryCardNarrow,
  );

  const cardImage = Object.assign(
    cardBackground,
    mobileSizeWide ? styles.categoryCardImageWide : styles.categoryCardImageNarrow,
  );

  const cardText = mobileSizeWide ? styles.categoryCardTextWide : styles.categoryCardTextNarrow;

  return (
    <Box sx={cardContainer}>
      <CardSticker stickerText={stickerText} showSticker={showSticker} />
      <NextLink href={link} passHref prefetch={false}>
        <MUILink color="inherit" variant="inherit" underline="none" target={target}>
          <Box sx={styles.categoryCardWrapper} onMouseEnter={() => setOverlay(0.1)} onMouseLeave={() => setOverlay(0)}>
            <Box sx={cardImage} />
            <Box sx={cardText}>
              <Box sx={styles.categoryCardTitle}>{title}</Box>
              <Box sx={styles.categoryCardDescription}>{description}</Box>
            </Box>
          </Box>
        </MUILink>
      </NextLink>
    </Box>
  );
}

export default CategoryCard;
