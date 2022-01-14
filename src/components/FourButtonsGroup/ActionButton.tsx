import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  label: string;
  email?: string;
  action?: any;
}

function ActionButton({ label = '', email, action = () => console.log('Click') }: Props): JSX.Element {
  return (
    <Box sx={styles.fourButtonsGroupButton} onClick={() => action()}>
      <Typography sx={styles.fourButtonsGroupButtonLabel}>
        {label}
        {email ? ` ${email}` : ''}
      </Typography>
    </Box>
  );
}

export default ActionButton;
