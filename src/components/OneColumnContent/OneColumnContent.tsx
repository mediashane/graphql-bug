import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  includeParagraph: boolean;
  textHeadline: string;
  textParagraph?: string;
  image?: string;
  textColor?: string;
}

function OneColumnContent({
  includeParagraph = false,
  textHeadline = '',
  textParagraph = '',
  image = '',
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
          <Typography sx={styles.outerTextParagraph}>{textParagraph}</Typography>
        </Box>
      );
    }

    return null;
  };

  return (
    <Box>
      <Box sx={{ ...styles.wrapper, backgroundImage: `url(${image})` }}>
        <Container maxWidth="xl">
          <Box sx={styles.container}>
            <InnerTextContent />
          </Box>
        </Container>
      </Box>
      <OuterTextContent />
    </Box>
  );
}

export default OneColumnContent;
