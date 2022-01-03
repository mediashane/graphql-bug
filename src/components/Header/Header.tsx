import React from 'react';
import { client, MenuLocationEnum } from 'client';
import HeaderSpacer from 'components/HeaderSpacer/HeaderSpacer';
import MenuDrawer from 'components/MenuDrawer/MenuDrawer';
import getRouteSlug from 'helpers/getRouteSlug';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MUILink from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import styles from './styles';

interface Props {
  title?: string;
}

function Header({ title = 'Elizabeth Eakins' }: Props): JSX.Element {
  const router = useRouter();
  const trigger = useScrollTrigger();
  const [menuDrawer, setMenuDrawer] = React.useState(false);
  const { menuItems } = client.useQuery();
  const mainMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  // while waiting for the response from WordPress backend don't render
  if (!mainMenu[0]?.url || !mainMenu[0]?.label) {
    return (
      <>
        <Box sx={styles.headerContainer} position="fixed">
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={styles.headerTitle}>
                <NextLink href="/" passHref>
                  <MUILink color="inherit" variant="inherit" underline="none">
                    {title}
                  </MUILink>
                </NextLink>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <HeaderSpacer />
      </>
    );
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
            <NextLink href={getRouteSlug(link.url)} passHref>
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
              <Typography variant="h6" component="div" sx={styles.headerTitle}>
                <NextLink href="/" passHref>
                  <MUILink color="inherit" variant="inherit" underline="none">
                    {title}
                  </MUILink>
                </NextLink>
              </Typography>
              <HeaderLinks />
              <IconButton
                onClick={() => setMenuDrawer(!menuDrawer)}
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={styles.menuIcon}
              >
                <Image src="/images/hamburger.svg" alt="menu-icon" width={24} height={18} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
      <MenuDrawer menuDrawer={menuDrawer} setMenuDrawer={setMenuDrawer} />
    </>
  );
}

export default Header;
