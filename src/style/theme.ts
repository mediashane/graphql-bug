import { breakpoints } from 'style';

import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export default theme;
