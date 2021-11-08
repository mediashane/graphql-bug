import React from 'react';

import Box from '@mui/material/Box';

import FourCard from './FourCard';
import styles from './styles';

interface Props {
  textColor: string;
  imageOne: string;
  labelOne: string;
  linkOne: string;
  showStickerOne: boolean;
  stickerTextOne: string;
  imageTwo: string;
  labelTwo: string;
  linkTwo: string;
  showStickerTwo: boolean;
  stickerTextTwo: string;
  imageThree: string;
  labelThree: string;
  linkThree: string;
  showStickerThree: boolean;
  stickerTextThree: string;
  imageFour: string;
  labelFour: string;
  linkFour: string;
  showStickerFour: boolean;
  stickerTextFour: string;
}

function FeatureTagIcons({
  textColor,
  imageOne,
  labelOne,
  linkOne,
  showStickerOne,
  stickerTextOne,
  imageTwo,
  labelTwo,
  linkTwo,
  showStickerTwo,
  stickerTextTwo,
  imageThree,
  labelThree,
  linkThree,
  showStickerThree,
  stickerTextThree,
  imageFour,
  labelFour,
  linkFour,
  showStickerFour,
  stickerTextFour,
}: Props): JSX.Element {
  return (
    <Box sx={styles.fourCardsRowContainer}>
      <Box sx={styles.fourCardsRowContent}>
        <Box sx={styles.fourCardsCards}>
          <FourCard
            image={imageOne}
            label={labelOne}
            textColor={textColor}
            showSticker={showStickerOne}
            stickerText={stickerTextOne}
            link={linkOne}
          />
          <FourCard
            image={imageTwo}
            label={labelTwo}
            textColor={textColor}
            showSticker={showStickerTwo}
            stickerText={stickerTextTwo}
            link={linkTwo}
          />
          <FourCard
            image={imageThree}
            label={labelThree}
            textColor={textColor}
            showSticker={showStickerThree}
            stickerText={stickerTextThree}
            link={linkThree}
          />
          <FourCard
            image={imageFour}
            label={labelFour}
            textColor={textColor}
            showSticker={showStickerFour}
            stickerText={stickerTextFour}
            link={linkFour}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureTagIcons;
