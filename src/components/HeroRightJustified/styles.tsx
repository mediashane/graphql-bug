import { colorWhite, freightBigProSemibold, proximaNovaThin } from '../../style';

const styles = {
  heroContainer: {
    height: '50vw',
    minHeight: {
      xs: '650px',
      sm: '540px',
      md: '620px',
    },
    maxHeight: {
      xs: '650px',
      sm: '540px',
      md: '830px',
    },
    backgroundColor: '#dedede',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      xs: 'left center',
      sm: 'center center',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-end',
    justifyContent: {
      xs: 'flex-end',
      sm: 'space-evenly',
    },
    paddingTop: {
      xs: '10%',
      sm: '7.5%',
      md: '6%',
      xl: '5%',
    },
    width: '100%',
    height: '100%',
    color: colorWhite,
    fontFamily: freightBigProSemibold,
  },
  textWrapper: {
    padding: {
      xs: '0 5% 10% 0',
      sm: '0 5% 5% 0',
    },
    width: {
      xs: '90%',
      sm: '50%',
      md: '50%',
      lg: '50%',
      xl: '45%',
    },
  },
  textHeadline: {
    fontFamily: freightBigProSemibold,
    fontSize: {
      xs: '24px',
      sm: '28px',
      md: '36px',
      lg: '3.25vw',
    },
    lineHeight: 1.25,
  },
  textSublineContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textSubline: {
    padding: '20px 0',
    width: {
      xs: '80%',
      sm: '100%',
    },
    fontFamily: proximaNovaThin,
    fontSize: {
      xs: '14px',
      sm: '18px',
      md: '20px',
      lg: '24px',
    },
  },
  mediaLineContainer: {
    display: {
      xs: 'none',
      sm: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '60px 0 10px 0',
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.9)',
      textDecoration: 'underline',
    },
  },
  mediaLineIconContainer: {
    display: {
      xs: '16px',
      sm: '18px',
      md: '20px',
      lg: '24px',
    },
  },
  textMediaLabel: {
    paddingLeft: '20px',
    fontFamily: freightBigProSemibold,
    fontSize: {
      sm: '24px',
      md: '28px',
      lg: '34px',
    },
  },
  iconContainer: {
    display: {
      xs: 'block',
      sm: 'none',
    },
    marginRight: {
      xs: '20px',
      sm: '0',
    },
    cursor: 'pointer',

    '&:hover': {
      filter: 'brightness(0.9)',
    },
  },
};

export default styles;
