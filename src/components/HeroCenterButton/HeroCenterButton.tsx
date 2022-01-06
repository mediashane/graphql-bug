import React from 'react';
import Fade from 'react-reveal/Fade';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  textOverline?: string;
  textHeadline: string;
  textColor?: string;
  hoverTextColor?: string;
  buttonLabel?: string;
  media?: string;
}

function HeroCenterButton({
  textOverline = '',
  textHeadline = '',
  textColor = '',
  hoverTextColor = '',
  buttonLabel = '',
  media = 'images/rugsCollection.jpg',
}: Props): JSX.Element {
  return (
    <>
      <Box sx={{ ...styles.heroContainer, backgroundImage: `url(${media})` }}>
        <Container sx={styles.heroWrapper} maxWidth="xl">
          <Box sx={{ ...styles.textContainer, color: textColor }}>
            <Fade delay={500}>
              <Typography sx={styles.introTitleText}>{textOverline}</Typography>
              <Typography sx={styles.titleText}>{textHeadline}</Typography>
              <Box sx={styles.heroButtonWrapper}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    ...styles.heroButton,
                    color: textColor,
                    '&:hover': {
                      color: hoverTextColor,
                      backgroundColor: textColor,
                      borderWidth: '2px',
                      borderColor: textColor,
                    },
                  }}
                >
                  <Typography sx={styles.heroButtonText}>{buttonLabel}</Typography>
                </Button>
              </Box>
            </Fade>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HeroCenterButton;
