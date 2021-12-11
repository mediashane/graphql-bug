import React from 'react';

import Box from '@mui/material/Box';

import AcfModules from '../AcfModules/AcfModules';
import { config } from '../config/config';

import useStyles from './styles';

interface Props {
  header: JSX.Element;
  modules: Array<any>;
  footer: JSX.Element;
}
export default function ComponentsPage({ header, modules, footer }: Props) {
  const _config = config();
  const styles = useStyles(_config);

  return (
    <Box sx={styles.componentsPage}>
      {header ? header : null}
      <Box sx={styles.componentsContainer}>
        <AcfModules modules={modules} />
      </Box>
      {footer ? footer : null}
    </Box>
  );
}
