'use strict';

require('./scss/main.scss');

let cowSay = require('cowsay-browser');
let angular = require('angular');

let cowApp = angular.module('cowApp', []);

cowApp.controller('CowSayController', [CowSayController]);

function CowSayController() {
  // let cowSayCtrl = this.cowSayCtrl = {};
  this.title = 'COW SAY';

  this.update = function(input) {
    console.log('\n' + cowSay.say({text: input}));
    return '\n' + cowSay.say({text: input});
  };

  this.click = function(input) {
    console.log(input);
    console.log('click happened');
  };
}