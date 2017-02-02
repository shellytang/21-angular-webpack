const cowsay = require('cowsay')
require('./scss/main.scss')

angular.module('cowsayModule', [cowsay])

angular.module('cowsayModule').controller('cowsayCtrl', function($scope) {
  let self = this
  return self.output = cowsay(self.message)
})
