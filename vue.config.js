var path = require('path');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        'Components': path.resolve(__dirname, './src/components'),
        'Views': path.resolve(__dirname, './src/views'),
        'Store': path.resolve(__dirname, './src/store')
      }
    },
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    }
  }
}