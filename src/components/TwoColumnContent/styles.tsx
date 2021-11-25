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
    padding: {
      xs: '20px 0',
      sm: '40px 0',
      md: '40px 0',
    },
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
    margin: {
      xs: '20px 0 60px 0',
      sm: '20px 0 60px 0',
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
  twoColumnTextHeadlineWrapper: {
    paddingBottom: {
      xs: '0',
      sm: '0',
      md: '45%',
      lg: '70%',
      xl: '70%',
    },
  },
  twoColumnHeadline: {
    marginBottom: '40px',
    fontFamily: freightBigProSemibold,
    fontSize: {
      xs: '34px',
      sm: '38px',
    },
  },
  twoColumnParagraph: {
    fontFamily: proximaNova,
    fontSize: '22px',
  },
};

export default styles;
