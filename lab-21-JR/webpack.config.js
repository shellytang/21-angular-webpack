'use strict';

const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js', //where webpack will load the js
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  module: {
    loaders: [  //file by file
      {
        test: /\.scss$/,  //look through the directory and anything with an extension of .scss, do this stuff to it
        use: ['style-loader', 'css-loader', 'sass-loader'] //these are read right to left.
      },
      {  //transpiles here
        test:/\.js$/,  //turn all .js files into es2015 syntax for older browsers
        use: ['babel-loader'],  //use babel-loader library
        exclude: /node_modules/  //dont bother transforming node_modules
      }
    ]
  },
  plugins: [   // work on the entire bundle level (creates an entire html page)
    new HTMLPlugin({  //will create an instance of the html plugin because there may be many HTML pages
      template: `${__dirname}/app/index.html`,
    }),
  ],
};
