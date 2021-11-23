import React from 'react';

import Box from '@mui/material/Box';

import CategoryCard from '../CategoryCard/CategoryCard';

import styles from './styles';

interface Props {
  cards: {
    image: any;
    title: string;
    description?: string;
    stickerText?: string;
    showSticker?: boolean;
    link?: {
      url?: string;
      target?: string;
      title?: string;
      __typename?: string;
    };
  }[];
  mobileSizeWide?: boolean;
}

function CardList({ cards = [], mobileSizeWide = false }: Props): JSX.Element {
  return (
    <Box sx={styles.cardListContainer}>
      <Box sx={styles.cardListWrapper}>
        {cards.map((card, index) => {
          const { image, title, description, stickerText, showSticker, link } = card;
          const { mediaItemUrl } = image;
          const { url, target } = link;

          return (
            <CategoryCard
              image={mediaItemUrl}
              title={title}
              description={description}
              stickerText={stickerText}
              showSticker={showSticker}
              link={url}
              target={target}
              key={index}
              mobileSizeWide={mobileSizeWide}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default CardList;
