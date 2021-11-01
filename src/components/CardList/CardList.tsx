import React from 'react';
import CategoryCard from 'components/CategoryCard/CategoryCard';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  cards: {
    image: string;
    title: string;
    description?: string;
    stickerText?: string;
    showSticker?: boolean;
    link?: string;
  }[];
}

function CardList({ cards = [] }: Props): JSX.Element {
  return (
    <Box sx={styles.cardListContainer}>
      <Box sx={styles.cardListWrapper}>
        {cards.map((card, index) => {
          const { image, title, description, stickerText, showSticker, link } = card;
          return (
            <CategoryCard
              image={image}
              title={title}
              description={description}
              stickerText={stickerText}
              showSticker={showSticker}
              link={link}
              key={index}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default CardList;
