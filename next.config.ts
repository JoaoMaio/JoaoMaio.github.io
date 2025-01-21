const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/joaomaio.github.io' : '',
  assetPrefix: isProd ? '/joaomaio.github.io' : '',
};



