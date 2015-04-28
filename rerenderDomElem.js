window.renderElem = function(elem) {
    var sel = (elem instanceof jQuery) ? elem[0] : elem;
    window.setTimeout(function(){
        sel.style.display='none';
        sel.offsetHeight; 
        sel.style.display='';
    },1);
};
