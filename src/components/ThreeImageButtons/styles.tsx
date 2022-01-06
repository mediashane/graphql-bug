import { colorBrandBlue, colorWhite, freightDispMediumItalic, freightDispSemibold } from '../../style';

const styles = {
  threeImageButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: {
      xs: '100%',
      sm: '100%',
      md: '413px',
      lg: '488px',
      xl: '563px',
    },
    paddingTop: {
      xs: '40px',
      sm: '40px',
      md: 0,
    },
  },
  threeImageButtonsContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  threeImageButtonsTitle: {
    paddingLeft: '40px',
    color: colorBrandBlue,
    fontSize: '2.5rem',
    fontStyle: 'italic' as const,
    fontFamily: freightDispMediumItalic,
    lineHeight: 1,
  },
  threeImageButtonsCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-between',
      sm: 'space-between',
      md: 'space-around',
      lg: 'space-around',
      xl: 'space-around',
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
  threeImageButtonsCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: {
      xs: '20px',
      sm: '20px',
      md: '0px',
    },
    width: {
      xs: '325px',
      sm: '325px',
      md: '250px',
      lg: '325px',
      xl: '400px',
    },
    height: {
      xs: '325px',
      sm: '325px',
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
  threeImageButtonsCardLabel: {
    color: colorWhite,
    fontSize: '3rem',
    fontFamily: freightDispSemibold,
  },
};

export default styles;
