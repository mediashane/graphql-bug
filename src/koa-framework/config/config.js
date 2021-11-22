'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getGqlUrl =
  exports.config =
  exports.normalizeConfig =
  exports.LOGOUT_ENDPOINT_PARTIAL_PATH =
  exports.TOKEN_ENDPOINT_PARTIAL_PATH =
    void 0;
const isObject_1 = __importDefault(require('lodash/isObject')); // eslint-disable-line

let configSet = false;

let koaConfig = {
  renderComponent: () => console.error('Create your own "koa.config.js" file at root folder'),
};

/**
 * A setter/getter for the Config
 *
 * @export
 * @param {Config} [cfg]
 * @returns {Config}
 */
function config(cfg) {
  if (!configSet && !(0, isObject_1.default)(cfg)) {
    throw new Error(
      'You must set your koa configuration at the highest level in your application. `config` was called with no arguments prior to setting the configuration.',
    );
  }
  if (!(0, isObject_1.default)(cfg)) {
    return koaConfig;
  }
  configSet = true;
  koaConfig = cfg;
  return koaConfig;
}
exports.config = config;
