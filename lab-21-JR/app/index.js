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
  this.currentCow = '';

  this.makeCow = function(){
    //makes a damn cow
    $log.debug('cowsayCtrl.makeCow stuff');
    return '\n' + cowsay.say({text: this.text || 'im gonna say cool stuff', f: this.selectedOption || 'tux'});
  };
  this.title2 = 'basic text render';

  this.arrayOfSubmissions = [];

  this.submitCowState = function(){
    //execute submitCowState to push text into the array so we can go back to a saved state with the undo button
    let savedText = this.makeCow();
    this.arrayOfSubmissions.push(savedText);
    this.currentCow = this.arrayOfSubmissions[this.arrayOfSubmissions.length - 1];
    console.log(this.arrayOfSubmissions);
  };

  this.undo = function(){
    //removes saved "state" from the arrayOfSubmissions on click AND updates current cow in the DOM
    this.arrayOfSubmissions.pop();
    this.currentCow = this.arrayOfSubmissions[this.arrayOfSubmissions.length - 1];
    console.log(this.arrayOfSubmissions);
  };

  cowsay.list((err, cows) => {
    this.listOfCows = cows;
  });
}
