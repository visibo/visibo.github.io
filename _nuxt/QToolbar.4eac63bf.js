import{bl as d,a,as as c,at as u,f as s,j as n,i as r,G as m}from"./entry.a0a0f151.js";function g(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),d.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const v=a({name:"QList",props:{...c,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=m(),l=u(e,o.proxy.$q),i=s(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>n(e.tag,{class:i.value},r(t.default))}}),f=a({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=s(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>n("div",{class:o.value,role:"toolbar"},r(t.default))}});export{f as _,v as a,g as c};
