window.renderElem = function(elem, tms) {
    var sel = ('hide' in elem) ? elem[0] : elem;
    
    window.setTimeout(function(){
        sel.style.display='none';
        sel.offsetHeight; 
        sel.style.display='';
    }, tms!==undefined ? tms : 45);
};
