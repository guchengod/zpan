import{ak as e,W as t}from"./base-BBwbuMrY.js";const o=(o,n)=>{if(!e)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],s=t(o,r);return["scroll","auto","overlay"].some((e=>s.includes(e)))},n=(t,n)=>{if(!e)return;let r=t;for(;r;){if([window,document,document.documentElement].includes(r))return window;if(o(r,n))return r;r=r.parentNode}return r};let r;const s=t=>{var o;if(!e)return 0;if(void 0!==r)return r;const n=document.createElement("div");n.className=`${t}-scrollbar__wrap`,n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);const s=n.offsetWidth;n.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",n.appendChild(l);const i=l.offsetWidth;return null==(o=n.parentNode)||o.removeChild(n),r=s-i,r};function l(t,o){if(!e)return;if(!o)return void(t.scrollTop=0);const n=[];let r=o.offsetParent;for(;null!==r&&t!==r&&t.contains(r);)n.push(r),r=r.offsetParent;const s=o.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),l=s+o.offsetHeight,i=t.scrollTop,c=i+t.clientHeight;s<i?t.scrollTop=s:l>c&&(t.scrollTop=l-t.clientHeight)}export{s as a,n as g,l as s};
