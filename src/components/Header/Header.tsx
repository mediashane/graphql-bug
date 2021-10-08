import * as React from 'react';
import { client, MenuLocationEnum } from 'client';
import DrawerMenu from 'components/MenuDrawer/MenuDrawer';
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
}

function Header({ title = 'Elizabeth Eakins' }: Props): JSX.Element {
  const [menuDrawer, setMenuDrawer] = React.useState(false);
  const { menuItems } = client.useQuery();
  const mainMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  if (mainMenu.length === 0 || !mainMenu[0].url) return null;

  return (
    <Box sx={styles.headerContainer} position="fixed">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NextLink href="/" passHref>
              <MUILink color="inherit" variant="inherit" underline="none">
                {title}
              </MUILink>
            </NextLink>
          </Typography>
          <Box sx={styles.headerLinksBox}>
            {mainMenu?.map((link) => (
              <NextLink href={`/${link.url.split('/')[3]}`} passHref key={`${link.url}$-menu`}>
                <MUILink color="inherit" variant="inherit" underline="none">
                  {link.label}
                </MUILink>
              </NextLink>
            ))}
          </Box>
          <IconButton
            onClick={() => setMenuDrawer(!menuDrawer)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.menuIcon}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerMenu menuDrawer={menuDrawer} setMenuDrawer={setMenuDrawer} />
    </Box>
  );
}

export default Header;
