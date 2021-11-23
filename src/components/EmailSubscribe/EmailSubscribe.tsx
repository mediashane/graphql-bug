import React, { useState } from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

import styles from './styles';

interface Props {
  title: string;
  placeholder: string;
  buttonLabel: string;
  subtitle: string;
  textColor: string;
  backgroundImage: string;
  backgroundColor: string;
}

function EmailSubscribe({
  title = '',
  placeholder = '',
  buttonLabel = '',
  subtitle = '',
  textColor = '',
  backgroundImage = '',
  backgroundColor = '',
}: Props): JSX.Element {
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
    <Box sx={{ ...styles.emailSubscribeContainer, backgroundColor: backgroundColor }}>
      <Box sx={styles.emailSubscribeWrapper}>
        <Box sx={{ ...styles.emailSubscribeImage, backgroundImage: `url(${backgroundImage})` }} />
        <Box sx={styles.emailSubscribeContent}>
          <Box sx={styles.emailSubscribeTitleContainer}>
            <Typography sx={{ ...styles.emailSubscribeTitle, color: textColor }}>{title}</Typography>
          </Box>
          <Box sx={styles.emailSubscribeInputContainer}>
            <OutlinedInput
              sx={styles.emailSubscribeInput}
              id="email-input"
              onKeyPress={onKeyPress}
              value={formInput}
              placeholder={placeholder}
              onChange={(event) => setFormInput(event.target.value)}
            />
            <Button
              onClick={() => submitEmail()}
              sx={{ ...styles.emailSubscribeButton, color: textColor }}
              variant="outlined"
            >
              {buttonLabel}
            </Button>
          </Box>
          <Box sx={styles.emailSubscribeTitleContainer}>
            <Typography sx={{ ...styles.emailSubscribeSubtitle, color: textColor }}>{subtitle}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EmailSubscribe;
