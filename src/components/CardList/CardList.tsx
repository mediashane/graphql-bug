import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
      <Container sx={styles.cardListWrapper} maxWidth="xl">
        {cards.map((card, index) => {
          const { image, title, description, stickerText, showSticker, link } = card;

          return (
            <CategoryCard
              image={image?.mediaItemUrl ?? ''}
              title={title}
              description={description}
              stickerText={stickerText}
              showSticker={showSticker}
              link={link?.url ?? '/'}
              target={link?.target ?? '_blank'}
              key={index}
              mobileSizeWide={mobileSizeWide}
            />
          );
        })}
      </Container>
    </Box>
  );
}

export default CardList;
