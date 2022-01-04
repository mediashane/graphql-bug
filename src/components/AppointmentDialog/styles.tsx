import { colorDarkGrey, colorWhite, freightDispBook, proximaNova } from '../../style';

const styles = {
  outerWrapper: {
    display: 'flex',
  },
  imageContainer: {
    height: 'auto',
    width: '660px',
    display: {
      xs: 'none',
      sm: 'none',
      md: 'none',
      lg: 'flex',
      xl: 'flex',
    },
    backgroundPosition: 'right top',
  },
  formContainer: {
    height: {
      xs: '100%',
      sm: '100%',
      md: '100%',
      lg: '100%',
      xl: '100%',
    },
    width: {
      xs: '100vw',
      sm: '520px',
      md: '520px',
      lg: '520px',
      xl: '520px',
    },
    padding: {
      xs: '20px',
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
    padding: '0 0 0 20px',
    fontFamily: freightDispBook,
    fontSize: {
      xs: '24px',
      sm: '36px',
      md: '36px',
      lg: '36px',
      xl: '36px',
    },
    fontWeight: 700,
  },
  dialogButtonsContainer: {
    marginTop: {
      xs: '20px',
      sm: '20px',
      md: '20px',
      lg: '20px',
      xl: '20px',
    },
  },
  dialogButton: {
    height: '50px',
    width: {
      xs: '225px',
      sm: '300px',
      md: '300px',
      lg: '300px',
      xl: '300px',
    },
    color: '#333333',
    textTransform: 'capitalize' as const,
    fontSize: '16px',
    fontWeight: 600,
    fontFamily: proximaNova,
    border: 2,
    borderRadius: 0,
    borderColor: '#858585',

    '&:hover': {
      color: colorWhite,
      backgroundColor: '#858585',
      borderWidth: '2px',
      borderColor: '#858585',
    },
  },
  formInputRow: {
    display: 'flex',
    flexDirection: {
      xs: 'column' as const,
      sm: 'column' as const,
      md: 'row' as const,
      lg: 'row' as const,
      xl: 'row' as const,
    },
    justifyContent: 'space-between',
  },
  formInputWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    marginTop: '15px',
  },
  formInputLabel: {
    color: colorDarkGrey,
    fontFamily: proximaNova,
  },
  formInputPlaceholder: {
    color: '#9B9B9B',
    fontSize: '14px',
    fontFamily: proximaNova,
  },
  formInput: {
    marginTop: '5px',
    padding: '5px 10px 5px 10px',
    input: {
      '&::placeholder': {
        paddingLeft: '10px',
        opacity: '0.7',
        fontSize: '1.1rem',
      },
    },
    '& fieldset': {
      borderRadius: 0,
    },
    backgroundColor: '#ffffff',
  },
  selectInput: {
    marginTop: '5px',
    '& fieldset': {
      borderRadius: 0,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff',
    },
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },

  fontFamily: proximaNova,
};

export default styles;
