import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

interface Props {
  location: string;
  addressOne: string;
  addressTwo: string;
  addressThree: string;
  phoneNumber?: string;
  email?: string;
}

function ContactCard({
  location = '',
  addressOne = '',
  addressTwo = '',
  addressThree = '',
  phoneNumber = '',
  email = '',
}: Props): JSX.Element {
  return (
    <Box sx={styles.contactCardContainer}>
      <Box sx={styles.contactCardWrapper}>
        <Box sx={styles.contactCardTextContainer}>
          <Box sx={styles.contactCardText}>
            <Typography sx={styles.contactCardTitle}>{location}</Typography>
            <Typography sx={styles.contactCardAddress}>{addressOne}</Typography>
            <Typography sx={styles.contactCardAddress}>{addressTwo}</Typography>
            <Typography sx={styles.contactCardAddress}>{addressThree}</Typography>
            <Typography sx={styles.contactCardPhoneNumber}>{phoneNumber}</Typography>
            <a href={`mailto:${email}`} style={styles.contactLink}>
              <Typography sx={styles.contactCardEmail}>{email}</Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactCard;
