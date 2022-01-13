import { colorBrandBlue, colorDarkGrey, colorWhite, proximaNova } from '../../style';

const styles = {
  fourButtonsGroupContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: {
      xs: '40px',
      sm: '40px',
      md: '40px',
    },
    paddingBottom: {
      xs: '40px',
      sm: '40px',
      md: '40px',
    },
  },
  fourButtonsGroupContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  fourButtonsGroupTitle: {
    paddingLeft: '40px',
    color: colorBrandBlue,
    fontSize: '2.5rem',
    fontStyle: 'italic' as const,
    fontFamily: proximaNova,
    lineHeight: 1,
  },
  fourButtonsGroupCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      xs: 'space-between',
      sm: 'space-between',
      md: 'space-around',
      lg: 'space-around',
      xl: 'space-around',
    },
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
    },
    marginTop: {
      xs: '0px',
      sm: '10px',
      md: '20px',
      lg: '40px',
      xl: '40px',
    },
    width: '100%',
    height: '70%',
  },
  fourButtonsGroupCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: {
      xs: '20px',
      sm: '20px',
      md: '0px',
    },
    maxWidth: '340px',
    minWidth: {
      xs: '285px',
      sm: '285px',
      md: '250px',
      lg: '285px',
      xl: '340px',
    },
    padding: '0 20px',
    height: '60px',
    color: colorDarkGrey,
    border: 2,
    borderRadius: 0,
    borderColor: '#858585',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: colorWhite,
      backgroundColor: '#858585',
      borderWidth: '2px',
      borderColor: '#858585',
    },
    cursor: 'pointer',
  },
  fourButtonsGroupCardLabel: {
    color: 'inherit',
    fontSize: '18px',
    fontFamily: proximaNova,
  },
  ctaWrapper: {
    padding: '40px 0 20px 0',
  },
  ctaText: {
    fontFamily: proximaNova,
    textAlign: 'center' as const,
  },
};

export default styles;
