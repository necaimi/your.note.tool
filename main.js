//entry

define(function(require, exports, module){
        
    /*   modules from brakcets */
    
    var CommandManager  = brackets.getModule("command/CommandManager"),
        DocumentManager = brackets.getModule("document/DocumentManager"),
        Menus           = brackets.getModule("command/Menus"),
        EditorManager   = brackets.getModule("editor/EditorManager"),
        NoteView        = require("./libs/noteView");
        
    
    var MENU_Name = "YourNoteTool",
        COMMAND_ID   = "note.tool";
    
    var keys = JSON.parse(require("text!./shortcut.json"));
       
    
    var _plugins = JSON.parse(require("text!./plugins.json"));
        if(_plugins){
            var _plugins = _plugins.plugins;
         /*   for(var itr = 0, _len = _plugins.length; itr < _len; itr++ ){
                var _t = _plugins[itr];
                require(_t.path);
            } */
        }
        
     function inlineNoteViewerProvider(hostEditor, pos) {
        
        // Only provide image viewer if the selection is within a single line
        var sel = hostEditor.getSelection(false);
        if (sel.start.line !== sel.end.line) {
            return null;
        }
        
        var result = new $.Deferred();

        var imageViewer = new NoteView(_plugins);
        imageViewer.load(hostEditor);
        result.resolve(imageViewer);
        
         console.log(imageViewer);
        return result.promise();
    }

    EditorManager.registerInlineEditProvider(inlineNoteViewerProvider);
    
    
});