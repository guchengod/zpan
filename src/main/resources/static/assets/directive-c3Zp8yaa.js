import{r as e,E as n,d as t,a3 as o,w as l,J as s,i as a,K as i,T as r,ag as u,a5 as d,W as c,O as v}from"./index-B6LbRxzB.js";import{bf as b,ar as m,ak as g,k as f,W as p,ap as x,l as y,bh as C}from"./base-BBwbuMrY.js";function k(c){let v;const g=e(!1),f=n({...c,originalPosition:"",originalOverflow:"",visible:!1});function p(){var e,n;null==(n=null==(e=k.$el)?void 0:e.parentNode)||n.removeChild(k.$el)}function x(){if(!g.value)return;const e=f.parent;g.value=!1,e.vLoadingAddClassList=void 0,function(){const e=f.parent,n=k.ns;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(m(e,n.bm("parent","relative")),e.removeAttribute("loading-number")),m(e,n.bm("parent","hidden"))}p(),C.unmount()}()}const y=t({name:"ElLoading",setup(e,{expose:n}){const{ns:t,zIndex:u}=b("loading");return n({ns:t,zIndex:u}),()=>{const e=f.spinner||f.svg,n=o("svg",{class:"circular",viewBox:f.svgViewBox?f.svgViewBox:"0 0 50 50",...e?{innerHTML:e}:{}},[o("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),u=f.text?o("p",{class:t.b("text")},[f.text]):void 0;return o(r,{name:t.b("fade"),onAfterLeave:x},{default:l((()=>[s(a("div",{style:{backgroundColor:f.background||""},class:[t.b("mask"),f.customClass,f.fullscreen?"is-fullscreen":""]},[o("div",{class:t.b("spinner")},[n,u])]),[[i,f.visible]])]))})}}}),C=u(y),k=C.mount(document.createElement("div"));return{...d(f),setText:function(e){f.text=e},removeElLoadingChild:p,close:function(){var e;c.beforeClose&&!c.beforeClose()||(g.value=!0,clearTimeout(v),v=setTimeout(x,400),f.visible=!1,null==(e=c.closed)||e.call(c))},handleAfterLeave:x,vm:k,get $el(){return k.$el}}}let L;const w=function(e={}){if(!g)return;const n=h(e);if(n.fullscreen&&L)return L;const t=k({...n,closed:()=>{var e;null==(e=n.closed)||e.call(n),n.fullscreen&&(L=void 0)}});A(n,n.parent,t),$(n,n.parent,t),n.parent.vLoadingAddClassList=()=>$(n,n.parent,t);let o=n.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",n.parent.setAttribute("loading-number",o),n.parent.appendChild(t.$el),c((()=>t.visible.value=n.visible)),n.fullscreen&&(L=t),t},h=e=>{var n,t,o,l;let s;return s=f(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,beforeClose:e.beforeClose,closed:e.closed,target:s}},A=async(e,n,t)=>{const{nextZIndex:o}=t.vm.zIndex||t.vm._.exposed.zIndex,l={};if(e.fullscreen)t.originalPosition.value=p(document.body,"position"),t.originalOverflow.value=p(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=p(document.body,"position"),await c();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";l[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(p(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])l[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=p(n,"position");for(const[s,a]of Object.entries(l))t.$el.style[s]=a},$=(e,n,t)=>{const o=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?m(n,o.bm("parent","relative")):x(n,o.bm("parent","relative")),e.fullscreen&&e.lock?x(n,o.bm("parent","hidden")):m(n,o.bm("parent","hidden"))},B=Symbol("ElLoading"),I=(n,t)=>{var o,l,s,a;const i=t.instance,r=e=>y(t.value)?t.value[e]:void 0,u=t=>(n=>{const t=f(n)&&(null==i?void 0:i[n])||n;return t?e(t):t})(r(t)||n.getAttribute(`element-loading-${C(t)}`)),d=null!=(o=r("fullscreen"))?o:t.modifiers.fullscreen,c={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:d,target:null!=(l=r("target"))?l:d?void 0:n,body:null!=(s=r("body"))?s:t.modifiers.body,lock:null!=(a=r("lock"))?a:t.modifiers.lock};n[B]={options:c,instance:w(c)}},V={mounted(e,n){n.value&&I(e,n)},updated(e,n){const t=e[B];n.oldValue!==n.value&&(n.value&&!n.oldValue?I(e,n):n.value&&n.oldValue?y(n.value)&&((e,n)=>{for(const t of Object.keys(n))v(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[B])||n.instance.close(),e[B]=null}};export{w as L,V as v};
