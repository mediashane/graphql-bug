const styles = {
  root: {
    height: {
      xs: '500px',
      sm: '500px',
      md: '500px',
      lg: '500px',
      xl: '500px',
    },
    width: {
      xs: '350px',
      sm: '350px',
      md: '350px',
      lg: '350px',
      xl: '350px',
    },
    padding: {
      xs: '40px',
      sm: '40px',
      md: '40px',
      lg: '40px',
      xl: '40px',
    },
    backgroundColor: '#EFEFEF',
    fontWeight: 'bold',
  },
  dialogContainer: {
    borderRadius: '0px',
  },
  dialogTitle: {
    fontWeight: 700,
  },
  dialogButtonsContainer: {
    display: 'flex',
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
      lg: 'row' as const,
      xl: 'row' as const,
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '170px',
    paddingTop: {
      xs: '50px',
      sm: '50px',
      md: '0px',
      lg: '0px',
      xl: '0px',
    },
  },
  dialogButton: {
    height: '50px',
    width: {
      xs: '225px',
      sm: '366px',
      md: '250px',
      lg: '366px',
      xl: '366px',
    },
  },
};

export default styles;
