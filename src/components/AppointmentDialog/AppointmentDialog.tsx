import React from 'react';
import { useRouter } from 'next/router';

import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import styles from './styles';

interface Props {
  koaThemeOptions?: string;
}

function AppointmentDialog({ koaThemeOptions }: Props): JSX.Element {
  const router = useRouter();

  console.log('THEME OPTIONS? ', koaThemeOptions);

  const handleClose = () => {
    delete router.query.modal;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <Dialog
      open={router.query.modal && router.query.modal === 'appointment' ? true : false}
      onClose={handleClose}
      PaperProps={{ square: true }}
      aria-labelledby={'Book an Appointment'}
      aria-describedby={'text'}
      maxWidth="xl"
      disableScrollLock
    >
      <Box sx={styles.root}>
        <DialogTitle sx={styles.dialogTitle}>Book an Appointment</DialogTitle>
        <DialogContent>
          <DialogContentText>{JSON.stringify(koaThemeOptions)}</DialogContentText>
          <Box sx={styles.dialogButtonsContainer}>
            <Button sx={styles.dialogButton} onClick={() => handleClose()}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default AppointmentDialog;
