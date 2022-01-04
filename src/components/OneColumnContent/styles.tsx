import { colorWhite, freightDispSemibold, proximaNova, proximaNovaThin } from '../../style';

const styles = {
  wrapper: {
    marginBottom: {
      xs: '0',
      sm: '0',
      md: '60px',
    },
    height: '100%',
    width: '100%',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundColor: '#dedede',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vw',
    minHeight: '500px',
    maxHeight: '1200px',
  },
  textContainer: {
    padding: {
      xs: '40px',
      sm: '40px',
      md: '0 0 0 40px',
    },
    width: {
      xs: '90%',
      sm: '80%',
      md: '80%',
      lg: '70%',
      xl: '62.5%',
    },
    color: colorWhite,
    fontFamily: freightDispSemibold,
  },
  headlineTextContainer: {
    padding: {
      xs: '70% 0 0 0',
      sm: '60% 0 0 0',
      md: '40% 0 0 20%',
      lg: '40% 0 0 30%',
    },
    margin: {
      xs: '40px',
      sm: '40px',
      md: '0 0 0 40px',
    },
    width: {
      xs: '90%',
      sm: '80%',
      md: '80%',
      lg: '80%',
      xl: '62.5%',
    },
    color: colorWhite,
    fontFamily: freightDispSemibold,
  },
  textHeadline: {
    fontFamily: 'inherit',
    fontSize: {
      xs: '32px',
      sm: '5vw',
      md: '4.5vw',
      lg: '4vw',
      xl: '3.5vw',
    },
    lineHeight: 1.25,
  },
  innerHeadlineTextContainer: {
    marginRight: {
      xs: '0',
      sm: '0',
      md: '60px',
    },
    textAlign: {
      xs: 'left' as const,
      sm: 'left' as const,
      md: 'right' as const,
    },
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
    marginTop: {
      xs: '0',
      sm: '60px',
    },
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
    color: {
      xs: '#000000',
      sm: '#ffffff',
    },
    fontFamily: proximaNova,
    fontSize: '22px',
  },
};

export default styles;
