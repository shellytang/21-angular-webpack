'use strict';

// require webpack assets
require('./scss/main.scss')

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular modulen
const demoApp = angular.module('demoApp', []);

// angular constructus
demoApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('init CowsayController');
  let cowsayCtrl = $scope.cowsayCtrl = {};
  cowsayCtrl.title = 'Moooooo';

  cowsayCtrl.updateCow = function(input) {
    $log.debug('cowsayCtrl.updateCow()');
    return '\n' + cowsay.say({text: input || 'gimme something to say'});
  };

  $scope.$on('Save', function(data) {
    $log.debug('cowsayCtrl.save');
    $log.log('data: ', data);
    cowsayCtrl.updateCow('test');
  });
}
