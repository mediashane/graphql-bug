import {
  colorBrandBlue,
  colorBrandBrown,
  colorDarkGrey,
  colorLightGrey,
  colorWhite,
  freightDispBook,
  freightDispMediumItalic,
  proximaNova,
} from '../../style';

const styles = {
  galleryContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: {
      xs: 'column-reverse' as const,
      sm: 'column-reverse' as const,
      md: 'row' as const,
    },
    height: '100%',
    width: '100%',
    paddingBottom: '60px',
  },
  imageSliderContainer: {
    display: 'flex',
    alignItems: 'center',
    height: {
      xs: '375px',
      sm: '620px',
      md: '836px',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: {
      xs: 'center center',
      sm: 'center center',
      md: 'top center',
    },
  },
  textContainer: {
    height: '100%',
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
    },
    minHeight: '620px',
    maxHeight: {
      xs: 'none',
      sm: 'none',
      md: '836px',
    },
  },
  textWrapper: {
    padding: {
      xs: '40px',
      sm: '40px',
      md: '20px',
      lg: '40px',
    },
  },
  textOverline: {
    paddingBottom: '10px',
    fontSize: '18px',
    fontFamily: proximaNova,
  },
  textHeadline: {
    paddingBottom: '10px',
    fontSize: {
      xs: '48px',
      sm: '64px',
      md: '48px',
      lg: '64px',
    },
    fontFamily: freightDispMediumItalic,
  },
  textParagraph: {
    fontSize: {
      xs: '20px',
      sm: '20px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
  textDivider: {
    margin: {
      xs: '20px 0',
      sm: '20px 0',
      md: '30px 0',
      lg: '30px 0',
      xl: '40px 0',
    },
    height: '1px',
    width: '100%',
    backgroundColor: '#D89582',
  },
  textSpacer: {
    margin: '10px 0',
    height: '1px',
    width: '100%',
    backgroundColor: 'transparent',
  },
  textListItemHeadline: {
    fontSize: '14px',
    fontFamily: proximaNova,
  },
  textListItemHeadlineLarge: {
    fontSize: {
      xs: '20px',
      sm: '20px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontFamily: proximaNova,
  },
  textListItemParagraph: {
    paddingBottom: '20px',
    fontSize: '14px',
    fontFamily: proximaNova,
  },
  textListItemParagraphLarge: {
    paddingBottom: '20px',
    fontSize: {
      xs: '20px',
      sm: '20px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontFamily: proximaNova,
  },
  ctaPromptButton: {
    margin: '20px 0 40px 0',
    padding: '15px 50px',
    color: colorBrandBrown,
    backgroundColor: colorWhite,
    fontFamily: proximaNova,
    fontWeight: '100',
    fontSize: '1rem',
    textTransform: 'none' as const,
    borderWidth: '1px',
    borderColor: colorBrandBrown,
    borderRadius: 0,
    transition: 'all 0.25s ease',

    '&:hover': {
      color: colorWhite,
      backgroundColor: colorBrandBrown,
      borderWidth: '1px',
      borderColor: colorBrandBrown,
    },
  },
  ctaButtonWrapper: {
    display: 'flex',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    width: '100%',
  },
  controlsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
  iconButtonsContainer: {
    display: 'flex',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-start',
    },
    flexDirection: 'column' as const,
    height: '100%',
    width: '100%',
  },
  iconButtonsGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '40px',
    height: '100%',
    width: {
      xs: '100%',
      sm: '100%',
      md: '60%',
    },
  },
  iconButtonsHeadline: {
    fontSize: '32px',
    fontFamily: freightDispBook,
    color: colorBrandBrown,
  },
  iconButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    cursor: 'pointer',
    transition: 'margin 0.1s ease-in-out',

    '&:hover': {
      marginTop: -2,
    },
  },
  iconButton: {
    height: '32px',
    width: '32px',
    marginBottom: '20px',
    overflow: 'show',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  },
  iconButtonLabel: {
    fontSize: '14px',
    color: colorBrandBrown,
    fontFamily: proximaNova,
  },
  arrowButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '68px',
    width: '53px',
    backgroundColor: colorWhite,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colorLightGrey,
    },
  },
  arrowButton: {
    height: '5rem',
    width: '5rem',
    color: colorDarkGrey,
  },
  imagePaginationContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute' as const,
    bottom: {
      xs: '55%',
      sm: '30%',
      md: '5%',
    },
    left: {
      xs: '25%',
      sm: '25%',
      md: '50%',
    },
    width: '50%',
    height: '28px',
  },
  paginationDotsContainer: {
    display: 'flex',
    marginTop: '15px',
  },
  imagePaginationDot: {
    margin: '0 7px',
    height: '14px',
    width: '14px',
    backgroundColor: colorBrandBlue,
    borderRadius: '50%',
  },
  captionText: {
    position: 'absolute' as const,
    top: '53px',
    fontSize: '20px',
    color: colorDarkGrey,
    fontFamily: proximaNova,
  },
};

export default styles;
