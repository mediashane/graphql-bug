import * as React from 'react';
import { client, MenuLocationEnum } from 'client';
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
  const { menuItems } = client.useQuery();
  const wordpressLinks = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;

  const links = wordpressLinks.map((link) => {
    if (link?.url) return `https://elizabeth-eakins-2021-koalition.vercel.app/${link.url.split('/')[3]}`;
    return 'https://elizabeth-eakins-2021-koalition.vercel.app';
  });

  // determine localhost URLs if in development environment
  const environment = process.env.NODE_ENV;
  const devLinks = wordpressLinks.map((link) => {
    if (link?.url) return `http://localhost:3000/${link.url.split('/')[3]}`;
    return `http://localhost:3000/`;
  });

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
            {wordpressLinks?.map((link, index) => (
              <NextLink
                href={environment === 'development' ? devLinks[index] : links[index]}
                passHref
                key={`${link.label}$-menu`}
              >
                <MUILink color="inherit" variant="inherit" underline="none">
                  {link.label}
                </MUILink>
              </NextLink>
            ))}
          </Box>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={styles.menuIcon}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
