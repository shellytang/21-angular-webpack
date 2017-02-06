const webpackConfig = require('./webpack.config')
webpackConfig.entry = {}

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basepath: '',
    frameworks: ['Jasmine'],
    files: [
      'test/**/*-test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*-test.js' : ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
