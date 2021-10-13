import React from 'react';
import NextLink from 'next/link';

import Divider from '@mui/material/Divider';
import MUILink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import styles from './styles';

type LinkTarget = {
  buttonTarget: string;
  index: number;
  url: string;
  toggleDrawer: () => void;
};

export default function MenuItem({ buttonTarget, url, index, toggleDrawer }: LinkTarget) {
  return (
    <>
      <List sx={{ ...styles.linkUnderlineLeft }}>
        <NextLink href={`/${url.split('/')[3]}`} passHref key={index}>
          <MUILink color="inherit" variant="inherit" underline="none">
            <ListItem
              key={index}
              onClick={() => toggleDrawer()}
              onKeyDown={() => toggleDrawer()}
              sx={{
                color: 'white',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText disableTypography sx={{ fontFamily: 'FreightBigPro' }} primary={buttonTarget} />
            </ListItem>
          </MUILink>
        </NextLink>
      </List>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
    </>
  );
}
