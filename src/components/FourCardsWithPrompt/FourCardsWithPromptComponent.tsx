import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import FourCard from './FourCard';
import styles from './styles';

interface Props {
  flexDirection?: string;
  withButton: boolean;
  buttonLabel: string;
  promptOverline: string;
  promptTopline: string;
  promptParagraph: string;
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
  flexDirection = 'row',
  withButton,
  textColor,
  buttonLabel,
  promptOverline,
  promptTopline,
  promptParagraph,
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
  const PromptTop = () => {
    if (withButton) {
      return (
        <>
          <Typography sx={styles.fourCardsPromptOverline}>{promptOverline}</Typography>
          <Typography sx={styles.fourCardsPromptTopline}>{promptTopline}</Typography>
        </>
      );
    }

    return (
      <>
        <>
          <Typography sx={styles.fourCardsPromptOverline}>{promptOverline}</Typography>
        </>
      </>
    );
  };

  const PromptBottom = () => {
    if (withButton) {
      return (
        <Box sx={styles.fourCardsPromptButtonWrapper}>
          <Button variant="outlined" size="large" sx={styles.fourCardsPromptButton}>
            {buttonLabel}
          </Button>
        </Box>
      );
    }

    return (
      <>
        <Typography sx={styles.fourCardsPromptBottomline}>{promptTopline}</Typography>
        <Typography sx={styles.fourCardsPromptParagraph}>{promptParagraph}</Typography>
      </>
    );
  };

  return (
    <Box sx={styles.fourCardsWithPromptContainer}>
      <Box sx={{ ...styles.fourCardsWithPromptContent, flexDirection: flexDirection as any }}>
        <Box sx={styles.fourCardsPromptContainer}>
          <Box sx={styles.fourCardsPrompt}>
            <Box sx={styles.fourCardsPromptInnerWrapper}>
              <PromptTop />
              <Box sx={{ ...styles.fourCardsPromptImage, backgroundImage: `url(images/bookVirtualAppointment.png)` }} />
              <PromptBottom />
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
