'use strict';

require('./scss/main.scss');

let cowSay = require('cowsay-browser');
let angular = require('angular');

let cowApp = angular.module('cowApp', []);

cowApp.controller('CowSayController', ['$scope', CowSayController]);

function CowSayController($scope) {
  let cowSayCtrl = $scope.cowSayCtrl = {};
  cowSayCtrl.title = 'COW SAY';

  cowSayCtrl.update = function(input) {
    console.log('\n' + cowSay.say({text: input}));
    return '\n' + cowSay.say({text: input});
  };

  cowSayCtrl.click = function(input) {
    console.log(input);
    console.log('click happened');
  };
}