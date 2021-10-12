import { colorBrandBrown, colorWhite } from 'style';

const styles = {
  headerContainer: {
    width: '100%',
    backgroundColor: colorWhite,
    zIndex: 2,
  },
  headerTitle: {
    flexGrow: 1,
    color: colorBrandBrown,
    fontFamily: 'FrizQuadrata',
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
    ml: 6,
    pb: 1,
    transform: 'scale(1.2)',
  },
};

export default styles;
