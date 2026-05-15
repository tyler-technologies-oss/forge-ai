import{r as M,i as D,x as h}from"./iframe-8UuaHQOQ.js";import{d as k,T as P,I as z,j as W,k as q,l as B,m as F,n as R,o as U,p as N}from"./split-button-DUjBx5wq.js";import{d as j,a as G}from"./ai-sidebar-CGBpjli9.js";import{d as K}from"./index-DKDtFJYT.js";import{t as L}from"./custom-element-UsVr97OX.js";import{n as $}from"./property-BxKcJA03.js";import{n as _,e as C}from"./ref-cqcR2cY-.js";import{n as Y}from"./when-CI7b_ccM.js";import"./ai-modal-BnmQyBrE.js";import"./ai-button-CdxNBsLe.js";import{M as H}from"./mock-adapter-uhjSnHDA.js";function J(){k(P)}const Q=":host{display:block;height:100%}";var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},y=(e,a,i,c)=>{for(var d=c>1?void 0:c?X(a,i):a,n=e.length-1,l;n>=0;n--)(l=e[n])&&(d=(c?l(a,i,d):l(d))||d);return c&&d&&V(a,i,d),d},S=(e,a,i)=>a.has(e)||v("Cannot "+i),g=(e,a,i)=>(S(e,a,"read from private field"),i?i.call(e):a.get(e)),b=(e,a,i)=>a.has(e)?v("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,i),o=(e,a,i)=>(S(e,a,"access private method"),i),u,x,m,t,A,w,I,T,O,E,r;const Z="forge-ai-sidebar-chat";let f=class extends D{constructor(){super(...arguments),b(this,t),this.open=!1,this.expanded=!1,b(this,u,C()),b(this,x,C()),b(this,m,h`
    <slot
      @forge-ai-chatbot-expand=${o(this,t,T)}
      @forge-ai-chatbot-minimize=${o(this,t,O)}></slot>
  `)}render(){return h`
      ${Y(this.expanded,()=>h`
          <forge-ai-modal
            ${_(g(this,x))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${o(this,t,I)}
            @forge-ai-modal-close=${o(this,t,E)}>
            ${g(this,m)}
          </forge-ai-modal>
        `,()=>h`
          <forge-ai-sidebar
            ${_(g(this,u))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${o(this,t,A)}
            @forge-ai-sidebar-close=${o(this,t,w)}>
            ${g(this,m)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,o(this,t,r).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,o(this,t,r).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,o(this,t,r).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,o(this,t,r).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,o(this,t,r).call(this,"forge-ai-sidebar-chat-collapse"))}};u=new WeakMap;x=new WeakMap;m=new WeakMap;t=new WeakSet;A=function(){this.open=!0,o(this,t,r).call(this,"forge-ai-sidebar-chat-open")};w=function(){this.open=!1,o(this,t,r).call(this,"forge-ai-sidebar-chat-close")};I=function(e){const{isFullscreen:a}=e.detail;a&&!this.expanded?(this.expanded=!0,o(this,t,r).call(this,"forge-ai-sidebar-chat-expand")):!a&&this.expanded&&(this.expanded=!1,o(this,t,r).call(this,"forge-ai-sidebar-chat-collapse"))};T=function(){this.expanded=!this.expanded,this.expanded?o(this,t,r).call(this,"forge-ai-sidebar-chat-expand"):o(this,t,r).call(this,"forge-ai-sidebar-chat-collapse")};O=function(){this.close()};E=function(){this.collapse()};r=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};f.styles=M(Q);y([$({type:Boolean})],f.prototype,"open",2);y([$({type:Boolean})],f.prototype,"expanded",2);f=y([L(Z)],f);const{action:s}=__STORYBOOK_MODULE_ACTIONS__;j();G();K();J();z.define([W,q,B,F,R,U,N]);const ee="forge-ai-sidebar-chat",ae={title:"AI Components/Form Factors/Sidebar",component:ee,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const a=new H({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=n=>{s("forge-ai-sidebar-chat-expand")(n);const l=n.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!0)},c=n=>{s("forge-ai-sidebar-chat-collapse")(n);const l=n.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!1)},d=h`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${s("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${s("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${i}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-chatbot
          .adapter=${a}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${s("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${s("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${s("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${s("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${s("forge-ai-chatbot-info")}>
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
    `}},p={};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};const te=["Demo"],ge=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,__namedExportsOrder:te,default:ae},Symbol.toStringTag,{value:"Module"}));export{ge as A};
