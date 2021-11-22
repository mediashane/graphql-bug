import { Config } from '../../config/config';

const styles = (config: Config) => {
  const { HEADER_HEIGHT_DESKTOP, HEADER_HEIGHT_MOBILE } = config.headerConfig;

  return {
    componentsPage: {},
    componentsContainer: {
      paddingTop: {
        xs: `${HEADER_HEIGHT_MOBILE}px`,
        sm: `${HEADER_HEIGHT_MOBILE}px`,
        md: `${HEADER_HEIGHT_DESKTOP}px`,
        lg: `${HEADER_HEIGHT_DESKTOP}px`,
        xl: `${HEADER_HEIGHT_DESKTOP}px`,
      },
    },
  };
};

export default styles;
