require('../app/index.js');
require('angular-mocks');
let angular = require('angular');
let cowsay = require('cowsay-browser');

let options = ['beavis.zen', 'bud-frogs', 'bunny', 'cheese', 'chick', 'chicken-and-egg', 'cower', 'daemon', 'default', 'doge', 'dragon-and-cow', 'dragon', 'elephant-in-snake', 'elephant', 'eyes', 'flaming-sheep', 'ghostbusters', 'hellokitty', 'kiss', 'kitty', 'koala', 'kosh', 'luke-koala', 'mech-and-cow', 'meow', 'milk', 'moofasa', 'moose', 'mutilated', 'ren', 'rooster', 'satanic', 'sheep', 'skeleton', 'small', 'squirrel', 'stegosaurus', 'stimpy', 'supermilker', 'surgery', 'turkey', 'turtle', 'tux', 'vader-koala', 'vader', 'www'];

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
      expect(cowSay.title).toBe('COW SAY');
    });
    it('should have an empty array called cowOptions', function() {
      expect(cowSay.cowOptions).toEqual(options);
    });
    it('cowSaved should be an empty string', function() {
      expect(cowSay.saved).toBe('');
    });
    it('savedCows should be an empty array', function() {
      expect(cowSay.savedCows).toEqual([]);
    });
    it('the property custom should be set to default', function() {
      expect(cowSay.custom).toBe('default');
    });
  });

  describe('update()', function() {
    it('should return a cowsay.say with Moo! as the text by default', function() {

      let testUpdate = cowSay.update('Moo!');
      let moo = '\n' + cowsay.say({ text: 'Moo!' });

      expect(testUpdate).toBe(moo);
    });
  });

  describe('save()', function() {
    it('should save a cow', function() {
      let testSave = '\n' + cowsay.say({ text: 'test' });
      cowSay.text = 'test';
      cowSay.save();

      expect(cowSay.saved).toBe(testSave);
      expect(cowSay.savedCows[0]).toBe(testSave);
    });
  });

  describe('undo()', function() {

  });
});