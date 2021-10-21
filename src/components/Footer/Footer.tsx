import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import styles from './styles';

function HeaderSpacer(): JSX.Element {
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
          <Typography sx={styles.footerBodyText}>Find a location near you</Typography>
          <Typography sx={styles.footerTitle}>
            Follow Elizabeth Eakins on Instagram and join our mailing list
          </Typography>
          <Box sx={styles.footerBodyTextContainer}>
            <Typography sx={styles.footerBodyText}>
              Many of our new products and offers we first share in email and instagram. Follow us today
            </Typography>
          </Box>
          <Typography sx={styles.footerBodyText}>Enter your email</Typography>
          <Typography sx={styles.footerBodyText}>Follow us on Instagram</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderSpacer;
