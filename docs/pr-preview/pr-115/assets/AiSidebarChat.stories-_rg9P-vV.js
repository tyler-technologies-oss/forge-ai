import{r as P,i as W,x as l}from"./iframe-BwxWS2yA.js";import{f as L,T as B,I as N,l as F,a as U,m as G,n as R,o as Y,p as V,q as K}from"./scaffold-Dx3E8naR.js";import"./split-button-D-hjCodM.js";import{d as j,a as J}from"./ai-sidebar-lFG_fNJA.js";import{d as Q}from"./index-DVkZhnNZ.js";import{t as X}from"./custom-element-UsVr97OX.js";import{n as C}from"./property-C2LYNZSK.js";import{o as Z}from"./if-defined-k4e50rGf.js";import{n as ee}from"./when-CI7b_ccM.js";import"./ai-modal-BLMKXeu5.js";import"./ai-button-rXace1hu.js";import"./ai-disclaimer-Ar80YmJ4.js";import"./ai-chatbot-base-ZUUanhxb.js";import"./ai-chatbot-C4ve72AL.js";import"./ai-message-thread-jLBsAgZT.js";import"./utils-B4bbHXKC.js";import{M as I}from"./mock-adapter-D0dkxTL5.js";function ae(){L(B)}const te=":host{display:block;height:100%}";var oe=Object.defineProperty,re=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},v=(e,t,i,h)=>{for(var c=h>1?void 0:h?re(t,i):t,f=e.length-1,o;f>=0;f--)(o=e[f])&&(c=(h?o(t,i,c):o(c))||c);return h&&c&&oe(t,i,c),c},D=(e,t,i)=>t.has(e)||z("Cannot "+i),S=(e,t,i)=>(D(e,t,"read from private field"),i?i.call(e):t.get(e)),A=(e,t,i)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),n=(e,t,i)=>(D(e,t,"access private method"),i),w,r,E,T,_,O,k,q,M,d;const ie="forge-ai-sidebar-chat";let p=class extends W{constructor(){super(...arguments),A(this,r),this.open=!1,this.expanded=!1,this.resizable="on",A(this,w,l`
    <slot
      @forge-ai-chatbot-expand=${n(this,r,k)}
      @forge-ai-chatbot-minimize=${n(this,r,q)}></slot>
  `)}render(){return l`
      ${ee(this.expanded,()=>l`
          <forge-ai-modal
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${n(this,r,O)}
            @forge-ai-modal-close=${n(this,r,M)}>
            ${S(this,w)}
          </forge-ai-modal>
        `,()=>l`
          <forge-ai-sidebar
            ?open=${this.open&&!this.expanded}
            resizable=${this.resizable}
            width=${Z(this.width)}
            @forge-ai-sidebar-open=${n(this,r,E)}
            @forge-ai-sidebar-close=${n(this,r,T)}
            @forge-ai-sidebar-resize=${n(this,r,_)}>
            ${S(this,w)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,n(this,r,d).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,n(this,r,d).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,n(this,r,d).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,n(this,r,d).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,n(this,r,d).call(this,"forge-ai-sidebar-chat-collapse"))}};w=new WeakMap;r=new WeakSet;E=function(){this.open=!0,n(this,r,d).call(this,"forge-ai-sidebar-chat-open")};T=function(){this.open=!1,n(this,r,d).call(this,"forge-ai-sidebar-chat-close")};_=function(e){this.width=e.detail.width,n(this,r,d).call(this,"forge-ai-sidebar-chat-resize",{width:this.width})};O=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,n(this,r,d).call(this,"forge-ai-sidebar-chat-expand")):!t&&this.expanded&&(this.expanded=!1,n(this,r,d).call(this,"forge-ai-sidebar-chat-collapse"))};k=function(){this.expanded=!this.expanded,this.expanded?n(this,r,d).call(this,"forge-ai-sidebar-chat-expand"):n(this,r,d).call(this,"forge-ai-sidebar-chat-collapse")};q=function(){this.close()};M=function(){this.collapse()};d=function(e,t){const i=new CustomEvent(e,{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(i)};p.styles=P(te);v([C({type:Boolean})],p.prototype,"open",2);v([C({type:Boolean})],p.prototype,"expanded",2);v([C()],p.prototype,"resizable",2);v([C({type:Number})],p.prototype,"width",2);p=v([X(ie)],p);const{action:a}=__STORYBOOK_MODULE_ACTIONS__;j();J();Q();ae();N.define([F,U,G,R,Y,V,K]);const ne="forge-ai-sidebar-chat",se={title:"AI Components/Form Factors/Sidebar",component:ne,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},resizable:{control:{type:"select"},options:["on","off"],description:"Enables sidebar resizing"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,resizable:"on",fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new I({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=o=>{a("forge-ai-sidebar-chat-expand")(o);const s=o.target.querySelector("forge-ai-chatbot");s&&(s.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const s=o.target.querySelector("forge-ai-chatbot");s&&(s.expanded=!1)},f=l`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-resize=${a("forge-ai-sidebar-chat-resize")}
        @forge-ai-sidebar-chat-expand=${h}
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
    `;return l`
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
    `}},m={},u={args:{open:!0},render:function(e){const t=o=>{a("forge-ai-disclaimer-agree")(o);const s=o.target?.closest("forge-ai-sidebar-chat"),$=s?.querySelector("forge-ai-disclaimer");if($&&s){$.remove();const x=document.createElement("forge-ai-chatbot");x.setAttribute("show-minimize-button",""),s.appendChild(x)}},i=o=>{a("forge-ai-disclaimer-disagree")(o),o.target?.closest("forge-ai-sidebar-chat")?.close()},h=o=>{a("forge-ai-sidebar-chat-expand")(o);const s=o.target.querySelector("forge-ai-chatbot");s&&(s.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const s=o.target.querySelector("forge-ai-chatbot");s&&(s.expanded=!1)},f=l`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-resize=${a("forge-ai-sidebar-chat-resize")}
        @forge-ai-sidebar-chat-expand=${h}
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
    `;return l`
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
    `}},y={args:{open:!0},render:function(e){const t=new I({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],c=g=>{a("forge-ai-sidebar-chat-expand")(g);const b=g.target.querySelector("forge-ai-chatbot");b&&(b.expanded=!0)},f=g=>{a("forge-ai-sidebar-chat-collapse")(g);const b=g.target.querySelector("forge-ai-chatbot");b&&(b.expanded=!1)},o=a("forge-ai-chatbot-thread-select"),s=a("forge-ai-chatbot-new-chat"),$=a("forge-ai-chatbot-conversations-open"),x=a("forge-ai-chatbot-conversations-close"),H=l`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-resize=${a("forge-ai-sidebar-chat-resize")}
        @forge-ai-sidebar-chat-expand=${c}
        @forge-ai-sidebar-chat-collapse=${f}>
        <forge-ai-chatbot
          .adapter=${t}
          .agentInfo=${i}
          .threads=${h}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
          show-thread-rename
          show-thread-delete
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${a("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${a("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${a("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${a("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${a("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${a("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${a("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${a("forge-ai-chatbot-info")}
          @forge-ai-chatbot-thread-select=${g=>o(g.detail)}
          @forge-ai-chatbot-new-chat=${s}
          @forge-ai-chatbot-conversations-open=${$}
          @forge-ai-chatbot-conversations-close=${x}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return l`
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

        <div slot="body-right">${H}</div>
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
        resizable=\${args.resizable}
        @forge-ai-sidebar-chat-open=\${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-resize=\${action('forge-ai-sidebar-chat-resize')}
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
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const sidebarChat = html\`
      <forge-ai-sidebar-chat
        ?open=\${args.open}
        ?expanded=\${args.expanded}
        resizable=\${args.resizable}
        @forge-ai-sidebar-chat-open=\${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-resize=\${action('forge-ai-sidebar-chat-resize')}
        @forge-ai-sidebar-chat-expand=\${handleExpand}
        @forge-ai-sidebar-chat-collapse=\${handleCollapse}>
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
          minimize-icon="panel"
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
}`,...y.parameters?.docs?.source}}};const ce=["Demo","WithDisclaimer","WithConversationHistory"],Ie=Object.freeze(Object.defineProperty({__proto__:null,Demo:m,WithConversationHistory:y,WithDisclaimer:u,__namedExportsOrder:ce,default:se},Symbol.toStringTag,{value:"Module"}));export{Ie as A};
