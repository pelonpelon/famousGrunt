define (require, exports, module) ->
  EmptyView = ->
    View.apply this, arguments_
    return

  View = require("famous/core/View")
  Surface = require("famous/core/Surface")
  Transform = require("famous/core/Transform")
  StateModifier = require("famous/modifiers/StateModifier")
  
  EmptyView:: = Object.create(View::)
  EmptyView::constructor = EmptyView
  
  EmptyView.DEFAULT_OPTIONS = {}
  
  module.exports = EmptyView
  return

