const styles = {
  cardListContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60px',
    width: '100%',
    minHeight: '20x',
  },
  cardListWrapper: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    justifyContent: {
      xs: 'space-around',
      sm: 'space-around',
      md: 'space-around',
      lg: 'flex-start',
      xl: 'flex-start',
    },
    width: '100%',
  },
};

export default styles;
