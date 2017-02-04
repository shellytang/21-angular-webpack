'use strict';

require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

//define app and have angular know what the app-wide dependencies are for 'cowsayApp'
//this is how javascript and html know what to look for
//javascript variable and 'stringName'
//angular.module takes two parameters, the empty array is create a module with these dependencies.
const cowsayApp = angular.module('cowsayApp', []);

//controller is handling all functionality in the DOM
//wherever ng-controller lives in the html, this stuff runs there depending on the {{variableName}}
//  mounting .controller here - use this, and this is what it's called
//the controller is instantiated inside the ng directive element.
cowsayApp.controller('CowsayController', ['$log', CowsayController]);
//$log and $scope are native SERVICES


//defines CowsayController and what properties are related to it
//we use controllers to control scope, as well as add functionality within that scoped html element. this allows for modular commonJS functionality, and the ability to work on particular elements.
function CowsayController($log){
  $log.debug('doing CowsayController stuff');
  //setting up the initial state of our scope object. we attach properties to it
  this.title = 'render a cow';

  this.updateCow = function(input){
    $log.debug('cowsayCtrl.updateCow stuff');
    return '\n' + cowsay.say({text: input || 'im gonna say cool stuff'});
  };
  this.title2 = 'basic text render';
}
