//entry

define(function(require, exports, module){
        
    /*   modules from brakcets */
    
    var CommandManager  = brackets.getModule("command/CommandManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        Menus           = brackets.getModule("command/Menus");
        
    
    var MENU_Name = "YourNoteTool",
        COMMAND_ID   = "note.tool";
    
    var keys = JSON.parse(require("text!shortcut.json"));
    
    function OnMenuClickHandler(){
        //insert 
        //
    }
    
    
    CommandManger.register(MENU_Name, COMMAND_ID, OnMenuClickHandler);
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
        menu.addMenuDivider();
        menu.addMenuItem(_ID, keys.shortcut);
        
});