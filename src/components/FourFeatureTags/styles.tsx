import { colorWhite, freightBigProSemibold } from '../../style';

const styles = {
  fourFeatureTagsContainer: {
    display: 'flex',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'center',
    },
    justifyContent: 'center',
    margin: {
      xs: '60px 0 60px 0',
      sm: '60px 0 60px 0',
      md: '80px 0 20px 0',
    },
    width: '100%',
    height: {
      xs: '250px',
      sm: '150px',
      md: '50px',
    },
  },
  fourFeatureTagsContent: {
    display: 'flex',
    alignItems: {
      xs: 'flex-start',
      sm: 'flex-start',
      md: 'center',
    },
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  fourFeatureTagsTags: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-around',
      sm: 'space-around',
      md: 'space-between',
      lg: 'space-between',
    },
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    width: '100%',
    height: {
      xs: '25%',
      sm: '50%',
      md: '50%',
    },
  },
  fourFeatureTagsTagContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
    },
    width: {
      xs: '100%',
      sm: '50%',
      md: '25%',
      lg: '25%',
      xl: '25%',
    },
  },
  fourFeatureTagImage: {
    marginRight: '10px',
    width: '30px',
    height: '30px',
    backgroundColor: colorWhite,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  fourFeatureTagsTagLabel: {
    fontSize: '1.5rem',
    fontFamily: freightBigProSemibold,
  },
  fourFeatureTagsDivider: {
    margin: '30px 0 60px 0',
    height: '1px',
    width: '100%',
    backgroundColor: '#D89582',
  },
};

export default styles;
