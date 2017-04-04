/**
 * Created by Oleksandr Tserkovnyi on 4/4/17.
 * kemperomg@gmail.com
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /worker\.js/,
      use: [
        'worker-loader',
        'babel-loader'
      ]
    }]
  },

  plugins: [new HtmlWebpackPlugin()]
};