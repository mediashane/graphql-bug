import React from 'react';
import { scroller } from 'react-scroll';
import toggleDialog from 'helpers/toggleDialog';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ActionButton from './ActionButton';
import styles from './styles';

interface Props {
  labelOne: string;
  labelTwo: string;
  labelThree: string;
  labelFour: string;
  email: string;
  backgroundColor?: string;
}

function FourButtonsGroup({
  labelOne = '',
  labelTwo = '',
  labelThree = '',
  labelFour = '',
  email = 'sale@elizabetheakins.com',
  backgroundColor = '#F7F7F7',
}: Props): JSX.Element {
  const mailTo = (emailAddress) => {
    window.location.assign(`mailto:${emailAddress}`);
  };

  const scrollTo = (anchorTag) => {
    scroller.scrollTo(anchorTag, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Box sx={{ ...styles.fourButtonsGroupContainer, backgroundColor: backgroundColor }}>
      <Container maxWidth="xl">
        <Box sx={styles.fourButtonsGroupContent}>
          <Box sx={styles.fourButtonsGroupCards}>
            <ActionButton label={labelOne} action={() => scrollTo('details')} />
            <ActionButton label={labelTwo} action={() => scrollTo('location')} />
            <ActionButton label={labelThree} action={() => toggleDialog('appointment')} />
          </Box>
          <Box sx={styles.ctaWrapper}>
            <Typography sx={styles.ctaText}>Want to learn more?</Typography>
          </Box>

          <ActionButton label={labelFour} email={email} action={() => mailTo(email)} />
        </Box>
      </Container>
    </Box>
  );
}

export default FourButtonsGroup;
