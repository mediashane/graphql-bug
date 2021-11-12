import React, { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { colorBrandBlue, colorWhite } from '../../style';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textParagraph?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
  textAlign?: string;
  listItems: {
    textHeadline?: string;
    textParagraph?: string;
  }[];
  images?: string[];
}

function TwoColumnGallery({
  textOverline = '',
  textHeadline = '',
  textParagraph = '',
  textColorPrimary = '',
  textColorSecondary = '',
  listItems = [],
  images,
}: Props): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);

  const incrementImageIndex = () => {
    if (imageIndex + 1 >= images.length) {
      setImageIndex(0);
      return;
    }

    setImageIndex(imageIndex + 1);
  };

  const decrementImageIndex = () => {
    if (imageIndex - 1 <= -1) {
      setImageIndex(images.length - 1);
      return;
    }

    setImageIndex(imageIndex - 1);
  };

  return (
    <Box sx={styles.galleryContainer}>
      <Box sx={styles.textContainer}>
        <Box sx={styles.textWrapper}>
          <Typography sx={{ ...styles.textOverline, color: textColorPrimary }}>{textOverline}</Typography>
          <Typography sx={{ ...styles.textHeadline, color: textColorSecondary }}>{textHeadline}</Typography>
          <Typography sx={{ ...styles.textParagraph, color: textColorPrimary }}>{textParagraph}</Typography>
          <Box sx={styles.textDivider} />
          {listItems.map((item, index) => {
            return (
              <Box key={index}>
                <Typography sx={{ ...styles.textListItemHeadline, color: textColorPrimary }}>
                  {item.textHeadline}
                </Typography>
                <Typography sx={{ ...styles.textListItemParagraph, color: textColorPrimary }}>
                  {item.textParagraph}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ ...styles.imageSliderContainer, backgroundImage: `url(${images[imageIndex]})` }}>
        <Box sx={styles.controlsContainer}>
          <Box sx={styles.buttonContainer}>
            <IconButton onClick={() => decrementImageIndex()} disableFocusRipple disableRipple>
              <ChevronLeftIcon sx={styles.arrowButton} />
            </IconButton>
          </Box>
          <Box sx={styles.buttonContainer}>
            <IconButton onClick={() => incrementImageIndex()} disableFocusRipple disableRipple>
              <ChevronRightIcon sx={styles.arrowButton} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={styles.imagePaginationContainer}>
          {images.map((image, index) => {
            return (
              <Box
                sx={{
                  ...styles.imagePaginationDot,
                  backgroundColor: index === imageIndex ? colorWhite : colorBrandBlue,
                }}
                key={index}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default TwoColumnGallery;
