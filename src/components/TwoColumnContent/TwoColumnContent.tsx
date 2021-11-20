import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  textHeadline: string;
  textParagraph: string;
  backgroundColor?: string;
  headlineColor?: string;
  paragraphColor?: string;
}

function TwoColumnContent({
  textHeadline = '',
  textParagraph = '',
  backgroundColor = 'transparent',
  headlineColor = '#826C4F',
  paragraphColor = '#333333',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.twoColumnContentContainer, backgroundColor: backgroundColor }}>
      <Box sx={styles.twoColumnImageWrapper}>
        <Image src="/images/LivingRoom.png" alt="Living Room" width={651} height={886} />
      </Box>
      <Box sx={styles.twoColumnTextContainer}>
        <Box sx={styles.twoColumnTextWrapper}>
          <Box sx={{ ...styles.twoColumnHeadline, color: headlineColor }}>{textHeadline}</Box>
          <Box sx={{ ...styles.twoColumnParagraph, color: paragraphColor }}>{textParagraph}</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TwoColumnContent;
