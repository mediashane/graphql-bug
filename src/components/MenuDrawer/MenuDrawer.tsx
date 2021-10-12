import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { client, MenuLocationEnum } from 'client';
import { colorBrandBlue } from 'style';

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

import MenuItem from './MenuItem';
import styles from './styles';
import SubmenuItem from './SubmenuItem';

type Props = {
  menuDrawer: boolean;
  setMenuDrawer: Dispatch<SetStateAction<boolean>>;
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

  return (
    <Drawer
      anchor={'right'}
      open={menuDrawer}
      onClose={toggleDrawer()}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{ style: { backgroundColor: colorBrandBlue } }}
    >
      <div style={styles.drawerContainer}>
        <div style={styles.closeContainer}>
          <CloseIcon sx={styles.close} onClick={() => setMenuDrawer(!menuDrawer)} />
        </div>
        <Box sx={{ width: 350, mt: -5 }} role="presentation">
          {drawerMenu.map((link, index) => {
            if (submenus.some((menuItem) => menuItem.parentId === link.id))
              return (
                <Box key={link.id}>
                  <List sx={{ ...styles.linkUnderlineLeft, pr: 2 }}>
                    <MUILink color="inherit" variant="inherit" underline="none">
                      <ListItem
                        onClick={() => handleClick(index)}
                        key={index}
                        sx={{
                          color: 'white',
                          '&.MuiButtonBase-root:hover': {
                            bgcolor: 'transparent',
                          },
                          cursor: 'pointer',
                        }}
                      >
                        <ListItemText
                          disableTypography
                          sx={{ fontSize: '1.5em', fontFamily: 'FreightBigPro' }}
                          primary={link.label}
                        />
                        <ListItemIcon sx={{ mr: '-30px', color: 'white' }}>
                          {submenus[index]?.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemIcon>
                      </ListItem>
                    </MUILink>
                    <Collapse in={submenus[index]?.open} timeout="auto" sx={{ pb: 2 }} unmountOnExit>
                      <List component="div" disablePadding>
                        {drawerMenu.map((sublink, subindex) => {
                          if (sublink.parentId === link.id) {
                            return (
                              <SubmenuItem
                                buttonTarget={sublink.label}
                                key={sublink.id}
                                index={subindex}
                                url={sublink.url}
                              />
                            );
                          }
                        })}
                      </List>
                    </Collapse>
                  </List>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.5)' }} />
                </Box>
              );
            if (!link.parentId)
              return (
                <MenuItem
                  buttonTarget={link.label}
                  key={index}
                  index={index}
                  url={link.url}
                  toggleDrawer={toggleDrawer}
                />
              );
          })}
        </Box>
        <List>
          <MUILink sx={styles.drawerLink} color="inherit" variant="inherit" underline="hover">
            <ListItem
              button
              sx={{
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <ListItemText sx={{ fontFamily: 'FreightBigPro' }} primary={'Book an Appointment'} disableTypography />
            </ListItem>
          </MUILink>
          <div style={styles.mailingListContainer}>
            <FormControl sx={{ width: '100%', borderColor: 'white' }} variant="outlined" fullWidth>
              <Typography sx={{ ml: 2, mb: 1, fontFamily: 'FreightBigPro', fontSize: '1.1rem' }}>
                Join our mailing list
              </Typography>
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
            underline="hover"
            sx={styles.igIcon}
          >
            <InstagramIcon fontSize="large" sx={{ ml: 1.5, mt: 3 }} />
          </MUILink>
        </List>
      </div>
    </Drawer>
  );
}
