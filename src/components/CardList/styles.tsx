const styles = {
  cardListContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '60px',
    width: '100%',
    minHeight: '20px',
  },
  cardListWrapper: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
};

export default styles;
