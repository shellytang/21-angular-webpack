'use strict';

require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

//define app and have angular know what the app-wide dependencies are for 'cowsayApp'
//this is how javascript and html know what to look for
//javascript variable and 'stringName'
const cowsayApp = angular.module('cowsayApp', []);

//controller is handling all functionality in the DOM
//wherever ng-controller lives in the html, this stuff runs there depending on the {{variableName}}
//  mounting .controller here - use this, and this is what it's called
cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

//defines CowsayController and what properties are related to it
function CowsayController($log, $scope){
  $log.debug('doing CowsayController stuff');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'render a cow';

  cowsayCtrl.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow stuff');
    return '\n' + cowsay.say({text: input || 'im gonna say cool stuff'});
  };
  cowsayCtrl.title2 = 'basic text render';
}
