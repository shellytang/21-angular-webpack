'use strict';

// require webpack assets
require('./scss/core.scss')

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular modulen
const demoApp = angular.module('cowsayApp', []);

// angular constructus
demoApp.controller('CowsayController', ['$log', '$location', '$anchorScroll', CowsayController]);

function CowsayController($log, $location, $anchorScroll) {
  $log.debug('init CowsayController');

  this.title = 'What does the cow say?'
  this.history = []

  cowsay.list((err, list) => {
    this.animals = list
    this.current = this.animals[8]
  })

  this.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say', f: this.current});
  }

  this.submit = function() {
    $log.debug('cowsayCtrl.submit()')
    if (this.text) {
      this.newCow = this.updateCow(this.text)
      this.history.push(this.newCow)
      this.mostRecent = this.history[this.history.length - 1]
      this.text = ''
      $location.hash('current')
      $anchorScroll()
    }
  }

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()')
    this.history.pop()
    this.mostRecent = this.history[this.history.length - 1]
  }

}
