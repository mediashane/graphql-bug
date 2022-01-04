import { colorBrandBlue, colorWhite, freightDispBook, proximaNova, proximaNovaThin } from '../../style';

const styles = {
  bannerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorBrandBlue,
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
      xs: 'column-reverse' as const,
      sm: 'column-reverse' as const,
      md: 'row' as const,
    },
    width: '100%',
    height: '100%',
    color: colorWhite,
  },
  bannerLeftColumn: {
    width: {
      xs: '90%',
      sm: '90%',
      md: '60%',
      lg: '60%',
      xl: '60%',
    },
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
    },
  },
  bannerRightColumn: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-end',
    },
    alignItems: 'center',
    width: {
      xs: '100%',
      sm: '100%',
      md: '40%',
      lg: '40%',
      xl: '40%',
    },
    height: '100%',
  },
  bannerImageContainer: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '520px',
    },
    height: {
      xs: '375px',
      sm: '375px',
      md: '660px',
    },
    display: 'flex',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  bannerLeftColumnContent: {
    margin: {
      xs: '40px 0 0 0',
      sm: '40px 0 0 0',
      md: '60px 40px 40px 40px',
      xl: '80px 40px 40px 0',
    },
  },
  bannerTitle: {
    fontSize: {
      xs: '26px',
      sm: '36px',
      md: '36px',
      lg: '48px',
      xl: '48px',
    },
    fontFamily: freightDispBook,
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
      md: '20px',
      lg: '22px',
    },
    fontFamily: proximaNovaThin,
    letterSpacing: 1,
  },
  bannerButton: {
    margin: {
      xs: '30px 0 60px 0',
      sm: '30px 0 60px 0',
      md: 0,
    },
    padding: '15px 50px',
    color: colorWhite,
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
    letterSpacing: 1,
    textTransform: 'none' as const,
    borderWidth: '1px',
    borderColor: colorWhite,
    borderRadius: 0,
    transition: 'all 0.25s ease',

    '&:hover': {
      color: colorBrandBlue,
      backgroundColor: colorWhite,
      borderWidth: '1px',
      borderColor: colorWhite,
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
    marginTop: '10px',
  },
};

export default styles;
