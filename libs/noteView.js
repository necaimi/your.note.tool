

define(function(require, exports, module){
   
    "use strict";
    
    var InlineWidget   = brackets.getModule("editor/InlineWidget").InlineWidget;
    
    
    var _html = require("text!../modal/index.html");
    
//    ExtensionUtils.loadStyleSheet(module, "webform.less");
    
    function noteView(pros){
        InlineWidget.call(this);
        
        this.$wrapperDiv = Mustache.render(_html, pros);
        
        this.$htmlContent.append(this.$wrapperDiv);
     
    }
    
    noteView.prototype = Object.create(InlineWidget.prototype);
    noteView.prototype.constructor = InlineWidget;
    noteView.prototype.parentClass = InlineWidget.prototype;
    noteView.prototype.onAdd = function(){
        noteView.prototype.parentClass.onAdded.apply(this, arguments);
       window.setTimeout(this._sizeEditorToContent.bind(this));
    }
    
    noteView.prototype._sizeEditorToContent = function(){
        this.hostEditor.setInlineWidgetHeight(this, this.$wrapperDiv.height() + 20, true);
    }
    module.exports = noteView;
    
});