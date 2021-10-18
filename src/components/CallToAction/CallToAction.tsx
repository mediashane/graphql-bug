import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './styles';

interface Props {
  ctaTitle: string;
  description: string;
  ctaButtonLabel: string;
  backgroundImage: string;
}

function CallToAction({ ctaTitle, description, ctaButtonLabel, backgroundImage }: Props): JSX.Element {
  return (
    <Box sx={styles.callToActionContainer}>
      <Box sx={{ ...styles.callToActionContent, backgroundImage: `url(${backgroundImage})` }}>
        <Box sx={styles.callToActionCard}>
          <Box sx={styles.callToActionTextContainer}>
            <Typography sx={styles.callToActionTitle}>{ctaTitle}</Typography>
            <Typography variant="subtitle1" sx={styles.callToActionDescription}>
              {description}
            </Typography>
            <Button variant="outlined" size="large" sx={styles.callToActionButton}>
              {ctaButtonLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CallToAction;
