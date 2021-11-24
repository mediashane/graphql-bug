import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textHeadline: string;
  textParagraph?: string;
  media?: string;
  textColor?: string;
}

function OneColumnContent({ textHeadline = '', textParagraph = '', media = '', textColor = '' }: Props): JSX.Element {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ ...styles.container, backgroundImage: `url(${media})` }}>
        <Box sx={styles.textContainer}>
          <Fade delay={500}>
            <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
            <Box sx={styles.innerParagraphTextContainer}>
              <Typography sx={{ ...styles.textParagraph, color: textColor }}>{textParagraph}</Typography>
            </Box>
          </Fade>
        </Box>
      </Box>
      <Box sx={styles.outerParagraphTextContainer}>
        <Typography sx={{ ...styles.outerTextParagraph, color: textColor }}>{textParagraph}</Typography>
      </Box>
    </Box>
  );
}

export default OneColumnContent;
