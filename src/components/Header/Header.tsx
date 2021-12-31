import React from 'react';
import { client, MenuLocationEnum } from 'client';
import HeaderSpacer from 'components/HeaderSpacer/HeaderSpacer';
import MenuDrawer from 'components/MenuDrawer/MenuDrawer';
import getRouteSlug from 'helpers/getRouteSlug';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

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
}

function Header({ title = 'Elizabeth Eakins' }: Props): JSX.Element {
  const [menuDrawer, setMenuDrawer] = React.useState(false);
  const { menuItems } = client.useQuery();
  const router = useRouter();
  const mainMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  // while waiting for the response from WordPress backend don't render
  if (!mainMenu[0]?.url || !mainMenu[0]?.label) {
    return (
      <>
        <Box sx={styles.headerContainer} position="fixed">
          <AppBar position="static" color="transparent">
            <Toolbar>
              <Typography variant="h6" component="div" sx={styles.headerTitle}>
                <NextLink href="/" passHref shallow={true}>
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
    return `${router.pathname}` == path ? 'always' : 'hover';
  };

  const HeaderLinks = () => {
    return (
      <Box sx={styles.headerLinksBox}>
        {mainMenu?.map((link, index) => (
          <Typography sx={styles.headerLinks} key={index}>
            <NextLink href={getRouteSlug(link.url)} passHref shallow={true}>
              <MUILink color="inherit" variant="inherit" underline={isActive(link.url)}>
                {link.label}
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
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6" component="div" sx={styles.headerTitle}>
              <NextLink href="/" passHref shallow={true}>
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
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <MenuDrawer menuDrawer={menuDrawer} setMenuDrawer={setMenuDrawer} />
      </Box>
      <HeaderSpacer />
    </>
  );
}

export default Header;
