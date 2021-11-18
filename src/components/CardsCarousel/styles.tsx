import { colorDarkGrey, colorLightGrey, colorWhite, freightBigProMediumItalic, proximaNova } from '../../style';

const styles = {
  cardsCarouselContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    width: '100%',
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
      lg: '100%',
    },
    // maxHeight: {
    //   md: '360px',
    // },
  },
  cardsCarouselContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  carouselCards: {
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: 'space-evenly',
    flexDirection: 'row' as const,
    flexWrap: 'nowrap' as const,
    position: 'relative' as const,
    width: '100%',
    overflowX: 'hidden' as const,
    scrollBehavior: 'smooth' as const,
    scrollSnapType: 'x mandatory',

    '& > *': {
      scrollSnapAlign: 'center',
    },
  },
  cardsCarouselControlsWrapper: {
    height: {
      xs: '150px',
      sm: '175px',
      md: '200px',
    },
  },
  cardsCarouselControlsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute' as const,
    // marginTop: '7.5%',
    width: '100%',
    overflow: 'hidden',
    zIndex: 2,
  },
  cardsCarouselArrowButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '68px',
    width: '53px',
    backgroundColor: colorWhite,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: colorLightGrey,
    },
  },
  cardsCarouselArrowButton: {
    height: '5rem',
    width: '5rem',
    color: colorDarkGrey,
  },
  cardsCarouselLabelContainer: {
    margin: '60px 0 60px 0',
  },
  cardsCarouselLabel: {
    fontSize: '2.5rem',
    fontStyle: 'italic',
    fontFamily: freightBigProMediumItalic,
    lineHeight: 1,
  },
  carouselCardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column' as const,
    margin: {
      xs: '20px 60px 60px 60px',
      sm: '20px 60px 60px 60px',
      md: '20px 30px 60px 30px',
    },
    width: {
      xs: '35vw',
      sm: '35%',
      md: 'auto',
    },
    height: {
      xs: '100%',
      sm: '100%',
      md: '360px',
    },
    cursor: 'pointer',
  },
  carouselCardImage: {
    width: {
      xs: '230px',
      sm: '280px',
      md: '280px',
    },
    maxWidth: '280px',
    height: {
      xs: '230px',
      sm: '280px',
      md: '280px',
    },
    maxHeight: '280px',
    backgroundColor: colorWhite,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  carouselCardLabelContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    marginTop: '15px',
    width: {
      xs: '50vw',
      sm: '40vw',
      md: '100%',
    },
    maxWidth: '280px',
  },
  carouselCardTitle: {
    fontSize: {
      xs: '16px',
      sm: '1.25rem',
      md: '1.5vw',
      lg: '1.5vw',
    },
    fontFamily: proximaNova,
  },
  carouselCardSubtitle: {
    fontSize: {
      xs: '12px',
      sm: '1rem',
      md: '1rem',
      lg: '1.25rem',
    },
    fontFamily: proximaNova,
  },
  carouselCardSticker: {
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
      xs: '200px',
      sm: '230px',
      md: '220px',
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
