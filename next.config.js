const { withFaust } = require('@faustjs/next');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    domains: [
      'source.unsplash.com',
    ]
  }
});
