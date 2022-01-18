import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textSubline: string;
  media?: string;
  textColor?: string;
}

function HeroCenterTop({
  textOverline = '',
  textHeadline = '',
  textSubline = '',
  media = '',
  textColor,
}: Props): JSX.Element {
  return (
    <>
      <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${media})` }}>
        <Box sx={styles.textContainer}>
          <Box sx={styles.textWrapper}>
            <Fade delay={500}>
              <Typography sx={{ ...styles.textOverline, color: textColor }}>{textOverline}</Typography>
              <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
              <Typography sx={{ ...styles.textSubline, color: textColor }}>{textSubline}</Typography>
            </Fade>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeroCenterTop;
