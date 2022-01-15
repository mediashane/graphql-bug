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
    justifyContent: 'center',
    width: {
      xs: '80%',
      sm: '80%',
      md: '50%',
    },
    height: {
      xs: '100%',
      sm: '100%',
      md: '660px',
    },
    margin: '0 40px 0 60px',
  },
  bannerRightColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
    },
    height: '100%',
  },
  bannerImageWrapper: {
    height: '100%',
    width: '100%',
  },
  bannerImageContainer: {
    display: 'flex',
    aspectRatio: '1 / 1',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    borderRadius: {
      xs: '375px',
      sm: '375px',
      md: '50%',
    },
  },
  bannerRightColumnContent: {
    margin: {
      xs: '40px 0 0 0',
      sm: '40px 0 0 0',
      md: '0 40px 20px 40px',
    },
  },
  bannerSubheader: {
    color: '#666666',
    fontSize: '23px',
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
