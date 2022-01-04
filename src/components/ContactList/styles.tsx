import { colorDarkGrey, proximaNova } from 'style';

const styles = {
  cardListContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: '100%',
    minHeight: '20px',
    marginBottom: '20px',
    paddingLeft: '40px',
  },
  cardListWrapper: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    justifyContent: {
      xs: 'flex-start',
      sm: 'flex-start',
      md: 'space-between',
      lg: 'flex-start',
    },
    width: '100%',
  },
  sectionLabel: {
    display: 'flex',
    alignSelf: 'flex-start',
    width: '80%',
    margin: {
      xs: '0 0 20px 0',
      sm: '0 0 20px 0',
      md: '0 0 20px 0',
      lg: '0 0 20px 0',
      xl: '0 0 20px 3%',
    },
    color: colorDarkGrey,
    fontFamily: proximaNova,
  },
};

export default styles;
