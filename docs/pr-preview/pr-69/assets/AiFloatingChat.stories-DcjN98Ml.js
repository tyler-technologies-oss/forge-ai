import{r as O,i as z,x as f}from"./iframe-DmoIR2iB.js";import{t as F}from"./custom-element-UsVr97OX.js";import{n as C}from"./property-D6A382qA.js";import{r as q}from"./class-map-BU13AwkM.js";import{n as M,e as k}from"./ref-B-kmAuE0.js";import"./ai-dialog-DTbFHr0E.js";import"./ai-fab-Bmw6e-QL.js";import"./ai-disclaimer-DV6J_S9g.js";import{M as S}from"./mock-adapter-uhjSnHDA.js";const H=":host{display:block}::slotted(forge-ai-chatbot){border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}";var W=Object.defineProperty,B=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},$=(e,a,i,l)=>{for(var s=l>1?void 0:l?B(a,i):a,n=e.length-1,o;n>=0;n--)(o=e[n])&&(s=(l?o(a,i,s):o(s))||s);return l&&s&&W(a,i,s),s},A=(e,a,i)=>a.has(e)||E("Cannot "+i),L=(e,a,i)=>(A(e,a,"read from private field"),i?i.call(e):a.get(e)),y=(e,a,i)=>a.has(e)?E("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,i),c=(e,a,i)=>(A(e,a,"access private method"),i),w,r,D,_,T,I,g;const P="forge-ai-floating-chat";let p=class extends z{constructor(){super(...arguments),y(this,r),this.open=!1,this.expanded=!1,this._userExpanded=!1,y(this,w,k())}render(){return f`
      <forge-ai-dialog
        ${M(L(this,w))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        @forge-ai-dialog-fullscreen-change=${c(this,r,D)}
        @forge-ai-dialog-close=${c(this,r,I)}>
        <slot
          @forge-ai-chatbot-expand=${c(this,r,_)}
          @forge-ai-chatbot-minimize=${c(this,r,T)}></slot>
      </forge-ai-dialog>
    `}show(){this.open=!0,c(this,r,g).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,c(this,r,g).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,c(this,r,g).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,this._userExpanded=!0,c(this,r,g).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,this._userExpanded=!1,c(this,r,g).call(this,"forge-ai-floating-chat-collapse"))}};w=new WeakMap;r=new WeakSet;D=function(e){const{isFullscreen:a}=e.detail;a&&!this.expanded?(this.expanded=!0,c(this,r,g).call(this,"forge-ai-floating-chat-expand")):!a&&this.expanded&&!this._userExpanded&&(this.expanded=!1,c(this,r,g).call(this,"forge-ai-floating-chat-collapse"))};_=function(){this.expanded=!this.expanded,this._userExpanded=this.expanded,this.expanded?c(this,r,g).call(this,"forge-ai-floating-chat-expand"):c(this,r,g).call(this,"forge-ai-floating-chat-collapse")};T=function(){this.close()};I=function(){this.open&&this.close()};g=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};p.styles=O(H);$([C({type:Boolean})],p.prototype,"open",2);$([C({type:Boolean})],p.prototype,"expanded",2);$([q()],p.prototype,"_userExpanded",2);p=$([F(P)],p);const{action:t}=__STORYBOOK_MODULE_ACTIONS__,U="forge-ai-floating-chat",N={title:"AI Components/Form Factors/Floating",component:U,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!1,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const a=new S({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=o=>{t("forge-ai-floating-chat-expand")(o);const h=o.target.querySelector("forge-ai-chatbot");h&&(h.expanded=!0)},l=o=>{t("forge-ai-floating-chat-collapse")(o);const h=o.target.querySelector("forge-ai-chatbot");h&&(h.expanded=!1)},s=f`
      <forge-ai-floating-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-floating-chat-open=${t("forge-ai-floating-chat-open")}
        @forge-ai-floating-chat-close=${t("forge-ai-floating-chat-close")}
        @forge-ai-floating-chat-expand=${i}
        @forge-ai-floating-chat-collapse=${l}>
        <forge-ai-chatbot
          .adapter=${a}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          show-conversation-rename
          show-conversation-delete
          minimize-icon="default"
          @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `,n=f`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return f`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${n} ${s}
      </div>
    `}},b={},u={args:{open:!0},render:function(e){const a=n=>{t("forge-ai-disclaimer-agree")(n);const o=n.target?.closest("forge-ai-floating-chat"),h=o?.querySelector("forge-ai-disclaimer");if(h&&o){h.remove();const x=document.createElement("forge-ai-chatbot");x.setAttribute("show-minimize-button",""),o.appendChild(x)}},i=n=>{t("forge-ai-disclaimer-disagree")(n),n.target?.closest("forge-ai-floating-chat")?.close()},l=n=>{t("forge-ai-floating-chat-expand")(n);const o=n.target.querySelector("forge-ai-chatbot");o&&(o.expanded=!0)},s=n=>{t("forge-ai-floating-chat-collapse")(n);const o=n.target.querySelector("forge-ai-chatbot");o&&(o.expanded=!1)};return f`
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
          @forge-ai-floating-chat-open=${t("forge-ai-floating-chat-open")}
          @forge-ai-floating-chat-close=${t("forge-ai-floating-chat-close")}
          @forge-ai-floating-chat-expand=${l}
          @forge-ai-floating-chat-collapse=${s}>
          <forge-ai-disclaimer
            @forge-ai-disclaimer-agree=${a}
            @forge-ai-disclaimer-disagree=${i}>
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
    `}},v={args:{open:!0},render:function(e){const a=new S({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],l=d=>{t("forge-ai-floating-chat-expand")(d);const m=d.target.querySelector("forge-ai-chatbot");m&&(m.expanded=!0)},s=d=>{t("forge-ai-floating-chat-collapse")(d);const m=d.target.querySelector("forge-ai-chatbot");m&&(m.expanded=!1)},n=t("forge-ai-chatbot-conversation-select"),o=t("forge-ai-chatbot-new-chat"),h=t("forge-ai-chatbot-conversations-open"),x=t("forge-ai-chatbot-conversations-close");return f`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Conversation History</h2>
          <p>
            Click the FAB in the bottom right to open the chat. The hamburger icon in the header opens the conversations
            panel which slides in from the left.
          </p>
          <p>Try selecting a conversation, searching, or starting a new chat.</p>
        </div>
        <forge-ai-floating-chat
          ?open=${e.open}
          ?expanded=${e.expanded}
          @forge-ai-floating-chat-open=${t("forge-ai-floating-chat-open")}
          @forge-ai-floating-chat-close=${t("forge-ai-floating-chat-close")}
          @forge-ai-floating-chat-expand=${l}
          @forge-ai-floating-chat-collapse=${s}>
          <forge-ai-chatbot
            .adapter=${a}
            .recentThreads=${i}
            file-upload=${e.fileUpload}
            ?expanded=${e.expanded}
            placeholder=${e.placeholder}
            show-expand-button
            show-minimize-button
            show-conversations-button
            show-conversation-rename
            show-conversation-delete
            minimize-icon="default"
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}
            @forge-ai-chatbot-conversation-select=${d=>n(d.detail)}
            @forge-ai-chatbot-new-chat=${o}
            @forge-ai-chatbot-conversations-open=${h}
            @forge-ai-chatbot-conversations-close=${x}>
          </forge-ai-chatbot>
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
        </forge-ai-fab>
      </div>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: function (args) {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads: Thread[] = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 3
    }, {
      id: 'thread-4',
      title: 'Lit reactive controllers explained',
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      messageCount: 12
    }, {
      id: 'thread-5',
      title: 'CSS Grid vs Flexbox comparison',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 6
    }];
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
    const onConversationSelect = action('forge-ai-chatbot-conversation-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    return html\`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat with Conversation History</h2>
          <p>
            Click the FAB in the bottom right to open the chat. The hamburger icon in the header opens the conversations
            panel which slides in from the left.
          </p>
          <p>Try selecting a conversation, searching, or starting a new chat.</p>
        </div>
        <forge-ai-floating-chat
          ?open=\${args.open}
          ?expanded=\${args.expanded}
          @forge-ai-floating-chat-open=\${action('forge-ai-floating-chat-open')}
          @forge-ai-floating-chat-close=\${action('forge-ai-floating-chat-close')}
          @forge-ai-floating-chat-expand=\${handleExpand}
          @forge-ai-floating-chat-collapse=\${handleCollapse}>
          <forge-ai-chatbot
            .adapter=\${adapter}
            .recentThreads=\${threads}
            file-upload=\${args.fileUpload}
            ?expanded=\${args.expanded}
            placeholder=\${args.placeholder}
            show-expand-button
            show-minimize-button
            show-conversations-button
            show-conversation-rename
            show-conversation-delete
            minimize-icon="default"
            @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
            @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-tool-call=\${action('forge-ai-chatbot-tool-call')}
            @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}
            @forge-ai-chatbot-clear=\${action('forge-ai-chatbot-clear')}
            @forge-ai-chatbot-info=\${action('forge-ai-chatbot-info')}
            @forge-ai-chatbot-conversation-select=\${(e: CustomEvent) => onConversationSelect(e.detail)}
            @forge-ai-chatbot-new-chat=\${onNewChat}
            @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
            @forge-ai-chatbot-conversations-close=\${onConversationsClose}>
          </forge-ai-chatbot>
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
}`,...v.parameters?.docs?.source}}};const G=["Demo","WithDisclaimer","WithConversationHistory"],ee=Object.freeze(Object.defineProperty({__proto__:null,Demo:b,WithConversationHistory:v,WithDisclaimer:u,__namedExportsOrder:G,default:N},Symbol.toStringTag,{value:"Module"}));export{ee as A};
