import{r as D,i as M,x as d}from"./iframe-BW3K9SVl.js";import{I as P,c as R,d as z,e as B,f as W,g as H,h as L,i as V}from"./icon-registry-CEncZHzj.js";import{t as j}from"./custom-element-C028faeO.js";import{n as k}from"./property-B9YuOZ9v.js";import{n as C,e as w}from"./ai-modal-hCbyiXA_.js";import{n as q}from"./when-3fO0zp9C.js";import{d as F,a as G}from"./ai-sidebar-KHv2WcHP.js";import"./ai-chat-interface-K_vYQC5O.js";import"./ai-user-message-DIDcF0-9.js";import"./ai-response-message-CAFt95ct.js";import"./ai-suggestions-8DUTLyBa.js";import"./ai-button-BfiPu9W7.js";import{d as K}from"./index-CtZ93bqN.js";import{_ as U,c as X,e as Y,d as J}from"./tslib.es6-B3DjoPPp.js";import{C as Q,d as Z,b as ee}from"./constants-gdUIRxM-.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const te=`${Q}toolbar`,$={INVERTED:"inverted"},oe={...$},g={elementName:te,observedAttributes:$,attributes:oe};/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const ae='<template><div class="forge-toolbar" part="root"><div class="section" part="before-section-start"><slot name="before-start"></slot></div><div class="inner center" part="inner"><div class="section" part="section-start"><slot name="start"></slot><slot></slot></div><div class="section center" part="section-center"><slot name="center"></slot></div><div class="section end" part="section-end"><slot name="end"></slot></div></div><div class="section end" part="after-section-end"><slot name="after-end"></slot></div></div></template>',re=":host{display:block}:host([hidden]){display:none}.forge-toolbar{--_toolbar-background:var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height:var(--forge-toolbar-height, 56px);--_toolbar-min-height:var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width:var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style:var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color:var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape:var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape:var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape:var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding:var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block:var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline:var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns:var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background)}.inner{display:grid;grid-template-columns:var(--_toolbar-columns);padding-inline:var(--_toolbar-padding-inline);padding-block:var(--_toolbar-padding-block);box-sizing:border-box}.inner.center{min-width:0}.section{display:flex;align-items:center;width:100%;box-sizing:border-box}.section.center{justify-content:center;min-width:0}.section.end{justify-content:end}:host([inverted]) .forge-toolbar{--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape:var(--_toolbar-shape);--_toolbar-end-end-shape:var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}:host(:is([no-divider],[no-border])) .forge-toolbar{border:none}:host([no-padding]) .forge-toolbar{--_toolbar-padding:var(--forge-toolbar-padding, 0)}:host([auto-height]) .forge-toolbar{--_toolbar-height:var(--forge-toolbar-height, auto)}::slotted(:is(h1,h2,h3,h4,h5,h6,p)){margin:0}";let v=class extends ee{static get observedAttributes(){return Object.values(g.observedAttributes)}constructor(){super(),this._inverted=!1,X(this,ae,re)}attributeChangedCallback(e,a,n){switch(e){case g.observedAttributes.INVERTED:this.inverted=Y(n);break}}get inverted(){return this._inverted}set inverted(e){this._inverted!==e&&(this._inverted=e,this.toggleAttribute(g.attributes.INVERTED,this._inverted))}};v=U([Z({name:g.elementName})],v);/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */function se(){J(v)}const ie=":host{display:block;height:100%}";var ne=Object.defineProperty,de=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},x=(t,e,a,n)=>{for(var i=n>1?void 0:n?de(e,a):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(i=(n?p(e,a,i):p(i))||i);return n&&i&&ne(e,a,i),i},A=(t,e,a)=>e.has(t)||I("Cannot "+a),b=(t,e,a)=>(A(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),r=(t,e,a)=>(A(t,e,"access private method"),a),u,_,o,y,S,E,O,T,N,s;const le="forge-ai-sidebar-chat";let c=class extends M{constructor(){super(...arguments),m(this,o),this.open=!1,this.expanded=!1,m(this,u,w()),m(this,_,w())}render(){return d`
      ${q(this.expanded,()=>d`
          <forge-ai-modal
            ${C(b(this,_))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-close=${r(this,o,N)}>
            ${b(this,o,y)}
          </forge-ai-modal>
        `,()=>d`
          <forge-ai-sidebar
            ${C(b(this,u))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${r(this,o,S)}
            @forge-ai-sidebar-close=${r(this,o,E)}>
            ${b(this,o,y)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,r(this,o,s).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,r(this,o,s).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,r(this,o,s).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,r(this,o,s).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,r(this,o,s).call(this,"forge-ai-sidebar-chat-collapse"))}};u=new WeakMap;_=new WeakMap;o=new WeakSet;y=function(){return d`
      <forge-ai-chat-interface
        show-expand-button
        ?show-minimize-button=${!this.expanded}
        minimize-icon=${this.expanded?"default":"panel"}
        ?expanded=${this.expanded}
        @forge-ai-chat-header-expand=${r(this,o,O)}
        @forge-ai-chat-header-minimize=${r(this,o,T)}>
        <slot></slot>
        <slot name="suggestions" slot="suggestions"></slot>
        <slot name="prompt" slot="prompt"></slot>
      </forge-ai-chat-interface>
    `};S=function(){this.open=!0,r(this,o,s).call(this,"forge-ai-sidebar-chat-open")};E=function(){this.open=!1,r(this,o,s).call(this,"forge-ai-sidebar-chat-close")};O=function(){this.expanded=!this.expanded,this.expanded?r(this,o,s).call(this,"forge-ai-sidebar-chat-expand"):r(this,o,s).call(this,"forge-ai-sidebar-chat-collapse")};T=function(){this.close()};N=function(){this.expanded&&this.collapse()};s=function(t){const e=new CustomEvent(t,{bubbles:!0,composed:!0});this.dispatchEvent(e)};c.styles=D(ie);x([k({type:Boolean})],c.prototype,"open",2);x([k({type:Boolean})],c.prototype,"expanded",2);c=x([j(le)],c);const{action:f}=__STORYBOOK_MODULE_ACTIONS__;F();G();K();se();P.define([R,z,B,W,H,L,V]);const he="forge-ai-sidebar-chat",ce={title:"AI Components/Form Factors/Sidebar",component:he,argTypes:{open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"}},args:{open:!0,expanded:!1},render:t=>{const e=f("forge-ai-sidebar-chat-open"),a=f("forge-ai-sidebar-chat-close"),n=f("forge-ai-sidebar-chat-expand"),i=f("forge-ai-sidebar-chat-collapse"),l=d`
      <forge-ai-sidebar-chat
        ?open=${t.open}
        ?expanded=${t.expanded}
        @forge-ai-sidebar-chat-open=${e}
        @forge-ai-sidebar-chat-close=${a}
        @forge-ai-sidebar-chat-expand=${n}
        @forge-ai-sidebar-chat-collapse=${i}>
        <forge-ai-user-message>
          Hello! Can you help me understand the analytics data I'm seeing in my dashboard?
        </forge-ai-user-message>
        <forge-ai-response-message>
          I'd be happy to help you understand your analytics data! I can see you're looking at your dashboard with
          various metrics and activity reports. What specific aspects would you like me to explain? I can help with: -
          Interpreting trends and patterns - Explaining key performance indicators - Suggesting areas for improvement -
          Answering questions about specific data points
        </forge-ai-response-message>
        <forge-ai-user-message> What should I focus on first when reviewing my dashboard? </forge-ai-user-message>
        <forge-ai-response-message>
          Great question! Here's a recommended approach for dashboard review: 1. **Start with key metrics** - Look at
          your primary KPIs first 2. **Check for anomalies** - Notice any unusual spikes or drops 3. **Review time
          trends** - Compare current data to historical patterns 4. **Identify opportunities** - Look for areas showing
          positive growth 5. **Address concerns** - Investigate any declining metrics Would you like me to walk through
          any of these areas with your current data?
        </forge-ai-response-message>
      </forge-ai-sidebar-chat>
    `;return d`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat Demo"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=${()=>{document.querySelector("forge-ai-sidebar-chat")?.toggle()}}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat component within a typical application layout.</p>
            <p>This is a structured form factor component that combines ai-sidebar and ai-chat-interface.</p>
            <p>The sidebar chat automatically handles composition and includes a minimize button in the header.</p>
          </forge-card>
        </main>

        ${t.position==="left"?d`<div slot="body-left">${l}</div>`:d`<div slot="body-right">${l}</div>`}
      </forge-scaffold>
    `}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const pe=["Demo"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{Ee as A};
