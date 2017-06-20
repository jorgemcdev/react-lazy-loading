const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, './build/public'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: { cacheDirectory: true }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        'screw_ie8': true,
        'warnings': false,
        'unused': true,
        'dead_code': true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
  ]
};