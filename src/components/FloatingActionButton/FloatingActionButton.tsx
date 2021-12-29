import React from 'react';
import { useRouter } from 'next/router';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import ChatIcon from './chatIcon';
import styles from './styles';

function FloatingActionButton(): JSX.Element {
  const router = useRouter();

  const toggleAppointmentDialog = () => {
    if (router.query.modal) {
      delete router.query.modal;
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query },
        },
        undefined,
        { shallow: true },
      );
      return;
    }

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, modal: 'appointment' },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <Box sx={styles.container} onClick={() => toggleAppointmentDialog()}>
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
