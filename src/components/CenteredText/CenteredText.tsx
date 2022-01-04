import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  fontFamily?: string;
}

function CenteredText({
  text = '',
  textColor = '#333333',
  backgroundColor = 'transparent',
  textSize = '25px',
  fontFamily = 'FreightBigProSemibold',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.centeredTextContainer, backgroundColor: backgroundColor }}>
      <Container maxWidth="xl">
        <Box sx={{ ...styles.centeredTextWrapper, fontSize: `${textSize}px`, color: textColor, fontFamily }}>
          {text}
        </Box>
      </Container>
    </Box>
  );
}

export default CenteredText;
