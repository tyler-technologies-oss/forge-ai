import{r as S,i as T,x as m}from"./iframe-GiqNzQun.js";import{t as D}from"./custom-element-UsVr97OX.js";import{n as y}from"./property-gC0ztlDB.js";import{r as z}from"./base-BH6EXoOn.js";import{n as F,e as I}from"./ref-CJyPIwcc.js";import"./ai-dialog-ohl40KLh.js";import"./ai-fab-DLVaavar.js";import"./ai-disclaimer-y5bL-bcP.js";import{M}from"./mock-adapter-uhjSnHDA.js";const q=":host{display:block}::slotted(forge-ai-chatbot){border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}";var O=Object.defineProperty,k=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},u=(e,t,r,h)=>{for(var c=h>1?void 0:h?k(t,r):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(c=(h?a(t,r,c):a(c))||c);return h&&c&&O(t,r,c),c},E=(e,t,r)=>t.has(e)||$("Cannot "+r),B=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),v=(e,t,r)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),s=(e,t,r)=>(E(e,t,"access private method"),r),x,n,_,w,C,A,l;const P="forge-ai-floating-chat";let f=class extends T{constructor(){super(...arguments),v(this,n),this.open=!1,this.expanded=!1,this._userExpanded=!1,v(this,x,I())}render(){return m`
      <forge-ai-dialog
        ${F(B(this,x))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${s(this,n,_)}
        @forge-ai-dialog-close=${s(this,n,A)}>
        <slot
          @forge-ai-chatbot-expand=${s(this,n,w)}
          @forge-ai-chatbot-minimize=${s(this,n,C)}></slot>
      </forge-ai-dialog>
    `}show(){this.open=!0,s(this,n,l).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,s(this,n,l).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,s(this,n,l).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,this._userExpanded=!0,s(this,n,l).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,this._userExpanded=!1,s(this,n,l).call(this,"forge-ai-floating-chat-collapse"))}};x=new WeakMap;n=new WeakSet;_=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,s(this,n,l).call(this,"forge-ai-floating-chat-expand")):!t&&this.expanded&&!this._userExpanded&&(this.expanded=!1,s(this,n,l).call(this,"forge-ai-floating-chat-collapse"))};w=function(){this.expanded=!this.expanded,this._userExpanded=this.expanded,this.expanded?s(this,n,l).call(this,"forge-ai-floating-chat-expand"):s(this,n,l).call(this,"forge-ai-floating-chat-collapse")};C=function(){this.close()};A=function(){this.open&&this.close()};l=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};f.styles=S(q);u([y({type:Boolean})],f.prototype,"open",2);u([y({type:Boolean})],f.prototype,"expanded",2);u([z()],f.prototype,"_userExpanded",2);f=u([D(P)],f);const{action:i}=__STORYBOOK_MODULE_ACTIONS__,W="forge-ai-floating-chat",L={title:"AI Components/Form Factors/Floating",component:W,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!1,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new M({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=a=>{i("forge-ai-floating-chat-expand")(a);const d=a.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!0)},h=a=>{i("forge-ai-floating-chat-collapse")(a);const d=a.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!1)},c=m`
      <forge-ai-floating-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-floating-chat-open=${i("forge-ai-floating-chat-open")}
        @forge-ai-floating-chat-close=${i("forge-ai-floating-chat-close")}
        @forge-ai-floating-chat-expand=${r}
        @forge-ai-floating-chat-collapse=${h}>
        <forge-ai-chatbot
          .adapter=${t}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="default"
          @forge-ai-chatbot-connected=${i("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${i("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${i("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${i("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${i("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${i("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${i("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${i("forge-ai-chatbot-info")}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `,o=m`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return m`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${o} ${c}
      </div>
    `}},p={},g={args:{open:!0},render:function(e){const t=o=>{i("forge-ai-disclaimer-agree")(o);const a=o.target?.closest("forge-ai-floating-chat"),d=a?.querySelector("forge-ai-disclaimer");if(d&&a){d.remove();const b=document.createElement("forge-ai-chatbot");b.setAttribute("show-minimize-button",""),a.appendChild(b)}},r=o=>{i("forge-ai-disclaimer-disagree")(o),o.target?.closest("forge-ai-floating-chat")?.close()},h=o=>{i("forge-ai-floating-chat-expand")(o);const a=o.target.querySelector("forge-ai-chatbot");a&&(a.expanded=!0)},c=o=>{i("forge-ai-floating-chat-collapse")(o);const a=o.target.querySelector("forge-ai-chatbot");a&&(a.expanded=!1)};return m`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Disclaimer</h2>
          <p>
            This example shows a disclaimer in the default slot. Click "Agree" to show the chatbot, or "Disagree" to
            close the dialog.
          </p>
        </div>
        <forge-ai-floating-chat
          ?open=${e.open}
          ?expanded=${e.expanded}
          @forge-ai-floating-chat-open=${i("forge-ai-floating-chat-open")}
          @forge-ai-floating-chat-close=${i("forge-ai-floating-chat-close")}
          @forge-ai-floating-chat-expand=${h}
          @forge-ai-floating-chat-collapse=${c}>
          <forge-ai-disclaimer
            @forge-ai-disclaimer-agree=${t}
            @forge-ai-disclaimer-disagree=${r}>
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="color: var(--mdc-theme-primary, #6200ee);">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h2>Welcome to AI Assistant</h2>
            <p>
              By using this AI assistant, you agree to our terms of service. This assistant is provided as-is without
              warranties of any kind.
            </p>
            <p>
              Your interactions may be used to improve the service. Please do not share sensitive or personal
              information.
            </p>
            <p>
              The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
              reliable sources.
            </p>
          </forge-ai-disclaimer>
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
        </forge-ai-fab>
      </div>
    `}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{}",...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: function (args) {
    const handleAgree = (e: Event) => {
      action('forge-ai-disclaimer-agree')(e);
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-floating-chat');
      const disclaimer = chatEl?.querySelector('forge-ai-disclaimer');
      if (disclaimer && chatEl) {
        disclaimer.remove();
        const chatbot = document.createElement('forge-ai-chatbot') as any;
        chatbot.setAttribute('show-minimize-button', '');
        chatEl.appendChild(chatbot);
      }
    };
    const handleDisagree = (e: Event) => {
      action('forge-ai-disclaimer-disagree')(e);
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-floating-chat');
      chatEl?.close();
    };
    const handleExpand = (e: Event) => {
      action('forge-ai-floating-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };
    const handleCollapse = (e: Event) => {
      action('forge-ai-floating-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };
    return html\`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Disclaimer</h2>
          <p>
            This example shows a disclaimer in the default slot. Click "Agree" to show the chatbot, or "Disagree" to
            close the dialog.
          </p>
        </div>
        <forge-ai-floating-chat
          ?open=\${args.open}
          ?expanded=\${args.expanded}
          @forge-ai-floating-chat-open=\${action('forge-ai-floating-chat-open')}
          @forge-ai-floating-chat-close=\${action('forge-ai-floating-chat-close')}
          @forge-ai-floating-chat-expand=\${handleExpand}
          @forge-ai-floating-chat-collapse=\${handleCollapse}>
          <forge-ai-disclaimer
            @forge-ai-disclaimer-agree=\${handleAgree}
            @forge-ai-disclaimer-disagree=\${handleDisagree}>
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="color: var(--mdc-theme-primary, #6200ee);">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <h2>Welcome to AI Assistant</h2>
            <p>
              By using this AI assistant, you agree to our terms of service. This assistant is provided as-is without
              warranties of any kind.
            </p>
            <p>
              Your interactions may be used to improve the service. Please do not share sensitive or personal
              information.
            </p>
            <p>
              The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
              reliable sources.
            </p>
          </forge-ai-disclaimer>
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=\${() => {
      const chatEl = document.querySelector('forge-ai-floating-chat');
      chatEl?.show();
    }}>
        </forge-ai-fab>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};const H=["Demo","WithDisclaimer"],Q=Object.freeze(Object.defineProperty({__proto__:null,Demo:p,WithDisclaimer:g,__namedExportsOrder:H,default:L},Symbol.toStringTag,{value:"Module"}));export{Q as A};
