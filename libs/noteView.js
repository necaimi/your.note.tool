

define(function(require, exports, module){
   
    "use strict";
    
    var CommandManager = brackets.getModule("comman/CommandManager"),
        InlineWidget   = brackets.getModule("edit/InlineWidget").InlineWidget,
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
    
    var noteItem = require("noteItem").noteItem;
    
    var items = {};
    
    function noteView(){
        InlineWidget.call(this);
    }
    
    
    noteView.prototype = Object.create(InlineWidget.prototype);
    noteView.prototype.addItem = function(title, cmd){
        
        var _id = cmd.getID();
        if(items[_id])
            return;
        
        var _item = new noteItem();
        _item.getDom().bind("click", function(e){
            CommandManager.execute(_id);
        });
     
        items[_id] = _item;
    }
});