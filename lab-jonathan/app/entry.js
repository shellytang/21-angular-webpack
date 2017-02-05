'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
let cowsay = require('cowsay-browser');
let angular = require('angular');

// angular module
let demoApp = angular.module('demoApp', []);

// angular constructus
demoApp.controller('CowsayController', CowsayController);

function CowsayController($log){
  $log.debug('init CowsayController');
  this.title = 'Cowsay Controller Lab';
  this.history = [];

  cowsay.list((err, cowfiles) => {
    this.cowfiles = cowfiles;
    this.currentCow = this.cowfiles[0];
    console.log('currentCow', this.currentCow);
  });

  this.updateCow = function(input){
    $log.debug('this.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  };

  this.speak = function(input){
    $log.debug('this.updateCow()');
    this.spoken = this.updateCow(input);
    this.history.push(this.spoken);
    console.log('this.history', this.history);
  };

  this.undo = function(){
    $log.debug('this.undo()');
    console.log('this.history', this.history);
    this.history.pop();
    this.spoken = this.history.pop() || '';
    console.log('spoken', this.spoken);
  };
}
  // this.helloClick = function(input){
  //   $log.debug('cowsayCtrl.helloClick()');
  //   $log.log(input);
  // };

// }
