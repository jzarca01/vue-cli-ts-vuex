var path = require('path');
var config = require('./config');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    output: {
      path: config.build.assetsRoot,
      publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        src: path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        'Components': path.resolve(__dirname, './src/components'),
        'Views': path.resolve(__dirname, './src/views'),
        'Store': path.resolve(__dirname, './src/store')
      }
    }
  }
}