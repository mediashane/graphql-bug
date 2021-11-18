import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from '@mui/material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CarouselCard from './CarouselCard';
import styles from './styles';

interface Props {
  textColor: string;
  labelColor: string;
  sectionLabel: string;
  cards: {
    image: string;
    title: string;
    subtitle?: string;
    link: string;
    showSticker: boolean;
    stickerText: string;
  }[];
}

function CarouselCards({ textColor, sectionLabel, labelColor, cards }: Props): JSX.Element {
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
          <IconButton onClick={() => prevElement()} disableFocusRipple disableRipple>
            <ChevronLeftIcon sx={styles.cardsCarouselArrowButton} />
          </IconButton>
        </Box>
        <Box sx={styles.cardsCarouselArrowButtonContainer}>
          <IconButton onClick={() => nextElement()} disableFocusRipple disableRipple>
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
          <Typography sx={{ ...styles.cardsCarouselTextLink }}>See all &gt;</Typography>
        </Box>
      </Container>
      <Box sx={styles.cardsCarouselContainer}>
        <Box sx={styles.cardsCarouselContent}>
          <Box sx={styles.cardsCarouselControlsWrapper}>
            <CarouselControls />
          </Box>
          <Box sx={styles.carouselCards} id="carousel">
            {cards.map((card, index) => {
              const { image, title, subtitle, link, showSticker, stickerText } = card;
              return (
                <CarouselCard
                  image={image}
                  title={title}
                  subtitle={subtitle}
                  textColor={textColor}
                  showSticker={showSticker}
                  stickerText={stickerText}
                  link={link}
                  key={index}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CarouselCards;
