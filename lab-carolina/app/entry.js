'use strict';

require('./scss/main.scss');

const cowsay = require('cowsay-browser');
const angular = require('angular');

const demoApp = angular.module('demoApp', []);

demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope){
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moooooo';

  cowsayCtrl.updateCow = function(input){
    return '\n' + cowsay.say({text: input || 'gimme something to say!'});
  };

  cowsayCtrl.helloClick = function(input){
    $log.log(input);
  };
  
}
