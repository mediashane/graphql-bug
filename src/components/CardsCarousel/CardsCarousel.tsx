import React from 'react';

import CarouselCards from './CarouselCards';

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

function CardsCarousel({ ...props }: Props): JSX.Element {
  return <CarouselCards {...props} />;
}

export default CardsCarousel;
