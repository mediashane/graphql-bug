import { colorBrandBlue, colorWhite, freightBigProMediumItalic, freightBigProSemibold } from '../../style';

const styles = {
  threeImageExploreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: {
      xs: '586px',
      sm: '586px',
      md: '413px',
      lg: '488px',
      xl: '563px',
    },
  },
  threeImageExploreContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '87.5%',
    height: '100%',
  },
  threeImageExploreTitle: {
    color: colorBrandBlue,
    fontSize: '2.5rem',
    fontStyle: 'italic' as const,
    fontFamily: freightBigProMediumItalic,
    lineHeight: 1,
  },
  threeImageExploreCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-between',
      sm: 'space-between',
      md: 'space-around',
      lg: 'space-between',
      xl: 'space-between',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    marginTop: {
      xs: '0px',
      sm: '10px',
      md: '20px',
      lg: '40px',
      xl: '40px',
    },
    width: '100%',
    height: '70%',
  },
  threeImageExploreCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: {
      xs: '20px',
      sm: '20px',
      md: '0px',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '250px',
      lg: '325px',
      xl: '400px',
    },
    height: {
      xs: '150%',
      sm: '150%',
      md: '250px',
      lg: '325px',
      xl: '400px',
    },
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    cursor: 'pointer',
  },
  threeImageExploreCardLabel: {
    color: colorWhite,
    fontSize: '3rem',
    fontFamily: freightBigProSemibold,
  },
};

export default styles;
