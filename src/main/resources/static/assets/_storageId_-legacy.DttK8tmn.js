System.register(["./base-legacy.C4HCoRVd.js","./loading-legacy.BfOje5Sp.js","./button-legacy.DICWts_D.js","./tooltip-legacy.thrsW4a0.js","./popper-legacy.A4J8PAUb.js","./input-legacy.QHqwdb9y.js","./alert-legacy.CN_EqTC_.js","./SvgIcon-legacy.STAJdGcp.js","./ZFormItem-legacy.BCuPcTQ5.js","./admin-storage-legacy.RIDzcvG_.js","./common-legacy.CRZnNQJv.js","./index-legacy.DUvvBSvn.js","./sortable.esm-legacy.D6Tn_V1I.js","./request-legacy.-200HP3-.js","./index-legacy.BFuUyz3E.js","./route-block-legacy.wdPIt6g0.js","./plugin-vue_export-helper-legacy.ul8DAaRV.js","./CheckBadgeIcon-legacy.D70XKG37.js","./index-legacy.DdGmP4UA.js","./directive-legacy.BxLSi8TL.js","./index-legacy.BcMCRM2R.js","./index-legacy.BTvHxeZR.js","./scroll-legacy.DnkC-nvr.js","./validator-legacy.DjRp0Ah9.js","./event-legacy.CFsZpNd4.js"],(function(e,n){"use strict";var t,a,i,l,r,s,o,c,u,d,p,f,m,v,g,w,h,y,x,b,k,_,j,I,V,z,C,E,P,U,B,H,q,D,S,F,G,L,M,T,J,Z;return{setters:[function(e){t=e.aT,a=e.aU,i=e.y,l=e.aB,r=e.H},null,null,null,function(e){s=e.E},null,function(e){o=e.E},function(e){c=e._},function(e){u=e.Z,d=e.a},function(e){p=e.n,f=e.o,m=e.l},function(e){v=e.u,g=e.r},function(e){w=e.a,h=e.e,y=e.k,x=e.r,b=e.I,k=e.M,_=e.o,j=e.a6,I=e.J,V=e.u,z=e.b,C=e.w,E=e.i,P=e.t,U=e.N,B=e.F,H=e.v,q=e.P,D=e.Q},function(e){S=e.S},function(e){F=e.E},function(e){G=e.E},function(e){L=e.b},function(e){M=e._},function(e){T=e.r},function(e){J=e.E},function(e){Z=e.v},null,null,null,null,null],execute:function(){var n=document.createElement("style");function $(e,n){return w(),h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})])}n.textContent=".expression-item[data-v-4cc8e70c] .el-input__wrapper{width:100%}@media (min-width:640px){.expression-item[data-v-4cc8e70c] .el-input__wrapper{width:9rem}}@media (min-width:768px){.expression-item[data-v-4cc8e70c] .el-input__wrapper{width:12rem}}@media (min-width:1024px){.expression-item[data-v-4cc8e70c] .el-input__wrapper{width:16rem}}@media (min-width:1280px){.expression-item[data-v-4cc8e70c] .el-input__wrapper{width:20rem}}.zfile-admin-password-form[data-v-4cc8e70c] .z-form-sub-title{max-width:100%}.zfile-admin-password-form .rules-tips[data-v-4cc8e70c]{padding:.25rem;font-size:.875rem;font-weight:700;line-height:1.25rem}.zfile-admin-password-form .rules-tips-link[data-v-4cc8e70c]{margin-top:.5rem}.zfile-admin-password-form .rules-tips-link[data-v-4cc8e70c]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.25rem*var(--tw-space-x-reverse));margin-left:calc(1.25rem*calc(1 - var(--tw-space-x-reverse)))}.zfile-admin-password-form .rules-tips-link svg[data-v-4cc8e70c]{vertical-align:text-bottom;height:1rem;line-height:1.25rem}\n/*$vite$:1*/",document.head.appendChild(n);var A=x([]),K=x(!1);function N(e,n){var t=n.params.storageId,a=function(){var e=document.querySelector(".z-form-body");S.create(e,{draggable:".expression-item",onEnd:function(e){if(e.oldIndex!==e.newIndex){var n=A.value.splice(e.oldIndex-1,1)[0];A.value.splice(e.newIndex-1,0,n)}}})},i=function(){A.value.push({description:"表达式 - "+(A.value.length+1),expression:"",password:"",storageId:t})};return{loading:K,loadPasswordData:function(){p(t).then((function(e){A.value=e.data,0===A.value.length&&i(),a()}))},passwordList:A,addPasswordItem:i,deletePasswordItem:function(e){A.value.splice(e,1)},savePasswordData:function(){if(!A.value.find((function(e){if(v.isEmpty(e.description)||v.isEmpty(e.expression)||v.isEmpty(e.password))return F.warning("请检查数据填写是否完整"),!0}))){K.value=!0;for(var n=0;n<A.value.length;n++)A.value[n].id=n+1;f(t,A.value).then((function(){G.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(n){"confirm"===n&&e.push("/admin/storage-list")}})})).finally((function(){K.value=!1}))}}}}var O=function(e){return q("data-v-4cc8e70c"),e=e(),D(),e},Q={class:"flex justify-items-center"},W=O((function(){return y("div",{class:"rules-tips"},"Glob 表达式规则：",-1)})),R=O((function(){return y("div",{class:"rules-tips"},[y("b",null,"单层根目录加密"),U(": 如 "),y("span",{class:"select-all code"},"/"),U(" 表示根路径下需要密码访问. ")],-1)})),X=O((function(){return y("div",{class:"rules-tips"},[y("b",null,"单层子目录加密"),U(": 如 "),y("span",{class:"select-all code"},"/music/*"),U(" 表示根目录下的 music 文件夹需要密码访问, 子文件夹不加密. ")],-1)})),Y=O((function(){return y("div",{class:"rules-tips"},[y("b",null,"嵌套子目录加密"),U(": 如 "),y("span",{class:"select-all code"},"/music/**"),U(" 表示根目录下的 music 文件夹及其所有子文件夹都需要密码访问. ")],-1)})),ee=O((function(){return y("div",{class:"rules-tips"}," 注：系统匹配到第一个符合的规则就会取密码进行校验，并返回结果，所以请调整好规则顺序，下方规则可进行拖拽排序。 ",-1)})),ne={class:"rules-tips-link"},te={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ae=O((function(){return y("span",null,"参考文章 (Wikipedia)",-1)})),ie={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},le={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},re={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},se={__name:"[storageId]",setup:function(e){var n=b(),p=k(),f=n.params.storageId,v=N(p,n),q=v.loading,D=v.loadPasswordData,S=v.passwordList,F=v.addPasswordItem,G=v.deletePasswordItem,L=v.savePasswordData;_((function(){D(),A()}));var M=x(),A=function(){m(f).then((function(e){e.data.type=e.data.type.key,M.value=e.data}))};return function(e,n){var p=c,f=j("router-link"),m=o,v=J,x=s,b=r,k=Z;return I((w(),z(d,{model:V(S),class:"zfile-admin-password-form"},{"form-title":C((function(){var e;return[y("div",Q,[E(f,{to:"/admin/storage-list"},{default:C((function(){return[E(p,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]})),_:1}),y("span",null,"密码文件夹（"+P(null===(e=V(M))||void 0===e?void 0:e.name)+"）",1)])]})),"form-sub-title":C((function(){return[E(m,{closable:!1,type:"info"},{default:C((function(){return[W,R,X,Y,ee,y("div",ne,[y("a",te,[E(V(t),{class:"inline mr-1"}),ae]),y("a",ie,[E(V(t),{class:"inline mr-1"}),U("参考文章 (阮一峰)")]),y("a",le,[E(V(t),{class:"inline mr-1"}),U("参考文章 (Github)")])])]})),_:1})]})),footer:C((function(){return[E(b,{type:"primary",size:"default",icon:V(T),onClick:V(L)},{default:C((function(){return[U("保存设置")]})),_:1},8,["icon","onClick"])]})),default:C((function(){return[(w(!0),h(B,null,H(V(S),(function(e,n){return w(),z(u,{required:!0,key:e,class:"expression-item"},{default:C((function(){return[y("div",re,[E(x,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:C((function(){return[E(v,{"prefix-icon":V(a),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":function(n){return e.description=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]})),_:2},1024),E(v,{"prefix-icon":V(g),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":function(n){return e.expression=n},modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),E(v,{"prefix-icon":V($),placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":function(n){return e.password=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),E(b,{type:"danger",onClick:function(e){return V(G)(n)},icon:V(i)},null,8,["onClick","icon"])])]})),_:2},1024)})),128)),E(u,null,{default:C((function(){return[E(b,{type:"primary",size:"default",icon:V(l),onClick:V(F)},{default:C((function(){return[U("添加更多")]})),_:1},8,["icon","onClick"])]})),_:1})]})),_:1},8,["model"])),[[k,V(q)]])}}};"function"==typeof L&&L(se),e("default",M(se,[["__scopeId","data-v-4cc8e70c"]]))}}}));
