# rerenderDomElem.js
A simple function that forces rerendering of an element to avoid/workaround buggy rendering.

WebKit has weird behaviour sometimes. It renders parts of elements and leaves other parts as they were. This can happen especially in conjunction with async frameworks like angular.
To workaround this behaviour this function enforces rerendering of an element.


## Examples


** Use in Angular like this **

`renderElem(angular.element('.JM_typelisting')[0], $timeout);`

** Use without framework like this **

`renderElem(yourDomElement);`
