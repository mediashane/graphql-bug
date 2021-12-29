import { breakpoints } from 'style';

import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
        disableGutters: true, // No more padding!
      },
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center' as const,
        },
      },
    },
  },
});

export default theme;
