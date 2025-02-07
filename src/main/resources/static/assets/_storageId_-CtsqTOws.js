import{aT as e,aU as s,y as a,aB as o,H as l}from"./base-BBwbuMrY.js";/* empty css                *//* empty css               */import"./tooltip-l0sNRNKZ.js";import{E as t}from"./popper-CF2HgFfE.js";/* empty css              */import{E as r}from"./alert-bZCV4XKB.js";import{_ as i}from"./SvgIcon-CP4hezaL.js";import{Z as n,a as d}from"./ZFormItem-DqyrjkCI.js";import{n as p,o as c,l as m}from"./admin-storage-D0L6B7uH.js";import{u,r as f}from"./common-D92ZSWsJ.js";import{a as v,e as w,k as b,r as g,I as h,M as x,o as j,a6 as k,J as y,u as I,b as _,w as V,i as P,t as E,N as C,F as U,v as B,P as z,Q as H}from"./index-B6LbRxzB.js";import{S as q}from"./sortable.esm-CQGo0vDY.js";import{E as D}from"./request-B2kMKzxx.js";import{E as F}from"./index-XSoVjJxG.js";import{b as G}from"./route-block-B_A1xBdJ.js";import{_ as L}from"./plugin-vue_export-helper-BCo6x5W8.js";import{r as M}from"./CheckBadgeIcon-Cn-PgIwF.js";import{E as S}from"./index-KUFYR68Z.js";import{v as T}from"./directive-c3Zp8yaa.js";import"./index-Cd2l2kYr.js";import"./index-58WTuj8x.js";import"./scroll-Ck97Tz0c.js";import"./validator-EOLRKd5b.js";import"./event-BwRzfsZt.js";function J(e,s){return v(),w("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})])}let Z=g([]),A=g(!1);const K=e=>(z("data-v-4cc8e70c"),e=e(),H(),e),N={class:"flex justify-items-center"},O=K((()=>b("div",{class:"rules-tips"},"Glob 表达式规则：",-1))),Q=K((()=>b("div",{class:"rules-tips"},[b("b",null,"单层根目录加密"),C(": 如 "),b("span",{class:"select-all code"},"/"),C(" 表示根路径下需要密码访问. ")],-1))),W=K((()=>b("div",{class:"rules-tips"},[b("b",null,"单层子目录加密"),C(": 如 "),b("span",{class:"select-all code"},"/music/*"),C(" 表示根目录下的 music 文件夹需要密码访问, 子文件夹不加密. ")],-1))),R=K((()=>b("div",{class:"rules-tips"},[b("b",null,"嵌套子目录加密"),C(": 如 "),b("span",{class:"select-all code"},"/music/**"),C(" 表示根目录下的 music 文件夹及其所有子文件夹都需要密码访问. ")],-1))),X=K((()=>b("div",{class:"rules-tips"}," 注：系统匹配到第一个符合的规则就会取密码进行校验，并返回结果，所以请调整好规则顺序，下方规则可进行拖拽排序。 ",-1))),Y={class:"rules-tips-link"},$={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ee=K((()=>b("span",null,"参考文章 (Wikipedia)",-1))),se={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ae={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},oe={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},le={__name:"[storageId]",setup(z){let H=h(),G=x(),L=H.params.storageId;const{loading:K,loadPasswordData:le,passwordList:te,addPasswordItem:re,deletePasswordItem:ie,savePasswordData:ne}=function(e,s){let a=s.params.storageId;const o=()=>{const e=document.querySelector(".z-form-body");q.create(e,{draggable:".expression-item",onEnd:e=>{if(e.oldIndex===e.newIndex)return;const s=Z.value.splice(e.oldIndex-1,1)[0];Z.value.splice(e.newIndex-1,0,s)}})},l=()=>{Z.value.push({description:"表达式 - "+(Z.value.length+1),expression:"",password:"",storageId:a})};return{loading:A,loadPasswordData:()=>{p(a).then((e=>{Z.value=e.data,0===Z.value.length&&l(),o()}))},passwordList:Z,addPasswordItem:l,deletePasswordItem:e=>{Z.value.splice(e,1)},savePasswordData:()=>{if(!Z.value.find((e=>{if(u.isEmpty(e.description)||u.isEmpty(e.expression)||u.isEmpty(e.password))return D.warning("请检查数据填写是否完整"),!0}))){A.value=!0;for(let e=0;e<Z.value.length;e++)Z.value[e].id=e+1;c(a,Z.value).then((()=>{F.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:s=>{"confirm"===s&&e.push("/admin/storage-list")}})})).finally((()=>{A.value=!1}))}}}}(G,H);j((()=>{le(),pe()}));const de=g(),pe=()=>{m(L).then((e=>{e.data.type=e.data.type.key,de.value=e.data}))};return(p,c)=>{const m=i,u=k("router-link"),g=r,h=S,x=t,j=l,z=T;return y((v(),_(d,{model:I(te),class:"zfile-admin-password-form"},{"form-title":V((()=>[b("div",N,[P(u,{to:"/admin/storage-list"},{default:V((()=>[P(m,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})])),_:1}),b("span",null,"密码文件夹（"+E(I(de)?.name)+"）",1)])])),"form-sub-title":V((()=>[P(g,{closable:!1,type:"info"},{default:V((()=>[O,Q,W,R,X,b("div",Y,[b("a",$,[P(I(e),{class:"inline mr-1"}),ee]),b("a",se,[P(I(e),{class:"inline mr-1"}),C("参考文章 (阮一峰)")]),b("a",ae,[P(I(e),{class:"inline mr-1"}),C("参考文章 (Github)")])])])),_:1})])),footer:V((()=>[P(j,{type:"primary",size:"default",icon:I(M),onClick:I(ne)},{default:V((()=>[C("保存设置")])),_:1},8,["icon","onClick"])])),default:V((()=>[(v(!0),w(U,null,B(I(te),((e,o)=>(v(),_(n,{required:!0,key:e,class:"expression-item"},{default:V((()=>[b("div",oe,[P(x,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:V((()=>[P(h,{"prefix-icon":I(s),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":s=>e.description=s},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])])),_:2},1024),P(h,{"prefix-icon":I(f),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":s=>e.expression=s,modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),P(h,{"prefix-icon":I(J),placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":s=>e.password=s},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),P(j,{type:"danger",onClick:e=>I(ie)(o),icon:I(a)},null,8,["onClick","icon"])])])),_:2},1024)))),128)),P(n,null,{default:V((()=>[P(j,{type:"primary",size:"default",icon:I(o),onClick:I(re)},{default:V((()=>[C("添加更多")])),_:1},8,["icon","onClick"])])),_:1})])),_:1},8,["model"])),[[z,I(K)]])}}};"function"==typeof G&&G(le);const te=L(le,[["__scopeId","data-v-4cc8e70c"]]);export{te as default};
