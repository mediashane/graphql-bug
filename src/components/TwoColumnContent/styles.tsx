import { freightBigProSemibold, proximaNova } from '../../style';

const styles = {
  twoColumnContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    padding: '40px',
    width: '100%',
  },
  twoColumnImageWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: {
      xs: '20px 0',
      sm: '40px 0',
      md: '40px',
    },
    width: {
      xs: '85%',
      sm: '90%',
      md: '50%',
      lg: '50%',
      xl: '50%',
    },
  },
  twoColumnTextContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: {
      xs: '60px',
      sm: '60px',
      md: '0',
    },
    padding: {
      xs: '0',
      sm: '0',
      md: '0 40px',
    },
    width: {
      xs: '85%',
      sm: '90%',
      md: '50%',
      lg: '50%',
      xl: '50%',
    },
  },
  twoColumnTextWrapper: {
    width: {
      xs: '100%',
      sm: '100%',
      md: '90%',
      lg: '90%',
      xl: '75%',
    },
  },
  twoColumnHeadline: {
    marginBottom: '40px',
    fontFamily: freightBigProSemibold,
    fontSize: '38px',
    // textAlign: 'center' as const,
  },
  twoColumnParagraph: {
    fontFamily: proximaNova,
    fontSize: '22px',
    // textAlign: 'center' as const,
  },
};

export default styles;
