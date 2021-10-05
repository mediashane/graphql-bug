const styles = {
  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 2,
  },
  headerLinksBox: {
    typography: 'body1',
    '& > :not(style) + :not(style)': {
      ml: 5,
    },
    display: {
      xs: 'none',
      sm: 'none',
      md: 'flex',
      lg: 'flex',
      xl: 'flex',
    },
  },
  menuIcon: {
    mr: 2,
    ml: 2,
    display: {
      xs: 'flex',
      sm: 'flex',
      md: 'none',
      lg: 'none',
      xl: 'none',
    },
  },
};

export default styles;
