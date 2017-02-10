'use strict';

console.log('in test');
require('./lib/test-setup');

const cowsay = require('cowsay-browser');
const angular = require('angular');

describe('testing cowsayCtrl', function(){
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => { //inject a new instance of our controller using angular's controller service so we can test it!
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });
  describe('method tests', () => { //must be lexical arrow to keep scope
    it('title should be \'render a cow\'', () => {
      expect(this.cowsayCtrl.title).toBe('render a cow');
    });
    it('currentCow should be an empty string', () => {
      expect(this.cowsayCtrl.currentCow.length).toBe(0);
    });
    it('#updateCow should return default text and tux', () => {
      let result = cowsay.say({text: 'im gonna say cool stuff', f: 'tux'}) //default test
      expect(this.cowsayCtrl.updateCow()).toBe('\n' + result);
    })
    it('#updateCow should return a test text', () => {
      let exampleText = 'test text';
      this.cowsayCtrl.text = exampleText;
      let newResult = cowsay.say({text: exampleText, f: 'tux'});
      expect(this.cowsayCtrl.updateCow()).toBe('\n' + newResult);
    })
  });
  it('bink', function(){
    console.log('shitty test');
  });
});
