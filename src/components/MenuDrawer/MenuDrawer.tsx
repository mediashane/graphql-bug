import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { client, MenuLocationEnum } from 'client';
import NextLink from 'next/link';

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
    <List>
      <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
        <MUILink color="inherit" variant="inherit" underline="none">
          <ListItem button key={buttonTarget} onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
            <ListItemText primary={buttonTarget} />
          </ListItem>
        </MUILink>
      </NextLink>
      <Divider />
    </List>
  );

  const SubmenuItem = ({ buttonTarget, id, url }: ButtonTarget) => (
    <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
      <MUILink color="inherit" variant="inherit" underline="none">
        <ListItem button sx={{ pl: 4 }}>
          <ListItemText primary={buttonTarget} />
        </ListItem>
      </MUILink>
    </NextLink>
  );

  const Submenu = ({ buttonTarget, index, id }: ButtonTarget) => {
    return (
      <List>
        <ListItem onClick={() => handleClick(index)} button key={buttonTarget}>
          <ListItemText primary={buttonTarget} />
          <ListItemIcon>{submenus[index]?.open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>
        <Collapse in={submenus[index]?.open} timeout="auto" unmountOnExit>
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
        <Divider />
      </List>
    );
  };

  const MenuList = () => (
    <Box sx={{ width: 350 }} role="presentation">
      {drawerMenu.map((link, index) => {
        if (drawerMenu.some((menuItem) => menuItem.parentId === link.id))
          return <Submenu buttonTarget={link.label} key={link.id} index={index} id={link.id} />;
        if (!link.parentId) return <MenuItem buttonTarget={link.label} key={link.id} index={index} url={link.url} />;
      })}
    </Box>
  );

  return (
    <div>
      <Drawer anchor={'right'} open={menuDrawer} onClose={toggleDrawer()}>
        <MenuList />
      </Drawer>
    </div>
  );
}
