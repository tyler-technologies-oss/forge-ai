import{r as A,i as E,x as g}from"./iframe-DNPZiRV8.js";import{t as O}from"./custom-element-UsVr97OX.js";import{n as b}from"./property-_rIcp3E4.js";import{n as S,e as F}from"./ai-modal-BVxB8zNe.js";import"./ai-dialog-DUo7NMf_.js";import"./ai-fab-DrZJNqmJ.js";import{M as T}from"./mock-adapter-_zUjDDpK.js";const D=":host{display:block}";var M=Object.defineProperty,z=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},x=(e,t,o,c)=>{for(var r=c>1?void 0:c?z(t,o):t,h=e.length-1,s;h>=0;h--)(s=e[h])&&(r=(c?s(t,o,r):s(r))||r);return c&&r&&M(t,o,r),r},v=(e,t,o)=>t.has(e)||_("Cannot "+o),P=(e,t,o)=>(v(e,t,"read from private field"),o?o.call(e):t.get(e)),u=(e,t,o)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),i=(e,t,o)=>(v(e,t,"access private method"),o),m,a,$,y,C,w,l;const I="forge-ai-floating-chat";let f=class extends E{constructor(){super(...arguments),u(this,a),this.open=!1,this.expanded=!1,u(this,m,F())}render(){return g`
      <forge-ai-dialog
        ${S(P(this,m))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${i(this,a,$)}
        @forge-ai-dialog-close=${i(this,a,w)}>
        <slot
          @forge-ai-chatbot-expand=${i(this,a,y)}
          @forge-ai-chatbot-minimize=${i(this,a,C)}></slot>
      </forge-ai-dialog>
    `}show(){this.open=!0,i(this,a,l).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,i(this,a,l).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,i(this,a,l).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,i(this,a,l).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,i(this,a,l).call(this,"forge-ai-floating-chat-collapse"))}};m=new WeakMap;a=new WeakSet;$=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,i(this,a,l).call(this,"forge-ai-floating-chat-expand")):!t&&this.expanded&&(this.expanded=!1,i(this,a,l).call(this,"forge-ai-floating-chat-collapse"))};y=function(){this.expanded=!this.expanded,this.expanded?i(this,a,l).call(this,"forge-ai-floating-chat-expand"):i(this,a,l).call(this,"forge-ai-floating-chat-collapse")};C=function(){this.close()};w=function(){this.open&&this.close()};l=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};f.styles=A(D);x([b({type:Boolean})],f.prototype,"open",2);x([b({type:Boolean})],f.prototype,"expanded",2);f=x([O(I)],f);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,k="forge-ai-floating-chat",q={title:"AI Components/Form Factors/Floating",component:k,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"},fileUpload:{control:{type:"select"},options:["enabled","disabled"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!1,expanded:!1,fileUpload:"disabled",placeholder:"Ask a question..."},render:e=>{const t=new T({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=s=>{n("forge-ai-floating-chat-expand")(s);const p=s.target.querySelector("forge-ai-chatbot");p&&(p.expanded=!0)},c=s=>{n("forge-ai-floating-chat-collapse")(s);const p=s.target.querySelector("forge-ai-chatbot");p&&(p.expanded=!1)},r=g`
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
    `,h=g`
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
        ${h} ${r}
      </div>
    `}},d={};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};const B=["Demo"],Y=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{Y as A};
