import { colorBrandBlue, colorWhite } from 'style';

const styles = {
  MuiOutlinedInput: {
    root: {
      '&$focused $notchedOutline': {
        borderColor: 'green',
        borderWidth: 1,
      },
    },
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '350px',
    height: '100%',
    backgroundColor: colorBrandBlue,
    color: '#fff',
  },
  drawerContainer: {
    paddingLeft: '16px',
    paddingRight: '16px',
    height: '100%',
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
    zIndex: '2',

    '&:hover': {
      opacity: '1',
    },
  },
  linkUnderlineLeft: {
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
    padding: '20px 0 0 0',
    '&.MuiFormControl-root': {
      '&.MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: colorWhite,
        },
      },
    },
  },
  mailingListInput: {
    color: colorWhite,
  },
};

export default styles;
