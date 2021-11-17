import React from 'react';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  text: string;
  backgroundColor: string;
  textSize: string;
}

function CenteredText({ text = '', backgroundColor = 'transparent', textSize = '16px' }: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.centeredTextContainer, backgroundColor: backgroundColor }}>
      <Box sx={{ ...styles.centeredTextWrapper, fontSize: textSize }}>{text}</Box>
    </Box>
  );
}

export default CenteredText;
