import React, { useState } from 'react';
import NextLink from 'next/link';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';

import styles from './styles';

interface Props {
  buttonImage: string;
  label: string;
  textColor: string;
  link: {
    url?: string;
    target?: string;
    title?: string;
    __typename?: string;
  };
}

function ImageCard({ buttonImage = '', label = '', textColor = '', link }: Props): JSX.Element {
  const [overlay, setOverlay] = useState(0.2);

  return (
    <NextLink href={String(link)} passHref prefetch={false}>
      <MUILink underline="none">
        <Box
          onMouseEnter={() => setOverlay(0.1)}
          onMouseLeave={() => setOverlay(0.2)}
          sx={{
            ...styles.threeImageButtonsCard,
            backgroundImage: `linear-gradient( rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay}) ), url(${buttonImage})`,
          }}
        >
          <Typography sx={{ ...styles.threeImageButtonsCardLabel, color: textColor }}>{label}</Typography>
        </Box>
      </MUILink>
    </NextLink>
  );
}

export default ImageCard;
