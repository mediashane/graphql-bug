import { breakpoints } from 'style';

import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
});

export default theme;
