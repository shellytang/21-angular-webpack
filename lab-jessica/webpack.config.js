'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/entry.js',
  output: {
    filename: 'bundle.js',
    path: './build',
  },
  plugins: [
    new HTMLPlugin({
      template: './app/index.html',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
};
