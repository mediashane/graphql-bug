import React from 'react';
import getRouteSlug from 'helpers/getRouteSlug';
import NextLink from 'next/link';

import MUILink from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import styles from './styles';

type LinkTarget = {
  buttonTarget: string;
  url: string;
};

export default function SubmenuItem({ buttonTarget, url }: LinkTarget) {
  return (
    <NextLink href={getRouteSlug(url)} passHref>
      <MUILink sx={styles.drawerLinkWrapper} underline="hover">
        <ListItem disablePadding>
          <ListItemText disableTypography sx={styles.drawerSublink} primary={buttonTarget} />
        </ListItem>
      </MUILink>
    </NextLink>
  );
}
