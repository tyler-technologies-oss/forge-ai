import{r as L,i as B,x as f}from"./iframe-CqVW0k1n.js";import{f as Y,T as F,I as N,l as U,e as R,m as G,n as V,o as K,p as j,q as J}from"./split-button-CVEcTTJO.js";import{d as Q,a as X}from"./ai-sidebar-DDbuifW8.js";import{d as Z}from"./index-UPbte7wi.js";import{t as ee}from"./custom-element-UsVr97OX.js";import{n as T}from"./property-DiJ-gpN2.js";import{n as E,e as _}from"./ref-D3c8n6_t.js";import{n as ae}from"./when-CI7b_ccM.js";import"./ai-modal-74MCm6Ab.js";import"./ai-button-DaW5zBoK.js";import"./ai-disclaimer-B8O50ENs.js";import{M as I}from"./mock-adapter-uhjSnHDA.js";function te(){Y(F)}const oe=":host{display:block;height:100%}";var re=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},D=(e,t,i,h)=>{for(var c=h>1?void 0:h?ie(t,i):t,s=e.length-1,o;s>=0;s--)(o=e[s])&&(c=(h?o(t,i,c):o(c))||c);return h&&c&&re(t,i,c),c},k=(e,t,i)=>t.has(e)||M("Cannot "+i),$=(e,t,i)=>(k(e,t,"read from private field"),i?i.call(e):t.get(e)),w=(e,t,i)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),n=(e,t,i)=>(k(e,t,"access private method"),i),S,A,C,r,q,z,O,P,W,H,l;const ne="forge-ai-sidebar-chat";let v=class extends B{constructor(){super(...arguments),w(this,r),this.open=!1,this.expanded=!1,w(this,S,_()),w(this,A,_()),w(this,C,f`
    <slot
      @forge-ai-chatbot-expand=${n(this,r,P)}
      @forge-ai-chatbot-minimize=${n(this,r,W)}></slot>
  `)}render(){return f`
      ${ae(this.expanded,()=>f`
          <forge-ai-modal
            ${E($(this,A))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${n(this,r,O)}
            @forge-ai-modal-close=${n(this,r,H)}>
            ${$(this,C)}
          </forge-ai-modal>
        `,()=>f`
          <forge-ai-sidebar
            ${E($(this,S))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${n(this,r,q)}
            @forge-ai-sidebar-close=${n(this,r,z)}>
            ${$(this,C)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,n(this,r,l).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,n(this,r,l).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,n(this,r,l).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,n(this,r,l).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,n(this,r,l).call(this,"forge-ai-sidebar-chat-collapse"))}};S=new WeakMap;A=new WeakMap;C=new WeakMap;r=new WeakSet;q=function(){this.open=!0,n(this,r,l).call(this,"forge-ai-sidebar-chat-open")};z=function(){this.open=!1,n(this,r,l).call(this,"forge-ai-sidebar-chat-close")};O=function(e){const{isFullscreen:t}=e.detail;t&&!this.expanded?(this.expanded=!0,n(this,r,l).call(this,"forge-ai-sidebar-chat-expand")):!t&&this.expanded&&(this.expanded=!1,n(this,r,l).call(this,"forge-ai-sidebar-chat-collapse"))};P=function(){this.expanded=!this.expanded,this.expanded?n(this,r,l).call(this,"forge-ai-sidebar-chat-expand"):n(this,r,l).call(this,"forge-ai-sidebar-chat-collapse")};W=function(){this.close()};H=function(){this.collapse()};l=function(e){const t=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(t)};v.styles=L(oe);D([T({type:Boolean})],v.prototype,"open",2);D([T({type:Boolean})],v.prototype,"expanded",2);v=D([ee(ne)],v);const{action:a}=__STORYBOOK_MODULE_ACTIONS__;Q();X();Z();te();N.define([U,R,G,V,K,j,J]);const se="forge-ai-sidebar-chat",ce={title:"AI Components/Form Factors/Sidebar",component:se,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const t=new I({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=s=>{a("forge-ai-sidebar-chat-expand")(s);const o=s.target.querySelector("forge-ai-chatbot");o&&(o.expanded=!0)},h=s=>{a("forge-ai-sidebar-chat-collapse")(s);const o=s.target.querySelector("forge-ai-chatbot");o&&(o.expanded=!1)},c=f`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${i}
        @forge-ai-sidebar-chat-collapse=${h}>
        <forge-ai-chatbot
          .adapter=${t}
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
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return f`
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

        <div slot="body-right">${c}</div>
      </forge-scaffold>
    `}},b={},m={args:{open:!0},render:function(e){const t=o=>{a("forge-ai-disclaimer-agree")(o);const d=o.target?.closest("forge-ai-sidebar-chat"),y=d?.querySelector("forge-ai-disclaimer");if(y&&d){y.remove();const x=document.createElement("forge-ai-chatbot");x.setAttribute("show-minimize-button",""),d.appendChild(x)}},i=o=>{a("forge-ai-disclaimer-disagree")(o),o.target?.closest("forge-ai-sidebar-chat")?.close()},h=o=>{a("forge-ai-sidebar-chat-expand")(o);const d=o.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!0)},c=o=>{a("forge-ai-sidebar-chat-collapse")(o);const d=o.target.querySelector("forge-ai-chatbot");d&&(d.expanded=!1)},s=f`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
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
    `;return f`
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

        <div slot="body-right">${s}</div>
      </forge-scaffold>
    `}},u={args:{open:!0},render:function(e){const t=new I({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=[{id:"thread-1",title:"TypeScript best practices",time:"2:30 PM",date:new Date(Date.now()-7200*1e3)},{id:"thread-2",title:"Web component architecture",time:"11:45 AM",date:new Date(Date.now()-300*60*1e3)},{id:"thread-3",title:"How to use localStorage?",time:"Yesterday",date:new Date(Date.now()-1440*60*1e3)},{id:"thread-4",title:"Lit reactive controllers explained",time:"Yesterday",date:new Date(Date.now()-2160*60*1e3)},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",time:"2 days ago",date:new Date(Date.now()-2880*60*1e3)}],h=p=>{a("forge-ai-sidebar-chat-expand")(p);const g=p.target.querySelector("forge-ai-chatbot");g&&(g.expanded=!0)},c=p=>{a("forge-ai-sidebar-chat-collapse")(p);const g=p.target.querySelector("forge-ai-chatbot");g&&(g.expanded=!1)},s=a("forge-ai-chatbot-conversation-select"),o=a("forge-ai-chatbot-new-chat"),d=a("forge-ai-chatbot-conversations-open"),y=a("forge-ai-chatbot-conversations-close"),x=f`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${a("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${a("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${h}
        @forge-ai-sidebar-chat-collapse=${c}>
        <forge-ai-chatbot
          .adapter=${t}
          .recentThreads=${i}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${a("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${a("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${a("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${a("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${a("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${a("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${a("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${a("forge-ai-chatbot-info")}
          @forge-ai-chatbot-conversation-select=${p=>s(p.detail)}
          @forge-ai-chatbot-new-chat=${o}
          @forge-ai-chatbot-conversations-open=${d}
          @forge-ai-chatbot-conversations-close=${y}>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return f`
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

        <div slot="body-right">${x}</div>
      </forge-scaffold>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      time: '2:30 PM',
      date: new Date(Date.now() - 2 * 60 * 60 * 1000)
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      time: '11:45 AM',
      date: new Date(Date.now() - 5 * 60 * 60 * 1000)
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      time: 'Yesterday',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }, {
      id: 'thread-4',
      title: 'Lit reactive controllers explained',
      time: 'Yesterday',
      date: new Date(Date.now() - 36 * 60 * 60 * 1000)
    }, {
      id: 'thread-5',
      title: 'CSS Grid vs Flexbox comparison',
      time: '2 days ago',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
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
        @forge-ai-sidebar-chat-open=\${action('forge-ai-sidebar-chat-open')}
        @forge-ai-sidebar-chat-close=\${action('forge-ai-sidebar-chat-close')}
        @forge-ai-sidebar-chat-expand=\${handleExpand}
        @forge-ai-sidebar-chat-collapse=\${handleCollapse}>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .recentThreads=\${threads}
          file-upload=\${args.fileUpload}
          ?expanded=\${args.expanded}
          placeholder=\${args.placeholder}
          show-expand-button
          show-minimize-button
          show-conversations-button
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
}`,...u.parameters?.docs?.source}}};const de=["Demo","WithDisclaimer","WithConversationHistory"],we=Object.freeze(Object.defineProperty({__proto__:null,Demo:b,WithConversationHistory:u,WithDisclaimer:m,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{we as A};
