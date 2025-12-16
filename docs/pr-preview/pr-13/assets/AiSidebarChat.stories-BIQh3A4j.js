import{r as N,i as P,x as h}from"./iframe-BPHwXl7A.js";import{I as R,c as z,d as B,e as F,f as W,g as q,h as U,i as V}from"./icon-registry-D8cCWsde.js";import{t as j}from"./custom-element-UsVr97OX.js";import{n as w}from"./property-mV6WkkQG.js";import{n as C,e as $}from"./ref-CiMYUQCj.js";import{n as L}from"./when-CI7b_ccM.js";import{d as G,a as K}from"./ai-sidebar-BUf_Hs2t.js";import"./ai-modal-BU8wDXlC.js";import"./ai-button-B5QNxTc_.js";import{M as X}from"./mock-adapter-CJcooZGU.js";import{d as Y}from"./index-O0YK8LRL.js";import{_ as H,c as J,e as Q,d as Z}from"./service-adapter-CgOYZRmu.js";import{C as ee,d as te,b as oe}from"./constants-Co83GciG.js";const ae=`${ee}toolbar`,A={INVERTED:"inverted"},re={...A},m={elementName:ae,observedAttributes:A,attributes:re};const ie='<template><div class="forge-toolbar" part="root"><div class="section" part="before-section-start"><slot name="before-start"></slot></div><div class="inner center" part="inner"><div class="section" part="section-start"><slot name="start"></slot><slot></slot></div><div class="section center" part="section-center"><slot name="center"></slot></div><div class="section end" part="section-end"><slot name="end"></slot></div></div><div class="section end" part="after-section-end"><slot name="after-end"></slot></div></div></template>',se=":host{display:block}:host([hidden]){display:none}.forge-toolbar{--_toolbar-background:var(--forge-toolbar-background, var(--forge-theme-surface, #ffffff));--_toolbar-height:var(--forge-toolbar-height, 56px);--_toolbar-min-height:var(--forge-toolbar-min-height, var(--_toolbar-height));--_toolbar-divider-width:var(--forge-toolbar-divider-width, var(--forge-border-thin, 1px));--_toolbar-divider-style:var(--forge-toolbar-divider-style, solid);--_toolbar-divider-color:var(--forge-toolbar-divider-color, var(--forge-theme-outline, #e0e0e0));--_toolbar-shape:var(--forge-toolbar-shape, calc(var(--forge-shape-medium, 4px) * var(--forge-shape-factor, 1)));--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, var(--_toolbar-shape));--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, var(--_toolbar-shape));--_toolbar-end-start-shape:var(--forge-toolbar-end-start-shape, 0);--_toolbar-end-end-shape:var(--forge-toolbar-end-end-shape, 0);--_toolbar-padding:var(--forge-toolbar-padding, var(--forge-spacing-medium, 16px));--_toolbar-padding-block:var(--forge-toolbar-padding-block, 0);--_toolbar-padding-inline:var(--forge-toolbar-padding-inline, var(--_toolbar-padding));--_toolbar-columns:var(--forge-toolbar-columns, auto 1fr auto)}.forge-toolbar{display:grid;grid-template-columns:var(--_toolbar-columns);height:var(--_toolbar-height);min-height:var(--_toolbar-min-height);box-sizing:border-box;padding-inline:0;border-block-end-width:var(--_toolbar-divider-width);border-block-end-style:var(--_toolbar-divider-style);border-block-end-color:var(--_toolbar-divider-color);border-start-start-radius:var(--_toolbar-start-start-shape);border-start-end-radius:var(--_toolbar-start-end-shape);border-end-start-radius:var(--_toolbar-end-start-shape);border-end-end-radius:var(--_toolbar-end-end-shape);background:var(--_toolbar-background)}.inner{display:grid;grid-template-columns:var(--_toolbar-columns);padding-inline:var(--_toolbar-padding-inline);padding-block:var(--_toolbar-padding-block);box-sizing:border-box}.inner.center{min-width:0}.section{display:flex;align-items:center;width:100%;box-sizing:border-box}.section.center{justify-content:center;min-width:0}.section.end{justify-content:end}:host([inverted]) .forge-toolbar{--_toolbar-start-start-shape:var(--forge-toolbar-start-start-shape, 0);--_toolbar-start-end-shape:var(--forge-toolbar-start-end-shape, 0);--_toolbar-end-start-shape:var(--_toolbar-shape);--_toolbar-end-end-shape:var(--_toolbar-shape);border-block-end:none;border-block-start-width:var(--_toolbar-divider-width);border-block-start-style:var(--_toolbar-divider-style);border-block-start-color:var(--_toolbar-divider-color)}:host(:is([no-divider],[no-border])) .forge-toolbar{border:none}:host([no-padding]) .forge-toolbar{--_toolbar-padding:var(--forge-toolbar-padding, 0)}:host([auto-height]) .forge-toolbar{--_toolbar-height:var(--forge-toolbar-height, auto)}::slotted(:is(h1,h2,h3,h4,h5,h6,p)){margin:0}";let u=class extends oe{static get observedAttributes(){return Object.values(m.observedAttributes)}constructor(){super(),this._inverted=!1,J(this,ie,se)}attributeChangedCallback(e,r,c){switch(e){case m.observedAttributes.INVERTED:this.inverted=Q(c);break}}get inverted(){return this._inverted}set inverted(e){this._inverted!==e&&(this._inverted=e,this.toggleAttribute(m.attributes.INVERTED,this._inverted))}};u=H([te({name:m.elementName})],u);function ne(){Z(u)}const de=":host{display:block;height:100%}";var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},y=(t,e,r,c)=>{for(var d=c>1?void 0:c?ce(e,r):e,n=t.length-1,l;n>=0;n--)(l=t[n])&&(d=(c?l(e,r,d):l(d))||d);return c&&d&&le(e,r,d),d},S=(t,e,r)=>e.has(t)||k("Cannot "+r),f=(t,e,r)=>(S(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),a=(t,e,r)=>(S(t,e,"access private method"),r),_,x,v,o,T,E,I,O,D,M,s;const he="forge-ai-sidebar-chat";let b=class extends P{constructor(){super(...arguments),g(this,o),this.open=!1,this.expanded=!1,g(this,_,$()),g(this,x,$()),g(this,v,h`
    <slot
      @forge-ai-chatbot-expand=${a(this,o,O)}
      @forge-ai-chatbot-minimize=${a(this,o,D)}></slot>
  `)}render(){return h`
      ${L(this.expanded,()=>h`
          <forge-ai-modal
            ${C(f(this,x))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${a(this,o,I)}
            @forge-ai-modal-close=${a(this,o,M)}>
            ${f(this,v)}
          </forge-ai-modal>
        `,()=>h`
          <forge-ai-sidebar
            ${C(f(this,_))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${a(this,o,T)}
            @forge-ai-sidebar-close=${a(this,o,E)}>
            ${f(this,v)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,a(this,o,s).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,a(this,o,s).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,a(this,o,s).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,a(this,o,s).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,a(this,o,s).call(this,"forge-ai-sidebar-chat-collapse"))}};_=new WeakMap;x=new WeakMap;v=new WeakMap;o=new WeakSet;T=function(){this.open=!0,a(this,o,s).call(this,"forge-ai-sidebar-chat-open")};E=function(){this.open=!1,a(this,o,s).call(this,"forge-ai-sidebar-chat-close")};I=function(t){const{isFullscreen:e}=t.detail;e&&!this.expanded?(this.expanded=!0,a(this,o,s).call(this,"forge-ai-sidebar-chat-expand")):!e&&this.expanded&&(this.expanded=!1,a(this,o,s).call(this,"forge-ai-sidebar-chat-collapse"))};O=function(){this.expanded=!this.expanded,this.expanded?a(this,o,s).call(this,"forge-ai-sidebar-chat-expand"):a(this,o,s).call(this,"forge-ai-sidebar-chat-collapse")};D=function(){this.close()};M=function(){this.collapse()};s=function(t){const e=new CustomEvent(t,{bubbles:!0,composed:!0});this.dispatchEvent(e)};b.styles=N(de);y([w({type:Boolean})],b.prototype,"open",2);y([w({type:Boolean})],b.prototype,"expanded",2);b=y([j(he)],b);const{action:i}=__STORYBOOK_MODULE_ACTIONS__;G();K();Y();ne();R.define([z,B,F,W,q,U,V]);const pe="forge-ai-sidebar-chat",be={title:"AI Components/Form Factors/Sidebar",component:pe,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:t=>{const e=new X({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=n=>{i("forge-ai-sidebar-chat-expand")(n);const l=n.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!0)},c=n=>{i("forge-ai-sidebar-chat-collapse")(n);const l=n.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!1)},d=h`
      <forge-ai-sidebar-chat
        ?open=${t.open}
        ?expanded=${t.expanded}
        @forge-ai-sidebar-chat-open=${i("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${i("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${r}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-chatbot
          .adapter=${e}
          file-upload=${t.fileUpload}
          ?expanded=${t.expanded}
          placeholder=${t.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${i("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${i("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${i("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${i("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${i("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${i("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${i("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${i("forge-ai-chatbot-info")}>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return h`
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
            <p>This form factor positions a slotted chatbot in a sidebar or modal.</p>
            <p>Try sending messages, expanding to modal, or closing the sidebar.</p>
            <p>Click "Ask AI Assistant" button in the toolbar to toggle the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">${d}</div>
      </forge-scaffold>
    `}},p={};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};const fe=["Demo"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,__namedExportsOrder:fe,default:be},Symbol.toStringTag,{value:"Module"}));export{Ee as A};
