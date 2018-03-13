var path = require('path');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
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