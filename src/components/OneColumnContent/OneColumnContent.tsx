import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  includeParagraph: boolean;
  textHeadline: string;
  textParagraph?: string;
  media?: string;
  textColor?: string;
}

function OneColumnContent({
  includeParagraph = false,
  textHeadline = '',
  textParagraph = '',
  media = '',
  textColor = '',
}: Props): JSX.Element {
  const InnerTextContent = () => {
    if (includeParagraph) {
      return (
        <Box sx={styles.textContainer}>
          <Fade delay={500}>
            <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
            <Box sx={styles.innerParagraphTextContainer}>
              <Typography sx={{ ...styles.textParagraph, color: textColor }}>{textParagraph}</Typography>
            </Box>
          </Fade>
        </Box>
      );
    }

    return (
      <Box sx={styles.headlineTextContainer}>
        <Fade delay={500}>
          <Box sx={styles.innerHeadlineTextContainer}>
            <Typography sx={{ ...styles.textHeadline, color: textColor }}>{textHeadline}</Typography>
          </Box>
        </Fade>
      </Box>
    );
  };

  const OuterTextContent = () => {
    if (includeParagraph) {
      return (
        <Box sx={styles.outerParagraphTextContainer}>
          <Typography sx={{ ...styles.outerTextParagraph, color: textColor }}>{textParagraph}</Typography>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={{ ...styles.container, backgroundImage: `url(${media})` }}>
        <InnerTextContent />
      </Box>
      <OuterTextContent />
    </Box>
  );
}

export default OneColumnContent;
