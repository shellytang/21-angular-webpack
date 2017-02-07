'use strict';

require('./scss/main.scss');

let cowSay = require('cowsay-browser');
let angular = require('angular');

let cowApp = angular.module('cowApp', []);

cowApp.controller('CowSayController', [CowSayController]);


function CowSayController() {
  this.title = 'COW SAY';
  this.cowOptions = [];
  this.saved = '';
  this.custom = 'default';

  cowSay.list((err, list) => {
    if (err) {
      console.error(err);
      return;
    }
    list.forEach(item => {
      this.cowOptions.push(item);
    });
  });

  this.update = function(input) {
    return '\n' + cowSay.say({
      text: input || 'Moo!',
      f: this.custom.trim(),
    });
  };

  this.save = function() {
    this.saved = '\n' + cowSay.say({text: this.text, f: this.custom.trim()});
  };
  // this.click = function(input) {
  //   console.log('click happened');
  //   console.log(input);
  //   return '\n' + cowSay.say({text: input});
  // };

  // this.createCowClick = function(input) {
  //   console.log('click happened');
  //   console.log(input);
  //   return '\n' + cowSay.say({text: input});
  // };
  //
  // this.submit = function(input) {
  //   console.log('submit happened');
  //   this.message.push(input);
  //   console.log(this.message);
  // };
}