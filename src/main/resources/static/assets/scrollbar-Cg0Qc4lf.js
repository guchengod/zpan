import{u as e,b as a,j as l}from"./request-B2kMKzxx.js";import{d as t,B as s,r,c as o,C as i,q as n,a as u,b as v,w as c,J as m,k as f,f as d,u as p,n as y,K as b,T as h,e as g,i as w,F as S,m as z,W as x,p as E,E as _,au as L,o as T,a8 as k,h as B,l as H,j as C}from"./index-B6LbRxzB.js";import{b as R,_ as j,a as N,t as W,ak as A,d as M,m as O,aa as $,l as q,w as K}from"./base-BBwbuMrY.js";const P={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},X=Symbol("scrollbarContextKey"),Y=R({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var F=j(t({__name:"thumb",props:Y,setup(a){const l=a,t=s(X),g=N("scrollbar");t||W("Thumb","can not inject scrollbar context");const w=r(),S=r(),z=r({}),x=r(!1);let E=!1,_=!1,L=A?document.onselectstart:null;const T=o((()=>P[l.vertical?"vertical":"horizontal"])),k=o((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:l.size,move:l.move,bar:T.value}))),B=o((()=>w.value[T.value.offset]**2/t.wrapElement[T.value.scrollSize]/l.ratio/S.value[T.value.offset])),H=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),R(e);const l=e.currentTarget;l&&(z.value[T.value.axis]=l[T.value.offset]-(e[T.value.client]-l.getBoundingClientRect()[T.value.direction]))},C=e=>{if(!S.value||!w.value||!t.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[T.value.direction]-e[T.value.client])-S.value[T.value.offset]/2)*B.value/w.value[T.value.offset];t.wrapElement[T.value.scroll]=a*t.wrapElement[T.value.scrollSize]/100},R=e=>{e.stopImmediatePropagation(),E=!0,document.addEventListener("mousemove",j),document.addEventListener("mouseup",M),L=document.onselectstart,document.onselectstart=()=>!1},j=e=>{if(!w.value||!S.value)return;if(!1===E)return;const a=z.value[T.value.axis];if(!a)return;const l=100*(-1*(w.value.getBoundingClientRect()[T.value.direction]-e[T.value.client])-(S.value[T.value.offset]-a))*B.value/w.value[T.value.offset];t.wrapElement[T.value.scroll]=l*t.wrapElement[T.value.scrollSize]/100},M=()=>{E=!1,z.value[T.value.axis]=0,document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",M),O(),_&&(x.value=!1)};i((()=>{O(),document.removeEventListener("mouseup",M)}));const O=()=>{document.onselectstart!==L&&(document.onselectstart=L)};return e(n(t,"scrollbarElement"),"mousemove",(()=>{_=!1,x.value=!!l.size})),e(n(t,"scrollbarElement"),"mouseleave",(()=>{_=!0,x.value=E})),(e,a)=>(u(),v(h,{name:p(g).b("fade"),persisted:""},{default:c((()=>[m(f("div",{ref_key:"instance",ref:w,class:d([p(g).e("bar"),p(g).is(p(T).key)]),onMousedown:C},[f("div",{ref_key:"thumb",ref:S,class:d(p(g).e("thumb")),style:y(p(k)),onMousedown:H},null,38)],34),[[b,e.always||x.value]])])),_:1},8,["name"]))}}),[["__file","thumb.vue"]]);var G=j(t({__name:"bar",props:R({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),setup(e,{expose:a}){const l=e,t=s(X),o=r(0),i=r(0),n=r(""),v=r(""),c=r(1),m=r(1);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,l=e.offsetWidth-4;i.value=100*e.scrollTop/a*c.value,o.value=100*e.scrollLeft/l*m.value}},update:()=>{const e=null==t?void 0:t.wrapElement;if(!e)return;const a=e.offsetHeight-4,s=e.offsetWidth-4,r=a**2/e.scrollHeight,o=s**2/e.scrollWidth,i=Math.max(r,l.minSize),u=Math.max(o,l.minSize);c.value=r/(a-r)/(i/(a-i)),m.value=o/(s-o)/(u/(s-u)),v.value=i+4<a?`${i}px`:"",n.value=u+4<s?`${u}px`:""}}),(e,a)=>(u(),g(S,null,[w(F,{move:o.value,ratio:m.value,size:n.value,always:e.always},null,8,["move","ratio","size","always"]),w(F,{move:i.value,ratio:c.value,size:v.value,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","bar.vue"]]);const I=R({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:M([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},tabindex:{type:[String,Number],default:void 0},id:String,role:String,...a(["ariaLabel","ariaOrientation"])}),J={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(O)},D=t({name:"ElScrollbar"});const Q=K(j(t({...D,props:I,emits:J,setup(a,{expose:t,emit:s}){const i=a,n=N("scrollbar");let m,b,h=0,w=0;const S=r(),R=r(),j=r(),W=r(),A=o((()=>{const e={};return i.height&&(e.height=$(i.height)),i.maxHeight&&(e.maxHeight=$(i.maxHeight)),[i.wrapStyle,e]})),M=o((()=>[i.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!i.native}])),K=o((()=>[n.e("view"),i.viewClass])),P=()=>{var e;R.value&&(null==(e=W.value)||e.handleScroll(R.value),h=R.value.scrollTop,w=R.value.scrollLeft,s("scroll",{scrollTop:R.value.scrollTop,scrollLeft:R.value.scrollLeft}))};const Y=()=>{var e;null==(e=W.value)||e.update()};return z((()=>i.noresize),(a=>{a?(null==m||m(),null==b||b()):(({stop:m}=l(j,Y)),b=e("resize",Y))}),{immediate:!0}),z((()=>[i.maxHeight,i.height]),(()=>{i.native||x((()=>{var e;Y(),R.value&&(null==(e=W.value)||e.handleScroll(R.value))}))})),E(X,_({scrollbarElement:S,wrapElement:R})),L((()=>{R.value&&(R.value.scrollTop=h,R.value.scrollLeft=w)})),T((()=>{i.native||x((()=>{Y()}))})),k((()=>Y())),t({wrapRef:R,update:Y,scrollTo:function(e,a){q(e)?R.value.scrollTo(e):O(e)&&O(a)&&R.value.scrollTo(e,a)},setScrollTop:e=>{O(e)&&(R.value.scrollTop=e)},setScrollLeft:e=>{O(e)&&(R.value.scrollLeft=e)},handleScroll:P}),(e,a)=>(u(),g("div",{ref_key:"scrollbarRef",ref:S,class:d(p(n).b())},[f("div",{ref_key:"wrapRef",ref:R,class:d(p(M)),style:y(p(A)),tabindex:e.tabindex,onScroll:P},[(u(),v(H(e.tag),{id:e.id,ref_key:"resizeRef",ref:j,class:d(p(K)),style:y(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:c((()=>[B(e.$slots,"default")])),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],46,["tabindex"]),e.native?C("v-if",!0):(u(),v(G,{key:0,ref_key:"barRef",ref:W,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}}),[["__file","scrollbar.vue"]]));export{Q as E};
