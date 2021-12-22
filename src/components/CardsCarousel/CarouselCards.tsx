import React from 'react';
import NextLink from 'next/link';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from '@mui/material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CarouselCard from './CarouselCard';
import styles from './styles';

interface Props {
  textColor: string;
  labelColor: string;
  sectionLabel?: string;
  textLinkUrl?: string;
  textLinkLabel?: string;
  cards: {
    image: any;
    title: string;
    subtitle?: string;
    link?: {
      url?: string;
      target?: string;
      title?: string;
      __typename?: string;
    };
    showSticker: boolean;
    stickerText: string;
  }[];
}

function CarouselCards({ textColor, sectionLabel, labelColor, textLinkUrl, textLinkLabel, cards }: Props): JSX.Element {
  const prevElement = () => {
    document.getElementById('carousel').scrollLeft -= 200;
  };

  const nextElement = () => {
    document.getElementById('carousel').scrollLeft += 200;
  };

  const CarouselControls = () => {
    return (
      <Box sx={styles.cardsCarouselControlsContainer}>
        <Box sx={styles.cardsCarouselArrowButtonContainer}>
          <IconButton
            onClick={() => prevElement()}
            sx={{ '&.MuiButtonBase-root:hover': { bgcolor: 'transparent' } }}
            disableFocusRipple
            disableRipple
          >
            <ChevronLeftIcon sx={styles.cardsCarouselArrowButton} />
          </IconButton>
        </Box>
        <Box sx={styles.cardsCarouselArrowButtonContainer}>
          <IconButton
            onClick={() => nextElement()}
            sx={{ '&.MuiButtonBase-root:hover': { bgcolor: 'transparent' } }}
            disableFocusRipple
            disableRipple
          >
            <ChevronRightIcon sx={styles.cardsCarouselArrowButton} />
          </IconButton>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={styles.cardsCarouselLabelContainer}>
          <Typography sx={{ ...styles.cardsCarouselLabel, color: labelColor }}>{sectionLabel}</Typography>
          <NextLink href={textLinkUrl} passHref>
            <MUILink color="inherit" variant="inherit" underline="hover">
              <Typography sx={{ ...styles.cardsCarouselTextLink, color: textColor }}>{textLinkLabel}</Typography>
            </MUILink>
          </NextLink>
        </Box>
      </Container>
      <Box sx={styles.cardsCarouselContainer}>
        <Box sx={styles.cardsCarouselContent}>
          <Box sx={styles.cardsCarouselControlsWrapper}>
            <CarouselControls />
          </Box>
          <Box sx={styles.carouselCards} id="carousel">
            {cards
              ? cards.map((card, index) => {
                  const { image, title, subtitle, showSticker, stickerText } = card;

                  return (
                    <CarouselCard
                      image={image}
                      title={title}
                      subtitle={subtitle}
                      textColor={textColor}
                      showSticker={showSticker}
                      stickerText={stickerText}
                      link={card?.link?.url ?? '/'}
                      key={index}
                    />
                  );
                })
              : null}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CarouselCards;
