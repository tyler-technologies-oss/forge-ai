import{r as L,i as F,x as h}from"./iframe-DUFfrjrK.js";import{f as N,T as U,I as R,l as G,a as Y,m as V,n as K,o as j,p as J,q as Q}from"./scaffold-LOM6ekoX.js";import"./split-button-Bz4GmGbS.js";import{d as X,a as Z}from"./ai-sidebar-_eCCgOp7.js";import{d as ee}from"./index-nk3hrPdg.js";import{t as ae}from"./custom-element-UsVr97OX.js";import{n as D}from"./property-C6C7l_y-.js";import{n as E,e as _}from"./ref-BvXFy9vZ.js";import{n as te}from"./when-CI7b_ccM.js";import"./ai-modal-DBpvCLlB.js";import"./ai-button-Bn6t3APt.js";import"./ai-disclaimer-BFWHAk_w.js";import"./ai-chatbot-base-B2e_W2Kk.js";import"./ai-chatbot-C7xZMLgH.js";import"./ai-message-thread-Tj2y7BIc.js";import"./utils-B8dv6FBY.js";import{M as T}from"./mock-adapter-B6avymXj.js";function oe(){N(U)}const re=":host{display:block;height:100%}";var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},S=(e,t,i,l)=>{for(var c=l>1?void 0:l?ne(t,i):t,f=e.length-1,o;f>=0;f--)(o=e[f])&&(c=(l?o(t,i,c):o(c))||c);return l&&c&&ie(t,i,c),c},k=(e,t,i)=>t.has(e)||z("Cannot "+i),x=(e,t,i)=>(k(e,t,"read from private field"),i?i.call(e):t.get(e)),w=(e,t,i)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),s=(e,t,i)=>(k(e,t,"access private method"),i),A,I,C,r,O,M,q,H,P,W,d;const se="forge-ai-sidebar-chat";let g=class extends F{constructor(){super(...arguments),w(this,r),this.open=!1,this.expanded=!1,this.resizable=!0,w(this,A,_()),w(this,I,_()),w(this,C,h`
    <slot
      @forge-ai-chatbot-expand=${s(this,r,H)}
      @forge-ai-chatbot-minimize=${s(this,r,P)}></slot>
  `)}render(){return h`
      ${te(this.expanded,()=>h`
          <forge-ai-modal
            ${E(x(this,I))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${s(this,r,q)}
            @forge-ai-modal-close=${s(this,r,W)}>
            ${x(this,C)}
          </forge-ai-modal>
        `,()=>h`
          <forge-ai-sidebar
            ${E(x(this,A))}
            ?open=${this.open&&!this.expanded}
            ?resizable=${this.resizable}
            @forge-ai-sidebar-open=${s(this,r,O)}
            @forge-ai-sidebar-close=${s(this,r,M)}>
            ${x(this,C)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,s(this,r,d).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,s(this,r,d).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,s(this,r,d).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,s(this,r,d).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,s(this,r,d).call(this,"forge-ai-sidebar-chat-collapse"))}};A=new WeakMap;I=new WeakMap;C=new WeakMap;r=new WeakSet;O=function(){this.open=!0,s(this,r,d).call(this,"forge-ai-sidebar-chat-open")};M=function(){this.open=!1,s(this,r,d).call(this,"forge-ai-sidebar-chat-close")};q=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,s(this,r,d).call(this,"forge-ai-sidebar-chat-expand")):!t&&this.expanded&&(this.expanded=!1,s(this,r,d).call(this,"forge-ai-sidebar-chat-collapse"))};H=function(){this.expanded=!this.expanded,this.expanded?s(this,r,d).call(this,"forge-ai-sidebar-chat-expand"):s(this,r,d).call(this,"forge-ai-sidebar-chat-collapse")};P=function(){this.close()};W=function(){this.collapse()};d=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};g.styles=L(re);S([D({type:Boolean})],g.prototype,"open",2);S([D({type:Boolean})],g.prototype,"expanded",2);S([D({type:Boolean})],g.prototype,"resizable",2);g=S([ae(se)],g);const{action:a}=__STORYBOOK_MODULE_ACTIONS__;X();Z();ee();oe();R.define([G,Y,V,K,j,J,Q]);const ce="forge-ai-sidebar-chat",de={title:"AI Components/Form Factors/Sidebar",component:ce,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},resizable:{control:{type:"boolean"},description:"Enables sidebar resizing"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,resizable:!0,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new T({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},l=o=>{a("forge-ai-sidebar-chat-expand")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!1)},f=h`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        ?resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${l}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-chatbot
          .adapter=${t}
          .agentInfo=${i}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${a("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${a("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${a("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${a("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${a("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${a("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${a("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${a("forge-ai-chatbot-info")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
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

        <div slot="body-right">${f}</div>
      </forge-scaffold>
    `}},m={},u={args:{open:!0},render:function(e){const t=o=>{a("forge-ai-disclaimer-agree")(o);const n=o.target?.closest("forge-ai-sidebar-chat"),v=n?.querySelector("forge-ai-disclaimer");if(v&&n){v.remove();const $=document.createElement("forge-ai-chatbot");$.setAttribute("show-minimize-button",""),n.appendChild($)}},i=o=>{a("forge-ai-disclaimer-disagree")(o),o.target?.closest("forge-ai-sidebar-chat")?.close()},l=o=>{a("forge-ai-sidebar-chat-expand")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!1)},f=h`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        ?resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${l}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-disclaimer @forge-ai-disclaimer-agree=${t} @forge-ai-disclaimer-disagree=${i}>
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
            Your interactions may be used to improve the service. Please do not share sensitive or personal information.
          </p>
          <p>
            The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
            reliable sources.
          </p>
        </forge-ai-disclaimer>
      </forge-ai-sidebar-chat>
    `;return h`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Disclaimer"></forge-app-bar>

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
            <p>Demo of the AI Sidebar Chat with disclaimer.</p>
            <p>Click "Agree" to show the chatbot, or "Disagree" to close the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">${f}</div>
      </forge-scaffold>
    `}},y={args:{open:!0},render:function(e){const t=new T({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},l=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],c=p=>{a("forge-ai-sidebar-chat-expand")(p);const b=p.target.querySelector("forge-ai-chatbot");b&&(b.expanded=!0)},f=p=>{a("forge-ai-sidebar-chat-collapse")(p);const b=p.target.querySelector("forge-ai-chatbot");b&&(b.expanded=!1)},o=a("forge-ai-chatbot-conversation-select"),n=a("forge-ai-chatbot-new-chat"),v=a("forge-ai-chatbot-conversations-open"),$=a("forge-ai-chatbot-conversations-close"),B=h`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        ?resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${c}
        @forge-ai-sidebar-chat-collapse=${f}>
        <forge-ai-chatbot
          .adapter=${t}
          .agentInfo=${i}
          .recentThreads=${l}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
          show-conversation-rename
          show-conversation-delete
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${a("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${a("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${a("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${a("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${a("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${a("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${a("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${a("forge-ai-chatbot-info")}
          @forge-ai-chatbot-conversation-select=${p=>o(p.detail)}
          @forge-ai-chatbot-new-chat=${n}
          @forge-ai-chatbot-conversations-open=${v}
          @forge-ai-chatbot-conversations-close=${$}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return h`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Conversation History"></forge-app-bar>

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
            <p>Demo of the AI Sidebar Chat with conversation history.</p>
            <p>
              Click the hamburger icon in the chat header to view conversation history. The panel slides in from the
              left with a list of recent conversations.
            </p>
            <p>Try selecting a conversation, searching, or starting a new chat.</p>
          </forge-card>
        </main>

        <div slot="body-right">${B}</div>
      </forge-scaffold>
    `}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true
  },
  render: function (args) {
    const handleAgree = (e: Event) => {
      action('forge-ai-disclaimer-agree')(e);
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-sidebar-chat');
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
      const chatEl = (e.target as HTMLElement)?.closest('forge-ai-sidebar-chat');
      chatEl?.close();
    };
    const handleExpand = (e: Event) => {
      action('forge-ai-sidebar-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };
    const handleCollapse = (e: Event) => {
      action('forge-ai-sidebar-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };
    const sidebarChat = html\`
      <forge-ai-sidebar-chat
        ?open=\${args.open}
        ?expanded=\${args.expanded}
        ?resizable=\${args.resizable}
        @forge-ai-sidebar-chat-open=\${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-expand=\${handleExpand}
        @forge-ai-sidebar-chat-collapse=\${handleCollapse}>
        <forge-ai-disclaimer @forge-ai-disclaimer-agree=\${handleAgree} @forge-ai-disclaimer-disagree=\${handleDisagree}>
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
            Your interactions may be used to improve the service. Please do not share sensitive or personal information.
          </p>
          <p>
            The AI assistant may produce inaccurate or inappropriate content. Always verify important information from
            reliable sources.
          </p>
        </forge-ai-disclaimer>
      </forge-ai-sidebar-chat>
    \`;
    return html\`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Disclaimer"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=\${() => {
      const sidebar = document.querySelector('forge-ai-sidebar-chat');
      sidebar?.toggle();
    }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat with disclaimer.</p>
            <p>Click "Agree" to show the chatbot, or "Disagree" to close the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">\${sidebarChat}</div>
      </forge-scaffold>
    \`;
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      action('forge-ai-sidebar-chat-expand')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = true;
      }
    };
    const handleCollapse = (e: Event) => {
      action('forge-ai-sidebar-chat-collapse')(e);
      const chatbot = (e.target as HTMLElement).querySelector('forge-ai-chatbot');
      if (chatbot) {
        chatbot.expanded = false;
      }
    };
    const onConversationSelect = action('forge-ai-chatbot-conversation-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const sidebarChat = html\`
      <forge-ai-sidebar-chat
        ?open=\${args.open}
        ?expanded=\${args.expanded}
        ?resizable=\${args.resizable}
        @forge-ai-sidebar-chat-open=\${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-expand=\${handleExpand}
        @forge-ai-sidebar-chat-collapse=\${handleCollapse}>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .agentInfo=\${agentInfo}
          .recentThreads=\${threads}
          file-upload=\${args.fileUpload}
          ?expanded=\${args.expanded}
          placeholder=\${args.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
          show-conversation-rename
          show-conversation-delete
          minimize-icon="panel"
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    \`;
    return html\`
      <forge-scaffold style="overflow: hidden; height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Conversation History"></forge-app-bar>

        <forge-toolbar slot="body-header">
          <h2 class="forge-typography--heading4">Page Title</h2>
          <forge-ai-button
            slot="end"
            @click=\${() => {
      const sidebar = document.querySelector('forge-ai-sidebar-chat');
      sidebar?.toggle();
    }}
            >Ask AI Assistant</forge-ai-button
          >
        </forge-toolbar>

        <main slot="body" style="padding: 24px;">
          <forge-card>
            <p>Demo of the AI Sidebar Chat with conversation history.</p>
            <p>
              Click the hamburger icon in the chat header to view conversation history. The panel slides in from the
              left with a list of recent conversations.
            </p>
            <p>Try selecting a conversation, searching, or starting a new chat.</p>
          </forge-card>
        </main>

        <div slot="body-right">\${sidebarChat}</div>
      </forge-scaffold>
    \`;
  }
}`,...y.parameters?.docs?.source}}};const le=["Demo","WithDisclaimer","WithConversationHistory"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,WithConversationHistory:y,WithDisclaimer:u,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{Ee as A};
