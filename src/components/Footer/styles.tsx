import { colorBrandBlue, colorWhite, freightBigPro, freightBigProBookItalic, proximaNova } from '../../style';

const styles = {
  footerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorBrandBlue,
  },
  footerWrapper: {
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
    color: colorWhite,
  },
  footerLeftColumn: {
    width: {
      xs: '90%',
      sm: '90%',
      md: '35%',
      lg: '40%',
      xl: '40%',
    },
    height: {
      xs: '80%',
      sm: '80%',
      md: '100%',
    },
  },
  footerRightColumn: {
    width: {
      xs: '90%',
      sm: '90%',
      md: '60%',
      lg: '60%',
      xl: '60%',
    },
    height: '100%',
  },
  footerLeftColumnContent: {
    margin: {
      xs: '60px 0 0 0',
      sm: '60px 0 0 0',
      md: '40px 80px 40px 80px',
    },
  },
  footerRightContent: {
    margin: {
      xs: '0 0 0 0',
      sm: '0 0 0 0',
      md: '40px 80px 40px 20px',
    },
  },
  footerTitle: {
    fontSize: {
      xs: '26px',
      sm: '30px',
      md: '2.75vw',
      lg: '2.25vw',
      xl: '2.2vw',
    },
    fontStyle: 'italic' as const,
    fontFamily: freightBigProBookItalic,
  },
  footerBodyTextContainer: {
    margin: {
      xs: '0 0 0 0',
      sm: '0 0 0 0',
      md: '20px 0 40px 0',
    },
  },
  footerBodyText: {
    marginBottom: '20px',
    fontSize: {
      xs: '14px',
      sm: '16px',
      md: '14px',
      lg: '16px',
      xl: '16px',
    },
    fontFamily: proximaNova,
  },
  footerButton: {
    margin: {
      xs: '20px 0 40px 0',
      sm: '20px 0 40px 0',
      md: '0 0 40px 0',
    },
    padding: '15px 50px',
    color: colorWhite,
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
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
  footerMailingButtonWrapper: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    width: '100%',
  },
  footerMailingListContainer: {
    margin: {
      xs: '10px 0 10px 0',
      sm: '10px 0 10px 0',
      md: '-10px 0 0 0',
    },
    width: {
      xs: '90%',
      sm: '380px',
      md: '380px',
    },
    backgroundColor: colorWhite,
    fontFamily: freightBigPro,
  },
  footerFormInput: {
    fontFamily: proximaNova,
    input: {
      '&::placeholder': {
        paddingLeft: '10px',
        opacity: '0.7',
        fontSize: '1.1rem',
      },
    },
    '& fieldset': {
      borderRadius: 0,
    },
  },
  footerFormWrapper: {
    width: '100%',
    borderColor: colorWhite,
  },
  footerSocialMediaContainer: {
    marginTop: '15px',
    marginBottom: '10px',
  },
  footerSocialMediaText: {
    fontSize: '1rem',
    fontFamily: proximaNova,
  },
  footerIgLink: {
    display: 'flex',
    alignItems: 'center',
    color: colorWhite,
    opacity: '1',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: colorWhite,
      opacity: '0.9',
    },

    '&:visited': {
      color: colorWhite,
      opacity: '0.9',
    },
  },
  footerIgIcon: {
    marginRight: '20px',
  },
};

export default styles;
