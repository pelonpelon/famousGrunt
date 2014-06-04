(function() {
  define(function(require, exports, module) {
    "use strict";
    var Engine, Modifier, Surface, mainContext, outline, outlineModifier;
    Engine = require("famous/core/Engine");
    Surface = require("famous/core/Surface");
    Modifier = require("famous/core/Modifier");
    mainContext = Engine.createContext();
    outline = new Surface({
      size: [200, 200],
      content: "<img width=\"200\" src=\"" + "content/images/famous_symbol_transparent.png" + "\"/>",
      properties: {
        lineHeight: "200px",
        textAlign: "center"
      }
    });
    outlineModifier = new Modifier({
      origin: [0.5, 0.5]
    });
    mainContext.add(outlineModifier).add(outline);
  });

}).call(this);

//# sourceMappingURL=main.js.map
