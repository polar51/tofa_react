const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@layouts': './src/layouts',
          '@lib': './src/lib',
          '@pages': './src/pages',
          '@utils': './src/utils',
        },
      },
    },
  ],
};
