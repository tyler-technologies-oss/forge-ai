import{r as F,i as q,x as p}from"./iframe-B-4WNlme.js";import{t as M}from"./custom-element-UsVr97OX.js";import{n as C}from"./property-D_pGc9VD.js";import{r as H}from"./query-B8RXkDXg.js";import{n as W,e as B}from"./ref-CNt6LH5j.js";import"./ai-dialog-DuQvLFOt.js";import"./ai-fab-D7Rv3E-8.js";import"./ai-disclaimer-C5hZqyzO.js";import{M as S}from"./mock-adapter-BpXd5o7R.js";import{s as L,c as A}from"./canvas-table-tool-B8CA6B7I.js";const P=":host{display:block}::slotted(forge-ai-chatbot){border-radius:calc(var(--forge-shape-large, 8px) * var(--forge-shape-factor, 1))}";var U=Object.defineProperty,N=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},w=(e,a,o,h)=>{for(var s=h>1?void 0:h?N(a,o):a,n=e.length-1,i;n>=0;n--)(i=e[n])&&(s=(h?i(a,o,s):i(s))||s);return h&&s&&U(a,o,s),s},D=(e,a,o)=>a.has(e)||T("Cannot "+o),Q=(e,a,o)=>(D(e,a,"read from private field"),o?o.call(e):a.get(e)),E=(e,a,o)=>a.has(e)?T("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,o),c=(e,a,o)=>(D(e,a,"access private method"),o),y,r,_,I,O,z,d;const G="forge-ai-floating-chat";let m=class extends q{constructor(){super(...arguments),E(this,r),this.open=!1,this.expanded=!1,this.label="AI Assistant",this._userExpanded=!1,E(this,y,B())}render(){return p`
      <forge-ai-dialog
        ${W(Q(this,y))}
        ?open=${this.open}
        ?expanded=${this.expanded}
        label=${this.label}
        @forge-ai-dialog-fullscreen-change=${c(this,r,_)}
        @forge-ai-dialog-close=${c(this,r,z)}>
        <slot
          @forge-ai-chatbot-expand=${c(this,r,I)}
          @forge-ai-chatbot-minimize=${c(this,r,O)}></slot>
      </forge-ai-dialog>
    `}show(){this.open=!0,c(this,r,d).call(this,"forge-ai-floating-chat-open")}close(){this.expanded&&(this.expanded=!1,c(this,r,d).call(this,"forge-ai-floating-chat-collapse")),this.open=!1,c(this,r,d).call(this,"forge-ai-floating-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,this._userExpanded=!0,c(this,r,d).call(this,"forge-ai-floating-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,this._userExpanded=!1,c(this,r,d).call(this,"forge-ai-floating-chat-collapse"))}};y=new WeakMap;r=new WeakSet;_=function(e){const{isFullscreen:a}=e.detail;a&&!this.expanded?(this.expanded=!0,c(this,r,d).call(this,"forge-ai-floating-chat-expand")):!a&&this.expanded&&!this._userExpanded&&(this.expanded=!1,c(this,r,d).call(this,"forge-ai-floating-chat-collapse"))};I=function(){this.expanded=!this.expanded,this._userExpanded=this.expanded,this.expanded?c(this,r,d).call(this,"forge-ai-floating-chat-expand"):c(this,r,d).call(this,"forge-ai-floating-chat-collapse")};O=function(){this.close()};z=function(){this.open&&this.close()};d=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};m.styles=F(P);w([C({type:Boolean})],m.prototype,"open",2);w([C({type:Boolean})],m.prototype,"expanded",2);w([C({type:String})],m.prototype,"label",2);w([H()],m.prototype,"_userExpanded",2);m=w([M(G)],m);const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Y="forge-ai-floating-chat",R={title:"AI Components/Form Factors/Floating",component:Y,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"},label:{control:"text",description:"Accessible label announced by screen readers when the dialog opens"}},args:{open:!1,expanded:!1,fileUpload:"off",placeholder:"Ask a question...",label:"AI Assistant"},render:e=>{const a=new S({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=l=>{t("forge-ai-floating-chat-expand")(l);const g=l.target.querySelector("forge-ai-chatbot");g&&(g.expanded=!0)},s=l=>{t("forge-ai-floating-chat-collapse")(l);const g=l.target.querySelector("forge-ai-chatbot");g&&(g.expanded=!1)},n=p`
      <forge-ai-floating-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        label=${e.label}
        @forge-ai-floating-chat-open=${t("forge-ai-floating-chat-open")}
        @forge-ai-floating-chat-close=${t("forge-ai-floating-chat-close")}
        @forge-ai-floating-chat-expand=${h}
        @forge-ai-floating-chat-collapse=${s}>
        <forge-ai-chatbot
          .adapter=${a}
          .agentInfo=${o}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          show-thread-rename
          show-thread-delete
          minimize-icon="default"
          @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `,i=p`
      <forge-ai-fab
        style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
        @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
      </forge-ai-fab>
    `;return p`
      <div style="min-height: 300px;">
        <div>
          <h2>AI Floating Chat Demo</h2>
          <p>Click the FAB in the bottom right corner to open the AI chat.</p>
          <p>This form factor positions a slotted chatbot in a floating dialog.</p>
          <p>Try sending messages, expanding the chat, or closing it.</p>
        </div>
        ${i} ${n}
      </div>
    `}},v={},x={args:{open:!0},render:function(e){const a=n=>{t("forge-ai-disclaimer-agree")(n);const i=n.target?.closest("forge-ai-floating-chat"),l=i?.querySelector("forge-ai-disclaimer");if(l&&i){l.remove();const g=document.createElement("forge-ai-chatbot");g.setAttribute("show-minimize-button",""),i.appendChild(g)}},o=n=>{t("forge-ai-disclaimer-disagree")(n),n.target?.closest("forge-ai-floating-chat")?.close()},h=n=>{t("forge-ai-floating-chat-expand")(n);const i=n.target.querySelector("forge-ai-chatbot");i&&(i.expanded=!0)},s=n=>{t("forge-ai-floating-chat-collapse")(n);const i=n.target.querySelector("forge-ai-chatbot");i&&(i.expanded=!1)};return p`
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
          @forge-ai-floating-chat-expand=${h}
          @forge-ai-floating-chat-collapse=${s}>
          <forge-ai-disclaimer
            @forge-ai-disclaimer-agree=${a}
            @forge-ai-disclaimer-disagree=${o}>
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
    `}},$={args:{open:!0},render:function(e){const a=new S({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],s=f=>{t("forge-ai-floating-chat-expand")(f);const u=f.target.querySelector("forge-ai-chatbot");u&&(u.expanded=!0)},n=f=>{t("forge-ai-floating-chat-collapse")(f);const u=f.target.querySelector("forge-ai-chatbot");u&&(u.expanded=!1)},i=t("forge-ai-chatbot-thread-select"),l=t("forge-ai-chatbot-new-chat"),g=t("forge-ai-chatbot-conversations-open"),k=t("forge-ai-chatbot-conversations-close");return p`
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
          @forge-ai-floating-chat-expand=${s}
          @forge-ai-floating-chat-collapse=${n}>
          <forge-ai-chatbot
            .adapter=${a}
            .agentInfo=${o}
            .threads=${h}
            file-upload=${e.fileUpload}
            ?expanded=${e.expanded}
            placeholder=${e.placeholder}
            show-expand-button
            show-minimize-button
            show-conversations-button
            show-thread-rename
            show-thread-delete
            minimize-icon="default"
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}
            @forge-ai-chatbot-thread-select=${f=>i(f.detail)}
            @forge-ai-chatbot-new-chat=${l}
            @forge-ai-chatbot-conversations-open=${g}
            @forge-ai-chatbot-conversations-close=${k}>
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
          </forge-ai-chatbot>
        </forge-ai-floating-chat>
        <forge-ai-fab
          style="position: fixed; bottom: 24px; right: 24px; z-index: 1000;"
          @click=${()=>{document.querySelector("forge-ai-floating-chat")?.show()}}>
        </forge-ai-fab>
      </div>
    `}},b={args:{open:!0},render:function(e){const a=new S({simulateStreaming:!0,simulateTools:!0,streamingDelay:30,responseDelay:400,tools:[A],simulatedToolCall:{name:A.name,args:L}});return p`
      <forge-ai-floating-chat
        ?open=${e.open}
        @forge-ai-floating-chat-close=${t("forge-ai-floating-chat-close")}>
        <forge-ai-chatbot
          .adapter=${a}
          .suggestions=${[{text:"Show me Q3 sales by region",value:"Show me Q3 sales by region"}]}
          show-minimize-button
          show-expand-button
          @forge-ai-chatbot-canvas-open=${o=>t("forge-ai-chatbot-canvas-open")(o.detail)}
          @forge-ai-chatbot-canvas-close=${t("forge-ai-chatbot-canvas-close")}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    `}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"{}",...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    const agentInfo: AgentInfo = {
      name: 'Staff Assistant',
      version: '1.3.5',
      identifier: 'agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0',
      threadId: '7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf'
    };
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
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
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
            .agentInfo=\${agentInfo}
            .threads=\${threads}
            file-upload=\${args.fileUpload}
            ?expanded=\${args.expanded}
            placeholder=\${args.placeholder}
            show-expand-button
            show-minimize-button
            show-conversations-button
            show-thread-rename
            show-thread-delete
            minimize-icon="default"
            @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
            @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
            @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
            @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
            @forge-ai-chatbot-tool-call=\${action('forge-ai-chatbot-tool-call')}
            @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}
            @forge-ai-chatbot-clear=\${action('forge-ai-chatbot-clear')}
            @forge-ai-chatbot-info=\${action('forge-ai-chatbot-info')}
            @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => onThreadSelect(e.detail)}
            @forge-ai-chatbot-new-chat=\${onNewChat}
            @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
            @forge-ai-chatbot-conversations-close=\${onConversationsClose}>
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
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
}`,...$.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: function (args) {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: true,
      streamingDelay: 30,
      responseDelay: 400,
      tools: [canvasTableTool],
      simulatedToolCall: {
        name: canvasTableTool.name,
        args: salesTableArgs
      }
    });
    return html\`
      <forge-ai-floating-chat
        ?open=\${args.open}
        @forge-ai-floating-chat-close=\${action('forge-ai-floating-chat-close')}>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${[{
      text: 'Show me Q3 sales by region',
      value: 'Show me Q3 sales by region'
    }]}
          show-minimize-button
          show-expand-button
          @forge-ai-chatbot-canvas-open=\${(evt: CustomEvent) => action('forge-ai-chatbot-canvas-open')(evt.detail)}
          @forge-ai-chatbot-canvas-close=\${action('forge-ai-chatbot-canvas-close')}>
        </forge-ai-chatbot>
      </forge-ai-floating-chat>
    \`;
  }
}`,...b.parameters?.docs?.source},description:{story:"The tool shows an artifact card in the thread; opening it presents the full table in a modal over the chat.",...b.parameters?.docs?.description}}};const V=["Demo","WithDisclaimer","WithConversationHistory","WithArtifactCanvas"],ie=Object.freeze(Object.defineProperty({__proto__:null,Demo:v,WithArtifactCanvas:b,WithConversationHistory:$,WithDisclaimer:x,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{ie as A,b as W};
