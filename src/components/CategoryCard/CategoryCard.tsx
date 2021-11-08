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
}

function CategoryCard({
  image = '',
  title = '',
  description = '',
  stickerText = '',
  showSticker = false,
  link = '/',
}: Props): JSX.Element {
  const [overlay, setOverlay] = useState(0);

  return (
    <NextLink href={link} passHref>
      <MUILink
        sx={styles.categoryCardWrapper}
        color="inherit"
        variant="inherit"
        underline="none"
        onMouseEnter={() => setOverlay(0.1)}
        onMouseLeave={() => setOverlay(0)}
      >
        <Box sx={styles.categoryCardContainer}>
          <CardSticker stickerText={stickerText} showSticker={showSticker} />
          <Box
            sx={{
              ...styles.categoryCardImage,
              backgroundImage: `linear-gradient( rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay}) ), url(${image})`,
            }}
          />
          <Box sx={styles.categoryCardTitle}>{title}</Box>
          <Box sx={styles.categoryCardDescription}>{description}</Box>
        </Box>
      </MUILink>
    </NextLink>
  );
}

export default CategoryCard;
