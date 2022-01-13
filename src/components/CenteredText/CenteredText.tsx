import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  text: string;
  paragraphText?: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  paragraphTextSize?: string;
  fontFamily?: string;
  paragraphFontFamily?: string;
}

function CenteredText({
  text = '',
  paragraphText = '',
  textColor = '#333333',
  backgroundColor = 'transparent',
  textSize = '32',
  paragraphTextSize = '24',
  fontFamily = 'FreightBigProSemibold',
  paragraphFontFamily = 'ProximaNovaRegular',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.centeredTextContainer, backgroundColor: backgroundColor }}>
      <Container maxWidth="xl">
        <Box sx={styles.centeredTextWrapper}>
          <Typography sx={{ fontSize: `${textSize}px`, color: textColor, fontFamily: fontFamily }}>{text}</Typography>
          {paragraphText && (
            <Box sx={styles.paragraphTextContainer}>
              <Typography
                sx={{
                  fontSize: `${paragraphTextSize}px`,
                  color: textColor,
                  fontFamily: paragraphFontFamily,
                }}
              >
                {paragraphText}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default CenteredText;
