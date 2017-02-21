'use strict';

require('./partials/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');

const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', [CowsayController]);

function CowsayController() {
  this.history = [];
  this.input = 'Nothing';
  this.cowList = [];

  cowsay.list((err, list) => {
    this.cowList = list;
    this.cowFile = list[0];
  });

  this.getPreviewText = function() {
    return this.cowify(this.input, this.cowFile);
  };

  this.cowify = function(text, cowFile) {
    return '\n' + cowsay.say({text: text || ' ', f: cowFile });
  };

  this.save = function() {
    if (!this.input) return;
    this.history.push({ cowFile: this.cowFile, input: this.input });
    return this.history.peek();
  };

  this.undo = function() {
    let last = this.history.pop();
    if (!last) return;
    this.input = last.input;
    this.cowFile = last.cowFile;
    return last;
  };
}
