
(function(mod){
    
    if(typeof exports == "object" && typeof module == "object"){
        exports.noteItem = mod();
    }else if(typeof define == "function" && define.amd){
        define([], mod);
    }else{
        var _global = (new Function("return this")();
                       
    }
})(function(){
     
        "use strict";
            
        function noteItem(){
            
            this.jqobj = $("<li/>");
        }
        
        noteItem.prototype.getDom = function(){
            return this.jqobj;
        }
        
        
        return noteItem;
});