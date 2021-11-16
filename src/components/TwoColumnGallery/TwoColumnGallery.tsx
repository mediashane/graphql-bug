import React, { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { colorBrandBlue, colorWhite } from '../../style';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textParagraph?: string;
  paragraphFont?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
  textAlign?: string;
  withDivider?: boolean;
  listItems: {
    textHeadline?: string;
    textParagraph?: string;
  }[];
  listItemsLarge?: boolean;
  images?: string[];
  withButton?: boolean;
  buttonLabel?: string;
}

function TwoColumnGallery({
  textOverline = '',
  textHeadline = '',
  textParagraph = '',
  paragraphFont = '',
  textColorPrimary = '',
  textColorSecondary = '',
  withDivider = false,
  listItems = [],
  listItemsLarge = false,
  images,
  withButton = false,
  buttonLabel = '',
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

  const CtaButton = () => {
    if (withButton) {
      return (
        <Box sx={styles.ctaButtonWrapper}>
          <Button variant="outlined" size="large" sx={styles.ctaPromptButton}>
            {buttonLabel}
          </Button>
        </Box>
      );
    }

    return null;
  };

  const Divider = () => {
    if (withDivider) {
      return <Box sx={styles.textDivider} />;
    }

    return <Box sx={styles.textSpacer} />;
  };

  const ListItems = ({ item }) => {
    return (
      <Box>
        <Typography
          sx={
            listItemsLarge
              ? { ...styles.textListItemHeadlineLarge, color: textColorPrimary }
              : { ...styles.textListItemHeadline, color: textColorPrimary }
          }
        >
          {item.textHeadline}
        </Typography>
        <Typography
          sx={
            listItemsLarge
              ? { ...styles.textListItemParagraphLarge, color: textColorPrimary }
              : { ...styles.textListItemParagraph, color: textColorPrimary }
          }
        >
          {item.textParagraph}
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={styles.galleryContainer}>
      <Box sx={styles.textContainer}>
        <Box sx={styles.textWrapper}>
          <Typography sx={{ ...styles.textOverline, color: textColorPrimary }}>{textOverline}</Typography>
          <Typography sx={{ ...styles.textHeadline, color: textColorSecondary }}>{textHeadline}</Typography>
          <Typography sx={{ ...styles.textParagraph, color: textColorPrimary, fontFamily: paragraphFont }}>
            {textParagraph}
          </Typography>
          <Divider />
          {listItems.map((item, index) => {
            return <ListItems item={item} key={index} />;
          })}
          <CtaButton />
          <Box sx={styles.iconButtonsContainer}>
            <Typography sx={styles.iconButtonsHeadline}>No question is too small. Contact us today.</Typography>
            <Box sx={styles.iconButtonsGroup}>
              <Box sx={styles.iconButtonWrapper}>
                <Box sx={{ ...styles.iconButton, backgroundImage: `url(images/callUs.png)` }}></Box>
                <Typography sx={styles.iconButtonLabel}>Call us</Typography>
              </Box>
              <Box sx={styles.iconButtonWrapper}>
                <Box sx={{ ...styles.iconButton, backgroundImage: `url(images/emailUs.png)` }}></Box>
                <Typography sx={styles.iconButtonLabel}>Email us</Typography>
              </Box>
              <Box sx={styles.iconButtonWrapper}>
                <Box sx={{ ...styles.iconButton, backgroundImage: `url(images/visitUs.png)` }}></Box>
                <Typography sx={styles.iconButtonLabel}>Visit us</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ ...styles.imageSliderContainer, backgroundImage: `url(${images[imageIndex]})` }}>
        <Box sx={styles.controlsContainer}>
          <Box sx={styles.arrowButtonContainer}>
            <IconButton onClick={() => decrementImageIndex()} disableFocusRipple disableRipple>
              <ChevronLeftIcon sx={styles.arrowButton} />
            </IconButton>
          </Box>
          <Box sx={styles.arrowButtonContainer}>
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
