const { withFaust } = require('@faustjs/next'); // eslint-disable-line

const nextjsConfig = {
  poweredByHeader: false,
  images: {
    domains: ['wordpress-536476-2188960.cloudwaysapps.com', 'graphql-bug-koalition.vercel.app'],
  },
};

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust(nextjsConfig);
