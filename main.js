//entry

define(function(require, exports, module){
        
    /*   modules from brakcets */
    
    var CommandManager  = brackets.getModule("command/CommandManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        Menus           = brackets.getModule("command/Menus"),
        NoteView        = require("./libs/noteView").noteView;
        
    
    var MENU_Name = "YourNoteTool",
        COMMAND_ID   = "note.tool";
    
    var keys = JSON.parse(require("text!./shortcut.json")),
        _html = require("text!./modal/index.html");
    
    var _plugins = JSON.parse(require("text!./plugins.json"));
        if(_plugins){
            var _plugins = _plugins.plugins;
            for(var itr = 0, _len = _plugins.length; itr < _len; itr++ ){
                var _t = _plugins[itr];
                require(_t.path);
            }
        }
        

    function OnMenuClickHandler(){
        var _curDoc = DocumentManager.getCurrentDocument();
        if(!_curDoc)
            return;
        
        var _nV = new noteView(_plugins);
    }
    
    
    CommandManager.register(MENU_Name, COMMAND_ID, OnMenuClickHandler);
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
        menu.addMenuDivider();
        menu.addMenuItem(COMMAND_ID, keys.shortcut);
        
});