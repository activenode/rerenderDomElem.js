(function($w){
        
        $w.renderElem = function(elem, timingFunc, ms) {
            var sel = ('hide' in elem) ? elem[0] : elem;
            
            console.warn('RENDERING NOW!');
            
            var ds = sel.style.display;
            sel.style.display = 'none';
            sel.offsetHeight;
            sel.style.display = '';
            var prevFontSize = $w.getComputedStyle(sel).fontSize;
            var prevFontSizeReal = sel.style.fontSize;
            var fFontSize = parseFloat(prevFontSize);
            var dimFontSize = prevFontSize.replace(''+fFontSize,'');
            sel.style.fontSize = (1.0002 * fFontSize) + '' + dimFontSize; 
            
            var render = function(){
                sel.style.fontSize = prevFontSizeReal;
            };
            
            var timingFunc;
            if (timingFunc==undefined) {
                timingFunc=window.setTimeout;
            }
            
            timingFunc(render, ms ? ms : 15);
            
            return {
                then: function(elemThen){
                    return $w.renderElem(elemThen, timingFunc, ms+ms);
                }
            };
        };
    }(window));
