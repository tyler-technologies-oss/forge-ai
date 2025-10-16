import{_ as p,b as _,a as w,C as y,d as m}from"./tslib.es6-B3DjoPPp.js";import{e as b,i as x,r as S,x as C}from"./iframe-BW3K9SVl.js";import{t as E}from"./custom-element-C028faeO.js";import{n as L}from"./property-B9YuOZ9v.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function F(e,{capture:r=!0,pointerenter:t=!0,focusin:o=!0}={}){let a;const s=()=>{typeof a=="function"&&a()};return{userInteraction:new Promise(h=>{const d={once:!0,capture:r},l=u=>{o&&e.removeEventListener("focusin",f,d),h(u)},f=u=>{t&&e.removeEventListener("pointerenter",l,d),h(u)};a=()=>{t&&e.removeEventListener("pointerenter",l,d),o&&e.removeEventListener("focusin",f,d)},t&&e.addEventListener("pointerenter",l,d),o&&e.addEventListener("focusin",f,d)}),destroy:s}}function O(e,r){let t=null;return r&&(t=k(e,r)),t||e.parentElement}function k(e,r){if(!e.isConnected)return null;const t=e.getRootNode();return r===":host"?t instanceof ShadowRoot?t.host:null:t.querySelector(`#${r}`)}function U(e,r,t=!0){return t&&r.append(...e.childNodes),e.insertAdjacentElement("beforebegin",r),e.remove(),r}function $(e=0){return new Promise(r=>setTimeout(r,e))}function A(e,r,t){if(t)try{e.states.add(r)}catch{e.states.add(`--${r}`)}else try{e.states.delete(r)}catch{e.states.delete(`--${r}`)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function P(e){const r=e.shadowRoot,t=e.constructor.styles,o=e.ownerDocument.defaultView;if(!(!b||!r||!t||!o))if(Array.isArray(t)&&t.length){const a=t.map(s=>{const c=new o.CSSStyleSheet;return c.replaceSync(s.toString()),c});r.adoptedStyleSheets=a}else{const a=new o.CSSStyleSheet;a.replaceSync(t.toString()),r.adoptedStyleSheets=[a]}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */class R extends x{adoptedCallback(){P(this)}}/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */var n,v;const N=":host{display:block}:host([hidden]){display:none}.forge-card{--_card-background:var(--forge-card-background, var(--forge-theme-surface, #ffffff));--_card-height:var(--forge-card-height, 100%);--_card-width:var(--forge-card-width, 100%);--_card-outline-color:var(--forge-card-outline-color, var(--forge-theme-outline, #e0e0e0));--_card-outline-width:var(--forge-card-outline-width, var(--forge-border-thin, 1px));--_card-outline-style:var(--forge-card-outline-style, solid);--_card-elevation:var(--forge-card-elevation, none);--_card-padding:var(--forge-card-padding, var(--forge-spacing-medium, 16px));--_card-shape:var(--forge-card-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_card-overflow:var(--forge-card-overflow, initial);--_card-raised-elevation:var(--forge-card-raised-elevation, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12));--_card-raised-outline-width:var(--forge-card-raised-outline-width, 0)}.forge-card{background:var(--_card-background);border-color:var(--_card-outline-color);border-width:var(--_card-outline-width);border-style:var(--_card-outline-style);border-radius:var(--_card-shape);box-shadow:var(--_card-elevation);box-sizing:border-box;padding:var(--_card-padding);overflow:var(--_card-overflow);height:var(--_card-height);width:var(--_card-width);-webkit-tap-highlight-color:transparent}:host(:where([raised],:state(raised))) .forge-card{--_card-elevation:var(--_card-raised-elevation);--_card-outline-width:var(--_card-raised-outline-width)}:host([no-padding]) .forge-card{--_card-padding:var(--forge-card-padding, 0)}",g="forge-card";let i=class extends R{constructor(){super(),n.set(this,void 0),this.raised=!1,_(this,n,this.attachInternals(),"f")}willUpdate(r){r.has("raised")&&A(w(this,n,"f"),"raised",this.raised)}render(){return C`<div class="forge-card" part="root"><slot></slot></div>`}};n=new WeakMap;v=y;i.styles=S(N);i[v]=g;p([L({type:Boolean,reflect:!0})],i.prototype,"raised",void 0);i=p([E(g)],i);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function G(){m(i)}export{R as B,$ as a,F as c,G as d,O as l,U as r,A as t};
