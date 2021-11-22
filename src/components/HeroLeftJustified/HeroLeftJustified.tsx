import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textParagraph?: string;
  media?: string;
  textColor?: string;
}

function HeroLeftJustified({
  textOverline = '',
  textHeadline = '',
  textParagraph = '',
  media = '',
  textColor = '',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${media})` }}>
      <Box sx={styles.textContainer}>
        <Fade delay={500}>
          <Typography sx={{ ...styles.textOverline, color: textColor }}>{textOverline}</Typography>
          <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
          <Typography sx={{ ...styles.textParagraph, color: textColor }}>{textParagraph}</Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default HeroLeftJustified;
