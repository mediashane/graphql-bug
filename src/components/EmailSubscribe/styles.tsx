import { colorDarkGrey, freightBigPro, freightBigProSemibold, proximaNova } from '../../style';

const styles = {
  emailSubscribeContainer: {
    margin: {
      xs: '57px 0 0 0',
      sm: '57px 0 0 0',
      md: '57px 0',
    },
    width: '100%',
    height: {
      xs: '620px',
      sm: '620px',
      md: '440px',
      lg: '440px',
      xl: '440px',
    },
    backgroundColor: '#F7F7F7',
  },
  emailSubscribeWrapper: {
    display: 'flex',
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  emailSubscribeImage: {
    marginLeft: {
      xs: '0',
      sm: '0',
      md: '-175px',
      lg: '-150px',
      xl: '0',
    },
    width: '100%',
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
      lg: '100%',
      xl: '100%',
    },
    backgroundSize: {
      xs: '100%',
      sm: '100%',
      md: 'contain',
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      xs: 'center top',
      sm: 'center top',
      md: 'left center',
      lg: 'left center',
      xl: 'left center',
    },
  },
  emailSubscribeContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    margin: {
      xs: '70px 0 75px 0',
      sm: '40px 0 40px 0',
      md: '0 80px 0 0',
      lg: '0 125px 0 0',
      xl: '0 200px 0 0',
    },
    width: {
      xs: '100%',
      sm: '659px',
      md: '470px',
      lg: '659px',
      xl: '659px',
    },
    height: '207px',
  },
  emailSubscribeTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: {
      xs: '315px',
      sm: '585px',
      md: '315px',
      lg: '585px',
      xl: '585px',
    },
  },
  emailSubscribeTitle: {
    fontSize: {
      xs: '1.7rem',
      sm: '1.7rem',
      md: '1.9rem',
    },
    fontFamily: freightBigProSemibold,
    textAlign: 'center' as const,
  },
  emailSubscribeInputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      xs: 'column' as const,
      sm: 'row' as const,
    },
    margin: {
      xs: '10px 0 20px 0',
      sm: '40px 0 20px 0',
      md: '40px 0 20px 0',
    },
    width: {
      xs: '85%',
      sm: 'auto',
    },
  },
  emailSubscribeButton: {
    margin: {
      xs: '20px 0 0 0',
      sm: '0 0 0 -1px',
    },
    width: {
      xs: '100%',
      sm: '138px',
    },
    height: '71px',
    color: colorDarkGrey,
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontFamily: proximaNova,
    fontWeight: 'bold',
    textTransform: 'capitalize' as const,
    borderColor: `#858585 !important`,
    borderRadius: '0px',
  },
  emailSubscribeInput: {
    width: {
      xs: '100%',
      sm: '385px',
      md: '200px',
      lg: '385px',
      xl: '385px',
    },
    height: '71px',
    color: '#858585',
    fontFamily: freightBigPro,
    input: {
      '&::placeholder': {
        color: colorDarkGrey,
        opacity: '0.7',
        fontSize: '1.1rem',
      },
    },
    '& fieldset': {
      borderColor: `#858585 !important`,
      borderRadius: 0,
      borderWidth: {
        xs: '0 0 1px 0',
        sm: '1px',
      },
    },
  },
  emailSubscribeSubtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: {
      xs: '85%',
      sm: '585px',
      md: '310px',
      lg: '585px',
      xl: '585px',
    },
  },
  emailSubscribeSubtitle: {
    color: colorDarkGrey,
    fontSize: '1rem',
    fontFamily: proximaNova,
    textAlign: 'center' as const,
  },
};

export default styles;
