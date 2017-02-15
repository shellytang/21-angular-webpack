'use strict';

require('./partials/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  this.cowify = function(input) {
    return '\n' + cowsay.say({text: input || ' '});
  };

  this.save = function() {

  };
}
