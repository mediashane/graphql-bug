import { colorDarkGrey, colorWhite, freightBigProSemibold, proximaNova } from '../../style';

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
    justifyContent: 'flex-start',
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
    width: {
      xs: '90%',
      sm: '80%',
      md: '70%',
      lg: '50%',
      xl: '45%',
    },
    textAlign: 'center' as const,
  },
  textOverline: {
    color: colorDarkGrey,
    fontFamily: freightBigProSemibold,
    fontSize: {
      xs: '32px',
      sm: '42px',
      md: '42px',
      lg: '3.5vw',
    },
  },
  textHeadline: {
    padding: '20px 0',
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: {
      xs: '18px',
      sm: '20px',
      md: '24px',
    },
    lineHeight: 1,
  },
  textSubline: {
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: {
      xs: '18px',
      sm: '20px',
      md: '24px',
    },
    lineHeight: 1,
  },
};

export default styles;
