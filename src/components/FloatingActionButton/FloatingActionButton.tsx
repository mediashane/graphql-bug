import React from 'react';
import toggleDialog from 'helpers/toggleDialog';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import ChatIcon from './chatIcon';
import styles from './styles';

function FloatingActionButton(): JSX.Element {
  return (
    <Box sx={styles.container} onClick={() => toggleDialog('appointment')}>
      <Box sx={styles.chatTextContainer}>
        <Typography sx={styles.chatText}>Book an Appointment</Typography>
      </Box>
      <Box sx={styles.chatIconContainer}>
        <ChatIcon />
      </Box>
    </Box>
  );
}

export default FloatingActionButton;
