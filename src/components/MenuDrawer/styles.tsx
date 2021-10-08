const styles = {
  drawerContainer: {
    paddingLeft: '16px',
    paddingRight: '16px',
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
    opacity: '0.4',
    transition: 'all 0.7s ease',
    zIndex: 2,

    '&:hover': {
      transform: 'rotate(-90deg)',
      opacity: '0.7',
    },
  },
  linkUnderline: {
    position: 'relative',
    color: '#000',
    textDecoration: 'none',

    '&:hover': {
      color: '#000',
    },

    '&:before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: '#000',
      transform: 'scaleX(0)',
      transformOrigin: 'top left',
      transition: 'transform 0.3s ease',
    },

    '&:hover:before': {
      transform: 'scaleX(1)',
    },
  },
};

export default styles;
