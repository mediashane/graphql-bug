const styles = {
  centeredTextContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 0',
    width: '100%',
    minHeight: '20px',
  },
  centeredTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
      xs: '80%',
      sm: '80%',
      md: '80%',
      lg: '80%',
      xl: '90%',
    },
    textAlign: 'center' as const,
  },
};

export default styles;
