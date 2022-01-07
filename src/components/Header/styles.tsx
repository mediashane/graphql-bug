import { colorBrandBrown, colorDarkGrey, proximaNova } from '../../style';

const styles = {
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    backgroundColor: 'transparent',
    zIndex: 2,
    transition: 'all 1s ease',
  },
  headerTitle: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
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
  headerLinks: {
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
    position: 'relative' as const,
  },
  headerLinksHover: {
    '&:before': {
      transform: 'translateY(15px)',
      transition: '300ms',
      height: '1px',
      content: '""',
      position: 'absolute' as const,
      backgroundColor: colorBrandBrown,
      width: '100%',
      bottom: '5px',
      opacity: 0,
    },

    '&:hover:before': {
      bottom: '10px',
      opacity: 1,
    },
  },
  headerLinksActive: {
    '&:before': {
      transform: 'translateY(10px)',
      transition: '300ms',
      height: '1px',
      content: '""',
      position: 'absolute' as const,
      backgroundColor: colorBrandBrown,
      width: '100%',
      bottom: '5px',
      opacity: 1,
    },
  },
  menuIcon: {
    ml: 6,
    pb: 1,
    transform: 'scale(1.2)',
  },
};

export default styles;
