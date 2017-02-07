const webpack= require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    port: 9876,
    colors: true,
    basePath: '',
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'test/*.js': ['webpack']
    },
    files: [
      'test/*.js'
    ],
  });
};