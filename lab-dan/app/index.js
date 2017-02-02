const cowsay = require('cowsay')
require('./scss/main.scss')

angular.module('cowsayModule', [])

angular.module('cowsayModule').controller('cowsayCtrl', function() {
  let self = this
  self.message = ''
  // self.message = cowsay.say({
  //   text : self.message,
  // 	e : 'oO',
  // 	T : 'U '
  // })
})
