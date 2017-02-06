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
    })

    it('should have a list of animals', () => {
      cowsay.list((err,list) => {
        expect(this.cowsayCtrl.animals).toEqual(list)
        expect(this.cowsayCtrl.current).toEqual(list[0])
      })
    })
  })
})
