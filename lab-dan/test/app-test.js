'use strict'

require('./lib/test-setup.js')
const angular = require('angular')
const cowsay = require('cowsay')
const defaultMsg = 'Type something!'

describe('Cowsay Controller', () => {

  beforeEach(() => {
    angular.mock.module('cowsayModule')
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayCtrl')
      this.cowsayCtrl.form = {}
      this.cowsayCtrl.form.message = 'Test'
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.cowsayCtrl.title).toBe('Angular Creature Speak')
    })
    it('default message', () => {
      expect(this.cowsayCtrl.defaultMsg).toBe(defaultMsg)
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
      expect(this.formOutput).toBe(defaultMsg)
    })
  })

  describe('#updateMsg', () => {
    it('updates formOuput with default message and creature', () => {
      let expectedMsg = cowsay.say({text: defaultMsg, f:'dragon'})
      this.cowsayCtrl.updateMsg()
      expect(this.cowsayCtrl.formOutput).toBe(expectedMsg)
    })
  })

  describe('#save', () => {
    this.cowsayCtrl.updateMsg()
    it('saves message to array', () => {
      this.cowsayCtrl.save()
      expect(this.cowsayCtrl.saves.length).toBe(1)
    })
  })

  describe('#undo', () => {
    this.cowsayCtrl.updateMsg()
    this.cowsayCtrl.save()
    it('removes save from array', () => {
      expect(this.cowsayCtrl.saves.length).toBe(1)
      this.cowsayCtrl.undo()
      expect(this.cowsayCtrl.saves.length).toBe(0)
    })
  })

  describe('#reset', () => {
    it('resets formOutput to default', () => {
      expect(this.cowsayCtrl.formOutput).toBe(defaultMsg)
    })
    it('empties the saves array', () => {
      expect(this.cowsayCtrl.saves.length).toBe(0)
    })
    it('resets the form message to an empty string', () => {
      expect(this.form.message).toBe('')
    })
  })
})
