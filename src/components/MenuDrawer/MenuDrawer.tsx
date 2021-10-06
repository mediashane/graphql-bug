import React, { Dispatch, SetStateAction, useEffect } from 'react';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type Props = {
  menuDrawer: boolean;
  setMenuDrawer: Dispatch<SetStateAction<boolean>>;
  menuLinks: { label: string; url: string; description: string; submenu: boolean; open: boolean }[];
};

type ButtonTarget = {
  buttonTarget: string;
  index?: number;
};

export default function DrawerMenu({ menuDrawer, setMenuDrawer, menuLinks }: Props) {
  const [submenuOpen, setSubmenuOpen] = React.useState(null);

  useEffect(() => {
    setSubmenuOpen(menuLinks);
  }, [menuLinks]);

  const handleClick = (index) => {
    const updateSubmenus = submenuOpen.map((el, i) => (i == index ? { ...el, open: !el.open } : el));
    setSubmenuOpen(updateSubmenus);
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

  const MenuItem = ({ buttonTarget }: ButtonTarget) => (
    <List>
      <ListItem button key={buttonTarget} onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
        <ListItemText primary={buttonTarget} />
      </ListItem>
      <Divider />
    </List>
  );

  const SubmenuItem = ({ buttonTarget }: ButtonTarget) => (
    <ListItem button sx={{ pl: 4 }}>
      <ListItemText primary={buttonTarget} />
    </ListItem>
  );

  const Submenu = ({ buttonTarget, index }: ButtonTarget) => {
    return (
      <List>
        <ListItem onClick={() => handleClick(index)} button key={buttonTarget}>
          <ListItemText primary={buttonTarget} />
          <ListItemIcon>{submenuOpen[index]?.open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        </ListItem>
        <Collapse in={submenuOpen[index]?.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <SubmenuItem buttonTarget={'All rugs'} />
          </List>
        </Collapse>
        <Divider />
      </List>
    );
  };

  if (menuLinks.length === 0 || !menuLinks[0] || !menuLinks[0]?.description) return null;

  const menuList = () => (
    <Box sx={{ width: 350 }} role="presentation">
      {menuLinks.map((link, index) => {
        if (link.description.includes('submenu'))
          return <Submenu buttonTarget={link.label} key={link.label} index={index} />;
        return <MenuItem buttonTarget={link.label} key={link.label} index={index} />;
      })}
    </Box>
  );

  return (
    <div>
      <Drawer anchor={'right'} open={menuDrawer} onClose={toggleDrawer()}>
        {menuList()}
      </Drawer>
    </div>
  );
}
