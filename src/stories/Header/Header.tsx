import React from 'react';
import NextLink from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MUILink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface Props {
  title?: string;
  mainMenu: { url: string; label: string }[];
}

function Header({ title, mainMenu }: Props): JSX.Element {
  const HeaderLinks = () => {
    return (
      <Box sx={styles.headerLinksBox}>
        {mainMenu?.map((link, index) => (
          <Typography sx={styles.headerLinks} key={index}>
            <NextLink href={link.url} passHref>
              <MUILink color="inherit" variant="inherit" underline="hover">
                {link.label}
              </MUILink>
            </NextLink>
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <Box sx={styles.headerContainer} position="fixed">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.headerTitle}>
            <NextLink href="/" passHref>
              <MUILink color="inherit" underline="none">
                {title}
              </MUILink>
            </NextLink>
          </Typography>
          <HeaderLinks />
          <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.menuIcon}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
