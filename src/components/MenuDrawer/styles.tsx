import { colorBrandBlue, colorWhite, freightBigPro } from '../../style';

const styles = {
  drawerBackground: {
    backgroundColor: colorBrandBlue,
  },
  drawerContainer: {
    paddingLeft: '16px',
    paddingRight: '16px',
    height: 'auto',
    backgroundColor: colorBrandBlue,
    color: colorWhite,
  },
  closeContainer: {
    display: 'flex',
    justifyContent: 'end',
  },
  close: {
    alignSelf: 'flex-end',
    padding: '5px 5px 0 0',
    width: '50px',
    height: '50px',
    opacity: '0.7',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    zIndex: '2',

    '&:hover': {
      opacity: '1',
    },
  },
  menuContainer: {
    marginTop: '-35px',
    width: '350px',
  },
  drawerLinkWrapper: {
    '&:hover': {
      color: colorWhite,
      textDecorationColor: colorWhite,
    },
  },
  drawerLink: {
    color: colorWhite,
    fontFamily: freightBigPro,
  },
  drawerSubmenu: {
    color: colorWhite,
    fontSize: '1.5em',
    fontFamily: freightBigPro,
    cursor: 'pointer',
  },
  expandIcon: {
    marginRight: '-32px',
    color: colorWhite,
  },
  collapse: {
    paddingBottom: '16px',
  },
  drawerSublink: {
    paddingLeft: '16px',
    color: colorWhite,
  },
  drawerTextButton: {
    fontFamily: freightBigPro,
    cursor: 'pointer',
  },
  linkUnderlineLeft: {
    paddingRight: '16px',
    color: colorWhite,
    textDecoration: 'none',

    '&:hover': {
      color: colorWhite,
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '2px',
      bottom: '0',
      left: '0',
      backgroundColor: colorWhite,
      transform: 'scaleX(0)',
      transformOrigin: 'top left',
      transition: 'transform 0.3s ease',
    },

    '&:hover:before': {
      transform: 'scaleX(1)',
    },
  },
  mailingListContainer: {
    paddingTop: '24px',
    fontFamily: freightBigPro,
  },
  formInput: {
    color: colorWhite,
    fontFamily: freightBigPro,
    input: {
      '&::placeholder': {
        color: colorWhite,
        opacity: '0.7',
        fontSize: '1.1rem',
      },
    },
    '& fieldset': {
      borderColor: `${colorWhite} !important`,
      borderRadius: 0,
    },
  },
  divider: {
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  formWrapper: {
    width: '100%',
    borderColor: colorWhite,
  },
  formLabel: {
    marginLeft: '16px',
    marginBottom: '8px',
    fontFamily: freightBigPro,
    fontSize: '1.1rem',
  },
  inputIcon: {
    color: colorWhite,
  },
  igLink: {
    color: colorWhite,
    opacity: '1',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: colorWhite,
      opacity: '0.7',
    },
  },
  igIcon: {
    marginLeft: '12px',
    marginTop: '24px',
  },
};

export default styles;
