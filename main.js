//entry

define(function(require, exports, module){
        
    /*   modules from brakcets */
    
    var CommandManager  = brackets.getModule("command/CommandManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        Menus           = brackets.getModule("command/Menus"),
        EditorManager   = brackets.getModule("editor/EditorManager");
        
    
    var MENU_Name = "YourNoteTool",
        COMMAND_ID   = "note.tool";
    
    var keys = JSON.parse(require("text!shortcut.json")),
        _html = require("text!modal/index.html");
    
    var _template = Mustache.render(_html, null);
    
   
    function OnMenuClickHandler(){
        //insert 
        //
        //alert('OnMenuClickHandler');
        var _curDoc = DocumentManager.getCurrentDocument();
        if(!_curDoc)
            return;
    
        var _fuledit = EditorManager.getCurrentFullEditor();
        
        if(!_fuledit)
            return;
        
        
         var from = {line: 0, ch: 0};
        var to = {line: 10, ch: 10};
        EditorManager.getCurrentFullEditor().setSelection(from, to, true);
        
        
    }
    
    
    CommandManager.register(MENU_Name, COMMAND_ID, OnMenuClickHandler);
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
        menu.addMenuDivider();
        menu.addMenuItem(COMMAND_ID, keys.shortcut);
        
});