import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  includeParagraph: boolean;
  image: string;
  textHeadline?: string;
  textParagraph?: string;
  backgroundColor?: string;
  headlineColor?: string;
  paragraphColor?: string;
}

function TwoColumnContent({
  includeParagraph = false,
  image = '',
  textHeadline = '',
  textParagraph = '',
  backgroundColor = 'transparent',
  headlineColor = '#826C4F',
  paragraphColor = '#333333',
}: Props): JSX.Element {
  const InnerTextContent = () => {
    if (includeParagraph) {
      return (
        <Box sx={styles.twoColumnTextContainer}>
          <Box sx={styles.twoColumnTextWrapper}>
            <Box sx={{ ...styles.twoColumnHeadline, color: headlineColor }}>{textHeadline}</Box>
            <Box sx={{ ...styles.twoColumnParagraph, color: paragraphColor }}>{textParagraph}</Box>
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={styles.twoColumnTextContainer}>
        <Box sx={styles.twoColumnTextWrapper}>
          <Box sx={styles.twoColumnTextHeadlineWrapper}>
            <Box sx={{ ...styles.twoColumnHeadline, color: headlineColor }}>{textHeadline}</Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ ...styles.twoColumnContentContainer, backgroundColor: backgroundColor }}>
      <Box sx={styles.twoColumnImageWrapper}>
        <Image src={image} alt="Living Room" width={651} height={886} />
      </Box>
      <InnerTextContent />
    </Box>
  );
}

export default TwoColumnContent;
