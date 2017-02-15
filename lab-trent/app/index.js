'use strict';

require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $scope.cowsayCtrl = {};

  $scope.cowsayCtrl.cowify = function(input) {
    return '\n' + cowsay.say({text: input || ' '});
  };

  $scope.cowsayCtrl.save = function() {

  };
}
