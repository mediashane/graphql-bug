import { colorBrandBlue, colorWhite, freightBigProSemibold, proximaNova } from '../../style';

const styles = {
  heroContainer: {
    height: '50vw',
    minHeight: {
      xs: '540px',
      sm: '540px',
      md: '620px',
    },
    maxHeight: {
      xs: '540px',
      sm: '540px',
      md: '830px',
    },
    backgroundColor: '#dedede',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      xs: 'center 80%',
      sm: 'center center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: {
      xs: '60px',
      sm: '60px',
      md: '80px',
    },
    width: '100%',
    height: '100%',
    color: colorWhite,
    fontFamily: freightBigProSemibold,
  },
  introTitleText: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '32px',
      sm: '42px',
      md: '42px',
      lg: '3.5vw',
      xl: '3.5vw',
    },
  },
  titleText: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '72px',
      sm: '88px',
      md: '88px',
      lg: '7.5vw',
      xl: '7.5vw',
    },
    lineHeight: 1,
  },
  heroButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: {
      xs: '40px',
      sm: '40px',
      md: '100px',
    },
    width: {
      xs: '331px',
      sm: '331px',
      md: '331px',
      lg: '362px',
      xl: '362px',
    },
  },
  heroButton: {
    padding: '10px 25px',
    color: colorWhite,
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
    textTransform: 'none' as const,
    borderWidth: '2px',
    borderColor: colorWhite,
    borderRadius: '2%',
    transition: 'all 0.25s ease',

    '&:hover': {
      color: colorBrandBlue,
      backgroundColor: colorWhite,
      borderWidth: '2px',
      borderColor: colorWhite,
    },
  },
  heroButtonText: {
    fontFamily: proximaNova,
    fontSize: {
      xs: '14px',
      sm: '18px',
      md: '18px',
      lg: '1.5vw',
    },
  },
};

export default styles;
