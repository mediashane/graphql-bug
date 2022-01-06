import React, { Dispatch, SetStateAction } from 'react';
import getRouteSlug from 'helpers/getRouteSlug';
import NextLink from 'next/link';

import MUILink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import styles from './styles';

type LinkTarget = {
  buttonTarget: string;
  url: string;
  setMenuDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function SubmenuItem({ buttonTarget, url, setMenuDrawer }: LinkTarget) {
  return (
    <NextLink href={getRouteSlug(url)} passHref prefetch={false}>
      <MUILink sx={styles.drawerLinkWrapper} underline="hover">
        <ListItem disablePadding onClick={() => setMenuDrawer(false)} onKeyDown={() => setMenuDrawer(false)}>
          <ListItemText disableTypography sx={styles.drawerSublink} primary={buttonTarget} />
        </ListItem>
      </MUILink>
    </NextLink>
  );
}
