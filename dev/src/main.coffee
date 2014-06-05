define (require, exports, module) ->
  "use strict"

  # import dependencies
  Engine   = require "famous/core/Engine"

  AppView  = require "views/AppView"

  # create the main context
  mainContext = Engine.createContext()

  appView = new AppView()

  mainContext.add appView
  return

