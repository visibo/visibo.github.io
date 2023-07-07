import{a as te,ax as De,ap as Me,az as ze,aq as Qe,aB as Pe,bd as ce,be as z,bf as de,r as C,f as r,aD as Ae,bh as Fe,w as c,aX as N,v as We,A as re,t as ve,a7 as Ne,j as L,ar as ie,i as fe,G as me,bi as He,x as Ie,L as _e,o as H,c as Z,Q as y,P as h,O as Re,X as I,Y as ee,m as je,a4 as Ee,a8 as Ue,N as Xe,M as Ge,a2 as Ke,a1 as Ye,R as Je,bj as Ze}from"./entry.73427282.js";import{_ as et}from"./QToolbar.2015afcb.js";import{Q as tt}from"./QScrollObserver.14adb72c.js";import{T as J,a as he,_ as at}from"./QList.95dd9e41.js";import{a as nt,b as ot,_ as lt}from"./page.3a960736.js";const se=150,ut=te({name:"QDrawer",inheritAttrs:!1,props:{...De,...Me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...ze,"onLayout","miniState"],setup(e,{slots:m,emit:d,attrs:q}){const l=me(),{proxy:{$q:s}}=l,b=Qe(e,s),{preventBodyScroll:g}=He(),{registerTimeout:S,removeTimeout:V}=Pe(),a=ce(de,z);if(a===z)return console.error("QDrawer needs to be child of QLayout"),z;let O,p=null,v;const i=C(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),x=r(()=>e.mini===!0&&i.value!==!0),f=r(()=>x.value===!0?e.miniWidth:e.width),u=C(e.showIfAbove===!0&&i.value===!1?!0:e.modelValue===!0),n=r(()=>e.persistent!==!0&&(i.value===!0||we.value===!0));function k(t,o){if(be(),t!==!1&&a.animate(),w(0),i.value===!0){const _=a.instances[F.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),T(1),a.isContainer.value!==!0&&g(!0)}else T(0),t!==!1&&G(!1);S(()=>{t!==!1&&G(!0),o!==!0&&d("show",t)},se)}function ae(t,o){ye(),t!==!1&&a.animate(),T(0),w(D.value*f.value),K(),o!==!0?S(()=>{d("hide",t)},se):V()}const{show:R,hide:Q}=Ae({showing:u,hideOnRouteChange:n,handleShow:k,handleHide:ae}),{addToHistory:be,removeFromHistory:ye}=Fe(u,Q,n),A={belowBreakpoint:i,hide:Q},B=r(()=>e.side==="right"),D=r(()=>(s.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),ne=C(0),M=C(!1),j=C(!1),oe=C(f.value*D.value),F=r(()=>B.value===!0?"left":"right"),E=r(()=>u.value===!0&&i.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:f.value:0),U=r(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(B.value?"R":"L")>-1||s.platform.is.ios===!0&&a.isContainer.value===!0),P=r(()=>e.overlay===!1&&u.value===!0&&i.value===!1),we=r(()=>e.overlay===!0&&u.value===!0&&i.value===!1),pe=r(()=>"fullscreen q-drawer__backdrop"+(u.value===!1&&M.value===!1?" hidden":"")),ke=r(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),le=r(()=>B.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),qe=r(()=>B.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),ge=r(()=>{const t={};return a.header.space===!0&&le.value===!1&&(U.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&qe.value===!1&&(U.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),xe=r(()=>{const t={width:`${f.value}px`,transform:`translateX(${oe.value}px)`};return i.value===!0?t:Object.assign(t,ge.value)}),Be=r(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ce=r(()=>`q-drawer q-drawer--${e.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":u.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(U.value===!0||P.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(le.value===!0?" q-drawer--top-padding":""))),Te=r(()=>{const t=s.lang.rtl===!0?e.side:F.value;return[[J,Oe,void 0,{[t]:!0,mouse:!0}]]}),$e=r(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[J,ue,void 0,{[t]:!0,mouse:!0}]]}),Le=r(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[J,ue,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function X(){Ve(i,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}c(i,t=>{t===!0?(O=u.value,u.value===!0&&Q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&O!==!1&&(u.value===!0?(w(0),T(0),K()):R(!1))}),c(()=>e.side,(t,o)=>{a.instances[o]===A&&(a.instances[o]=void 0,a[o].space=!1,a[o].offset=0),a.instances[t]=A,a[t].size=f.value,a[t].space=P.value,a[t].offset=E.value}),c(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&X()}),c(()=>e.behavior+e.breakpoint,X),c(a.isContainer,t=>{u.value===!0&&g(t!==!0),t===!0&&X()}),c(a.scrollbarWidth,()=>{w(u.value===!0?0:void 0)}),c(E,t=>{$("offset",t)}),c(P,t=>{d("onLayout",t),$("space",t)}),c(B,()=>{w()}),c(f,t=>{w(),Y(e.miniToOverlay,t)}),c(()=>e.miniToOverlay,t=>{Y(t,f.value)}),c(()=>s.lang.rtl,()=>{w()}),c(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Se(),a.animate())}),c(x,t=>{d("miniState",t)});function w(t){t===void 0?re(()=>{t=u.value===!0?0:f.value,w(D.value*t)}):(a.isContainer.value===!0&&B.value===!0&&(i.value===!0||Math.abs(t)===f.value)&&(t+=D.value*a.scrollbarWidth.value),oe.value=t)}function T(t){ne.value=t}function G(t){const o=t===!0?"remove":a.isContainer.value!==!0?"add":"";o!==""&&document.body.classList[o]("q-body--drawer-toggle")}function Se(){p!==null&&clearTimeout(p),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,p=setTimeout(()=>{p=null,j.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Oe(t){if(u.value!==!1)return;const o=f.value,_=N(t.distance.x,0,o);if(t.isFinal===!0){_>=Math.min(75,o)===!0?R():(a.animate(),T(0),w(D.value*o)),M.value=!1;return}w((s.lang.rtl===!0?B.value!==!0:B.value)?Math.max(o-_,0):Math.min(0,_-o)),T(N(_/o,0,1)),t.isFirst===!0&&(M.value=!0)}function ue(t){if(u.value!==!0)return;const o=f.value,_=t.direction===e.side,W=(s.lang.rtl===!0?_!==!0:_)?N(t.distance.x,0,o):0;if(t.isFinal===!0){Math.abs(W)<Math.min(75,o)===!0?(a.animate(),T(1),w(0)):Q(),M.value=!1;return}w(D.value*W),T(N(1-W/o,0,1)),t.isFirst===!0&&(M.value=!0)}function K(){g(!1),G(!0)}function $(t,o){a.update(e.side,t,o)}function Ve(t,o){t.value!==o&&(t.value=o)}function Y(t,o){$("size",t===!0?e.miniWidth:o)}return a.instances[e.side]=A,Y(e.miniToOverlay,f.value),$("space",P.value),$("offset",E.value),e.showIfAbove===!0&&e.modelValue!==!0&&u.value===!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),We(()=>{d("onLayout",P.value),d("miniState",x.value),O=e.showIfAbove===!0;const t=()=>{(u.value===!0?k:ae)(!1,!0)};if(a.totalWidth.value!==0){re(t);return}v=c(a.totalWidth,()=>{v(),v=void 0,u.value===!1&&e.showIfAbove===!0&&i.value===!1?R(!1):t()})}),ve(()=>{v!==void 0&&v(),p!==null&&(clearTimeout(p),p=null),u.value===!0&&K(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,$("size",0),$("offset",0),$("space",!1))}),()=>{const t=[];i.value===!0&&(e.noSwipeOpen===!1&&t.push(Ne(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Te.value)),t.push(ie("div",{ref:"backdrop",class:pe.value,style:ke.value,"aria-hidden":"true",onClick:Q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&u.value===!0,()=>Le.value)));const o=x.value===!0&&m.mini!==void 0,_=[L("div",{...q,key:""+o,class:[Be.value,q.class]},o===!0?m.mini():fe(m.default))];return e.elevated===!0&&u.value===!0&&_.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ie("aside",{ref:"content",class:Ce.value,style:xe.value},_,"contentclose",e.noSwipeClose!==!0&&i.value===!0,()=>$e.value)),L("div",{class:"q-drawer-container"},t)}}}),rt=te({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:d}){const{proxy:{$q:q}}=me(),l=ce(de,z);if(l===z)return console.error("QHeader needs to be child of QLayout"),z;const s=C(parseInt(e.heightHint,10)),b=C(!0),g=r(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||q.platform.is.ios&&l.isContainer.value===!0),S=r(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return b.value===!0?s.value:0;const n=s.value-l.scroll.value.position;return n>0?n:0}),V=r(()=>e.modelValue!==!0||g.value===!0&&b.value!==!0),a=r(()=>e.modelValue===!0&&V.value===!0&&e.reveal===!0),O=r(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(V.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=r(()=>{const n=l.rows.value.top,k={};return n[0]==="l"&&l.left.space===!0&&(k[q.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(k[q.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),k});function v(n,k){l.update("header",n,k)}function i(n,k){n.value!==k&&(n.value=k)}function x({height:n}){i(s,n),v("size",n)}function f(n){a.value===!0&&i(b,!0),d("focusin",n)}c(()=>e.modelValue,n=>{v("space",n),i(b,!0),l.animate()}),c(S,n=>{v("offset",n)}),c(()=>e.reveal,n=>{n===!1&&i(b,e.modelValue)}),c(b,n=>{l.animate(),d("reveal",n)}),c(l.scroll,n=>{e.reveal===!0&&i(b,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const u={};return l.instances.header=u,e.modelValue===!0&&v("size",s.value),v("space",e.modelValue),v("offset",S.value),ve(()=>{l.instances.header===u&&(l.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const n=Ie(m.default,[]);return e.elevated===!0&&n.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(L(tt,{debounce:0,onResize:x})),L("header",{class:O.value,style:p.value,onFocusin:f},n)}}}),it=te({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const d=r(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:d.value},fe(m.default))}}),st=_e({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(e){return(m,d)=>{const q=je,l=Ee,s=he,b=Ue;return H(),Z(b,{clickable:"",tag:"a",target:"_blank",href:m.link},{default:y(()=>[m.icon?(H(),Z(l,{key:0,avatar:""},{default:y(()=>[h(q,{name:m.icon},null,8,["name"])]),_:1})):Re("",!0),h(l,null,{default:y(()=>[h(s,null,{default:y(()=>[I(ee(m.title),1)]),_:1}),h(s,{caption:""},{default:y(()=>[I(ee(m.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}}}),ht=_e({__name:"layout1",setup(e){const m=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],d=C(!1);function q(){d.value=!d.value}return(l,s)=>{const b=Je,g=it,S=et,V=rt,a=he,O=st,p=at,v=ut,i=nt,x=ot,f=lt;return H(),Z(f,{view:"lHh Lpr lFf"},{default:y(()=>[h(V,{elevated:""},{default:y(()=>[h(S,null,{default:y(()=>[h(b,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",glossy:!1,onClick:q}),h(g,null,{default:y(()=>[I(" Quasar App ")]),_:1}),Xe("div",null,"Quasar v"+ee(l.$q.version),1)]),_:1})]),_:1}),h(v,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=u=>d.value=u),"show-if-above":"",bordered:""},{default:y(()=>[h(p,null,{default:y(()=>[h(a,{header:""},{default:y(()=>[I(" Essential Links ")]),_:1}),(H(),Ge(Ye,null,Ke(m,u=>h(O,Ze({key:u.title},u),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),h(x,null,{default:y(()=>[h(i)]),_:1})]),_:1})}}});export{ht as default};
