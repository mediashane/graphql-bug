import { colorWhite, freightBigProSemibold } from '../../style';

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
    backgroundColor: '#dedede',
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
    fontFamily: freightBigProSemibold,
  },
  textOverline: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '5.5vw',
      sm: '4vw',
      md: '3vw',
      lg: '3vw',
      xl: '3vw',
    },
  },
  textHeadline: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '9.5vw',
      sm: '8vw',
      md: '6vw',
      lg: '6vw',
      xl: '6vw',
    },
  },
  textParagraph: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '4vw',
      sm: '3.25vw',
      md: '2.5vw',
      lg: '2vw',
      xl: '2vw',
    },
  },
};

export default styles;
