'use strict';

// require webpack assets
require('./scss/main.scss')

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular modulen
const demoApp = angular.module('demoApp', []);

// angular constructus
demoApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('init CowsayController');
  // let cowsayCtrl = $scope.cowsayCtrl = {};
  this.title = 'Moooooo';
  this.history = [];
  this.mostRecent;

  this.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
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
