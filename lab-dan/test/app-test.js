'use strict'

require('./lib/test-setup.js')
const angular = require('angular')
const cowsay = require('cowsay-browser')
const defaultMsg = 'Type something!'
const testMsg = 'Test!'

describe('Cowsay Controller', function () {

  beforeEach(() => {
    angular.mock.module('cowsayModule')
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayCtrl')
      this.cowsayCtrl.form = {}
      this.cowsayCtrl.form.message = testMsg
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.cowsayCtrl.title).toBe('Angular Creature Speak')
    })
    it('saves array to be an empty array', () => {
      expect(angular.isArray(this.cowsayCtrl.saves)).toBe(true)
      expect(this.cowsayCtrl.saves.length).toBe(0)
    })
    it('creatures array to be an array', () => {
      expect(angular.isArray(this.cowsayCtrl.creatures)).toBe(true)
      expect(this.cowsayCtrl.creatures.length > 0).toBe(true)
    })
    it('default output to equal default message', () => {
      expect(this.cowsayCtrl.formOutput).toBe(defaultMsg)
    })
  })

  describe('#updateMsg', () => {
    it('updates formOutput with default message and creature', () => {
      let expectedMsg = cowsay.say({text: testMsg, f:'dragon'})
      this.cowsayCtrl.updateMsg()
      expect(this.cowsayCtrl.formOutput).toBe(expectedMsg)
    })
  })

  describe('#save', () => {
    it('saves message to array', () => {
      this.cowsayCtrl.updateMsg()
      this.cowsayCtrl.save()
      expect(this.cowsayCtrl.saves.length).toBe(1)
    })
  })

  describe('#undo', () => {
    it('removes save from array', () => {
      this.cowsayCtrl.updateMsg()
      this.cowsayCtrl.save()
      expect(this.cowsayCtrl.saves.length).toBe(1)
      this.cowsayCtrl.undo()
      expect(this.cowsayCtrl.saves.length).toBe(0)
    })
  })

  describe('#reset', () => {
    it('resets formOutput to default', () => {
      this.cowsayCtrl.reset()
      expect(this.cowsayCtrl.formOutput).toBe(defaultMsg)
    })
    it('empties the saves array', () => {
      this.cowsayCtrl.reset()
      expect(this.cowsayCtrl.saves.length).toBe(0)
    })
    it('resets the form message to an empty string', () => {
      this.cowsayCtrl.reset()
      expect(this.cowsayCtrl.form.message).toBe('')
    })
  })
})
