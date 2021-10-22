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

function HeaderSpacer(): JSX.Element {
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
          <Typography sx={styles.footerTitle}>Elizabeth Eakins Studio</Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>
              The Elizabeth Eakins Studio is located in South Norwalk Connecticut and is open Monday through Friday from
              9am to 5:00pm. Please call or email us to visit and we would be happy to have you come by.
            </Typography>
          </Box>

          <Typography sx={styles.footerBodyText}>5 Taft Street, South Norwalk, CT 06854</Typography>

          <Typography sx={styles.footerBodyText}>T: 203.831.9347</Typography>

          <Typography sx={styles.footerBodyText}>Email: Elizabeth.Eakins@elizabetheakins.com</Typography>

          <Typography sx={styles.footerBodyText}>Hours: 9:00am to 5:00pm M-F</Typography>
        </Box>
      </Box>
      <Box sx={styles.footerRightColumn}>
        <Box sx={styles.footerRightContent}>
          <Typography sx={styles.footerTitle}>Holland & Sherry</Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>
              Elizabeth Eakins is part of Holland & Sherry and available for purchase across their showrooms. Click
              below to find a location near you.
            </Typography>
          </Box>
          <Box sx={styles.footerMailingButtonWrapper}>
            <Button variant="outlined" size="large" sx={styles.footerButton}>
              Find a location near you
            </Button>
          </Box>
          <Typography sx={styles.footerTitle}>
            Follow Elizabeth Eakins on Instagram and join our mailing list
          </Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>
              Many of our new products and offers we first share in email and instagram. Follow us today
            </Typography>
          </Box>
          <Box sx={styles.footerMailingButtonWrapper}>
            <Box sx={styles.footerMailingListContainer}>
              <FormControl sx={styles.footerFormWrapper} variant="outlined" fullWidth>
                <OutlinedInput
                  sx={styles.footerFormInput}
                  id="email-input"
                  onKeyPress={onKeyPress}
                  value={formInput}
                  placeholder="Enter your email"
                  onChange={(event) => setFormInput(event.target.value)}
                  endAdornment={<InputIcon />}
                />
              </FormControl>
            </Box>
          </Box>
          <Box sx={styles.footerSocialMediaContainer}>
            <MUILink
              href="https://instagram.com/elizabetheakins/"
              target="_blank"
              rel="noopener"
              sx={styles.footerIgLink}
            >
              <InstagramIcon sx={styles.footerIgIcon} fontSize="large" />
              <Typography sx={styles.footerSocialMediaText}>Follow us on Instagram</Typography>
            </MUILink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderSpacer;
