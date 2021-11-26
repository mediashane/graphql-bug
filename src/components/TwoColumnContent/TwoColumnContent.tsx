import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  flexDirection?: string;
  includeParagraph: boolean;
  image: string;
  alt?: string;
  textHeadline?: string;
  textParagraph?: string;
  backgroundColor?: string;
  headlineColor?: string;
  paragraphColor?: string;
}

function TwoColumnContent({
  flexDirection = 'row',
  includeParagraph = false,
  image,
  alt = '',
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
      <Box
        sx={{
          ...styles.twoColumnTextContainer,
          alignItems: flexDirection === 'row' ? 'flex-start' : 'center',
        }}
      >
        <Box sx={styles.twoColumnTextWrapper}>
          <Box sx={styles.twoColumnTextHeadlineWrapper}>
            <Box sx={{ ...styles.twoColumnHeadline, color: headlineColor }}>{textHeadline}</Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        ...styles.twoColumnContentContainer,
        backgroundColor: backgroundColor,
        flexDirection: {
          xs: 'column' as any,
          sm: flexDirection === 'row' ? 'row' : 'row-reverse',
        },
      }}
    >
      <Box
        sx={{
          ...styles.twoColumnImageWrapper,
          margin: {
            xs: 0,
            sm: flexDirection === 'row' ? '0 0 0 60px' : '0 60px 0 0',
          },
        }}
      >
        {image && <Image src={image} alt={alt} width={651} height={886} />}
      </Box>
      <InnerTextContent />
    </Box>
  );
}

export default TwoColumnContent;
