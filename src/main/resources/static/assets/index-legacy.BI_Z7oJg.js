System.register(["./base-legacy.C4HCoRVd.js"],(function(e,n){"use strict";var t;return{setters:[function(e){t=e.j}],execute:function(){e("v",{beforeMount:function(e,n){var o,u,i=n.value,r=t(i)?{}:i,c=r.interval,a=void 0===c?100:c,s=r.delay,v=void 0===s?600:s,d=function(){return t(i)?i():i.handler()},f=function(){u&&(clearTimeout(u),u=void 0),o&&(clearInterval(o),o=void 0)};e.addEventListener("mousedown",(function(e){0===e.button&&(f(),d(),document.addEventListener("mouseup",(function(){return f()}),{once:!0}),u=setTimeout((function(){o=setInterval((function(){d()}),a)}),v))}))}})}}}));
