import { colorDarkGrey, colorWhite, freightBigProSemibold, proximaNova } from 'style';

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
    width: {
      xs: '150px',
      sm: '320px',
    },
    height: {
      xs: '315px',
      sm: '400px',
    },
    textAlign: 'center' as const,
  },
  categoryCardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 33%',
    marginBottom: {
      xs: '60px',
      sm: '80px',
      md: '140px',
    },
  },
  categoryCardSticker: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute' as const,
    marginTop: {
      xs: '-10px',
      sm: '-350px',
    },
    marginLeft: {
      xs: '120px',
      sm: '250px',
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
  categoryCardImage: {
    width: {
      xs: '150px',
      sm: '320px',
    },
    height: {
      xs: '150px',
      sm: '320px',
      xl: '400px',
    },
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  categoryCardTitle: {
    paddingTop: '30px',
    color: colorDarkGrey,
    fontFamily: freightBigProSemibold,
    fontSize: '22px',
  },
  categoryCardDescription: {
    paddingTop: '20px',
    color: colorDarkGrey,
    fontFamily: proximaNova,
    fontSize: '16px',
  },
};

export default styles;
