import { freightDispMedium, proximaNova, proximaNovaSemiBold } from 'style';

const styles = {
  centeredTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: {
      xs: '375px',
      sm: '375px',
      md: '187px',
    },
  },
  containerWrapper: {
    height: '100%',
  },
  centeredTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-evenly',
      sm: 'space-evenly',
      md: 'space-between',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    width: '100%',
    height: '100%',
    textAlign: 'left' as const,
  },
  columnOne: {
    display: 'flex',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: {
      xs: '90%',
      sm: '90%',
      md: '25%',
      lg: '30%',
    },
    paddingLeft: {
      xs: 0,
      sm: 0,
      md: '30px',
    },
  },
  columnTwo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: {
      xs: '80%',
      sm: '90%',
      md: '30%',
      lg: '40%',
    },
    textAlign: 'center' as const,
  },
  columnThree: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
      xs: '90%',
      sm: '90%',
      md: '25%',
      lg: '30%',
    },
    paddingRight: {
      xs: 0,
      sm: 0,
      md: '30px',
    },
  },
  headlineText: {
    marginTop: '-40px',
    fontFamily: freightDispMedium,
    fontSize: {
      xs: '48px',
      sm: '48px',
      md: '52px',
      lg: '72px',
      xl: '96px',
    },
  },
  sublineText: {
    fontFamily: proximaNova,
    fontSize: '16px',
  },
  infoText: {
    fontFamily: freightDispMedium,
    fontSize: '18px',
    textAlign: 'left' as const,
  },
  button: {
    padding: '10px 50px',
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
    letterSpacing: 1,
    textTransform: 'none' as const,
    borderWidth: '1px',
    borderRadius: 0,
    transition: 'all 0.25s ease',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-end',
    },
    width: '100%',
  },
  buttonLabel: {
    fontFamily: proximaNovaSemiBold,
  },
};

export default styles;
