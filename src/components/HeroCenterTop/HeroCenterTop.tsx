import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textSubline: string;
  mediaDesktop?: string;
}

function HeroCenterTop({ textOverline = '', textHeadline = '', textSubline = '', mediaDesktop }: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${mediaDesktop})` }}>
      <Box sx={styles.textContainer}>
        <Box sx={styles.textWrapper}>
          <Fade delay={500}>
            <Typography sx={styles.textOverline}>{textOverline}</Typography>
            <Typography sx={styles.textHeadline}>{textHeadline}</Typography>
            <Typography sx={styles.textSubline}>{textSubline}</Typography>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroCenterTop;
