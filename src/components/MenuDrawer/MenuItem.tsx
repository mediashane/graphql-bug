import React, { Dispatch, SetStateAction } from 'react';
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
  setMenuDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function MenuItem({ buttonTarget, url, index, setMenuDrawer }: LinkTarget) {
  return (
    <>
      <List sx={styles.linkUnderlineLeft}>
        <NextLink href={getRouteSlug(url)} passHref key={index} prefetch={false}>
          <MUILink underline="none">
            <ListItem key={index} onClick={() => setMenuDrawer(false)} onKeyDown={() => setMenuDrawer(false)}>
              <ListItemText sx={styles.drawerLink} disableTypography primary={buttonTarget} />
            </ListItem>
          </MUILink>
        </NextLink>
      </List>
      <Divider sx={styles.divider} />
    </>
  );
}
