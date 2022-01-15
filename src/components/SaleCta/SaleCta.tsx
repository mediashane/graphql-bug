import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  isActive: boolean;
  textOverlineTop?: string;
  textOverlineBottom?: string;
  textHeadline: string;
  textBodyline: string;
  textSublineTop?: string;
  textSublineBottom?: string;
  textPostline: string;
  textColor?: string;
  media?: string;
}

function SaleCta({
  isActive = false,
  textOverlineTop = '',
  textOverlineBottom = '',
  textHeadline = '',
  textBodyline = '',
  textSublineTop,
  textSublineBottom,
  textPostline = '',
  textColor = '',
}: // media = 'images/rugsCollection.jpg',
Props): JSX.Element {
  if (!isActive) return null;

  return (
    <>
      {/* <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${media})` }}> */}
      <Box sx={{ ...styles.heroContainer, backgroundImage: `url('images/annualSaleHero.jpg')` }}>
        <Container sx={styles.heroWrapper} maxWidth="xl">
          <Box sx={{ ...styles.textContainer, color: textColor }}>
            <Fade delay={500}>
              <Typography sx={{ ...styles.overlineText, marginBottom: 0 }}>{textOverlineTop}</Typography>
              <Typography sx={styles.overlineText}>{textOverlineBottom}</Typography>
              <Typography sx={styles.headlineText}>{textHeadline}</Typography>
              <Typography sx={styles.bodylineText}>{textBodyline}</Typography>
              <Typography sx={{ ...styles.sublineText, marginBottom: 0 }}>{textSublineTop}</Typography>
              <Typography sx={styles.sublineText}>{textSublineBottom}</Typography>
              <Typography sx={styles.postlineText}>{textPostline}</Typography>
            </Fade>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SaleCta;
