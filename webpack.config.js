const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    
  ],
  plugin: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};
