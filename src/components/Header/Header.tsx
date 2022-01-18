import React from 'react';
import { client, MenuLocationEnum } from 'client';
import getRouteSlug from 'helpers/getRouteSlug';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import SvgLogo from './elizabethEakinsLogo';
import styles from './styles';

function Header(): JSX.Element {
  const router = useRouter();
  const trigger = useScrollTrigger();
  const { menuItems } = client.useQuery();
  const mainMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  // while waiting for the response from WordPress backend don't render
  if (!mainMenu[0]?.url || !mainMenu[0]?.label) {
    return null;
  }

  const isActive = (url) => {
    const path = getRouteSlug(url);
    return `${router.asPath}` == path ? styles.headerLinksActive : styles.headerLinksHover;
  };

  const HeaderLinks = () => {
    return (
      <Box sx={styles.headerLinksBox}>
        {mainMenu?.map((link, index) => (
          <Typography sx={styles.headerLinks} key={index}>
            <NextLink href={getRouteSlug(link.url)} passHref prefetch={false}>
              <MUILink color="inherit" variant="inherit" underline="none">
                <Box sx={isActive(link.url)}>{link.label}</Box>
              </MUILink>
            </NextLink>
          </Typography>
        ))}
      </Box>
    );
  };

  return (
    <>
      <Box sx={styles.headerContainer} position="fixed">
        <Slide direction="down" in={!trigger}>
          <AppBar position="static" sx={{ backgroundColor: '#ffffff' }} elevation={0}>
            <Toolbar>
              <Box sx={styles.headerTitle}>
                <NextLink href="/" prefetch={false} passHref>
                  {/* <MUILink color="inherit" variant="inherit" underline="none"> */}
                  <Box sx={styles.logoWrapper}>
                    <SvgLogo />
                  </Box>
                  {/* </MUILink> */}
                </NextLink>
              </Box>
              <HeaderLinks />
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
    </>
  );
}

export default Header;
