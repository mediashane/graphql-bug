import React from 'react';
import toggleDialog from 'helpers/toggleDialog';

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import styles from './styles';

interface Props {
  infoTextOne: string;
  infoTextTwo: string;
  infoTextThree: string;
  headlineText?: string;
  sublineText?: string;
  backgroundColor?: string;
  textColor?: string;
  headerTextColor?: string;
  textSize?: string;
  headerTextSize?: string;
  fontFamily?: string;
  headerFontFamily?: string;
  buttonLabel?: string;
}

function SaleBanner({
  infoTextOne = '',
  infoTextTwo = '',
  infoTextThree = '',
  headlineText = '',
  sublineText = '',
  textColor = '#ffffff',
  backgroundColor = 'transparent',
  fontFamily = 'FreightDispMedium',
  buttonLabel = 'sale@elizabetheakins.com',
}: Props): JSX.Element {
  return (
    <Box sx={{ ...styles.centeredTextContainer, backgroundColor: backgroundColor }} id="details">
      <Container sx={styles.containerWrapper} maxWidth="xl">
        <Box sx={styles.centeredTextWrapper}>
          <Box sx={styles.columnOne}>
            <Typography
              sx={{
                ...styles.infoText,
                color: textColor,
              }}
            >
              {infoTextOne}
            </Typography>
            <Typography
              sx={{
                ...styles.infoText,
                color: textColor,
              }}
            >
              {infoTextTwo}
            </Typography>
            <Typography
              sx={{
                ...styles.infoText,
                color: textColor,
              }}
            >
              {infoTextThree}
            </Typography>
          </Box>
          <Box sx={styles.columnTwo}>
            <Typography
              sx={{
                ...styles.headlineText,
                color: textColor,
                fontFamily: fontFamily,
              }}
            >
              {headlineText}
            </Typography>
            <Typography
              sx={{
                ...styles.sublineText,
                color: textColor,
              }}
            >
              {sublineText}
            </Typography>
          </Box>
          <Box sx={styles.columnThree}>
            <Box sx={styles.buttonWrapper}>
              <Button
                onClick={() => toggleDialog('appointment')}
                variant="outlined"
                size="large"
                sx={{
                  ...styles.button,
                  color: textColor,
                  borderColor: textColor,
                  '&:hover': {
                    color: backgroundColor,
                    backgroundColor: textColor,
                    borderWidth: '1px',
                    borderColor: textColor,
                  },
                }}
              >
                <Typography sx={styles.buttonLabel}>{buttonLabel}</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SaleBanner;
