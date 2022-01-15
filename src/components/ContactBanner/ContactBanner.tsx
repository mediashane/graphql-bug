import React from 'react';
import toggleDialog from 'helpers/toggleDialog';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  title?: string;
  description?: string;
  addressOne?: string;
  addressTwo?: string;
  phoneNumber?: string;
  faxNumber?: string;
  email?: string;
  locationButtonLabel?: string;
  image?: string;
}

function ContactBanner({
  title = 'The Elizabeth Eakins Studio',
  description = 'The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from 9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by to learn more about us and how we can help.',
  addressOne = 'Elizabeth Eakins Studio',
  addressTwo = '5 Taft Street, South Norwalk, CT 06854',
  phoneNumber = '203.831.9347',
  faxNumber = '203.831.9136',
  email = 'Elizabeth.Eakins@elizabetheakins.com',
  locationButtonLabel = 'Book an Appointment',
  image = 'images/showroom.jpg',
}: Props): JSX.Element {
  return (
    <Box sx={styles.bannerContainer}>
      <Container sx={styles.bannerWrapper} maxWidth="xl">
        <Box sx={styles.bannerLeftColumn}>
          <Box sx={styles.bannerLeftColumnContent}>
            <Typography sx={styles.bannerTitle}>{title}</Typography>
            <Box sx={styles.bannerBodyTextContainer}>
              <Typography sx={styles.bannerBodyText}>{description}</Typography>
            </Box>
            <Typography sx={styles.bannerBodyText}>{addressOne}</Typography>
            <Typography sx={styles.bannerBodyText}>{addressTwo}</Typography>
            <Typography sx={styles.bannerBodyText}>T: {phoneNumber}</Typography>
            <Typography sx={styles.bannerBodyText}>F: {faxNumber}</Typography>
            <Typography sx={styles.bannerBodyText}>Email: {email}</Typography>
            <Box sx={styles.bannerButtonWrapper}>
              <Button
                variant="outlined"
                size="large"
                sx={styles.bannerButton}
                onClick={() => toggleDialog('appointment')}
              >
                {locationButtonLabel}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.bannerRightColumn}>
          <Box
            sx={{
              ...styles.bannerImageContainer,
              backgroundImage: `url(${image})`,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default ContactBanner;
