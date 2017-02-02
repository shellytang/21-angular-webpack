let HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app',
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  plugins: [
    new HTMLPlugin({
      template: './app/index.html'
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
