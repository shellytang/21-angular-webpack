'use strict';

// require webpack assets
require('./scss/main.scss')

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular modulen
const demoApp = angular.module('cowsayApp', []);

// angular constructus
demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('init CowsayController');

  this.title = 'What does the cow say?'
  // this.cowsayFile = ['default']
  this.history = []
  this.mostRecent
  this.animals = null

  cowsay.list((err, list) => {
    this.animals = list
    this.current = this.animals[0]
  })

  this.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say', f: this.current});
  }

  this.submit = function() {
    $log.debug('cowsayCtrl.submit()')
    if (this.text) {
      this.history.push(this.updateCow(this.text))
      this.mostRecent = this.history[this.history.length - 1]
      this.text = ''
    }
  }

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()')
    this.history.pop()
    this.mostRecent = this.history[this.history.length - 1]
  }

}
