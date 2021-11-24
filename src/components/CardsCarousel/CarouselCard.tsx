import React, { useState } from 'react';
import NextLink from 'next/link';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';

import CarouselCardSticker from './CarouselCardSticker';
import styles from './styles';

interface Props {
  image: any;
  title: string;
  subtitle: string;
  textColor: string;
  link: string;
  showSticker: boolean;
  stickerText: string;
}

function CarouselCard({ image, title, subtitle, textColor, link, showSticker, stickerText }: Props): JSX.Element {
  const [overlay, setOverlay] = useState(0);

  const CardImage = () => {
    return (
      <>
        <CarouselCardSticker stickerText={stickerText} showSticker={showSticker} />
        <Box
          sx={{
            ...styles.carouselCardImage,
            backgroundImage: `linear-gradient( rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay}) ), url(${
              image?.mediaItemUrl ?? ''
            })`,
          }}
        ></Box>
      </>
    );
  };

  const Subtitle = () => {
    if (subtitle) {
      return <Typography sx={{ ...styles.carouselCardSubtitle, color: textColor }}>Test</Typography>;
    }

    return null;
  };

  return (
    <Box onMouseEnter={() => setOverlay(0.1)} onMouseLeave={() => setOverlay(0)} sx={styles.carouselCardContainer}>
      <NextLink href={link} passHref>
        <MUILink color="inherit" variant="inherit" underline={overlay === 0 ? 'none' : 'always'}>
          <CardImage />
          <Box sx={styles.carouselCardLabelContainer}>
            <Typography sx={{ ...styles.carouselCardTitle, color: textColor }}>{title}</Typography>
            <Subtitle />
          </Box>
        </MUILink>
      </NextLink>
    </Box>
  );
}

export default CarouselCard;
