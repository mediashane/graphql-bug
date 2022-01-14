import {
  colorDarkGrey,
  colorWhite,
  freightDispBook,
  freightDispMediumItalic,
  freightDispSemibold,
  proximaNova,
} from '../../style';

const styles = {
  threeFeatureCardsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: '100%',
    height: '100%',
    minHeight: {
      xs: '100%',
      sm: '100%',
      md: '600px',
    },
  },
  threeFeatureCardsWrapper: {
    marginTop: {
      xs: '40px',
      sm: '40px',
      md: '80px',
    },
  },
  threeFeatureCardsContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  threeFeatureCardsTitle: {
    margin: {
      xs: '40px 0 0 20px',
      sm: '40px 0 0 20px',
      md: '20px 0 60px 20px',
      lg: '20px 0 60px 20px',
      xl: '20px 0 60px 0',
    },
    fontSize: '2.5rem',
    fontStyle: 'italic',
    fontFamily: freightDispMediumItalic,
    lineHeight: 1,
  },
  threeFeatureCardsCards: {
    display: 'flex',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'baseline',
    },
    justifyContent: {
      xs: 'space-between',
      sm: 'space-between',
      md: 'space-around',
      lg: 'space-around',
      xl: 'space-between',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    margin: {
      xs: '40px 0 0 0',
      sm: '40px 0 0 0',
      md: '40px 0 40px 0',
    },
    width: '100%',
    height: '100%',
  },
  threeFeatureCardsCardImage: {
    width: {
      xs: '350px',
      sm: '375px',
      md: '275px',
      lg: '350px',
      xl: '375px',
    },
    height: {
      xs: '350px',
      sm: '375px',
      md: '275px',
      lg: '350px',
      xl: '375px',
    },
  },
  threeFeatureCardsCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column' as const,
    marginBottom: {
      xs: '60px',
      sm: '60px',
      md: '0',
    },
    height: '100%',
    width: {
      xs: '90%',
      sm: '90%',
      md: '25%',
      lg: '25%',
      xl: '25%',
    },
  },
  threeFeatureCardImage: {
    width: '103px',
    height: '95px',
    backgroundColor: colorWhite,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  threeFeatureCardsCardLabel: {
    margin: '40px 0',
    fontSize: '2rem',
    fontFamily: freightDispSemibold,
    textAlign: 'center' as const,
  },
  threeFeatureCardsCardDescription: {
    color: colorDarkGrey,
    fontSize: '1rem',
    fontFamily: proximaNova,
    textAlign: 'center' as const,
  },

  threeFeatureCardsCardImageLabel: {
    marginTop: '40px',
    fontFamily: freightDispBook,
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '40px',
    textAlign: 'center' as const,
    letterSpacing: '0.5px',
  },
  threeFeatureCardsCardImageDescription: {
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '1rem',
    textAlign: 'center' as const,
  },
};

export default styles;
