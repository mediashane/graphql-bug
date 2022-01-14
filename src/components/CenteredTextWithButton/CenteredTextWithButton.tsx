import React from 'react';

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  text: string;
  headerText?: string;
  backgroundColor?: string;
  textColor?: string;
  headerTextColor?: string;
  textSize?: string;
  headerTextSize?: string;
  fontFamily?: string;
  headerFontFamily?: string;
  buttonEmail?: string;
}

function CenteredTextWithButton({
  text = '',
  headerText = '',
  textColor = '#333333',
  headerTextColor = '#666666',
  backgroundColor = 'transparent',
  textSize = '32',
  headerTextSize = '24',
  fontFamily = 'FreightDispMedium',
  headerFontFamily = 'ProximaNovaRegular',
  buttonEmail = 'sale@elizabetheakins.com',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.centeredTextContainer, backgroundColor: backgroundColor }} id="details">
      <Container maxWidth="xl">
        <Box sx={styles.centeredTextWrapper}>
          <Box sx={styles.headerTextContainer}>
            <Typography
              sx={{
                fontSize: `${headerTextSize}px`,
                color: headerTextColor,
                fontFamily: headerFontFamily,
              }}
            >
              {headerText}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: {
                xs: '22px',
                sm: '22px',
                md: `${textSize}px`,
                lg: `${textSize}px`,
                xl: `${textSize}px`,
              },
              color: textColor,
              fontFamily: fontFamily,
            }}
          >
            {text}
          </Typography>
          <a href={`mailto:${buttonEmail}`} style={{ textDecoration: 'none' }}>
            <Box sx={styles.buttonWrapper}>
              <Button variant="outlined" size="large" sx={styles.button}>
                <Typography sx={styles.buttonLabel}>{buttonEmail}</Typography>
              </Button>
            </Box>
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default CenteredTextWithButton;
