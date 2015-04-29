(function($w,$){
        $w.renderElem = function(elem, timingFunc, ms) {
            var sel = ('hide' in elem) ? elem[0] : elem;
            
            console.warn('RENDERING NOW!');
            
            var ds = sel.style.display;
            sel.style.display = 'none';
            sel.offsetHeight;
            sel.style.display = '';
            
            var render = function(){
                $(sel).toggleClass('JM_rendertoggle');
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
    }(window, jQuery));
