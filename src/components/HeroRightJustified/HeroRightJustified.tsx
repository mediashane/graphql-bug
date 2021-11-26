import React from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textColor?: string;
  textSubline?: string;
  textMediaLabel: string;
  mediaIcon?: string;
  textHeadline: string;
  image?: string;
}

function HeroRightJustified({
  textColor = '#ffffff',
  textSubline = '',
  textMediaLabel = '',
  mediaIcon,
  textHeadline = '',
  image,
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${image})` }}>
      <Box sx={styles.textContainer}>
        <Box sx={styles.textWrapper}>
          <Fade delay={500}>
            <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
            <Box sx={styles.mediaLineContainer}>
              {mediaIcon && <Image src={mediaIcon} alt="Play Button" width={70} height={70} />}
              <Typography sx={{ ...styles.textMediaLabel, color: textColor }}>{textMediaLabel}</Typography>
            </Box>
            <Box sx={styles.textSublineContainer}>
              <Box sx={styles.iconContainer}>
                {mediaIcon && <Image src={mediaIcon} alt="Play Button" width={70} height={70} />}
              </Box>
              <Typography sx={{ ...styles.textSubline, color: textColor }}>{textSubline}</Typography>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroRightJustified;
