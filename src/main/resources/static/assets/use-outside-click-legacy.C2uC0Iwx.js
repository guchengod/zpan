!function(){var e=["visible","features","ourProps","theirProps"],n=["as"];function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=l(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){a=!0,u=e},f:function(){try{i||null==t.return||t.return()}finally{if(a)throw u}}}}function u(e){return f(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||a()}function i(e,n){return f(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,u=[],i=!0,a=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(u.push(r.value),!n||u.length!==n);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}(e,n)||l(e,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e){if(Array.isArray(e))return e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}System.register(["./directive-legacy.BxLSi8TL.js","./index-legacy.DUvvBSvn.js"],(function(a,l){"use strict";var c,f,s,y,m,h,b,g,w,O,E,j,S,P;return{setters:[function(e){c=e.v,f=e.L},function(e){s=e.a,y=e.e,m=e.k,h=e.ar,b=e.a3,g=e.F,w=e.B,O=e.p,E=e.W,j=e.a2,S=e.r,P=e.c}],execute:function(){a({C:function(){return null!==R()},H:function(n){var t,r=n.visible,o=void 0===r||r,u=n.features,i=void 0===u?0:u,a=n.ourProps,c=n.theirProps,f=p(n,e),s=I(c,a),y=Object.assign(f,{props:s});if(o||2&i&&s.static)return x(y);if(1&i){var m;return l(null==(t=s.unmount)||t?0:1,(v(m={},0,(function(){return null})),v(m,1,(function(){return x(d(d({},f),{},{props:d(d({},s),{},{hidden:!0,style:{display:"none"}})}))})),m))}return x(y)},O:ee,P:ne,S:Q,_:function(e){var n=B(e);E((function(){n&&!z(n.activeElement,0)&&Q(e)}))},c:function(e){O(C,e)},f:F,m:B,o:M,p:R,r:function(e,n){return s(),y("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])},t:function(){return++T},u:l,v:function(e,n){return ne(q(),n,{relativeTo:e})},w:z,y:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P((function(){return!0}));function r(r,u){if(t.value&&!r.defaultPrevented){var i=u(r);if(null!==i&&i.getRootNode().contains(i)){var a,l=function e(n){return"function"==typeof n?e(n()):Array.isArray(n)||n instanceof Set?n:[n]}(e),c=o(l);try{for(c.s();!(a=c.n()).done;){var f=a.value;if(null!==f){var s=f instanceof HTMLElement?f:M(f);if(null!=s&&s.contains(i)||r.composed&&r.composedPath().includes(s))return}}}catch(d){c.e(d)}finally{c.f()}return!z(i,Y.Loose)&&-1!==i.tabIndex&&r.preventDefault(),n(r,i)}}}var u=S(null);te("mousedown",(function(e){var n,r;t.value&&(u.value=(null==(r=null==(n=e.composedPath)?void 0:n.call(e))?void 0:r[0])||e.target)}),!0),te("click",(function(e){u.value&&(r(e,(function(){return u.value})),u.value=null)}),!0),te("blur",(function(e){return r(e,(function(){return window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null}))}),!0)}});a("E",{install:function(e){e.directive("loading",c),e.config.globalProperties.$loading=f},directive:c,service:f});function l(e,n){if(e in n){for(var t=n[e],r=arguments.length,o=new Array(r>2?r-2:0),u=2;u<r;u++)o[u-2]=arguments[u];return"function"==typeof t?t.apply(void 0,o):t}var i=new Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map((function(e){return'"'.concat(e,'"')})).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(i,l),i}var A=function(e){return e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e}(A||{}),k=function(e){return e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e}(k||{});function x(e){var t,o,a=e.props,l=e.attrs,c=e.slots,f=e.slot,s=e.name,d=F(a,["unmount","static"]),v=d.as,y=p(d,n),m=null==(t=c.default)?void 0:t.call(c,f),g={};if(f){for(var w=!1,O=[],E=0,j=Object.entries(f);E<j.length;E++){var S=i(j[E],2),P=S[0],A=S[1];"boolean"==typeof A&&(w=!0),!0===A&&O.push(P)}w&&(g["data-headlessui-state"]=O.join(" "))}if("template"===v){if(m=N(null!=m?m:[]),Object.keys(y).length>0||Object.keys(l).length>0){var k=u(null!=m?m:[]),x=k[0],T=k.slice(1);if(!function(e){return null!=e&&("string"==typeof e.type||"object"==r(e.type)||"function"==typeof e.type)}(x)||T.length>0)throw new Error(['Passing props on "template"!',"","The current component <".concat(s,' /> is rendering a "template".'),"However we need to passthrough the following props:",Object.keys(y).concat(Object.keys(l)).map((function(e){return e.trim()})).filter((function(e,n,t){return t.indexOf(e)===n})).sort((function(e,n){return e.localeCompare(n)})).map((function(e){return"  - ".concat(e)})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - ".concat(e)})).join("\n")].join("\n"));var D=I(null!=(o=x.props)?o:{},y),L=h(x,D);for(var M in D)M.startsWith("on")&&(L.props||(L.props={}),L.props[M]=D[M]);return L}return Array.isArray(m)&&1===m.length?m[0]:m}return b(v,Object.assign({},y,g),{default:function(){return m}})}function N(e){return e.flatMap((function(e){return e.type===g?N(e.children):[e]}))}function I(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(0===n.length)return{};if(1===n.length)return n[0];for(var r={},u={},i=0,a=n;i<a.length;i++){var l=a[i];for(var c in l)c.startsWith("on")&&"function"==typeof l[c]?(null!=u[c]||(u[c]=[]),u[c].push(l[c])):r[c]=l[c]}if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(u).map((function(e){return[e,void 0]}))));var f=function(e){Object.assign(r,v({},e,(function(n){for(var t=u[e],r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var l,c=o(t);try{for(c.s();!(l=c.n()).done;){var f=l.value;if(n instanceof Event&&n.defaultPrevented)return;f.apply(void 0,[n].concat(i))}}catch(s){c.e(s)}finally{c.f()}})))};for(var s in u)f(s);return r}function F(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),u=o(t);try{for(u.s();!(n=u.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(a){u.e(a)}finally{u.f()}return r}a({N:A,e:k});var T=0;var D,L=a("a",((D=L||{}).Space=" ",D.Enter="Enter",D.Escape="Escape",D.Backspace="Backspace",D.Delete="Delete",D.ArrowLeft="ArrowLeft",D.ArrowUp="ArrowUp",D.ArrowRight="ArrowRight",D.ArrowDown="ArrowDown",D.Home="Home",D.End="End",D.PageUp="PageUp",D.PageDown="PageDown",D.Tab="Tab",D));function M(e){var n;return null==e||null==e.value?null:null!=(n=e.value.$el)?n:e.value}var C=Symbol("Context"),U=a("l",function(e){return e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e}(U||{}));function R(){return w(C,null)}var _=Object.defineProperty,H=function(e,n,t){return function(e,n,t){n in e?_(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t}(e,"symbol"!=r(n)?n+"":n,t),t},W=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),H(this,"current",this.detect()),H(this,"currentId",0)}var n,r,o;return n=e,r=[{key:"set",value:function(e){this.current!==e&&(this.currentId=0,this.current=e)}},{key:"reset",value:function(){this.set(this.detect())}},{key:"nextId",value:function(){return++this.currentId}},{key:"isServer",get:function(){return"server"===this.current}},{key:"isClient",get:function(){return"client"===this.current}},{key:"detect",value:function(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}}],r&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}(),K=a("d",new W);function B(e){if(K.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(null!=e&&e.hasOwnProperty("value")){var n=M(e);if(n)return n.ownerDocument}return document}var G=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return"".concat(e,":not([tabindex='-1'])")})).join(","),V=function(e){return e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e}(V||{}),$=function(e){return e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e}($||{}),X=function(e){return e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e}(X||{});function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(G)).sort((function(e,n){return Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER))}))}a({b:V,T:$});var Y=a("h",function(e){return e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e}(Y||{}));function z(e){var n,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=B(e))?void 0:t.body)&&l(r,(v(n={},0,(function(){return e.matches(G)})),v(n,1,(function(){for(var n=e;null!==n;){if(n.matches(G))return!0;n=n.parentElement}return!1})),n))}var J=function(e){return e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e}(J||{});function Q(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(function(e){e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(function(e){1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));var Z=["textarea","input"].join(",");function ee(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e.slice().sort((function(e,t){var r=n(e),o=n(t);if(null===r||null===o)return 0;var u=r.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function ne(e,n){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.sorted,u=void 0===o||o,i=r.relativeTo,a=void 0===i?null:i,l=r.skipElements,c=void 0===l?[]:l,f=null!=(t=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:null==e?void 0:e.ownerDocument)?t:document,s=Array.isArray(e)?u?ee(e):e:q(e);c.length>0&&s.length>1&&(s=s.filter((function(e){return!c.includes(e)}))),a=null!=a?a:f.activeElement;var d,v=function(){if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),p=function(){if(1&n)return 0;if(2&n)return Math.max(0,s.indexOf(a))-1;if(4&n)return Math.max(0,s.indexOf(a))+1;if(8&n)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),y=32&n?{preventScroll:!0}:{},m=0,h=s.length;do{if(m>=h||m+h<=0)return 0;var b=p+m;if(16&n)b=(b+h)%h;else{if(b<0)return 3;if(b>=h)return 1}null==(d=s[b])||d.focus(y),m+=v}while(d!==f.activeElement);return 6&n&&function(e){var n,t;return null!=(t=null==(n=null==e?void 0:e.matches)?void 0:n.call(e,Z))&&t}(d)&&d.select(),2}function te(e,n,t){K.isServer||j((function(r){document.addEventListener(e,n,t),r((function(){return document.removeEventListener(e,n,t)}))}))}}}}))}();
