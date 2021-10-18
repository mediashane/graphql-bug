import { colorBrandGreen, colorWhite, freightBigProMediumItalic, proximaNova } from '../../style';

const styles = {
  callToActionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 0',
    width: '100%',
  },
  callToActionContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-end',
      lg: 'flex-end',
      xl: 'flex-end',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '90%',
      lg: '90%',
      xl: '90%',
    },
    height: {
      xs: '620px',
      sm: '620px',
      md: '596px',
      lg: '596px',
      xl: '596px',
    },
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  callToActionCard: {
    display: 'inherit',
    marginRight: {
      xs: '0px',
      sm: '0px',
      md: '65px',
      lg: '65px',
      xl: '65px',
    },
    // padding: '0 40px',
    height: {
      xs: '100%',
      sm: '80%',
      md: '80%',
      lg: '80%',
      xl: '80%',
    },
    width: {
      xs: '100%',
      sm: '70%',
      md: '51%',
      lg: '40%',
      xl: '33%',
    },
    color: colorWhite,
    backgroundColor: colorBrandGreen,
  },
  callToActionTextContainer: {
    display: 'inherit',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 40px',
    textAlign: 'center' as const,
  },
  callToActionTitle: {
    fontSize: '3.75rem',
    fontStyle: 'italic' as const,
    fontFamily: freightBigProMediumItalic,
  },
  callToActionDescription: {
    marginTop: '-20px',
    fontFamily: proximaNova,
  },
  callToActionButton: {
    padding: '15px 50px',
    color: colorWhite,
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '600',
    fontSize: '1rem',
    borderWidth: '2px',
    borderColor: colorWhite,
    borderRadius: 0,
    transition: 'all 0.25s ease',

    '&:hover': {
      color: colorBrandGreen,
      backgroundColor: colorWhite,
      borderWidth: '2px',
      borderColor: colorWhite,
    },
  },
};

export default styles;
