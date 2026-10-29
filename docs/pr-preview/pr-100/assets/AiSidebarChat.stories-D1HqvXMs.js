import{r as L,i as B,x as l}from"./iframe-DYSaFelY.js";import{h as N,T as F,I as Q,n as U,a as G,o as R,p as Y,q as V,r as K,s as j}from"./scaffold-BjaAFHFX.js";import"./split-button-BtbQt3R2.js";import{d as J,a as X}from"./ai-sidebar-HC2FTTcF.js";import{d as Z}from"./index-DRmfJBOV.js";import{t as ee}from"./custom-element-UsVr97OX.js";import{n as S}from"./property-DkFqThWM.js";import{o as ae}from"./if-defined-DH2E4TDh.js";import{n as te}from"./when-CI7b_ccM.js";import"./ai-modal-BFFKKtB6.js";import"./ai-button-BM7EBKKr.js";import"./ai-disclaimer-ab3WJ_Kh.js";import"./ai-canvas-CDaPtOg-.js";import"./ai-chatbot-A9D-6QP8.js";import"./ai-message-thread-vIa1E2kF.js";import"./utils-BRoM8yNS.js";import{M as A}from"./mock-adapter-BkYea8t_.js";import{s as oe,c as I}from"./canvas-table-tool-BkQqTCxr.js";function re(){N(F)}const ie=":host{display:block;height:100%}";var se=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},$=(e,t,r,h)=>{for(var c=h>1?void 0:h?ne(t,r):t,g=e.length-1,o;g>=0;g--)(o=e[g])&&(c=(h?o(t,r,c):o(c))||c);return h&&c&&se(t,r,c),c},E=(e,t,r)=>t.has(e)||z("Cannot "+r),T=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),D=(e,t,r)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),s=(e,t,r)=>(E(e,t,"access private method"),r),C,i,_,k,O,q,M,P,H,d;const ce="forge-ai-sidebar-chat";let p=class extends B{constructor(){super(...arguments),D(this,i),this.open=!1,this.expanded=!1,this.resizable="on",D(this,C,l`
    <slot
      @forge-ai-chatbot-expand=${s(this,i,M)}
      @forge-ai-chatbot-minimize=${s(this,i,P)}></slot>
  `)}render(){return l`
      ${te(this.expanded,()=>l`
          <forge-ai-modal
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${s(this,i,q)}
            @forge-ai-modal-close=${s(this,i,H)}>
            ${T(this,C)}
          </forge-ai-modal>
        `,()=>l`
          <forge-ai-sidebar
            ?open=${this.open&&!this.expanded}
            resizable=${this.resizable}
            width=${ae(this.width)}
            @forge-ai-sidebar-open=${s(this,i,_)}
            @forge-ai-sidebar-close=${s(this,i,k)}
            @forge-ai-sidebar-resize=${s(this,i,O)}>
            ${T(this,C)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,s(this,i,d).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,s(this,i,d).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,s(this,i,d).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,s(this,i,d).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,s(this,i,d).call(this,"forge-ai-sidebar-chat-collapse"))}};C=new WeakMap;i=new WeakSet;_=function(){this.open=!0,s(this,i,d).call(this,"forge-ai-sidebar-chat-open")};k=function(){this.open=!1,s(this,i,d).call(this,"forge-ai-sidebar-chat-close")};O=function(e){this.width=e.detail.width,s(this,i,d).call(this,"forge-ai-sidebar-chat-resize",{width:this.width})};q=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,s(this,i,d).call(this,"forge-ai-sidebar-chat-expand")):!t&&this.expanded&&(this.expanded=!1,s(this,i,d).call(this,"forge-ai-sidebar-chat-collapse"))};M=function(){this.expanded=!this.expanded,this.expanded?s(this,i,d).call(this,"forge-ai-sidebar-chat-expand"):s(this,i,d).call(this,"forge-ai-sidebar-chat-collapse")};P=function(){this.close()};H=function(){this.collapse()};d=function(e,t){const r=new CustomEvent(e,{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(r)};p.styles=L(ie);$([S({type:Boolean})],p.prototype,"open",2);$([S({type:Boolean})],p.prototype,"expanded",2);$([S()],p.prototype,"resizable",2);$([S({type:Number})],p.prototype,"width",2);p=$([ee(ce)],p);const{action:a}=__STORYBOOK_MODULE_ACTIONS__;J();X();Z();re();Q.define([U,G,R,Y,V,K,j]);const de="forge-ai-sidebar-chat",le={title:"AI Components/Form Factors/Sidebar",component:de,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},resizable:{control:{type:"select"},options:["on","off"],description:"Enables sidebar resizing"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,resizable:"on",fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new A({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=o=>{a("forge-ai-sidebar-chat-expand")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!1)},g=l`
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
          .agentInfo=${r}
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

        <div slot="body-right">${g}</div>
      </forge-scaffold>
    `}},u={},y={args:{open:!0},render:function(e){const t=o=>{a("forge-ai-disclaimer-agree")(o);const n=o.target?.closest("forge-ai-sidebar-chat"),w=n?.querySelector("forge-ai-disclaimer");if(w&&n){w.remove();const x=document.createElement("forge-ai-chatbot");x.setAttribute("show-minimize-button",""),n.appendChild(x)}},r=o=>{a("forge-ai-disclaimer-disagree")(o),o.target?.closest("forge-ai-sidebar-chat")?.close()},h=o=>{a("forge-ai-sidebar-chat-expand")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const n=o.target.querySelector("forge-ai-chatbot");n&&(n.expanded=!1)},g=l`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-resize=${a("forge-ai-sidebar-chat-resize")}
        @forge-ai-sidebar-chat-expand=${h}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-disclaimer @forge-ai-disclaimer-agree=${t} @forge-ai-disclaimer-disagree=${r}>
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

        <div slot="body-right">${g}</div>
      </forge-scaffold>
    `}},v={args:{open:!0},render:function(e){const t=new A({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},h=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],c=f=>{a("forge-ai-sidebar-chat-expand")(f);const m=f.target.querySelector("forge-ai-chatbot");m&&(m.expanded=!0)},g=f=>{a("forge-ai-sidebar-chat-collapse")(f);const m=f.target.querySelector("forge-ai-chatbot");m&&(m.expanded=!1)},o=a("forge-ai-chatbot-thread-select"),n=a("forge-ai-chatbot-new-chat"),w=a("forge-ai-chatbot-conversations-open"),x=a("forge-ai-chatbot-conversations-close"),W=l`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        resizable=${e.resizable}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-resize=${a("forge-ai-sidebar-chat-resize")}
        @forge-ai-sidebar-chat-expand=${c}
        @forge-ai-sidebar-chat-collapse=${g}>
        <forge-ai-chatbot
          .adapter=${t}
          .agentInfo=${r}
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
          @forge-ai-chatbot-thread-select=${f=>o(f.detail)}
          @forge-ai-chatbot-new-chat=${n}
          @forge-ai-chatbot-conversations-open=${w}
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

        <div slot="body-right">${W}</div>
      </forge-scaffold>
    `}},b={args:{open:!0},render:function(e){const t=new A({simulateStreaming:!0,simulateTools:!0,streamingDelay:30,responseDelay:400,tools:[I],simulatedToolCall:{name:I.name,args:oe}});return l`
      <forge-scaffold style="overflow: hidden; height: 800px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Artifact Canvas"></forge-app-bar>

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
            <p>Ask for Q3 sales by region. The table opens in a modal over the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">
          <forge-ai-sidebar-chat
            ?open=${e.open}
            @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}>
            <forge-ai-chatbot
              .adapter=${t}
              .suggestions=${[{text:"Show me Q3 sales by region",value:"Show me Q3 sales by region"}]}
              show-minimize-button
              show-expand-button
              @forge-ai-chatbot-canvas-open=${r=>a("forge-ai-chatbot-canvas-open")(r.detail)}
              @forge-ai-chatbot-canvas-close=${a("forge-ai-chatbot-canvas-close")}>
            </forge-ai-chatbot>
          </forge-ai-sidebar-chat>
        </div>
      </forge-scaffold>
    `}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      <forge-scaffold style="overflow: hidden; height: 800px; border: 1px solid var(--forge-theme-outline);">
        <forge-app-bar slot="header" title-text="AI Sidebar Chat with Artifact Canvas"></forge-app-bar>

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
            <p>Ask for Q3 sales by region. The table opens in a modal over the sidebar.</p>
          </forge-card>
        </main>

        <div slot="body-right">
          <forge-ai-sidebar-chat
            ?open=\${args.open}
            @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}>
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
          </forge-ai-sidebar-chat>
        </div>
      </forge-scaffold>
    \`;
  }
}`,...b.parameters?.docs?.source},description:{story:"The tool shows an artifact card in the thread; opening it presents the full table in a modal over the sidebar.",...b.parameters?.docs?.description}}};const he=["Demo","WithDisclaimer","WithConversationHistory","WithArtifactCanvas"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Demo:u,WithArtifactCanvas:b,WithConversationHistory:v,WithDisclaimer:y,__namedExportsOrder:he,default:le},Symbol.toStringTag,{value:"Module"}));export{Ee as A,b as W};
