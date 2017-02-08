/*global expect*/

require('./lib/test-setup')

const angular = require('angular')
const cowsay = require('cowsay-browser')

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp')
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController')
    })
  })

  describe('inital properites', () => {
    it('title property should equal What does the cow say?', () => {
      expect(this.cowsayCtrl.title).toBe('What does the cow say?')
    })

    it('history property should equal an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true)
      expect(this.cowsayCtrl.history.length).toBe(0)
    })

    it('should have a list of animals', () => {
      cowsay.list((err,list) => {
        expect(this.cowsayCtrl.animals).toEqual(list)
        expect(this.cowsayCtrl.current).toEqual(list[8])
      })
    })
  })

  describe('#updateCow', () => {
    it('should return a cow that says Hello', () => {
      let expected = '\n' + cowsay.say({text: 'Hello', f: this.cowsayCtrl.current})
      let result = this.cowsayCtrl.updateCow('Hello')
      expect(result).toEqual(expected)
    })
  })

  describe('#submit', () => {
    it('should add a cow to history', () => {
      let expected = '\n' + cowsay.say({text: 'Hello', f: this.cowsayCtrl.current})
      this.cowsayCtrl.text = 'Hello'
      this.cowsayCtrl.submit()
      expect(this.cowsayCtrl.newCow).toEqual(expected)
      expect(this.cowsayCtrl.history[0]).toEqual(expected)
    })
  })

  describe('#undo', () => {
    beforeEach(() => {
      this.cowsayCtrl.history.push('\n' + cowsay.say({text: 'Hello', f: this.cowsayCtrl.current}))
      this.cowsayCtrl.history.push('\n' + cowsay.say({text: 'Goodbye', f: this.cowsayCtrl.current}))
    })
    it('should remove a cow from history', () => {
      let expected = '\n' + cowsay.say({text: 'Hello', f: this.cowsayCtrl.current})
      expect(this.cowsayCtrl.history.length).toBe(2)
      this.cowsayCtrl.undo()
      expect(this.cowsayCtrl.history[0]).toEqual(expected)
      expect(this.cowsayCtrl.history.length).toBe(1)
    })
  })
})
