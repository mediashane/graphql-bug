import { colorBrandBlue, colorDarkGrey, freightDispSemibold, proximaNova } from '../../style';

const styles = {
  contactCardContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 25%',
    width: {
      xs: '100%',
      sm: '100%',
      md: '50%',
      lg: '50%',
    },
    height: '100%',
    marginBottom: '20px',
  },
  contactCardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactCardTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
  },
  contactCardText: {
    textAlign: 'left' as const,
    width: '265px',
    height: '250px',
  },
  contactCardTitle: {
    paddingBottom: '20px',
    color: colorDarkGrey,
    fontFamily: freightDispSemibold,
    fontSize: '22px',
  },
  contactCardAddress: {
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '16px',
  },
  contactCardPhoneNumber: {
    paddingTop: '20px',
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '16px',
  },
  contactLink: {
    textDecoration: 'none',
  },
  contactCardEmail: {
    paddingTop: '20px',
    color: colorBrandBlue,
    fontFamily: proximaNova,
    fontSize: '16px',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default styles;
