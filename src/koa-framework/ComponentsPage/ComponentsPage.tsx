import React from 'react';
import AppointmentDialog from 'components/AppointmentDialog/AppointmentDialog';

import Box from '@mui/material/Box';

import AcfModules from '../AcfModules/AcfModules';
import { config } from '../config/config';

import useStyles from './styles';

interface Props {
  header: JSX.Element;
  modules: Array<any>;
  footer: JSX.Element;
  koaThemeOptions?: string;
}
export default function ComponentsPage({ header, modules, footer, koaThemeOptions }: Props) {
  const _config = config();
  const styles = useStyles(_config);

  return (
    <Box sx={styles.componentsPage}>
      {header ? header : null}
      <AppointmentDialog koaThemeOptions={koaThemeOptions} />
      <Box sx={styles.componentsContainer}>
        <AcfModules modules={modules} />
      </Box>
      {footer ? footer : null}
    </Box>
  );
}
