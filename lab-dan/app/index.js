const cowsay = require('cowsay-browser')
const angular = require('angular')
require('./scss/main.scss')

angular.module('cowsayModule', [])

angular.module('cowsayModule').controller('cowsayCtrl', [update])

function update () {
  let self = this

  self.title = 'Angular Dragon Speak'

  self.updateMsg = function () {
    let response = cowsay.say({
      text : self.message || 'Say something!',
      f: 'dragon'
    })
    return '\n' + response
  }

  self.copyOutput = null

  self.copy = function () {
    self.copyOutput = self.updateMsg()
  }

  self.reset = function () {
    self.copyOutput = null
    self.message = null
  }
}
