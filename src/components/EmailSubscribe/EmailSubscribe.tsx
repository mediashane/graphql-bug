import React, { useState } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import styles from './styles';

interface Props {
  backgroundImage: string;
}

function EmailSubscribe({ backgroundImage }: Props): JSX.Element {
  const [formInput, setFormInput] = useState('');

  const onKeyPress = (e: any) => {
    if (e.which == 13) {
      submitEmail();
    }
  };

  const submitEmail = () => {
    alert(`EMAIL SUBMITTED: ${formInput}`);
  };

  return (
    <Box sx={styles.emailSubscribeContainer}>
      <Box sx={styles.emailSubscribeWrapper}>
        <Box sx={{ ...styles.emailSubscribeImage, backgroundImage: `url(${backgroundImage})` }} />
        <Box sx={styles.emailSubscribeContent}>
          <Box sx={styles.emailSubscribeTitleContainer}>
            <Typography sx={styles.emailSubscribeTitle}>Get new products and promotions in your inbox</Typography>
          </Box>
          <Box sx={styles.emailSubscribeInputContainer}>
            <OutlinedInput
              sx={styles.emailSubscribeInput}
              id="email-input"
              onKeyPress={onKeyPress}
              value={formInput}
              placeholder="Your email"
              onChange={(event) => setFormInput(event.target.value)}
            />
            <Button onClick={() => submitEmail()} sx={styles.emailSubscribeButton} variant="outlined">
              Subscribe
            </Button>
          </Box>
          <Box sx={styles.emailSubscribeTitleContainer}>
            <Typography sx={styles.emailSubscribeSubtitle}>
              Keep up with what we’re up to. Unsubscribe at any time.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EmailSubscribe;
