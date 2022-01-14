import { colorBlack, colorWhite, freightDispMedium, proximaNova, proximaNovaSemiBold } from '../../style';

const styles = {
  bannerContainer: {
    width: '100%',
    height: '100%',
    margin: {
      xs: '60px 0',
      sm: '60px 0',
      md: '120px 0',
    },
    backgroundColor: colorWhite,
  },
  bannerWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    width: '100%',
    height: '100%',
    color: colorBlack,
  },
  bannerLeftColumn: {
    display: 'flex',
    alignItems: 'center',
    width: {
      xs: '80%',
      sm: '80%',
      md: '50%',
      lg: '50%',
      xl: '50%',
    },
    height: {
      xs: '100%',
      sm: '100%',
      md: '660px',
      lg: '660px',
      xl: '660px',
    },
    margin: {
      md: '0 40px 0 60px',
      lg: '0 40px 0 60px',
      xl: '0',
    },
  },
  bannerRightColumn: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'center',
    },
    alignItems: 'center',
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
      lg: '50%',
      xl: '50%',
    },
    height: '100%',
  },
  bannerImageWrapper: {
    height: '100%',
    width: '100%',
  },
  bannerImageContainer: {
    display: 'flex',
    width: {
      xs: '100%',
      sm: '100%',
      md: '100%',
    },
    height: {
      xs: '375px',
      sm: '375px',
      md: '100%',
    },
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  bannerRightColumnContent: {
    margin: {
      xs: '40px 0 0 0',
      sm: '40px 0 0 0',
      md: '0 40px 20px 40px',
      xl: '0 40px 20px 40px',
    },
  },
  bannerSubheader: {
    color: '#666666',
    fontSize: {
      xs: '23px',
      sm: '23px',
      md: '23px',
      lg: '23px',
      xl: '23px',
    },
    fontFamily: proximaNova,
    letterSpacing: 1,
  },
  bannerHeader: {
    marginBottom: '10px',
    fontSize: {
      xs: '26px',
      sm: '36px',
      md: '36px',
      lg: '48px',
      xl: '48px',
    },
    fontFamily: freightDispMedium,
    letterSpacing: 1,
  },
  bannerBodyTextContainer: {
    margin: {
      xs: '30px 0 30px 0',
      sm: '30px 0 30px 0',
      md: '20px 0 40px 0',
    },
  },
  bannerBodyText: {
    fontSize: {
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '24px',
    },
    fontFamily: proximaNova,
    letterSpacing: 1,
  },
  bannerButton: {
    padding: '15px 50px',
    color: colorBlack,
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
    letterSpacing: 1,
    textTransform: 'none' as const,
    borderWidth: '1px',
    borderColor: '#858585',
    borderRadius: 0,
    transition: 'all 0.25s ease',

    '&:hover': {
      color: colorWhite,
      backgroundColor: '#858585',
      borderWidth: '1px',
      borderColor: '#858585',
    },
  },
  bannerButtonWrapper: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    width: '100%',
    margin: {
      xs: '30px 0 30px 0',
      sm: '30px 0 30px 0',
      md: '40px 0 60px 0',
    },
  },
  buttonLabel: {
    fontFamily: proximaNovaSemiBold,
  },
};

export default styles;
