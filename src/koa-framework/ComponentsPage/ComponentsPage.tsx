import React from 'react';
import { client, RugIdType } from 'client';

import Box from '@mui/material/Box';

import AcfModules from '../AcfModules/AcfModules';
import { config } from '../config/config';

import useStyles from './styles';

interface Props {
  header: JSX.Element;
  modules: Array<any>;
  footer: JSX.Element;
  pageUri: string[];
}
export default function ComponentsPage({ header, modules, footer, pageUri }: Props) {
  const { useQuery } = client;
  const rug = useQuery().rug({
    id: pageUri[1],
    idType: RugIdType.URI,
  });
  // console.log('RUG? ', rug.rug?.title);
  // console.log('PAGE? ', pageUri.includes('rug'));
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
