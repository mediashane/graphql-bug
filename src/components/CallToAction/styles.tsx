import { colorBrandGreen, colorWhite, freightBigProMediumItalic, proximaNova } from '../../style';

const styles = {
  ctaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: {
      xs: '0px',
      sm: '60px 0 0 0',
      md: '60px 0 20px 0',
      lg: '60px 0 40px 0',
      xl: '60px 0',
    },
    width: '100%',
  },
  ctaContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'center',
      sm: 'center',
      md: 'flex-end',
    },
    width: {
      xs: '100%',
      sm: '100%',
      md: '90%',
    },
    height: {
      xs: '620px',
      sm: '620px',
      md: '596px',
    },
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  ctaCard: {
    display: 'inherit',
    marginRight: {
      xs: '0px',
      sm: '0px',
      md: '65px',
    },
    height: {
      xs: '100%',
      sm: '77.5%',
    },
    width: {
      xs: '100%',
      sm: '460px',
      md: '460px',
      lg: '460px',
      xl: '460px',
    },
    backgroundColor: colorBrandGreen,
  },
  ctaTextContainer: {
    display: 'inherit',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 40px',
    textAlign: 'center' as const,
  },
  ctaTextHeadline: {
    fontSize: {
      xs: '2.5rem',
      sm: '3.75rem',
    },
    fontStyle: 'italic' as const,
    fontFamily: freightBigProMediumItalic,
  },
  ctaMobileImage: {
    display: {
      xs: 'block',
      sm: 'none',
    },
    height: '230px',
    width: '230px',
    backgroundColor: colorBrandGreen,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    borderRadius: '50%',
  },
  ctaTextParagraph: {
    marginTop: {
      xs: '0px',
      sm: '-20px',
    },
    fontFamily: proximaNova,
  },
  ctaButton: {
    padding: '15px 50px',
    backgroundColor: 'transparent',
    fontFamily: proximaNova,
    fontWeight: '600',
    fontSize: '1rem',
    borderWidth: '2px',
    borderColor: colorWhite,
    borderRadius: 0,
    transition: 'all 0.25s ease',
  },
};

export default styles;
