import{r as E,i as M,x as f}from"./iframe-Cs5ZdWGX.js";import{t as O}from"./custom-element-UsVr97OX.js";import{n as s}from"./property-sdxP6XNC.js";import{r as T}from"./class-map-b3Nfja24.js";import{o as F}from"./if-defined-DPyZDAOG.js";import{n as I,e as S}from"./ref-Bw7RBaX-.js";import{n as D}from"./when-CI7b_ccM.js";import"./ai-chatbot-base-C5jDlS8N.js";import"./ai-chatbot-OQ-R9-gI.js";import"./ai-message-thread-CAvmrOST.js";import"./markdown-C0nyZhUE.js";import"./ai-gradient-container-CxZxC0Ic.js";import"./ai-modal-0JfbgJIZ.js";import{M as U}from"./mock-adapter-DymPxr2h.js";const P=":host{display:block}.ai-embedded-chat{display:contents}";var V=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},n=(e,t,a,g)=>{for(var l=g>1?void 0:g?z(t,a):t,u=e.length-1,b;u>=0;u--)(b=e[u])&&(l=(g?b(t,a,l):b(l))||l);return g&&l&&V(t,a,l),l},$=(e,t,a)=>t.has(e)||x("Cannot "+a),c=(e,t,a)=>($(e,t,"read from private field"),a?a.call(e):t.get(e)),v=(e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),d=(e,t,a)=>($(e,t,"access private method"),a),p,o,_,y,C,A,w,m;const k="forge-ai-embedded-chat";let i=class extends M{constructor(){super(...arguments),v(this,o),this.expanded=!1,this.gradientVariant="medium",this.fileUpload="off",this.placeholder="Ask a question...",this.label="AI Assistant",this._isModalFullscreen=!1,v(this,p,S())}updated(){c(this,p).value&&this._isModalFullscreen!==c(this,p).value.fullscreen&&(this._isModalFullscreen=c(this,p).value.fullscreen??!1)}render(){return f`
      ${D(this.expanded,()=>f`
          <forge-ai-modal
            ${I(c(this,p))}
            ?open=${this.expanded}
            label=${this.label}
            @forge-ai-modal-close=${d(this,o,A)}
            @forge-ai-modal-fullscreen-change=${d(this,o,w)}>
            ${c(this,o,_)}
          </forge-ai-modal>
        `,()=>f`
          <forge-ai-gradient-container variant=${this.gradientVariant}>
            ${c(this,o,_)}
          </forge-ai-gradient-container>
        `)}
    `}expand(){this.expanded||(this.expanded=!0,d(this,o,m).call(this,"forge-ai-embedded-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,d(this,o,m).call(this,"forge-ai-embedded-chat-collapse"))}};p=new WeakMap;o=new WeakSet;_=function(){return f`
      <forge-ai-chatbot
        .adapter=${this.adapter}
        thread-id=${F(this.threadId)}
        file-upload=${this.fileUpload}
        placeholder=${this.placeholder}
        .suggestions=${this.suggestions}
        ?show-minimize-button=${this.expanded}
        minimize-icon="default"
        ?expanded=${this.expanded}
        @forge-ai-chatbot-expand=${d(this,o,y)}
        @forge-ai-chatbot-minimize=${d(this,o,C)}>
        <slot name="header-title" slot="header-title"></slot>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
      </forge-ai-chatbot>
    `};y=function(){this.expanded=!this.expanded,this.expanded?d(this,o,m).call(this,"forge-ai-embedded-chat-expand"):d(this,o,m).call(this,"forge-ai-embedded-chat-collapse")};C=function(){this.collapse()};A=function(){this.expanded&&this.collapse()};w=function(e){this._isModalFullscreen=e.detail.isFullscreen};m=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};i.styles=E(P);n([s({type:Boolean})],i.prototype,"expanded",2);n([s({attribute:"gradient-variant"})],i.prototype,"gradientVariant",2);n([s({attribute:!1})],i.prototype,"adapter",2);n([s({attribute:"thread-id"})],i.prototype,"threadId",2);n([s({attribute:"file-upload"})],i.prototype,"fileUpload",2);n([s()],i.prototype,"placeholder",2);n([s()],i.prototype,"label",2);n([s({attribute:!1})],i.prototype,"suggestions",2);n([T()],i.prototype,"_isModalFullscreen",2);i=n([O(k)],i);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,W="forge-ai-embedded-chat",q={title:"AI Components/Form Factors/Embedded",component:W,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},expanded:{control:{type:"boolean"},description:"Controls whether the modal view is open when expanded"},gradientVariant:{control:{type:"select"},options:["low","medium","high"],description:"Controls the gradient variant applied to the container"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"},label:{control:"text",description:"Accessible label announced by screen readers when the modal is expanded"}},args:{expanded:!1,gradientVariant:"medium",fileUpload:"off",placeholder:"Ask a question...",label:"AI Assistant"},render:e=>{const t=new U({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return f`
      <div style="max-width: 800px; margin: 0 auto;">
        <h2>AI Embedded Chat Demo</h2>
        <p>This form factor embeds ai-chatbot within ai-gradient-container for inline page usage.</p>
        <p>Try sending messages or clicking the expand button to view in fullscreen modal.</p>

        <forge-ai-embedded-chat
          .adapter=${t}
          gradient-variant=${e.gradientVariant}
          file-upload=${e.fileUpload}
          placeholder=${e.placeholder}
          label=${e.label}
          @forge-ai-embedded-chat-expand=${r("forge-ai-embedded-chat-expand")}
          @forge-ai-embedded-chat-collapse=${r("forge-ai-embedded-chat-collapse")}
          @forge-ai-chatbot-connected=${r("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${r("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${r("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${r("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${r("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${r("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${r("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${r("forge-ai-chatbot-info")}>
        </forge-ai-embedded-chat>
      </div>
    `}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const B=["Demo"],ae=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{ae as A};
