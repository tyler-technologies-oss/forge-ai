import{r as M,i as A,x as f}from"./iframe-B1aLlpbG.js";import{t as O}from"./custom-element-UsVr97OX.js";import{n as l}from"./property-DReUMbyh.js";import{r as T}from"./state-McuIGvPh.js";import{o as F}from"./if-defined-CGDSPTIk.js";import{n as S,e as D}from"./ref-bWtg7H3F.js";import{n as I}from"./when-CI7b_ccM.js";import"./ai-chatbot-BlbjaLJB.js";import"./ai-message-thread-CvNx8Hml.js";import"./utils-DYbogL2a.js";import"./ai-gradient-container-B13K3Euj.js";import"./ai-modal-sZnBk6KL.js";import{M as U}from"./mock-adapter-CJcooZGU.js";const P=":host{display:block}.ai-embedded-chat{display:contents}";var V=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},d=(e,t,a,g)=>{for(var s=g>1?void 0:g?z(t,a):t,u=e.length-1,b;u>=0;u--)(b=e[u])&&(s=(g?b(t,a,s):b(s))||s);return g&&s&&V(t,a,s),s},$=(e,t,a)=>t.has(e)||x("Cannot "+a),c=(e,t,a)=>($(e,t,"read from private field"),a?a.call(e):t.get(e)),v=(e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),n=(e,t,a)=>($(e,t,"access private method"),a),p,o,_,y,C,w,E,m;const k="forge-ai-embedded-chat";let i=class extends A{constructor(){super(...arguments),v(this,o),this.expanded=!1,this.gradientVariant="medium",this.fileUpload="off",this.placeholder="Ask a question...",this._isModalFullscreen=!1,v(this,p,D())}updated(){c(this,p).value&&this._isModalFullscreen!==c(this,p).value.fullscreen&&(this._isModalFullscreen=c(this,p).value.fullscreen??!1)}render(){return f`
      ${I(this.expanded,()=>f`
          <forge-ai-modal
            ${S(c(this,p))}
            ?open=${this.expanded}
            @forge-ai-modal-close=${n(this,o,w)}
            @forge-ai-modal-fullscreen-change=${n(this,o,E)}>
            ${c(this,o,_)}
          </forge-ai-modal>
        `,()=>f`
          <forge-ai-gradient-container variant=${this.gradientVariant}>
            ${c(this,o,_)}
          </forge-ai-gradient-container>
        `)}
    `}expand(){this.expanded||(this.expanded=!0,n(this,o,m).call(this,"forge-ai-embedded-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,n(this,o,m).call(this,"forge-ai-embedded-chat-collapse"))}};p=new WeakMap;o=new WeakSet;_=function(){return f`
      <forge-ai-chatbot
        .adapter=${this.adapter}
        thread-id=${F(this.threadId)}
        file-upload=${this.fileUpload}
        placeholder=${this.placeholder}
        .suggestions=${this.suggestions}
        show-expand-button
        ?show-minimize-button=${this.expanded}
        minimize-icon="default"
        ?expanded=${this.expanded}
        @forge-ai-chatbot-expand=${n(this,o,y)}
        @forge-ai-chatbot-minimize=${n(this,o,C)}>
        <slot name="header-title" slot="header-title"></slot>
        <slot name="empty-state-heading" slot="empty-state-heading"></slot>
      </forge-ai-chatbot>
    `};y=function(){this.expanded=!this.expanded,this.expanded?n(this,o,m).call(this,"forge-ai-embedded-chat-expand"):n(this,o,m).call(this,"forge-ai-embedded-chat-collapse")};C=function(){this.collapse()};w=function(){this.expanded&&this.collapse()};E=function(e){this._isModalFullscreen=e.detail.isFullscreen};m=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};i.styles=M(P);d([l({type:Boolean})],i.prototype,"expanded",2);d([l({attribute:"gradient-variant"})],i.prototype,"gradientVariant",2);d([l({attribute:!1})],i.prototype,"adapter",2);d([l({attribute:"thread-id"})],i.prototype,"threadId",2);d([l({attribute:"file-upload"})],i.prototype,"fileUpload",2);d([l()],i.prototype,"placeholder",2);d([l({attribute:!1})],i.prototype,"suggestions",2);d([T()],i.prototype,"_isModalFullscreen",2);i=d([O(k)],i);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,W="forge-ai-embedded-chat",q={title:"AI Components/Form Factors/Embedded",component:W,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},expanded:{control:{type:"boolean"},description:"Controls whether the modal view is open when expanded"},gradientVariant:{control:{type:"select"},options:["low","medium","high"],description:"Controls the gradient variant applied to the container"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{expanded:!1,gradientVariant:"medium",fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new U({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return f`
      <div style="max-width: 800px; margin: 0 auto;">
        <h2>AI Embedded Chat Demo</h2>
        <p>This form factor embeds ai-chatbot within ai-gradient-container for inline page usage.</p>
        <p>Try sending messages or clicking the expand button to view in fullscreen modal.</p>

        <forge-ai-embedded-chat
          .adapter=${t}
          ?expanded=${e.expanded}
          gradient-variant=${e.gradientVariant}
          file-upload=${e.fileUpload}
          placeholder=${e.placeholder}
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
    `}},h={};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{}",...h.parameters?.docs?.source}}};const B=["Demo"],te=Object.freeze(Object.defineProperty({__proto__:null,Demo:h,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{te as A};
