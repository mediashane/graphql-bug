import { colorDarkGrey, freightBigProSemibold } from 'style';

const styles = {
  centeredTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
    width: '100%',
    minHeight: '20x',
  },
  centeredTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
      xs: '80%',
      sm: '80%',
      md: '70%',
      lg: '70%',
      xl: '70%',
    },
    color: colorDarkGrey,
    fontFamily: freightBigProSemibold,
    fontSize: '22px',
    textAlign: 'center' as const,
  },
};

export default styles;
