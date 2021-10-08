import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { client, MenuLocationEnum } from 'client';
import NextLink from 'next/link';

import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MUILink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './styles';

type Props = {
  menuDrawer: boolean;
  setMenuDrawer: Dispatch<SetStateAction<boolean>>;
};

type ButtonTarget = {
  buttonTarget: string;
  index?: number;
  id?: string;
  url?: string;
};

export default function DrawerMenu({ menuDrawer, setMenuDrawer }: Props) {
  const [submenus, setSubmenus] = React.useState(null);
  const { menuItems } = client.useQuery();
  const drawerMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.DRAWER },
  }).nodes;

  useEffect(() => {
    setSubmenus(drawerMenu);
  }, [drawerMenu]);

  const handleClick = (index) => {
    const updateSubmenus = submenus.map((submenu, i) => (i == index ? { ...submenu, open: !submenu.open } : submenu));
    setSubmenus(updateSubmenus);
  };

  const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setMenuDrawer(!menuDrawer);
  };

  if (drawerMenu.length === 0 || !drawerMenu[0].url) return null;

  const MenuItem = ({ buttonTarget, id, url }: ButtonTarget) => (
    <>
      <List sx={{ ...styles.linkUnderline }}>
        <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
          <MUILink color="inherit" variant="inherit" underline="none">
            <ListItem
              key={buttonTarget}
              onClick={toggleDrawer()}
              onKeyDown={toggleDrawer()}
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText primary={buttonTarget} />
            </ListItem>
          </MUILink>
        </NextLink>
      </List>
      <Divider />
    </>
  );

  const SubmenuItem = ({ buttonTarget, id, url }: ButtonTarget) => (
    <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
      <MUILink color="inherit" variant="inherit" underline="hover">
        <ListItem
          button
          disablePadding
          sx={{
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
            pl: 2,
          }}
        >
          <ListItemText primary={buttonTarget} />
        </ListItem>
      </MUILink>
    </NextLink>
  );

  const Submenu = ({ buttonTarget, index, id }: ButtonTarget) => {
    return (
      <>
        <List sx={{ ...styles.linkUnderline, pr: 2, pl: 2 }}>
          <MUILink color="inherit" variant="inherit" underline="none">
            <ListItem
              onClick={() => handleClick(index)}
              key={buttonTarget}
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText disableTypography sx={{ fontSize: '1.5em' }} primary={buttonTarget} />
              <ListItemIcon sx={{ mr: '-30px' }}>
                {submenus[index]?.open ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItem>
          </MUILink>
          <Collapse in={submenus[index]?.open} timeout="auto" sx={{ pb: 2 }} unmountOnExit>
            <List component="div" disablePadding>
              {drawerMenu.map((link, index) => {
                if (link.parentId === id) {
                  return (
                    <SubmenuItem buttonTarget={link.label} key={link.id} index={index} id={link.id} url={link.url} />
                  );
                }
              })}
            </List>
          </Collapse>
        </List>
        <Divider />
      </>
    );
  };

  const MenuList = () => (
    <Box sx={{ width: 350, mt: -5 }} role="presentation">
      {drawerMenu.map((link, index) => {
        if (drawerMenu.some((menuItem) => menuItem.parentId === link.id))
          return <Submenu buttonTarget={link.label} key={link.id} index={index} id={link.id} />;
        if (!link.parentId) return <MenuItem buttonTarget={link.label} key={link.id} index={index} url={link.url} />;
      })}
    </Box>
  );

  return (
    <Drawer anchor={'right'} open={menuDrawer} onClose={toggleDrawer()}>
      <div style={styles.drawerContainer}>
        <div style={styles.closeContainer}>
          <CloseIcon sx={styles.close} onClick={() => setMenuDrawer(!menuDrawer)} />
        </div>
        <MenuList />
        <MUILink color="inherit" variant="inherit" underline="none">
          <List>
            <ListItem
              button
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText primary={'Book an Appointment'} />
            </ListItem>
          </List>
        </MUILink>
      </div>
    </Drawer>
  );
}
