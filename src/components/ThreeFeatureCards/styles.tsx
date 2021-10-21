import { colorDarkGrey, colorWhite, freightBigProMediumItalic, freightBigProSemibold, proximaNova } from '../../style';

const styles = {
  threeFeatureCardsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: {
      xs: '40px',
      sm: '40px',
      md: '0',
    },
    width: '100%',
    height: {
      xs: '1200px',
      sm: '1200px',
      md: '500px',
    },
  },
  threeFeatureCardsContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '87.5%',
    height: '100%',
  },
  threeFeatureCardsTitle: {
    fontSize: '2.5rem',
    fontStyle: 'italic' as const,
    fontFamily: freightBigProMediumItalic,
    lineHeight: 1,
  },
  threeFeatureCardsCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-between',
      sm: 'space-between',
      md: 'space-around',
      lg: 'space-between',
      xl: 'space-between',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    margin: {
      xs: '80px 0 0 0',
      sm: '80px 0 0 0',
      md: '40px 0 40px 0',
      lg: '40px 0 40px 0',
      xl: '40px 0 40px 0',
    },
    width: '100%',
    height: '100%',
  },
  threeFeatureCardsCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column' as const,
    marginBottom: {
      xs: '100px',
      sm: '100px',
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
    width: {
      xs: '103px',
      sm: '103px',
      md: '103px',
      lg: '103px',
      xl: '103px',
    },
    height: {
      xs: '95px',
      sm: '95px',
      md: '95px',
      lg: '95px',
      xl: '95px',
    },
    backgroundColor: colorWhite,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  threeFeatureCardsCardLabel: {
    fontSize: '2rem',
    fontFamily: freightBigProSemibold,
  },
  threeFeatureCardsCardDescription: {
    color: colorDarkGrey,
    fontSize: '1rem',
    fontFamily: proximaNova,
    textAlign: 'center' as const,
  },
};

export default styles;
