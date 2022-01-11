import React from 'react';
import { KoaThemeOptions } from 'client';
import AppointmentDialog from 'components/AppointmentDialog/AppointmentDialog';
import FloatingActionButton from 'components/FloatingActionButton/FloatingActionButton';

import Box from '@mui/material/Box';

import AcfModules from '../AcfModules/AcfModules';
import { config } from '../config/config';

import useStyles from './styles';

interface Props {
  header: JSX.Element;
  modules: Array<any>;
  footer: JSX.Element;
  koaThemeOptions?: KoaThemeOptions;
  isLoading: boolean;
}
export default function ComponentsPage({ header, modules, footer, koaThemeOptions, isLoading }: Props) {
  const _config = config();
  const styles = useStyles(_config);

  return (
    <Box sx={styles.componentsPage}>
      {header ? header : null}
      <FloatingActionButton />
      <AppointmentDialog koaThemeOptions={koaThemeOptions} />
      <Box sx={styles.componentsContainer}>
        <AcfModules modules={modules} isLoading={isLoading} />
      </Box>
      {footer ? footer : null}
    </Box>
  );
}
