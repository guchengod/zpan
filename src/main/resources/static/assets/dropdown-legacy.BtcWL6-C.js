!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./popper-legacy.A4J8PAUb.js","./base-legacy.C4HCoRVd.js","./index-legacy.DUvvBSvn.js"],(function(t,r){"use strict";var o,i,l,u,a,c,f,p,d,s,y,m,b,g,O;return{setters:[function(e){o=e.b,i=e.u},function(e){l=e._,u=e.b,a=e.d,c=e.V,f=e.a3},function(e){p=e.d,d=e.h,s=e.r,y=e.p,m=e.B,b=e.o,g=e.u,O=e.C}],execute:function(){var r=l(p({inheritAttrs:!1}),[["render",function(e,t,r,n,o,i){return d(e.$slots,"default")}],["__file","collection.vue"]]);var E=l(p({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,r,n,o,i){return d(e.$slots,"default")}],["__file","collection-item.vue"]]),v=t("b","data-el-collection-item"),C=t("c",(function(t){var o="El".concat(t,"Collection"),i="".concat(o,"Item"),l=Symbol(o),u=Symbol(i),a=n(n({},r),{},{name:o,setup:function(){var t=s(null),r=new Map;y(l,{itemMap:r,getItems:function(){var n=g(t);if(!n)return[];var o=Array.from(n.querySelectorAll("[".concat(v,"]")));return e(r.values()).sort((function(e,t){return o.indexOf(e.ref)-o.indexOf(t.ref)}))},collectionRef:t})}}),c=n(n({},E),{},{name:i,setup:function(e,t){var r=t.attrs,o=s(null),i=m(l,void 0);y(u,{collectionItemRef:o}),b((function(){var e=g(o);e&&i.itemMap.set(e,n({ref:e},r))})),O((function(){var e=g(o);i.itemMap.delete(e)}))}});return{COLLECTION_INJECTION_KEY:l,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:a,ElCollectionItem:c}})),I=(t("d",u({trigger:o.trigger,triggerKeys:{type:a(Array),default:function(){return[c.enter,c.numpadEnter,c.space,c.down]}},effect:n(n({},i.effect),{},{default:"light"}),type:{type:a(String)},placement:{type:a(String),default:"bottom"},popperOptions:{type:a(Object),default:function(){return{}}},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:a([Number,String]),default:0},maxHeight:{type:a([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:a(Object)},teleported:i.teleported})),t("a",u({command:{type:[Object,String,Number],default:function(){return{}}},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:f}})),t("f",u({onKeydown:{type:a(Function)}})),[c.down,c.pageDown,c.home]),j=t("L",[c.up,c.pageUp,c.end]),S=(t("F",[].concat(I,e(j))),C("Dropdown")),h=S.ElCollection,w=S.ElCollectionItem,N=S.COLLECTION_INJECTION_KEY,_=S.COLLECTION_ITEM_INJECTION_KEY;t({E:h,e:w,g:N,C:_})}}}))}();
