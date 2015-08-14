

define(function(require, exports, module){
   
    "use strict";
    
    var InlineWidget   = brackets.getModule("editor/InlineWidget").InlineWidget,
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    
    var items = {};
    
    ExtensionUtils.loadStyleSheet(module, "webform.less");
    
    function noteView(pros){
        InlineWidget.call(this);
        var _template = Mustcache.render(template, pros);
        
        this.$htmlContent.append(_template);
        
    }
    
    
    noteView.prototype = Object.create(InlineWidget.prototype);
    noteView.prototype.constructor = InlineWidget;
    
    module.exports = noteView;
    
});