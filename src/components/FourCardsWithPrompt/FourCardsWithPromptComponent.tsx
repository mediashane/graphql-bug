import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FourCard from './FourCard';
import styles from './styles';

interface Props {
  textColor: string;
  imageOne: string;
  titleOne: string;
  subtitleOne?: string;
  linkOne: string;
  showStickerOne: boolean;
  stickerTextOne: string;
  imageTwo: string;
  titleTwo: string;
  subtitleTwo?: string;
  linkTwo: string;
  showStickerTwo: boolean;
  stickerTextTwo: string;
  imageThree: string;
  titleThree: string;
  subtitleThree?: string;
  linkThree: string;
  showStickerThree: boolean;
  stickerTextThree: string;
  imageFour: string;
  titleFour: string;
  subtitleFour?: string;
  linkFour: string;
  showStickerFour: boolean;
  stickerTextFour: string;
}

function FeatureTagIcons({
  textColor,
  imageOne,
  titleOne,
  subtitleOne,
  linkOne,
  showStickerOne,
  stickerTextOne,
  imageTwo,
  titleTwo,
  subtitleTwo,
  linkTwo,
  showStickerTwo,
  stickerTextTwo,
  imageThree,
  titleThree,
  subtitleThree,
  linkThree,
  showStickerThree,
  stickerTextThree,
  imageFour,
  titleFour,
  subtitleFour,
  linkFour,
  showStickerFour,
  stickerTextFour,
}: Props): JSX.Element {
  return (
    <Box sx={styles.fourCardsWithPromptContainer}>
      <Box sx={styles.fourCardsWithPromptContent}>
        <Box sx={styles.fourCardsPromptContainer}>
          <Box sx={styles.fourCardsPrompt}>
            <Box sx={styles.fourCardsPromptInnerWrapper}>
              <Typography sx={styles.fourCardsPromptOverline}>Questions? want to know more?</Typography>
              <Typography sx={styles.fourCardsPromptTopline}>Book a virtual or in person appointment.</Typography>
              <Box sx={{ ...styles.fourCardsPromptImage, backgroundImage: `url(images/bookVirtualAppointment.png)` }} />
              <Box sx={styles.fourCardsPromptButtonWrapper}>
                <Button variant="outlined" size="large" sx={styles.fourCardsPromptButton}>
                  Book an appointment
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.fourCardsCards}>
          <FourCard
            image={imageOne}
            title={titleOne}
            subtitle={subtitleOne}
            textColor={textColor}
            showSticker={showStickerOne}
            stickerText={stickerTextOne}
            link={linkOne}
          />
          <FourCard
            image={imageTwo}
            title={titleTwo}
            subtitle={subtitleTwo}
            textColor={textColor}
            showSticker={showStickerTwo}
            stickerText={stickerTextTwo}
            link={linkTwo}
          />
          <FourCard
            image={imageThree}
            title={titleThree}
            subtitle={subtitleThree}
            textColor={textColor}
            showSticker={showStickerThree}
            stickerText={stickerTextThree}
            link={linkThree}
          />
          <FourCard
            image={imageFour}
            title={titleFour}
            subtitle={subtitleFour}
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
