'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js', //where webpack will load the js
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  module: {
    loaders: [  //file by file
      {
        test: /\.scss$/,  //look through the directory and anything with an extension of .scss, do this stuff to it
        use: ['style-loader', 'css-loader', 'sass-loader'] //these are read right to left.
      }
    ]
  },
  plugins: [   // work on the entire bundle level (creates an entire html page)
    new HTMLPlugin({  //will create an instance of the html plugin because there may be many HTML pages
      template: `${__dirname}/app/index.html`,
    }),
  ],
};
