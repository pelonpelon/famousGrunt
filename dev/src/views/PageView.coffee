define (require, exports, module) ->

  View = require "famous/core/View"
  Surface = require "famous/core/Surface"
  Transform = require "famous/core/Transform"
  StateModifier = require "famous/modifiers/StateModifier"

  class PageView extends View
    constructor: ->
      super()
      _createSurface.call @

  PageView.DEFAULT_OPTIONS = {}

  _createSurface = ->
    @surface = new Surface
      size: [200,200]
      content: "PageView Surface"
      properties:
        backgroundColor: 'orange'
    @add @surface

  module.exports = PageView
  return

