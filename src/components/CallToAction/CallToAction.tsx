import React from 'react';
import Link from 'next/link';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  textHeadline: string;
  textParagraph: string;
  textColor: string;
  cardBackgroundColor: string;
  buttonLabel: string;
  buttonUrl: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  media: string;
}

function CallToAction({
  textHeadline = '',
  textParagraph = '',
  textColor = '',
  cardBackgroundColor = '',
  buttonLabel = '',
  media = '',
  buttonUrl = '',
  buttonTextColor = '',
  buttonBackgroundColor = 'transparent',
}: Props): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Box sx={styles.ctaContainer}>
        <Box sx={{ ...styles.ctaContent, backgroundImage: `url(${media})` }}>
          <Box sx={{ ...styles.ctaCard, backgroundColor: cardBackgroundColor }}>
            <Box sx={styles.ctaTextContainer}>
              <Typography sx={{ ...styles.ctaTextHeadline, color: textColor }}>{textHeadline}</Typography>
              <Box sx={{ ...styles.ctaMobileImage, backgroundImage: `url(${media})` }} />
              <Typography variant="subtitle1" sx={{ ...styles.ctaTextParagraph, color: textColor }}>
                {textParagraph}
              </Typography>
              <Link href={buttonUrl} passHref>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    ...styles.ctaButton,
                    color: buttonTextColor,
                    backgroundColor: buttonBackgroundColor,
                    '&:hover': {
                      color: cardBackgroundColor,
                      backgroundColor: textColor,
                      borderColor: textColor,
                      borderWidth: '2px',
                    },
                  }}
                >
                  {buttonLabel}
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default CallToAction;
