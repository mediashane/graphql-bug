import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactCard from '../ContactCard/ContactCard';

import styles from './styles';

interface Props {
  cards: {
    location: string;
    addressOne: string;
    addressTwo: string;
    addressThree: string;
    phoneNumber?: string;
    email?: string;
  }[];
  sectionLabel?: string;
  largeLabel: boolean;
}

const fontSizeLarge = {
  xs: '5.5vw',
  sm: '2.5rem',
  md: '2.5rem',
  lg: '2.5rem',
};

const fontSizeSmall = {
  xs: '4.5vw',
  sm: '2rem',
  md: '2rem',
  lg: '2rem',
};

function ContactList({ cards = [], sectionLabel = 'HOLLAND & SHERRY', largeLabel = true }: Props): JSX.Element {
  return (
    <Container sx={styles.cardListContainer} maxWidth="xl">
      <Typography sx={{ ...styles.sectionLabel, fontSize: largeLabel ? fontSizeLarge : fontSizeSmall }}>
        {sectionLabel}
      </Typography>
      <Box sx={styles.cardListWrapper}>
        {cards.map((card, index) => {
          const { location, addressOne, addressTwo, addressThree, phoneNumber, email } = card;

          return (
            <ContactCard
              location={location}
              addressOne={addressOne}
              addressTwo={addressTwo}
              addressThree={addressThree}
              phoneNumber={phoneNumber}
              email={email}
              key={index}
            />
          );
        })}
      </Box>
    </Container>
  );
}

export default ContactList;
