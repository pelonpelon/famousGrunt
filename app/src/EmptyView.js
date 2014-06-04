(function() {
  define(function(require, exports, module) {
    var EmptyView, StateModifier, Surface, Transform, View;
    EmptyView = function() {
      View.apply(this, arguments_);
    };
    View = require("famous/core/View");
    Surface = require("famous/core/Surface");
    Transform = require("famous/core/Transform");
    StateModifier = require("famous/modifiers/StateModifier");
    EmptyView.prototype = Object.create(View.prototype);
    EmptyView.prototype.constructor = EmptyView;
    EmptyView.DEFAULT_OPTIONS = {};
    module.exports = EmptyView;
  });

}).call(this);

//# sourceMappingURL=EmptyView.js.map
