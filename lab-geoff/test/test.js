require('../app/index.js');
require('angular-mocks');
let angular = require('angular');
let cowsay = require('cowsay-browser');

describe('CowSayController', function() {
  let cowSay = null;

  beforeEach(() => {
    angular.mock.module('cowApp');
    angular.mock.inject($controller => {
      cowSay = new $controller('CowSayController');
    });
  });
  describe('initial properties', function() {
    it('should have a title COW SAY', function() {
      console.log(cowSay);
      expect(cowSay.title).toBe('COW SAY');
    });
  });
});