import { colorWhite, freightBigProSemibold, proximaNova, proximaNovaThin } from '../../style';

const styles = {
  wrapper: {
    marginBottom: '60px',
    height: '100%',
    width: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vw',
    minHeight: '500px',
    maxHeight: '1200px',
    backgroundColor: '#dedede',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
  textContainer: {
    paddingLeft: '40px',
    width: {
      xs: '90%',
      sm: '80%',
      md: '80%',
      lg: '70%',
      xl: '62.5%',
    },
    color: colorWhite,
    fontFamily: freightBigProSemibold,
  },
  textHeadline: {
    marginBottom: {
      xs: '0',
      sm: '60px',
    },
    fontFamily: 'inherit',
    fontSize: {
      xs: '32px',
      sm: '4.5vw',
      md: '4.5vw',
      lg: '4vw',
      xl: '3.5vw',
    },
    lineHeight: 1.25,
  },
  innerParagraphTextContainer: {
    display: {
      xs: 'none',
      sm: 'flex',
    },
  },
  outerParagraphTextContainer: {
    display: {
      xs: 'flex',
      sm: 'none',
    },
    padding: '40px',
  },
  textParagraph: {
    fontFamily: proximaNovaThin,
    fontSize: {
      xs: '4vw',
      sm: '3.25vw',
      md: '2.5vw',
      lg: '2.5vw',
      xl: '2vw',
    },
  },
  outerTextParagraph: {
    fontFamily: proximaNova,
    fontSize: '22px',
  },
};

export default styles;
