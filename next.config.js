const { withFaust } = require('@faustjs/next'); // eslint-disable-line

const nextjsConfig = {
  image: {
    domains: ['placehold.it', 'wordpress-536476-2188960.cloudwaysapps.com/'],
  },
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextjsConfig);
