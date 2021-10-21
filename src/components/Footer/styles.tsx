import { colorBrandBlue, colorWhite, freightBigProBookItalic, proximaNova } from '../../style';

const styles = {
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: {
      xs: '960px',
      sm: '960px',
      md: '570px',
      lg: '570px',
      xl: '570px',
    },
    color: colorWhite,
    backgroundColor: colorBrandBlue,
  },
  footerLeftColumn: {
    width: '35%',
    height: '100%',
  },
  footerRightColumn: {
    width: '60%',
    height: '100%',
  },
  footerLeftColumnContent: {
    margin: '60px 80px 40px 80px',
  },
  footerRightContent: {
    margin: '60px 80px 40px 20px',
  },
  footerTitle: {
    fontSize: '2.5rem',
    fontStyle: 'italic' as const,
    fontFamily: freightBigProBookItalic,
  },
  footerBodyTextContainer: {
    margin: '20px 0 40px 0',
  },
  footerBodyText: {
    marginBottom: '20px',
    fontSize: '1rem',
    fontFamily: proximaNova,
  },
};

export default styles;
