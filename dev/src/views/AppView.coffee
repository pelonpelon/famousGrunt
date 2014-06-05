define (require, exports, module) ->
  View = require "famous/core/View"
  Surface = require "famous/core/Surface"
  Transform = require "famous/core/Transform"
  Modifier = require "famous/core/Modifier"
  StateModifier = require "famous/modifiers/StateModifier"

  PageView = require 'views/PageView'
  MenuView = require 'views/MenuView'


  class AppView extends View
    constructor: ->
      super()

      _createPageView.call @
      _createMenuView.call @

      _setListeners.call @


  AppView.DEFAULT_OPTIONS = {}

  AppView::toggleMenu = ->
    console.log "this: " + @

  _createPageView = ->
    @pageView = new PageView()
    @pageModifier = new Modifier
      transform: (->
        Transform.translate 100,100,0).bind @

    @_add(@pageModifier).add(@pageView)

  _createMenuView = ->
    @menuView = new MenuView()
    menuModifier = new StateModifier
      transform: Transform.behind

    @add(menuModifier).add(@menuView)

  _setListeners = ->
    @pageView.on 'menuToggle', @toggleMenu.bind @

  module.exports = AppView
  return

