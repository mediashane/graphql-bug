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
        console.log('[KOA]', 'Rendering', module?.__typename);
        const componentName = module?.__typename?.split('_')?.pop() ?? module?.[0]?.__typename?.split('_')?.pop();
        if (!componentName) {
          console.error('[KOA]', 'AcfModules', 'Component name is empty');
          return;
        }

        // if modules are ACF Flexible Content, access properties using $on
        // otherwise return module properties directly
        const moduleData = module.$on ? module?.$on[module?.__typename] : module;
        return renderComponent(componentName, moduleData, index);
      })}
    </>
  );
}
