'use strict';

require('./scss/main.scss');
const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]); //CowsayController is pointing to constructor function below
//log is debug stuff
//scope links us back to variables we had before

function CowsayController($log, $scope) { //angular is taking care of dependency injection behind scenes
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'moooo';
  
  cowsayCtrl.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  };

  cowsayCtrl.helloClick = function(input) {
    $log.debug('cowsayCtrl.helloClick()');
    $log.log(input);
  };
}
