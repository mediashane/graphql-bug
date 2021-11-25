import { freightBigProSemibold, proximaNova } from '../../style';

const styles = {
  twoColumnContentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '40px 0',
    width: '100%',
  },
  twoColumnImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
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
    margin: {
      xs: '20px 0 60px 0',
      sm: '20px 0 60px 0',
      md: '0',
    },
    padding: {
      xs: '0 40px',
      sm: '0 40px',
      md: '0 40px',
    },
    width: {
      xs: '85%',
      sm: '80%',
      md: '50%',
      lg: '50%',
      xl: '50%',
    },
  },
  twoColumnTextWrapper: {
    width: {
      xs: '100%',
      sm: '90%',
      md: '90%',
      lg: '90%',
      xl: '75%',
    },
  },
  twoColumnTextHeadlineWrapper: {
    paddingBottom: {
      xs: '0',
      sm: '40%',
      md: '70%',
      lg: '70%',
      xl: '70%',
    },
  },
  twoColumnHeadline: {
    fontFamily: freightBigProSemibold,
    fontSize: {
      xs: '24px',
      sm: '28px',
      md: '38px',
      lg: '44px',
    },
  },
  twoColumnParagraph: {
    marginTop: {
      xs: '20px',
      sm: '20px',
      md: '40px',
      lg: '60px',
    },
    fontFamily: proximaNova,
    fontSize: '22px',
  },
};

export default styles;
