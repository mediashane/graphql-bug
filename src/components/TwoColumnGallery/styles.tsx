import {
  colorBrandBlue,
  colorDarkGrey,
  colorLightGrey,
  colorWhite,
  freightBigProMediumItalic,
  freightBigProSemibold,
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
    // minHeight: '620px',
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
    textTransform: 'uppercase' as const,
  },
  textHeadline: {
    paddingBottom: '10px',
    fontSize: {
      xs: '48px',
      sm: '64px',
      md: '48px',
      lg: '64px',
    },
    fontFamily: freightBigProMediumItalic,
  },
  textParagraph: {
    fontSize: {
      xs: '20px',
      sm: '20px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontFamily: freightBigProSemibold,
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
  textListItemHeadline: {
    fontSize: '14px',
    fontFamily: proximaNova,
    textTransform: 'uppercase' as const,
  },
  textListItemParagraph: {
    paddingBottom: '20px',
    fontSize: '14px',
    fontFamily: proximaNova,
  },
  controlsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
  buttonContainer: {
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
    height: '14px',
  },
  imagePaginationDot: {
    margin: '0 7px',
    height: '14px',
    width: '14px',
    backgroundColor: colorBrandBlue,
    borderRadius: '50%',
  },
};

export default styles;
