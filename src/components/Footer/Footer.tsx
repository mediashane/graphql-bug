import React, { useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MUILink from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';

import styles from './styles';

interface Props {
  title: string;
  description: string;
  address: string;
  phoneNumber: string;
  email: string;
  hours: string;
  locationTitle: string;
  locationDescription: string;
  locationButtonLabel: string;
  socialTitle: string;
  socialDescription: string;
  emailPlaceholder: string;
  igCta: string;
  igLink: string;
}

function Footer({
  title = '',
  description = '',
  address = '',
  phoneNumber = '',
  email = '',
  hours = '',
  locationTitle = '',
  locationDescription = '',
  locationButtonLabel = '',
  socialTitle = '',
  socialDescription = '',
  emailPlaceholder = '',
  igCta = '',
  igLink = '',
}: Props): JSX.Element {
  const [formInput, setFormInput] = useState('');

  const onKeyPress = (e: any) => {
    if (e.which == 13) {
      submitEmail();
    }
  };

  const submitEmail = () => {
    alert(`EMAIL SUBMITTED: ${formInput}`);
  };

  const InputIcon = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => submitEmail()} type="submit" aria-label="join mailer input" edge="end">
          <ArrowForwardIcon />
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerLeftColumn}>
        <Box sx={styles.footerLeftColumnContent}>
          <Typography sx={styles.footerTitle}>{title}</Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>{description}</Typography>
          </Box>

          <Typography sx={styles.footerBodyText}>{address}</Typography>

          <Typography sx={styles.footerBodyText}>T: {phoneNumber}</Typography>

          <Typography sx={styles.footerBodyText}>Email: {email}</Typography>

          <Typography sx={styles.footerBodyText}>Hours: {hours}</Typography>
        </Box>
      </Box>
      <Box sx={styles.footerRightColumn}>
        <Box sx={styles.footerRightContent}>
          <Typography sx={styles.footerTitle}>{locationTitle}</Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>{locationDescription}</Typography>
          </Box>
          <Box sx={styles.footerMailingButtonWrapper}>
            <Button variant="outlined" size="large" sx={styles.footerButton}>
              {locationButtonLabel}
            </Button>
          </Box>
          <Typography sx={styles.footerTitle}>{socialTitle}</Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>{socialDescription}</Typography>
          </Box>
          <Box sx={styles.footerMailingButtonWrapper}>
            <Box sx={styles.footerMailingListContainer}>
              <FormControl sx={styles.footerFormWrapper} variant="outlined" fullWidth>
                <OutlinedInput
                  sx={styles.footerFormInput}
                  id="email-input"
                  onKeyPress={onKeyPress}
                  value={formInput}
                  placeholder={emailPlaceholder}
                  onChange={(event) => setFormInput(event.target.value)}
                  endAdornment={<InputIcon />}
                />
              </FormControl>
            </Box>
          </Box>
          <Box sx={styles.footerSocialMediaContainer}>
            <MUILink href={igLink} target="_blank" rel="noopener" sx={styles.footerIgLink}>
              <InstagramIcon sx={styles.footerIgIcon} fontSize="large" />
              <Typography sx={styles.footerSocialMediaText}>{igCta}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
