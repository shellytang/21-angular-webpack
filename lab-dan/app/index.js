const cowsay = require('cowsay-browser')
const angular = require('angular')
require('./scss/main.scss')

angular.module('cowsayModule', [])

angular.module('cowsayModule').controller('cowsayCtrl', ['$log', update])

function update ($log) {
  let self = this
  let defaultMsg = 'Type something!'
  self.saves = []
  self.creatures = []
  self.formOutput = defaultMsg
  self.copyOutput = ''

  cowsay.list((err, cows) => {
    if (err) $log.error(err)
    self.creatures = cows
  })

  self.title = 'Angular Creature Speak'

  self.updateMsg = function () {
    self.formOutput = cowsay.say({
      text : self.form.message || defaultMsg,
      f: self.form.creature || 'dragon'
    })
  }

  self.copyOutput = null

  self.save = function () {
    if (self.formOutput === defaultMsg && self.saves.length === 0) return
    self.saves.push(angular.copy(self.formOutput || ''))
  }

  self.undo = function () {
    self.copyOutput = self.saves.pop()
  }

  self.reset = function () {
    self.saves = []
    self.form.message = ''
    self.formOutput = defaultMsg
    self.copyOutput = ''
  }
}
