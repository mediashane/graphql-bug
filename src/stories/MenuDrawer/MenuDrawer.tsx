import React, { useEffect } from 'react';

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
  drawerMenu: {
    id: string;
    parentId: string;
    label: string;
    url: string;
  }[];
};

export default function MenuDrawer({ drawerMenu }: Props) {
  // submenu state object is dynamically created to match WordPress menus
  const [submenus, setSubmenus] = React.useState([]);
  const [formInput, setFormInput] = React.useState('');

  useEffect(() => {
    setSubmenus(drawerMenu);
  }, [drawerMenu]);

  const onKeyPress = (e: any) => {
    if (e.which == 13) {
      submitEmail();
    }
  };

  const submitEmail = () => {
    alert(`EMAIL SUBMITTED: ${formInput}`);
  };

  const handleClick = (index) => {
    const updateSubmenus = submenus.map((submenu, i) => (i == index ? { ...submenu, open: !submenu.open } : submenu));
    setSubmenus(updateSubmenus);
  };

  const ExpandIcon = ({ index }) => {
    if (submenus[index]?.open) return <ExpandLess />;
    return <ExpandMore />;
  };

  const SubmenuList = ({ link }) => {
    return (
      <List component="div" disablePadding>
        {drawerMenu.map((sublink, subindex) => {
          if (sublink.parentId === link.id) {
            return <SubmenuItem buttonTarget={sublink.label} key={subindex} url={sublink.url} />;
          }
        })}
      </List>
    );
  };

  const InputIcon = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => submitEmail()} type="submit" aria-label="join mailer input" edge="end">
          <ChevronRightIcon sx={{ color: 'white' }} />
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Drawer
      anchor={'right'}
      open={true}
      ModalProps={{ keepMounted: true }}
      PaperProps={{ style: styles.drawerBackground }}
    >
      <Box style={styles.drawerContainer}>
        <Box style={styles.closeContainer}>
          <CloseIcon sx={styles.close} />
        </Box>
        <Box sx={styles.menuContainer} role="presentation">
          {drawerMenu.map((link, index) => {
            // if a link has a parentId, make it a sublink of that parent
            if (submenus.some((menuItem) => menuItem.parentId === link.id))
              return (
                <Box key={index}>
                  <List sx={styles.linkUnderlineLeft}>
                    <MUILink underline="none">
                      <ListItem onClick={() => handleClick(index)}>
                        <ListItemText disableTypography sx={styles.drawerSubmenu} primary={link.label} />
                        <ListItemIcon sx={styles.expandIcon}>
                          <ExpandIcon index={index} />
                        </ListItemIcon>
                      </ListItem>
                    </MUILink>
                    {/* Collapse must be in top level return or else the animation stops working, known bug */}
                    <Collapse in={submenus[index]?.open} timeout="auto" sx={styles.collapse} unmountOnExit>
                      <SubmenuList link={link} />
                    </Collapse>
                  </List>
                  <Divider sx={styles.divider} />
                </Box>
              );
            // if the link doesn't have a parent, make it a top level link
            if (!link.parentId) return <MenuItem buttonTarget={link.label} key={index} index={index} url={link.url} />;
          })}
        </Box>
        <List>
          <MUILink sx={styles.drawerLinkWrapper} color="inherit" variant="inherit" underline="hover">
            <ListItem>
              <ListItemText sx={styles.drawerTextButton} primary={'Book an Appointment'} disableTypography />
            </ListItem>
          </MUILink>
          <Box style={styles.mailingListContainer}>
            <FormControl sx={styles.formWrapper} variant="outlined" fullWidth>
              <Typography sx={styles.formLabel}>Join our mailing list</Typography>
              <OutlinedInput
                sx={styles.formInput}
                id="email-input"
                onKeyPress={onKeyPress}
                value={formInput}
                placeholder="enter your email"
                onChange={(event) => setFormInput(event.target.value)}
                endAdornment={<InputIcon />}
              />
            </FormControl>
          </Box>
          <MUILink href="https://instagram.com/elizabetheakins/" target="_blank" rel="noopener" sx={styles.igLink}>
            <InstagramIcon sx={styles.igIcon} fontSize="large" />
          </MUILink>
        </List>
      </Box>
    </Drawer>
  );
}
