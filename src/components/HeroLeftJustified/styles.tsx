import { colorWhite, freightDispMedium, freightDispSemibold } from '../../style';

const styles = {
  heroContainer: {
    display: 'flex',
    alignItems: {
      xs: 'flex-end',
      sm: 'flex-end',
      md: 'center',
      lg: 'center',
      xl: 'center',
    },
    height: '50vw',
    minHeight: '620px',
    maxHeight: '830px',
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '80% top',
  },
  textWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textContainer: {
    paddingLeft: {
      xs: '40px',
      sm: '40px',
      md: '40px',
      lg: '40px',
      xl: 0,
    },
    paddingBottom: {
      xs: '60px',
      sm: '60px',
      md: '0',
      lg: '0',
      xl: '0',
    },
    width: {
      xs: '80%',
      sm: '80%',
      md: '62.5%',
      lg: '62.5%',
      xl: '62.5%',
    },
    color: colorWhite,
    fontFamily: freightDispSemibold,
  },
  textOverline: {
    fontFamily: freightDispSemibold,
    fontSize: {
      xs: '28px',
      sm: '36px',
      md: '36px',
      lg: '36px',
      xl: '36px',
    },
    lineHeight: '36px',
  },
  textHeadline: {
    padding: '28px 0',
    fontFamily: freightDispSemibold,
    fontSize: {
      xs: '72px',
      sm: '96px',
      md: '96px',
      lg: '96px',
      xl: '96px',
    },
    lineHeight: '100px',
  },
  textParagraph: {
    fontFamily: freightDispMedium,
    fontSize: {
      xs: '22px',
      sm: '28px',
      md: '28px',
      lg: '28px',
      xl: '28px',
    },
    lineHeight: '36px',
  },
};

export default styles;
