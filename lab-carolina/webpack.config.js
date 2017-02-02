let HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/entry.js',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLPlugin,
  ],
};
