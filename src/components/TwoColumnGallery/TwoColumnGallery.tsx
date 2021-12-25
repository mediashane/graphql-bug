import React, { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MUILink from '@mui/material/Link';

import { colorBrandBlue, colorWhite } from '../../style';

import styles from './styles';

interface Props {
  textHeadline: string;
  color?: string;
  productCategory?: string;
  textParagraph?: string;
  paragraphFont?: string;
  backgroundColor?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
  textAlign?: string;
  withDivider?: boolean;
  listItems: {
    textHeadline?: string;
    textParagraph?: string;
  }[];
  listItemsLarge?: boolean;
  images?: {
    __typename?: string;
    fieldGroupName?: string;
    image?: any;
    caption?: string;
  }[];
  withButton?: boolean;
  buttonLabel?: string;
  withIconButtons?: boolean;
  iconButtonsHeadline?: string;
  iconButtonOneImage?: string;
  iconButtonOneLink?: string;
  iconButtonOneLabel?: string;
  iconButtonTwoImage?: string;
  iconButtonTwoLink?: string;
  iconButtonTwoLabel?: string;
  iconButtonThreeImage?: string;
  iconButtonThreeLink?: string;
  iconButtonThreeLabel?: string;
}

function TwoColumnGallery({
  textHeadline = '',
  // color = '',
  productCategory = '',
  textParagraph = '',
  paragraphFont = '',
  backgroundColor = 'transparent',
  textColorPrimary = '',
  textColorSecondary = '',
  withDivider = false,
  listItems = [],
  listItemsLarge = false,
  images,
  withButton = false,
  buttonLabel = '',
  withIconButtons = false,
  iconButtonsHeadline = '',
  iconButtonOneImage = 'images/callUs.png',
  iconButtonOneLink = '/contact-us',
  iconButtonOneLabel = 'Call us',
  iconButtonTwoImage = 'images/emailUs.png',
  iconButtonTwoLink = '/contact-us',
  iconButtonTwoLabel = 'Email us',
  iconButtonThreeImage = 'images/visitUs.png',
  iconButtonThreeLink = '/contact-us',
  iconButtonThreeLabel = 'Visit us',
}: Props): JSX.Element {
  const router = useRouter();
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

  const toggleAppointmentDialog = () => {
    if (router.query.modal) {
      delete router.query.modal;
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query },
        },
        undefined,
        { shallow: true },
      );
      return;
    }

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, modal: 'appointment' },
      },
      undefined,
      { shallow: true },
    );
  };

  const CtaButton = () => {
    if (withButton) {
      return (
        <Box sx={styles.ctaButtonWrapper}>
          <Button variant="outlined" size="large" sx={styles.ctaPromptButton} onClick={() => toggleAppointmentDialog()}>
            {buttonLabel}
          </Button>
        </Box>
      );
    }

    return null;
  };

  const IconButtons = () => {
    if (withIconButtons) {
      return (
        <Box sx={styles.iconButtonsContainer}>
          <Typography sx={styles.iconButtonsHeadline}>{iconButtonsHeadline}</Typography>
          <Box sx={styles.iconButtonsGroup}>
            <NextLink href={iconButtonOneLink} passHref>
              <MUILink color="inherit" variant="inherit" underline="none">
                <Box sx={styles.iconButtonWrapper}>
                  <Box sx={{ ...styles.iconButton, backgroundImage: `url(${iconButtonOneImage})` }}></Box>
                  <Typography sx={styles.iconButtonLabel}>{iconButtonOneLabel}</Typography>
                </Box>
              </MUILink>
            </NextLink>
            <NextLink href={iconButtonTwoLink} passHref>
              <MUILink color="inherit" variant="inherit" underline="none">
                <Box sx={styles.iconButtonWrapper}>
                  <Box sx={{ ...styles.iconButton, backgroundImage: `url(${iconButtonTwoImage})` }}></Box>
                  <Typography sx={styles.iconButtonLabel}>{iconButtonTwoLabel}</Typography>
                </Box>
              </MUILink>
            </NextLink>
            <NextLink href={iconButtonThreeLink} passHref>
              <MUILink color="inherit" variant="inherit" underline="none">
                <Box sx={styles.iconButtonWrapper}>
                  <Box sx={{ ...styles.iconButton, backgroundImage: `url(${iconButtonThreeImage})` }}></Box>
                  <Typography sx={styles.iconButtonLabel}>{iconButtonThreeLabel}</Typography>
                </Box>
              </MUILink>
            </NextLink>
          </Box>
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
    <>
      <Box sx={{ ...styles.galleryContainer, backgroundColor: backgroundColor }}>
        <Box sx={styles.textContainer}>
          <Box sx={styles.textWrapper}>
            <Typography sx={{ ...styles.textOverline, color: textColorPrimary }}>
              {productCategory.toLocaleUpperCase()}
              {productCategory && router.query.collection && `/${router.query.collection}`}
            </Typography>
            <Typography sx={{ ...styles.textHeadline, color: textColorSecondary }}>{textHeadline}</Typography>
            <Typography sx={{ ...styles.textParagraph, color: textColorPrimary, fontFamily: paragraphFont }}>
              {textParagraph}
            </Typography>
            <Divider />
            {listItems.map((item, index) => {
              return <ListItems item={item} key={index} />;
            })}
            <CtaButton />
            <IconButtons />
          </Box>
        </Box>
        <Box sx={{ ...styles.imageSliderContainer, backgroundImage: `url(${images[imageIndex].image.mediaItemUrl})` }}>
          {Object.values(images).length > 1 && (
            <Box sx={styles.controlsContainer}>
              <Box sx={styles.arrowButtonContainer}>
                <IconButton
                  onClick={() => decrementImageIndex()}
                  sx={{ '&.MuiButtonBase-root:hover': { bgcolor: 'transparent' } }}
                  disableFocusRipple
                  disableRipple
                >
                  <ChevronLeftIcon sx={styles.arrowButton} />
                </IconButton>
              </Box>
              <Box sx={styles.arrowButtonContainer}>
                <IconButton
                  onClick={() => incrementImageIndex()}
                  sx={{ '&.MuiButtonBase-root:hover': { bgcolor: 'transparent' } }}
                  disableFocusRipple
                  disableRipple
                >
                  <ChevronRightIcon sx={styles.arrowButton} />
                </IconButton>
              </Box>
            </Box>
          )}
          <Box sx={styles.imagePaginationContainer}>
            {Object.values(images).length > 1 && (
              <Box sx={styles.paginationDotsContainer}>
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
            )}
            {images[imageIndex]?.caption && (
              <Typography sx={styles.captionText}>{images[imageIndex].caption}</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TwoColumnGallery;
