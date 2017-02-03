const cowsay = require('cowsay-browser')
require('./scss/main.scss')

angular.module('cowsayModule', [])

angular.module('cowsayModule').controller('cowsayCtrl', [updateCow])

function updateCow ($log) {
  let self = this
  self.title = 'Mooooooo'
  self.updateCow = function () {
    let response = cowsay.say({
      text : self.message || 'Say something!',
      e : 'oO',
      T : 'U '
    })
    return '\n' + response
  }
}
