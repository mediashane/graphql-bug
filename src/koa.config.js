import acfRenderComponent from './helpers/renderComponent';
import { config as koaConfig } from './koa-framework/config/config'; // TODO Import from the KOA Package

export default koaConfig({
  renderComponent: acfRenderComponent,
  headerConfig: {
    HEADER_HEIGHT_DESKTOP: 0,
    HEADER_HEIGHT_MOBILE: 0,
  },
});
