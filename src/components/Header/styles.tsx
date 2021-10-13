import { colorBrandBrown, colorWhite, frizQuadrata } from 'style';

const styles = {
  headerContainer: {
    width: '100%',
    backgroundColor: colorWhite,
    zIndex: 2,
    transition: 'all 1s ease',
  },
  headerTitle: {
    flexGrow: 1,
    color: colorBrandBrown,
    fontFamily: frizQuadrata,
    textTransform: 'uppercase' as const,
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
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
  },
  menuIcon: {
    ml: 6,
    pb: 1,
    transform: 'scale(1.2)',
  },
};

export default styles;
