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
      //test:
      //use: []
    ],
    plugins: [
      new HTMLplugin()
    ]
  }
};