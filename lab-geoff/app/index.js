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
  this.savedCows = [];
  this.custom = 'default';
  this.updateText = '';

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
    this.updateText = input;
    return '\n' + cowSay.say({
      text: input || 'Moo!',
      f: this.custom.trim(),
    });
  };

  this.save = function() {
    this.saved = '\n' + cowSay.say({
      text: this.updateText,
      f: this.custom.trim()
    });
    this.savedCows.push(this.saved);
  };

  this.undo = function() {
    this.savedCows.pop();
    this.saved = this.savedCows[this.savedCows.length - 1];
  };
}