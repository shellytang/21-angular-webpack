'use strict';

require('./scss/main.scss');

let cowSay = require('cowsay-browser');
let angular = require('angular');

let cowApp = angular.module('cowApp', []);

cowApp.controller('CowSayController', [CowSayController]);

function CowSayController() {
  this.title = 'COW SAY';
  this.message = [];

  this.update = function(input) {
    return '\n' + cowSay.say({text: input});
  };

  this.click = function() {
    console.log('click happened');
    // console.log(this.message);
    // return '/n' + cowSay.say({text: this.message[0]});
  };

  this.submit = function(input) {
    console.log('submit happened');
    console.log(input);
    this.message.push(input);
  };
}