define (require, exports, module) ->

  View = require "famous/core/View"
  Surface = require "famous/core/Surface"
  Transform = require "famous/core/Transform"
  StateModifier = require "famous/modifiers/StateModifier"

  class MenuView extends View
    constructor: ->
      super()
      _createSurface.call @

  MenuView.DEFAULT_OPTIONS = {}

  _createSurface = ->
    @surface = new Surface
      size: [200,200]
      content: "MenuView Surface"
      properties:
        backgroundColor: 'blue'
    @add @surface

  module.exports = MenuView
  return

