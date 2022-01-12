import { colorWhite, freightDispSemibold, proximaNovaBold, proximaNovaSemiBold } from '../../style';

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
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      xs: 'center 80%',
      sm: 'center top',
    },
  },
  heroWrapper: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '40px',
    width: '100%',
    height: '100%',
    fontFamily: freightDispSemibold,
  },
  overlineText: {
    marginBottom: '10px',
    fontFamily: proximaNovaSemiBold,
    fontSize: {
      xs: '20px',
      sm: '24px',
    },
    textAlign: 'center' as const,
    letterSpacing: '1px',
  },
  headlineText: {
    marginBottom: '30px',
    fontFamily: 'inherit',
    fontSize: {
      xs: '48px',
      sm: '96px',
    },
    lineHeight: 1,
  },
  bodylineText: {
    marginBottom: '30px',
    fontFamily: 'inherit',
    width: {
      xs: '250px',
      sm: '100%',
    },
    fontSize: {
      xs: '22px',
      sm: '25px',
      md: '36px',
    },
    textAlign: 'center' as const,
    letterSpacing: '2px',
  },
  sublineText: {
    marginBottom: '60px',
    textAlign: 'center' as const,
    fontFamily: proximaNovaBold,
    fontSize: {
      xs: 'calc(8px + 1.5vw)',
      sm: '18px',
    },
    letterSpacing: {
      xs: '1px',
      sm: '2px',
    },
  },
  postlineText: {
    fontFamily: proximaNovaBold,
    fontSize: {
      xs: '16px',
      sm: '18px',
    },
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
  },
  postlineWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: {
      xs: '40px',
      sm: '40px',
      md: '100px',
    },
    marginBottom: '60px',
  },
};

export default styles;
