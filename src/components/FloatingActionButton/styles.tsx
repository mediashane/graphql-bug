import { colorWhite, freightBigProSemibold } from 'style';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 40,
    left: 'auto',
    position: 'fixed' as const,
    height: '87px',
    width: '87px',
    color: '#ffffff',
    backgroundColor: '#6AC283',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'ease-in-out all 0.3s',

    '&:hover': {
      width: {
        xs: '320px',
        sm: '496px',
      },
    },
  },
  chatTextContainer: {
    position: 'absolute' as const,
    width: '80%',
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  },
  chatText: {
    color: colorWhite,
    fontSize: {
      xs: '22px',
      sm: '36px',
    },
    fontFamily: freightBigProSemibold,
  },
  chatIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed' as const,
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 40,
    left: 'auto',
    height: '87px',
    width: '87px',
    backgroundColor: '#6AC283',
    borderRadius: '50px',
    zIndex: 1,
  },
};

export default styles;
