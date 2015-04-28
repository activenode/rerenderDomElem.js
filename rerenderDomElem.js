window.renderElem = function(elem, timingFunc) {
    var sel = ('hide' in elem) ? elem[0] : elem;
    
    console.log(sel,'rerender here!!');
    
    var renderFunc = function(){
        sel.style.display='none';
        sel.offsetHeight; 
        sel.style.display='';
    };
    if (timingFunc) {
        timingFunc(renderFunc)
    }
    
    window.setTimeout(renderFunc, 15);
};
