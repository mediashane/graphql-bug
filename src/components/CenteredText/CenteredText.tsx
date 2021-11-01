import React from 'react';

import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  text: string;
}

function CenteredText({ text = '' }: Props): JSX.Element {
  return (
    <Box sx={styles.centeredTextContainer}>
      <Box sx={styles.centeredTextWrapper}>{text}</Box>
    </Box>
  );
}

export default CenteredText;
