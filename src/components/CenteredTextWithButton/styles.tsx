import { colorBlack, colorWhite, proximaNova, proximaNovaSemiBold } from 'style';

const styles = {
  centeredTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: {
      xs: '60px 0 120px 0',
      sm: '60px 0 120px 0',
      md: '80px 0 120px 0',
    },
    width: '100%',
    minHeight: '20px',
  },
  centeredTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: '80%',
    textAlign: 'center' as const,
    lineHeight: '32px',
  },
  headerTextContainer: {
    paddingBottom: '30px',
  },
  bodyText: {
    fontSize: {
      xs: '22px',
      sm: '22px',
      md: '32px',
      lg: '32px',
      xl: '32px',
    },
  },
  button: {
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    width: '100%',
    marginTop: {
      xs: '30px',
      sm: '30px',
      md: '60px',
    },
  },
  buttonLabel: {
    fontFamily: proximaNovaSemiBold,
  },
};

export default styles;
