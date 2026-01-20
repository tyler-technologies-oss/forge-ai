import{r as w,i as A,x as g}from"./iframe-D5kciGQW.js";import{t as O}from"./custom-element-UsVr97OX.js";import{n as _}from"./property-DE-Wz1R-.js";import{r as S}from"./state-CjHMRjfJ.js";import{n as F,e as T}from"./ref-BGBwsW_C.js";import"./ai-dialog-C8Hib2T_.js";import"./ai-fab-Dp_8TRDy.js";import{M as D}from"./mock-adapter-DPRgB_9-.js";const M=":host{display:block}";var z=Object.defineProperty,P=Object.getOwnPropertyDescriptor,b=e=>{throw TypeError(e)},m=(e,t,o,c)=>{for(var l=c>1?void 0:c?P(t,o):t,p=e.length-1,s;p>=0;p--)(s=e[p])&&(l=(c?s(t,o,l):s(l))||l);return c&&l&&z(t,o,l),l},v=(e,t,o)=>t.has(e)||b("Cannot "+o),I=(e,t,o)=>(v(e,t,"read from private field"),o?o.call(e):t.get(e)),u=(e,t,o)=>t.has(e)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),i=(e,t,o)=>(v(e,t,"access private method"),o),x,a,$,y,C,E,r;const k="forge-ai-floating-chat";let h=class extends A{constructor(){super(...arguments),u(this,a),this.open=!1,this.expanded=!1,this._userExpanded=!1,u(this,x,T())}render(){return g`
      <forge-ai-dialog
        ${F(I(this,x))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${i(this,a,$)}
        @forge-ai-dialog-close=${i(this,a,E)}>
        <slot
          @forge-ai-chatbot-expand=${i(this,a,y)}
          @forge-ai-chatbot-minimize=${i(this,a,C)}></slot>
      </forge-ai-dialog>
    `}show(){this.open=!0,i(this,a,r).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,i(this,a,r).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,i(this,a,r).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,this._userExpanded=!0,i(this,a,r).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,this._userExpanded=!1,i(this,a,r).call(this,"forge-ai-floating-chat-collapse"))}};x=new WeakMap;a=new WeakSet;$=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,i(this,a,r).call(this,"forge-ai-floating-chat-expand")):!t&&this.expanded&&!this._userExpanded&&(this.expanded=!1,i(this,a,r).call(this,"forge-ai-floating-chat-collapse"))};y=function(){this.expanded=!this.expanded,this._userExpanded=this.expanded,this.expanded?i(this,a,r).call(this,"forge-ai-floating-chat-expand"):i(this,a,r).call(this,"forge-ai-floating-chat-collapse")};C=function(){this.close()};E=function(){this.open&&this.close()};r=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};h.styles=w(M);m([_({type:Boolean})],h.prototype,"open",2);m([_({type:Boolean})],h.prototype,"expanded",2);m([S()],h.prototype,"_userExpanded",2);h=m([O(k)],h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,q="forge-ai-floating-chat",B={title:"AI Components/Form Factors/Floating",component:q,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!1,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new D({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=s=>{n("forge-ai-floating-chat-expand")(s);const d=s.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!0)},c=s=>{n("forge-ai-floating-chat-collapse")(s);const d=s.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!1)},l=g`
      <forge-ai-floating-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-floating-chat-open=${n("forge-ai-floating-chat-open")}
        @forge-ai-floating-chat-close=${n("forge-ai-floating-chat-close")}
        @forge-ai-floating-chat-expand=${o}
        @forge-ai-floating-chat-collapse=${c}>
        <forge-ai-chatbot
          .adapter=${t}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="default"
          @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${n("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${n("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${n("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${n("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${n("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${n("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${n("forge-ai-chatbot-info")}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `,p=g`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return g`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${p} ${l}
      </div>
    `}},f={};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};const U=["Demo"],H=Object.freeze(Object.defineProperty({__proto__:null,Demo:f,__namedExportsOrder:U,default:B},Symbol.toStringTag,{value:"Module"}));export{H as A};
