import { colorWhite, freightDispSemibold } from 'style';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed' as const,
    height: '64px',
    width: '64px',
    color: '#ffffff',
    backgroundColor: '#6AC283',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'ease-in-out all 0.3s',
    zIndex: 9999,

    '&:hover': {
      width: {
        xs: '320px',
        sm: '320px',
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
    fontSize: '22px',
    fontFamily: freightDispSemibold,
  },
  chatIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed' as const,
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    height: '64px',
    width: '64px',
    backgroundColor: '#6AC283',
    borderRadius: '50px',
    zIndex: 1,
  },
};

export default styles;
