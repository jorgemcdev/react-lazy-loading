const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    hot: false,
    contentBase: path.join(__dirname, 'build/public'),
    compress: false,
    port: 3001,
    stats: 'none',
    historyApiFallback: true,
    open: true
  }
};