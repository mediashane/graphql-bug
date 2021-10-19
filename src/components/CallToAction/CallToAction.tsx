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
    <Box sx={styles.ctaContainer}>
      <Box sx={{ ...styles.ctaContent, backgroundImage: `url(${backgroundImage})` }}>
        <Box sx={styles.ctaCard}>
          <Box sx={styles.ctaTextContainer}>
            <Typography sx={styles.ctaTitle}>{ctaTitle}</Typography>
            <Box sx={{ ...styles.ctaMobileImage, backgroundImage: `url(${backgroundImage})` }} />
            <Typography variant="subtitle1" sx={styles.ctaDescription}>
              {description}
            </Typography>
            <Button variant="outlined" size="large" sx={styles.ctaButton}>
              {ctaButtonLabel}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CallToAction;
