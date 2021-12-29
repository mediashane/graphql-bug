import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import FourCard from './FourCard';
import styles from './styles';

interface Props {
  flexDirection?: string;
  withButton?: boolean;
  buttonLabel?: string;
  buttonLabelColor?: string;
  promptOverline?: string;
  overlineTextColor?: string;
  promptTopline?: string;
  toplineTextColor?: string;
  promptParagraph?: string;
  promptImage?: string;
  paragraphTextColor?: string;
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
  paragraphTextColor = '#333333',
  buttonLabel,
  buttonLabelColor = '#826C4F',
  promptOverline,
  overlineTextColor = '#E56F4D',
  promptTopline,
  toplineTextColor = '#90949F',
  promptParagraph,
  promptImage,
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
          <Typography sx={{ ...styles.fourCardsPromptOverline, color: overlineTextColor }}>{promptOverline}</Typography>
          <Typography sx={{ ...styles.fourCardsPromptTopline, color: toplineTextColor }}>{promptTopline}</Typography>
        </>
      );
    }

    return (
      <>
        <>
          <Typography sx={{ ...styles.fourCardsPromptOverline, color: overlineTextColor }}>{promptOverline}</Typography>
        </>
      </>
    );
  };

  const PromptBottom = () => {
    if (withButton) {
      return (
        <Box sx={styles.fourCardsPromptButtonWrapper}>
          <Button variant="outlined" size="large" sx={{ ...styles.fourCardsPromptButton, color: buttonLabelColor }}>
            {buttonLabel}
          </Button>
        </Box>
      );
    }

    return (
      <>
        <Typography sx={{ ...styles.fourCardsPromptBottomline, color: overlineTextColor }}>{promptTopline}</Typography>
        <Typography sx={{ ...styles.fourCardsPromptParagraph, color: paragraphTextColor }}>
          {promptParagraph}
        </Typography>
      </>
    );
  };

  return (
    <Box sx={styles.fourCardsWithPromptContainer}>
      <Container sx={{ ...styles.fourCardsWithPromptContent, flexDirection: flexDirection as any }} maxWidth="xl">
        <Box sx={styles.fourCardsPromptContainer}>
          <Box sx={styles.fourCardsPrompt}>
            <Box sx={styles.fourCardsPromptInnerWrapper}>
              <PromptTop />
              <Box sx={{ ...styles.fourCardsPromptImage, backgroundImage: `url(${promptImage})` }} />
              <PromptBottom />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.fourCardsCards}>
          <FourCard
            image={imageOne}
            title={titleOne}
            subtitle={subtitleOne}
            textColor={paragraphTextColor}
            showSticker={showStickerOne}
            stickerText={stickerTextOne}
            link={linkOne}
          />
          <FourCard
            image={imageTwo}
            title={titleTwo}
            subtitle={subtitleTwo}
            textColor={paragraphTextColor}
            showSticker={showStickerTwo}
            stickerText={stickerTextTwo}
            link={linkTwo}
          />
          <FourCard
            image={imageThree}
            title={titleThree}
            subtitle={subtitleThree}
            textColor={paragraphTextColor}
            showSticker={showStickerThree}
            stickerText={stickerTextThree}
            link={linkThree}
          />
          <FourCard
            image={imageFour}
            title={titleFour}
            subtitle={subtitleFour}
            textColor={paragraphTextColor}
            showSticker={showStickerFour}
            stickerText={stickerTextFour}
            link={linkFour}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default FeatureTagIcons;
