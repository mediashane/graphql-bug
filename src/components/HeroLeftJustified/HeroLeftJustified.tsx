import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  introTitle?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}

function HeroLeftJustified({ introTitle = '', title = '', description = '', backgroundImage }: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${backgroundImage})` }}>
      <Box sx={styles.textContainer}>
        <Fade delay={500}>
          <Typography sx={styles.introTitleText}>{introTitle}</Typography>
          <Typography sx={styles.titleText}>{title}</Typography>
          <Typography sx={styles.descriptionText}>{description}</Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default HeroLeftJustified;
