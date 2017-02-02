'use strict';

let HTMLplugin = require('html-webpack-plugin');

module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new HTMLplugin({
      template: './app/index.html'
    })
  ]
};