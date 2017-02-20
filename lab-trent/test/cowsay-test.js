require('../app/entry.js');
require('angular-mocks');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('Initial values', () => {
    it('Input should equal "Nothing"', () => {
      expect(this.cowsayCtrl.input).toBe('Nothing');
    });

    it('History should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
      expect(this.cowsayCtrl.length).toBe(0);
    });

    it('The cowlist should be the cowsay list.', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowList).toBe(list);
        expect(this.cowsayCtrl.cowFile).toBe(list[0]);
      });
    });
  });

  describe('#cowify', () => {
    it('Should return a cow that says cowify', () => {
      let result = this.cowsayCtrl.update('cowify', this.cowsayCtrl.cowFile);
      let expected = cowsay.say({ text: 'cowify', f: this.cowsayCtrl.cowFile });
      expect(result).toEqual(expected);
    });
  });

  describe('#undo', () => {
    it('Should return a cow that says test', () => {
      let expected = cowsay.say({ text: 'test', f: this.cowsayCtrl.cowFile });
      this.cowsayCtrl.input = 'test';
      this.cowsayCtrl.save();
      this.cowsayCtrl.input = 'testi-nevermind';
      expect(this.cowsayCtrl.undo()).toEqual(expected);
      expect(this.cowsayCtrl.history.length).toEqual(0);
    });
  });
});
