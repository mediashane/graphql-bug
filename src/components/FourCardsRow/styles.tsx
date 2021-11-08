import { colorDarkGrey, colorWhite, proximaNova } from '../../style';

const styles = {
  fourCardsRowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: {
      xs: '60px 0 0 0',
      sm: '7.5vw 0 00',
      md: '60px 0 0 0',
      lg: '80px 0 60px 0',
    },
    width: '100%',
    height: {
      xs: '100%',
      sm: '100%',
      md: '30vw',
      lg: '360px',
    },
  },
  fourCardsRowContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  fourCardsCards: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    width: '100%',
  },
  fourCardsCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column' as const,
    marginBottom: {
      xs: '60px',
      sm: '60px',
      md: '0',
    },
    width: {
      xs: '40%',
      sm: '40%',
      md: 'auto',
    },
    height: {
      xs: '100%',
      sm: '100%',
      md: '360px',
    },
    cursor: 'pointer',
  },
  fourCardsImage: {
    width: {
      xs: '40vw',
      sm: '40vw',
      md: '20vw',
    },
    maxWidth: '280px',
    height: {
      xs: '40vw',
      sm: '40vw',
      md: '20vw',
    },
    maxHeight: '280px',
    backgroundColor: colorWhite,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  fourCardsLabelContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    marginTop: '15px',
    width: {
      xs: '40vw',
      sm: '40vw',
      md: '100%',
    },
    maxWidth: '280px',
  },
  fourCardsTitle: {
    fontSize: {
      xs: '3vw',
      sm: '1.25rem',
      md: '1.25rem',
      lg: '1.5rem',
    },
    fontFamily: proximaNova,
  },
  fourCardsSubtitle: {
    fontSize: {
      xs: '2.5vw',
      sm: '1rem',
      md: '1rem',
      lg: '1.25rem',
    },
    fontFamily: proximaNova,
  },
  fourCardSticker: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute' as const,
    marginTop: {
      xs: '-2%',
      sm: '-15px',
      md: '-1.5vw',
      lg: '-15px',
    },
    marginLeft: {
      xs: '37.5%',
      sm: '230px',
      md: '15vw',
      lg: '220px',
    },
    width: {
      xs: '40px',
      sm: '60px',
      md: '75px',
      lg: '86px',
    },
    height: {
      xs: '40px',
      sm: '60px',
      md: '75px',
      lg: '86px',
    },
    backgroundColor: colorWhite,
    borderRadius: '50%',
    filter: 'drop-shadow(0 0 5px #a3a2a2)',
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: {
      xs: '12px',
      sm: '18px',
    },
  },
};

export default styles;
