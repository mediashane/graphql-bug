import React from 'react';
import NextLink from 'next/link';

import MUILink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import styles from './styles';

type LinkTarget = {
  buttonTarget: string;
  index: number;
  url: string;
};

export default function SubmenuItem({ buttonTarget, url }: LinkTarget) {
  return (
    <NextLink href={`/${url.split('/')[3]}`} passHref>
      <MUILink sx={styles.drawerLink} color="inherit" variant="inherit" underline="hover">
        <ListItem
          button
          disablePadding
          sx={{
            color: 'white',
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
            pl: 2,
          }}
        >
          <ListItemText primary={buttonTarget} />
        </ListItem>
      </MUILink>
    </NextLink>
  );
}
