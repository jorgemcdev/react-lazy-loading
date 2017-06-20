const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, './src/index'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, './build/'),
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
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3001,
    stats: 'errors-only',
    historyApiFallback: true,
    open: true
  },    
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),      
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new webpack.HotModuleReplacementPlugin(),  // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
};