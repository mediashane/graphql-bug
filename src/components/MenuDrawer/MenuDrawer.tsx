import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { client, MenuLocationEnum } from 'client';
import NextLink from 'next/link';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MUILink from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';

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
  const [submenus, setSubmenus] = React.useState([]);
  const [mailingInput, setMailingInput] = React.useState('');
  const { menuItems } = client.useQuery();
  const drawerMenu = menuItems({
    first: 100,
    where: { location: MenuLocationEnum.DRAWER },
  }).nodes;

  useEffect(() => {
    setSubmenus(drawerMenu);
  }, [drawerMenu]);

  const onKeyPress = (e: any) => {
    if (e.which == 13) {
      submitEmail();
    }
  };

  const submitEmail = () => {
    alert(`EMAIL SUBMITTED: ${mailingInput}`);
  };

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

  // if (drawerMenu.length === 0 || !drawerMenu[0].url) return null;

  const MenuItem = ({ buttonTarget, id, url }: ButtonTarget) => (
    <>
      <List sx={{ ...styles.linkUnderlineLeft }}>
        <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
          <MUILink color="inherit" variant="inherit" underline="none">
            <ListItem
              key={buttonTarget}
              onClick={toggleDrawer()}
              onKeyDown={toggleDrawer()}
              sx={{
                color: 'white',
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
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />
    </>
  );

  const SubmenuItem = ({ buttonTarget, id, url }: ButtonTarget) => (
    <NextLink href={`/${url.split('/')[3]}`} passHref key={`${id}$-menu`}>
      <MUILink color="inherit" variant="inherit" underline="hover">
        <ListItem
          button
          disablePadding
          sx={{
            color: 'white',
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

  const Submenu = ({ buttonTarget, index, id }: ButtonTarget) => (
    <>
      <List sx={{ ...styles.linkUnderlineLeft, pr: 2 }}>
        <MUILink color="inherit" variant="inherit" underline="none">
          <ListItem
            onClick={() => handleClick(index)}
            key={buttonTarget}
            sx={{
              color: 'white',
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'transparent',
              },
            }}
          >
            <ListItemText disableTypography sx={{ fontSize: '1.5em' }} primary={buttonTarget} />
            <ListItemIcon sx={{ mr: '-30px', color: 'white' }}>
              {submenus[index]?.open ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
          </ListItem>
        </MUILink>
        <Collapse in={submenus[index]?.open} timeout="auto" sx={{ pb: 2 }} unmountOnExit>
          <List component="div" disablePadding>
            {drawerMenu.map((link, index) => {
              if (link.parentId === id) {
                return (
                  <SubmenuItem
                    buttonTarget={link.label}
                    key={link.url + link.id}
                    index={index}
                    id={link.id}
                    url={link.url}
                  />
                );
              }
            })}
          </List>
        </Collapse>
      </List>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />
    </>
  );

  const MenuList = () => (
    <Box sx={{ width: 350, mt: -5 }} role="presentation">
      {drawerMenu.map((link, index) => {
        if (submenus.some((menuItem) => menuItem.parentId === link.id))
          return <Submenu buttonTarget={link.label} key={link.id + link.id} index={index} id={link.id} />;
        if (!link.parentId)
          return <MenuItem buttonTarget={link.label} key={link.url + link.id} index={index} url={link.url} />;
      })}
    </Box>
  );

  return (
    <Drawer
      anchor={'right'}
      open={menuDrawer}
      onClose={toggleDrawer()}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div style={styles.drawerContainer}>
        <div style={styles.closeContainer}>
          <CloseIcon sx={styles.close} onClick={() => setMenuDrawer(!menuDrawer)} />
        </div>
        <MenuList />
        <List>
          <MUILink color="inherit" variant="inherit" underline="hover">
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
          </MUILink>
          <div style={styles.mailingListContainer}>
            <FormControl sx={{ ml: 1, width: '25ch', borderColor: 'white' }} variant="outlined" fullWidth>
              <Typography sx={{ m: 1 }}>Join our mailing list</Typography>
              <OutlinedInput
                sx={styles.mailingListInput}
                id="email-input"
                onKeyPress={onKeyPress}
                value={mailingInput}
                placeholder="enter your email"
                onChange={(event) => setMailingInput(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => submitEmail()} type="submit" aria-label="join mailer input" edge="end">
                      <ChevronRightIcon sx={{ color: 'white' }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <MUILink
            href="https://instagram.com/elizabetheakins/"
            target="_blank"
            rel="noopener"
            color="inherit"
            variant="inherit"
            underline="none"
          >
            <InstagramIcon fontSize="large" sx={{ ml: 1.5, mt: 3 }} />
          </MUILink>
        </List>
      </div>
    </Drawer>
  );
}
