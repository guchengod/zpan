import{s as e,r as l,c as t,B as a,am as o,m as s,Z as n,d as i,u as r,E as u,a5 as p,C as d,W as c,J as v,K as f,a as m,e as b,h,k as g,t as y,f as S,g as x,o as C,j as w,n as O,a2 as V,p as I,a6 as T,a7 as E,i as k,w as R,F as B,v as D,N as M,b as L,z as $,ap as z,l as F,aq as W}from"./index-B6LbRxzB.js";import{u as _,a as j,E as K}from"./popper-CF2HgFfE.js";import{E as N}from"./scrollbar-Cg0Qc4lf.js";import{t as P,E as H}from"./tag-CxKPM5Nx.js";import{l as A,an as U,a as G,aD as q,_ as Q,s as J,R as Z,aE as Y,S as X,q as ee,b3 as le,U as te,n as ae,b4 as oe,C as se,ak as ne,m as ie,j as re,A as ue,V as pe,k as de,b as ce,P as ve,d as fe,a3 as me,g as be,Y as he,Q as ge,E as ye,w as Se,o as xe}from"./base-BBwbuMrY.js";import{c as Ce}from"./castArray-Cx7RYULx.js";import{j as we,b as Oe,n as Ve}from"./request-B2kMKzxx.js";import{b as Ie,a as Te}from"./index-KUFYR68Z.js";import{U as Ee,C as ke}from"./event-BwRzfsZt.js";import{s as Re}from"./scroll-Ck97Tz0c.js";import{b as Be,i as De,C as Me}from"./index-CfE48oVh.js";import{d as Le}from"./debounce-Da1en5bL.js";const $e=Symbol("ElSelectGroup"),ze=Symbol("ElSelect");var Fe=Q(i({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(e){const l=G("select"),i=q(),v=t((()=>[l.be("dropdown","item"),l.is("disabled",r(h)),l.is("selected",r(b)),l.is("hovering",r(C))])),f=u({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:m,itemSelected:b,isDisabled:h,select:g,hoverItem:y,updateOption:S}=function(e,l){const i=a(ze),r=a($e,{disabled:!1}),u=t((()=>m(Ce(i.props.modelValue),e.value))),p=t((()=>{var e;if(i.props.multiple){const l=Ce(null!=(e=i.props.modelValue)?e:[]);return!u.value&&l.length>=i.props.multipleLimit&&i.props.multipleLimit>0}return!1})),d=t((()=>e.label||(A(e.value)?"":e.value))),c=t((()=>e.value||e.label||"")),v=t((()=>e.disabled||l.groupDisabled||p.value)),f=n(),m=(l=[],t)=>{if(A(e.value)){const e=i.props.valueKey;return l&&l.some((l=>o(U(l,e))===U(t,e)))}return l&&l.includes(t)};return s((()=>d.value),(()=>{e.created||i.props.remote||i.setSelected()})),s((()=>e.value),((l,t)=>{const{remote:a,valueKey:o}=i.props;if(l!==t&&(i.onOptionDestroy(t,f.proxy),i.onOptionCreate(f.proxy)),!e.created&&!a){if(o&&A(l)&&A(t)&&l[o]===t[o])return;i.setSelected()}})),s((()=>r.disabled),(()=>{l.groupDisabled=r.disabled}),{immediate:!0}),{select:i,currentLabel:d,currentValue:c,itemSelected:u,isDisabled:v,hoverItem:()=>{e.disabled||r.disabled||(i.states.hoveringIndex=i.optionsArray.indexOf(f.proxy))},updateOption:t=>{const a=new RegExp(((e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"))(t),"i");l.visible=a.test(d.value)||e.created}}}(e,f),{visible:x,hover:C}=p(f),w=n().proxy;return g.onOptionCreate(w),d((()=>{const e=w.value,{selected:l}=g.states,t=l.some((e=>e.value===w.value));c((()=>{g.states.cachedOptions.get(e)!==w||t||g.states.cachedOptions.delete(e)})),g.onOptionDestroy(e,w)})),{ns:l,id:i,containerKls:v,currentLabel:m,itemSelected:b,isDisabled:h,select:g,hoverItem:y,updateOption:S,visible:x,hover:C,selectOptionClick:function(){h.value||g.handleOptionSelect(w)},states:f}}}),[["render",function(e,l,t,a,o,s){return v((m(),b("li",{id:e.id,class:S(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMousemove:e.hoverItem,onClick:x(e.selectOptionClick,["stop"])},[h(e.$slots,"default",{},(()=>[g("span",null,y(e.currentLabel),1)]))],42,["id","aria-disabled","aria-selected","onMousemove","onClick"])),[[f,e.visible]])}],["__file","option.vue"]]);var We=Q(i({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=a(ze),o=G("select"),s=t((()=>e.props.popperClass)),n=t((()=>e.props.multiple)),i=t((()=>e.props.fitInputWidth)),r=l("");function u(){var l;r.value=`${null==(l=e.selectRef)?void 0:l.offsetWidth}px`}return C((()=>{u(),we(e.selectRef,u)})),{ns:o,minWidth:r,popperClass:s,isMultiple:n,isFitInputWidth:i}}}),[["render",function(e,l,t,a,o,s){return m(),b("div",{class:S([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:O({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(m(),b("div",{key:0,class:S(e.ns.be("dropdown","header"))},[h(e.$slots,"header")],2)):w("v-if",!0),h(e.$slots,"default"),e.$slots.footer?(m(),b("div",{key:1,class:S(e.ns.be("dropdown","footer"))},[h(e.$slots,"footer")],2)):w("v-if",!0)],6)}],["__file","select-dropdown.vue"]]);const _e=(e,a)=>{const{t:o}=J(),n=q(),i=G("select"),r=G("input"),p=u({inputValue:"",options:new Map,cachedOptions:new Map,optionValues:[],selected:[],selectionWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),d=l(null),v=l(null),f=l(null),m=l(null),b=l(null),h=l(null),g=l(null),y=l(null),S=l(null),x=l(null),w=l(null),{isComposing:O,handleCompositionStart:I,handleCompositionUpdate:T,handleCompositionEnd:E}=Ie({afterComposition:e=>He(e)}),{wrapperRef:k,isFocused:R,handleBlur:B}=Te(b,{beforeFocus:()=>_.value,afterFocus(){e.automaticDropdown&&!D.value&&(D.value=!0,p.menuVisibleOnFocus=!0)},beforeBlur(e){var l,t;return(null==(l=f.value)?void 0:l.isFocusInsideContent(e))||(null==(t=m.value)?void 0:t.isFocusInsideContent(e))},afterBlur(){D.value=!1,p.menuVisibleOnFocus=!1}}),D=l(!1),M=l(),{form:L,formItem:$}=Z(),{inputId:z}=Y(e,{formItemContext:$}),{valueOnClear:F,isEmptyValue:W}=X(e),_=t((()=>e.disabled||(null==L?void 0:L.disabled))),j=t((()=>ee(e.modelValue)?e.modelValue.length>0:!W(e.modelValue))),K=t((()=>{var e;return null!=(e=null==L?void 0:L.statusIcon)&&e})),N=t((()=>e.clearable&&!_.value&&p.inputHovering&&j.value)),P=t((()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon)),H=t((()=>i.is("reverse",P.value&&D.value))),Q=t((()=>(null==$?void 0:$.validateState)||"")),de=t((()=>le[Q.value])),ce=t((()=>e.remote?300:0)),ve=t((()=>e.remote&&!p.inputValue&&0===p.options.size)),fe=t((()=>e.loading?e.loadingText||o("el.select.loading"):e.filterable&&p.inputValue&&p.options.size>0&&0===me.value?e.noMatchText||o("el.select.noMatch"):0===p.options.size?e.noDataText||o("el.select.noData"):null)),me=t((()=>be.value.filter((e=>e.visible)).length)),be=t((()=>{const e=Array.from(p.options.values()),l=[];return p.optionValues.forEach((t=>{const a=e.findIndex((e=>e.value===t));a>-1&&l.push(e[a])})),l.length>=e.length?l:e})),he=t((()=>Array.from(p.cachedOptions.values()))),ge=t((()=>{const l=be.value.filter((e=>!e.created)).some((e=>e.currentLabel===p.inputValue));return e.filterable&&e.allowCreate&&""!==p.inputValue&&!l})),ye=()=>{e.filterable&&re(e.filterMethod)||e.filterable&&e.remote&&re(e.remoteMethod)||be.value.forEach((e=>{var l;null==(l=e.updateOption)||l.call(e,p.inputValue)}))},Se=te(),xe=t((()=>["small"].includes(Se.value)?"small":"default")),Oe=t({get:()=>D.value&&!ve.value,set(e){D.value=e}}),Ve=t((()=>{if(e.multiple&&!ae(e.modelValue))return 0===Ce(e.modelValue).length&&!p.inputValue;const l=ee(e.modelValue)?e.modelValue[0]:e.modelValue;return!e.filterable&&!ae(l)||!p.inputValue})),Me=t((()=>{var l;const t=null!=(l=e.placeholder)?l:o("el.select.placeholder");return e.multiple||!j.value?t:p.selectedLabel})),$e=t((()=>oe?null:"mouseenter"));s((()=>e.modelValue),((l,t)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(p.inputValue="",ze("")),We(),!De(l,t)&&e.validateEvent&&(null==$||$.validate("change").catch((e=>se())))}),{flush:"post",deep:!0}),s((()=>D.value),(e=>{e?ze(p.inputValue):(p.inputValue="",p.previousQuery=null,p.isBeforeHide=!0),a("visible-change",e)})),s((()=>p.options.entries()),(()=>{ne&&(We(),e.defaultFirstOption&&(e.filterable||e.remote)&&me.value&&Fe())}),{flush:"post"}),s((()=>p.hoveringIndex),(e=>{ie(e)&&e>-1?M.value=be.value[e]||{}:M.value={},be.value.forEach((e=>{e.hover=M.value===e}))})),V((()=>{p.isBeforeHide||ye()}));const ze=l=>{p.previousQuery===l||O.value||(p.previousQuery=l,e.filterable&&re(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&re(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&me.value?c(Fe):c(je))},Fe=()=>{const e=be.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0],a=be.value.map((e=>e.value));p.hoveringIndex=Je(a,l||t)},We=()=>{if(!e.multiple){const l=ee(e.modelValue)?e.modelValue[0]:e.modelValue,t=_e(l);return p.selectedLabel=t.currentLabel,void(p.selected=[t])}p.selectedLabel="";const l=[];ae(e.modelValue)||Ce(e.modelValue).forEach((e=>{l.push(_e(e))})),p.selected=l},_e=l=>{let t;const a=ue(l);for(let o=p.cachedOptions.size-1;o>=0;o--){const s=he.value[o];if(a?U(s.value,e.valueKey)===U(l,e.valueKey):s.value===l){t={value:l,currentLabel:s.currentLabel,get isDisabled(){return s.isDisabled}};break}}if(t)return t;return{value:l,currentLabel:a?l.label:null!=l?l:""}},je=()=>{p.hoveringIndex=be.value.findIndex((e=>p.selected.some((l=>ll(l)===ll(e)))))},Ke=()=>{var e,l;null==(l=null==(e=f.value)?void 0:e.updatePopper)||l.call(e)},Ne=()=>{var e,l;null==(l=null==(e=m.value)?void 0:e.updatePopper)||l.call(e)},Pe=()=>{p.inputValue.length>0&&!D.value&&(D.value=!0),ze(p.inputValue)},He=l=>{if(p.inputValue=l.target.value,!e.remote)return Pe();Ae()},Ae=Le((()=>{Pe()}),ce.value),Ue=l=>{De(e.modelValue,l)||a(ke,l)},Ge=e=>function(e,l){var t=null==e?0:e.length;if(!t)return-1;var a=t-1;return function(e,l,t){e.length;for(var a=t+1;a--;)if(l(e[a],a,e))return a;return-1}(e,Be(l),a)}(e,(e=>{const l=p.cachedOptions.get(e);return l&&!l.disabled&&!l.states.groupDisabled})),qe=l=>{l.stopPropagation();const t=e.multiple?[]:F.value;if(e.multiple)for(const e of p.selected)e.isDisabled&&t.push(e.value);a(Ee,t),Ue(t),p.hoveringIndex=-1,D.value=!1,a("clear"),Xe()},Qe=l=>{var t;if(e.multiple){const o=Ce(null!=(t=e.modelValue)?t:[]).slice(),s=Je(o,l);s>-1?o.splice(s,1):(e.multipleLimit<=0||o.length<e.multipleLimit)&&o.push(l.value),a(Ee,o),Ue(o),l.created&&ze(""),e.filterable&&!e.reserveKeyword&&(p.inputValue="")}else a(Ee,l.value),Ue(l.value),D.value=!1;Xe(),D.value||c((()=>{Ze(l)}))},Je=(l=[],t)=>ae(t)?-1:A(t.value)?l.findIndex((l=>De(U(l,e.valueKey),ll(t)))):l.indexOf(t.value),Ze=e=>{var l,t,a,o,s;const n=ee(e)?e[0]:e;let r=null;if(null==n?void 0:n.value){const e=be.value.filter((e=>e.value===n.value));e.length>0&&(r=e[0].$el)}if(f.value&&r){const e=null==(o=null==(a=null==(t=null==(l=f.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:a.querySelector)?void 0:o.call(a,`.${i.be("dropdown","wrap")}`);e&&Re(e,r)}null==(s=w.value)||s.handleScroll()},Ye=t((()=>{var e,l;return null==(l=null==(e=f.value)?void 0:e.popperRef)?void 0:l.contentRef})),Xe=()=>{var e;null==(e=b.value)||e.focus()},el=()=>{_.value||(oe&&(p.inputHovering=!0),p.menuVisibleOnFocus?p.menuVisibleOnFocus=!1:D.value=!D.value)},ll=l=>A(l.value)?U(l.value,e.valueKey):l.value,tl=t((()=>be.value.filter((e=>e.visible)).every((e=>e.isDisabled)))),al=t((()=>e.multiple?e.collapseTags?p.selected.slice(0,e.maxCollapseTags):p.selected:[])),ol=t((()=>e.multiple&&e.collapseTags?p.selected.slice(e.maxCollapseTags):[])),sl=e=>{if(D.value){if(0!==p.options.size&&0!==me.value&&!O.value&&!tl.value){"next"===e?(p.hoveringIndex++,p.hoveringIndex===p.options.size&&(p.hoveringIndex=0)):"prev"===e&&(p.hoveringIndex--,p.hoveringIndex<0&&(p.hoveringIndex=p.options.size-1));const l=be.value[p.hoveringIndex];!l.isDisabled&&l.visible||sl(e),c((()=>Ze(M.value)))}}else D.value=!0},nl=t((()=>{const l=(()=>{if(!v.value)return 0;const e=window.getComputedStyle(v.value);return Number.parseFloat(e.gap||"6px")})();return{maxWidth:`${x.value&&1===e.maxCollapseTags?p.selectionWidth-p.collapseItemWidth-l:p.selectionWidth}px`}})),il=t((()=>({maxWidth:`${p.selectionWidth}px`})));return we(v,(()=>{p.selectionWidth=v.value.getBoundingClientRect().width})),we(y,Ke),we(k,Ke),we(S,Ne),we(x,(()=>{p.collapseItemWidth=x.value.getBoundingClientRect().width})),C((()=>{We()})),{inputId:z,contentId:n,nsSelect:i,nsInput:r,states:p,isFocused:R,expanded:D,optionsArray:be,hoverOption:M,selectSize:Se,filteredOptionsCount:me,updateTooltip:Ke,updateTagTooltip:Ne,debouncedOnInputChange:Ae,onInput:He,deletePrevTag:l=>{if(e.multiple&&l.code!==pe.delete&&l.target.value.length<=0){const l=Ce(e.modelValue).slice(),t=Ge(l);if(t<0)return;const o=l[t];l.splice(t,1),a(Ee,l),Ue(l),a("remove-tag",o)}},deleteTag:(l,t)=>{const o=p.selected.indexOf(t);if(o>-1&&!_.value){const l=Ce(e.modelValue).slice();l.splice(o,1),a(Ee,l),Ue(l),a("remove-tag",t.value)}l.stopPropagation(),Xe()},deleteSelected:qe,handleOptionSelect:Qe,scrollToOption:Ze,hasModelValue:j,shouldShowPlaceholder:Ve,currentPlaceholder:Me,mouseEnterEventName:$e,needStatusIcon:K,showClose:N,iconComponent:P,iconReverse:H,validateState:Q,validateIcon:de,showNewOption:ge,updateOptions:ye,collapseTagSize:xe,setSelected:We,selectDisabled:_,emptyText:fe,handleCompositionStart:I,handleCompositionUpdate:T,handleCompositionEnd:E,onOptionCreate:e=>{p.options.set(e.value,e),p.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{p.options.get(e)===l&&p.options.delete(e)},handleMenuEnter:()=>{p.isBeforeHide=!1,c((()=>Ze(p.selected)))},focus:Xe,blur:()=>{var e;if(D.value)return D.value=!1,void c((()=>{var e;return null==(e=b.value)?void 0:e.blur()}));null==(e=b.value)||e.blur()},handleClearClick:e=>{qe(e)},handleClickOutside:e=>{if(D.value=!1,R.value){const l=new FocusEvent("focus",e);c((()=>B(l)))}},handleEsc:()=>{p.inputValue.length>0?p.inputValue="":D.value=!1},toggleMenu:el,selectOption:()=>{if(D.value){const e=be.value[p.hoveringIndex];e&&!e.isDisabled&&Qe(e)}else el()},getValueKey:ll,navigateOptions:sl,dropdownMenuVisible:Oe,showTagList:al,collapseTagList:ol,tagStyle:nl,collapseTagStyle:il,popperRef:Ye,inputRef:b,tooltipRef:f,tagTooltipRef:m,prefixRef:h,suffixRef:g,selectRef:d,wrapperRef:k,selectionRef:v,scrollbarRef:w,menuRef:y,tagMenuRef:S,collapseItemRef:x}};var je=i({name:"ElOptions",setup(e,{slots:l}){const t=a(ze);let o=[];return()=>{var e,a;const s=null==(e=l.default)?void 0:e.call(l),n=[];return s.length&&function e(l){ee(l)&&l.forEach((l=>{var t,a,o,s;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(de(l.children)||ee(l.children)||!re(null==(a=l.children)?void 0:a.default)?l.children:null==(o=l.children)?void 0:o.default()):"ElOption"===i?n.push(null==(s=l.props)?void 0:s.value):ee(l.children)&&e(l.children)}))}(null==(a=s[0])?void 0:a.children),De(n,o)||(o=n,t&&(t.states.optionValues=n)),s}}});const Ke="ElSelect";var Ne=Q(i({name:Ke,componentName:Ke,components:{ElSelectMenu:We,ElOption:Fe,ElOptions:je,ElTag:H,ElScrollbar:N,ElTooltip:K,ElIcon:ye},directives:{ClickOutside:Me},props:ce({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:ve,effect:{type:fe(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:fe(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:_.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:me,default:be},fitInputWidth:Boolean,suffixIcon:{type:me,default:he},tagType:{...P.type,default:"info"},tagEffect:{...P.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,showArrow:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:fe(String),values:j,default:"bottom-start"},fallbackPlacements:{type:fe(Array),default:["bottom-start","top-start","right","left"]},tabindex:{type:[String,Number],default:0},appendTo:String,...ge,...Oe(["ariaLabel"])}),emits:[Ee,ke,"remove-tag","clear","visible-change","focus","blur"],setup(a,{emit:o}){const s=t((()=>{const{modelValue:e,multiple:l}=a,t=l?[]:void 0;return ee(e)?l?e:t:l?t:e})),n=u({...p(a),modelValue:s}),i=_e(n,o),{calculatorRef:r,inputStyle:d}=function(){const a=e(),o=l(0),s=t((()=>({minWidth:`${Math.max(o.value,11)}px`})));return we(a,(()=>{var e,l;o.value=null!=(l=null==(e=a.value)?void 0:e.getBoundingClientRect().width)?l:0})),{calculatorRef:a,calculatorWidth:o,inputStyle:s}}();I(ze,u({props:n,states:i.states,optionsArray:i.optionsArray,handleOptionSelect:i.handleOptionSelect,onOptionCreate:i.onOptionCreate,onOptionDestroy:i.onOptionDestroy,selectRef:i.selectRef,setSelected:i.setSelected}));const c=t((()=>a.multiple?i.states.selected.map((e=>e.currentLabel)):i.states.selectedLabel));return{...i,modelValue:s,selectedLabel:c,calculatorRef:r,inputStyle:d}}}),[["render",function(e,l,t,a,o,s){const n=T("el-tag"),i=T("el-tooltip"),r=T("el-icon"),u=T("el-option"),p=T("el-options"),d=T("el-scrollbar"),c=T("el-select-menu"),C=E("click-outside");return v((m(),b("div",{ref:"selectRef",class:S([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[W(e.mouseEnterEventName)]:l=>e.states.inputHovering=!0,onMouseleave:l=>e.states.inputHovering=!1},[k(i,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,"append-to":e.appendTo,"show-arrow":e.showArrow,offset:e.offset,onBeforeShow:e.handleMenuEnter,onHide:l=>e.states.isBeforeHide=!1},{default:R((()=>{var l;return[g("div",{ref:"wrapperRef",class:S([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:x(e.toggleMenu,["prevent"])},[e.$slots.prefix?(m(),b("div",{key:0,ref:"prefixRef",class:S(e.nsSelect.e("prefix"))},[h(e.$slots,"prefix")],2)):w("v-if",!0),g("div",{ref:"selectionRef",class:S([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?h(e.$slots,"tag",{key:0},(()=>[(m(!0),b(B,null,D(e.showTagList,(l=>(m(),b("div",{key:e.getValueKey(l),class:S(e.nsSelect.e("selected-item"))},[k(n,{closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:O(e.tagStyle),onClose:t=>e.deleteTag(t,l)},{default:R((()=>[g("span",{class:S(e.nsSelect.e("tags-text"))},[h(e.$slots,"label",{label:l.currentLabel,value:l.value},(()=>[M(y(l.currentLabel),1)]))],2)])),_:2},1032,["closable","size","type","effect","style","onClose"])],2)))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(m(),L(i,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:R((()=>[g("div",{ref:"collapseItemRef",class:S(e.nsSelect.e("selected-item"))},[k(n,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:O(e.collapseTagStyle)},{default:R((()=>[g("span",{class:S(e.nsSelect.e("tags-text"))}," + "+y(e.states.selected.length-e.maxCollapseTags),3)])),_:1},8,["size","type","effect","style"])],2)])),content:R((()=>[g("div",{ref:"tagMenuRef",class:S(e.nsSelect.e("selection"))},[(m(!0),b(B,null,D(e.collapseTagList,(l=>(m(),b("div",{key:e.getValueKey(l),class:S(e.nsSelect.e("selected-item"))},[k(n,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:R((()=>[g("span",{class:S(e.nsSelect.e("tags-text"))},[h(e.$slots,"label",{label:l.currentLabel,value:l.value},(()=>[M(y(l.currentLabel),1)]))],2)])),_:2},1032,["closable","size","type","effect","onClose"])],2)))),128))],2)])),_:3},8,["disabled","effect","teleported"])):w("v-if",!0)])):w("v-if",!0),g("div",{class:S([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[v(g("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":l=>e.states.inputValue=l,type:"text",name:e.name,class:S([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:O(e.inputStyle),tabindex:e.tabindex,role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":(null==(l=e.hoverOption)?void 0:l.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[$(x((l=>e.navigateOptions("next")),["stop","prevent"]),["down"]),$(x((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"]),$(x(e.handleEsc,["stop","prevent"]),["esc"]),$(x(e.selectOption,["stop","prevent"]),["enter"]),$(x(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:x(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","tabindex","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[z,e.states.inputValue]]),e.filterable?(m(),b("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:S(e.nsSelect.e("input-calculator")),textContent:y(e.states.inputValue)},null,10,["textContent"])):w("v-if",!0)],2),e.shouldShowPlaceholder?(m(),b("div",{key:1,class:S([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?h(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},(()=>[g("span",null,y(e.currentPlaceholder),1)])):(m(),b("span",{key:1},y(e.currentPlaceholder),1))],2)):w("v-if",!0)],2),g("div",{ref:"suffixRef",class:S(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(m(),L(r,{key:0,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:R((()=>[(m(),L(F(e.iconComponent)))])),_:1},8,["class"])):w("v-if",!0),e.showClose&&e.clearIcon?(m(),L(r,{key:1,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.nsSelect.e("clear")]),onClick:e.handleClearClick},{default:R((()=>[(m(),L(F(e.clearIcon)))])),_:1},8,["class","onClick"])):w("v-if",!0),e.validateState&&e.validateIcon&&e.needStatusIcon?(m(),L(r,{key:2,class:S([e.nsInput.e("icon"),e.nsInput.e("validateIcon"),e.nsInput.is("loading","validating"===e.validateState)])},{default:R((()=>[(m(),L(F(e.validateIcon)))])),_:1},8,["class"])):w("v-if",!0)],2)],10,["onClick"])]})),content:R((()=>[k(c,{ref:"menuRef"},{default:R((()=>[e.$slots.header?(m(),b("div",{key:0,class:S(e.nsSelect.be("dropdown","header")),onClick:x((()=>{}),["stop"])},[h(e.$slots,"header")],10,["onClick"])):w("v-if",!0),v(k(d,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:S([e.nsSelect.is("empty",0===e.filteredOptionsCount)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:R((()=>[e.showNewOption?(m(),L(u,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):w("v-if",!0),k(p,null,{default:R((()=>[h(e.$slots,"default")])),_:3})])),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[f,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(m(),b("div",{key:1,class:S(e.nsSelect.be("dropdown","loading"))},[h(e.$slots,"loading")],2)):e.loading||0===e.filteredOptionsCount?(m(),b("div",{key:2,class:S(e.nsSelect.be("dropdown","empty"))},[h(e.$slots,"empty",{},(()=>[g("span",null,y(e.emptyText),1)]))],2)):w("v-if",!0),e.$slots.footer?(m(),b("div",{key:3,class:S(e.nsSelect.be("dropdown","footer")),onClick:x((()=>{}),["stop"])},[h(e.$slots,"footer")],10,["onClick"])):w("v-if",!0)])),_:3},512)])),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","append-to","show-arrow","offset","onBeforeShow","onHide"])],16,["onMouseleave"])),[[C,e.handleClickOutside,e.popperRef]])}],["__file","select.vue"]]);var Pe=Q(i({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const a=G("select"),o=l(null),s=n(),i=l([]);I($e,u({...p(e)}));const r=t((()=>i.value.some((e=>!0===e.visible)))),d=e=>{const l=Ce(e),t=[];return l.forEach((e=>{var l,a;(e=>{var l,t;return"ElOption"===(null==(l=e.type)?void 0:l.name)&&!!(null==(t=e.component)?void 0:t.proxy)})(e)?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)?t.push(...d(e.children)):(null==(a=e.component)?void 0:a.subTree)&&t.push(...d(e.component.subTree))})),t},c=()=>{i.value=d(s.subTree)};return C((()=>{c()})),Ve(o,c,{attributes:!0,subtree:!0,childList:!0}),{groupRef:o,visible:r,ns:a}}}),[["render",function(e,l,t,a,o,s){return v((m(),b("ul",{ref:"groupRef",class:S(e.ns.be("group","wrap"))},[g("li",{class:S(e.ns.be("group","title"))},y(e.label),3),g("li",null,[g("ul",{class:S(e.ns.b("group"))},[h(e.$slots,"default")],2)])],2)),[[f,e.visible]])}],["__file","option-group.vue"]]);const He=Se(Ne,{Option:Fe,OptionGroup:Pe}),Ae=xe(Fe);xe(Pe);export{Ae as E,He as a};
