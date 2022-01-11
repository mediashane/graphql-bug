import React from 'react';

import { HEADER_HEIGHT_DESKTOP_DEFAULT, HEADER_HEIGHT_MOBILE_DEFAULT } from './defaults';

/* eslint-disable @typescript-eslint/ban-types */

export interface HeaderConfig {
  HEADER_HEIGHT_DESKTOP: number;
  HEADER_HEIGHT_MOBILE: number;
}

/**
 * The configuration for your "KOA platform" site
 *
 * @export
 * @interface Config
 */
export interface Config extends Record<string, unknown> {
  /**
   * The funntion tha will render the components
   *
   * @returns {JSX.Element}
   * @memberof Config
   */
  renderComponent: (componentName: string, componentData: any, index: number, isLoading: boolean) => JSX.Element;

  headerConfig: HeaderConfig;
}

let koaConfig: Config = {
  renderComponent: () => {
    console.error('Create your own "koa.config.js" file at root folder');
    return React.createElement('<p>Create your own "koa.config.js" file at root folder</p>');
  },
  headerConfig: {
    HEADER_HEIGHT_DESKTOP: HEADER_HEIGHT_DESKTOP_DEFAULT,
    HEADER_HEIGHT_MOBILE: HEADER_HEIGHT_MOBILE_DEFAULT,
  },
};
let configSet = false;

/**
 * A setter/getter for the Config
 *
 * @export
 * @param {Config} [cfg]
 * @returns {Config}
 */
export function config(cfg?: Config): Config {
  if (!configSet && !isObject(cfg)) {
    throw new Error(
      'You must set your Koa configuration at the highest level in your application. `config` was called with no arguments prior to setting the configuration.',
    );
  }

  if (!isObject(cfg)) {
    return koaConfig;
  }

  configSet = true;
  koaConfig = cfg;

  return koaConfig;
}
