import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  title?: string;
  addressOne?: string;
  addressTwo?: string;
  addressThree?: string;
  locationButtonLabel?: string;
  buttonLink?: string;
  image?: string;
  dates?: string;
  days?: string;
  hours?: string;
}

function LocationBanner({
  title = 'The Elizabeth Eakins Studio',
  addressOne = 'Elizabeth Eakins Studio',
  addressTwo = '5 Taft Street',
  addressThree = 'South Norwalk, CT 06854',
  image = 'images/showroom.jpg',
  locationButtonLabel = 'Book an Appointment',
  buttonLink = 'wwww.google.com/maps',
  dates = 'September 20th - October 15th',
  days = 'Monday - Friday',
  hours = '9:00 am - 3:00 pm',
}: Props): JSX.Element {
  return (
    <Box sx={styles.bannerContainer} id="location">
      <Container sx={styles.bannerWrapper} maxWidth="xl">
        <Box sx={styles.bannerLeftColumn}>
          <a target="_blank" href={buttonLink} style={styles.bannerImageWrapper} rel="noopener noreferrer">
            <Box
              sx={{
                ...styles.bannerImageContainer,
                backgroundImage: `url(${image})`,
              }}
            />
          </a>
        </Box>
        <Box sx={styles.bannerRightColumn}>
          <Box sx={styles.bannerRightColumnContent}>
            <Typography sx={styles.bannerSubheader}>Location</Typography>
            <Typography sx={styles.bannerHeader}>{title}</Typography>
            <Typography sx={styles.bannerBodyText}>{addressOne}</Typography>
            <Typography sx={styles.bannerBodyText}>
              {addressTwo}, {addressThree}
            </Typography>
            <a target="_blank" href={buttonLink} style={{ textDecoration: 'none' }} rel="noopener noreferrer">
              <Box sx={styles.bannerButtonWrapper}>
                <Button variant="outlined" size="large" sx={styles.bannerButton}>
                  <Typography sx={styles.buttonLabel}>{locationButtonLabel}</Typography>
                </Button>
              </Box>
            </a>
            <Typography sx={styles.bannerSubheader}>Duration</Typography>
            <Typography sx={styles.bannerHeader}>{dates}</Typography>
            <Typography sx={styles.bannerBodyText}>{days}</Typography>
            <Typography sx={styles.bannerBodyText}>{hours}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default LocationBanner;
