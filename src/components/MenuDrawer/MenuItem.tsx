import React from 'react';
import getRouteSlug from 'helpers/getRouteSlug';
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
      <List sx={styles.linkUnderlineLeft}>
        <NextLink href={getRouteSlug(url)} passHref key={index}>
          <MUILink underline="none">
            <ListItem key={index} onClick={() => toggleDrawer()} onKeyDown={() => toggleDrawer()}>
              <ListItemText sx={styles.drawerLink} disableTypography primary={buttonTarget} />
            </ListItem>
          </MUILink>
        </NextLink>
      </List>
      <Divider sx={styles.divider} />
    </>
  );
}
