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
    it('#makeCow should return default text and tux', () => {
      let result = cowsay.say({text: 'im gonna say cool stuff', f: 'tux'}); //default test
      expect(this.cowsayCtrl.makeCow()).toBe('\n' + result);
    });
    it('#makeCow should return a test text', () => {
      let exampleText = 'test text';
      this.cowsayCtrl.text = exampleText;
      let newResult = cowsay.say({text: exampleText, f: 'tux'});
      expect(this.cowsayCtrl.makeCow()).toBe('\n' + newResult);
    });
    it('#makeCow should return a test text with a selected animal flag', () => {
      let exampleText = 'test text';
      this.cowsayCtrl.text = exampleText;
      let selectedAnimal = this.cowsayCtrl.listOfCows[0];
      this.cowsayCtrl.selectedOption = selectedAnimal;
      let newResult = cowsay.say({text: exampleText, f: selectedAnimal});
      expect(this.cowsayCtrl.makeCow()).toBe('\n' + newResult);
    });
    it('arrayOfSubmissions should be an array, and empty', () => {
      expect(Array.isArray(this.cowsayCtrl.arrayOfSubmissions)).toBe(true);
      expect(this.cowsayCtrl.arrayOfSubmissions.length).toBe(0);
    });
    it('#submitCowState should save text into the arrayOfSubmissions', () => {
      this.cowsayCtrl.submitCowState();
      expect(this.cowsayCtrl.arrayOfSubmissions.length).toBe(1);
    });
    it('#undo should remove an item from the arrayOfSubmissions and update currentCow', () => {
      this.cowsayCtrl.arrayOfSubmissions = ['test'];
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.arrayOfSubmissions.length).toBe(0);
      expect(this.cowsayCtrl.currentCow).toBe(undefined);
    });
  });
});
