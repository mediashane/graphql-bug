import React from 'react';

import { config } from '../config/config';

export interface Props {
  modules?: Array<any>;
}
export default function AcfModules({ modules }: Props) {
  const { renderComponent } = config();
  return (
    <>
      {modules.map((module, index) => {
        const componentName = module.__typename?.split('_')?.pop();
        const moduleData = module.$on[module.__typename];
        return renderComponent(componentName, moduleData, index);
      })}
    </>
  );
}