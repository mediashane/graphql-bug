import { colorDarkGrey, colorWhite, freightDispSemibold, proximaNova } from '../../style';

const styles = {
  categoryCardContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: {
      xs: 'flex-start',
      sm: 'center',
      md: 'center',
    },
    flex: '0 0 33%',
    marginBottom: {
      xs: '60px',
      sm: '80px',
      md: '140px',
    },
    textAlign: 'center' as const,
  },
  categoryCardNarrow: {
    width: {
      xs: '150px',
      sm: '320px',
      xl: '400px',
    },
    height: {
      xs: '335px',
      sm: '450px',
      lg: '490px',
    },
  },
  categoryCardWide: {
    width: {
      xs: '320px',
      sm: '360px',
      xl: '400px',
    },
    height: {
      xs: '450px',
      sm: '450px',
      lg: '490px',
    },
  },
  categoryCardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column' as const,
  },
  categoryCardSticker: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute' as const,
    marginTop: {
      xs: '-10px',
      sm: '-370px',
      md: '-370px',
      lg: '-415px',
      xl: '-435px',
    },
    marginLeft: {
      xs: '120px',
      sm: '260px',
      md: '255px',
      lg: '295px',
      xl: '340px',
    },
    width: {
      xs: '40px',
      sm: '86px',
    },
    height: {
      xs: '40px',
      sm: '86px',
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
  categoryCardImageNarrow: {
    width: {
      xs: '150px',
      sm: '320px',
      lg: '360px',
    },
    height: {
      xs: '150px',
      sm: '320px',
      lg: '360px',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  categoryCardImageWide: {
    width: {
      xs: '320px',
      sm: '360px',
      lg: '360px',
    },
    height: {
      xs: '320px',
      sm: '360px',
      lg: '360px',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  categoryCardTextNarrow: {
    width: {
      xs: '150px',
      sm: '320px',
      lg: '360px',
      xl: '400px',
    },
  },
  categoryCardTextWide: {
    width: {
      xs: '320px',
      sm: '360px',
      lg: '360px',
      xl: '400px',
    },
  },
  categoryCardTitle: {
    paddingTop: '30px',
    color: colorDarkGrey,
    fontFamily: freightDispSemibold,
    fontSize: '24px',
  },
  categoryCardDescription: {
    paddingTop: '20px',
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '16px',
  },
};

export default styles;
