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
};

export default function MenuItem({ buttonTarget, url, index }: LinkTarget) {
  return (
    <>
      <List sx={styles.linkUnderlineLeft}>
        <NextLink href={url} passHref key={index} prefetch={false}>
          <MUILink underline="none">
            <ListItem key={index}>
              <ListItemText sx={styles.drawerLink} disableTypography primary={buttonTarget} />
            </ListItem>
          </MUILink>
        </NextLink>
      </List>
      <Divider sx={styles.divider} />
    </>
  );
}
