import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  buttonLabel?: string;
  mediaDesktop?: string;
}

function HeroCenterButton({
  textOverline = '',
  textHeadline = '',
  buttonLabel = '',
  mediaDesktop,
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${mediaDesktop})` }}>
      <Box sx={styles.textContainer}>
        <Fade delay={500}>
          <Typography sx={styles.introTitleText}>{textOverline}</Typography>
          <Typography sx={styles.titleText}>{textHeadline}</Typography>
          <Box sx={styles.heroButtonWrapper}>
            <Button variant="outlined" size="large" sx={styles.heroButton}>
              <Typography sx={styles.heroButtonText}>{buttonLabel}</Typography>
            </Button>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default HeroCenterButton;
