import React, { useEffect } from 'react';
import { client, MenuLocationEnum } from 'client';
import DrawerMenu from 'components/MenuDrawer/MenuDrawer';
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
  const [menusLoaded, setMenusLoaded] = React.useState(false);
  const [menuDrawer, setMenuDrawer] = React.useState(false);
  const { menuItems } = client.useQuery();
  const router = useRouter();
  const mainMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  useEffect(() => {
    if (mainMenu[0].url) {
      setMenusLoaded(true);
    }
  }, [mainMenu.length, mainMenu]);

  if (!menusLoaded) return null;

  const route = (url) => {
    return `/${url.split('/')[3]}`;
  };

  const isActive = (url) => {
    const path = route(url);
    return router.pathname == path ? 'always' : 'hover';
  };

  return (
    <Box sx={styles.headerContainer} position="fixed">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={styles.headerTitle}>
            <NextLink href="/" passHref>
              <MUILink color="inherit" variant="inherit" underline="none">
                {title ? title.toUpperCase() : null}
              </MUILink>
            </NextLink>
          </Typography>
          <Box sx={styles.headerLinksBox}>
            {mainMenu?.map((link, index) => (
              <NextLink href={route(link.url)} passHref key={index}>
                <MUILink color="inherit" variant="inherit" underline={isActive(link.url)} sx={{ fontSize: '0.9rem' }}>
                  {link.label ? link.label.toUpperCase() : null}
                </MUILink>
              </NextLink>
            ))}
          </Box>
          {menusLoaded ? (
            <IconButton
              onClick={() => setMenuDrawer(!menuDrawer)}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={styles.menuIcon}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
      <DrawerMenu menuDrawer={menuDrawer} setMenuDrawer={setMenuDrawer} />
    </Box>
  );
}

export default Header;
