import{r as O,i as P,x as p}from"./iframe-B0NQNGVo.js";import{f as W,T as B,I as L,l as F,e as H,m as R,n as U,o as N,p as Y,q as V}from"./split-button-B5Lz7ABV.js";import{d as G,a as K}from"./ai-sidebar-DDpmQ2hG.js";import{d as j}from"./index-BeVj3KWW.js";import{t as J}from"./custom-element-UsVr97OX.js";import{n as S}from"./property-xWtNckDH.js";import{n as w,e as _}from"./ref-DrTNw50r.js";import{n as Q}from"./when-CI7b_ccM.js";import"./ai-modal-DNJB854V.js";import"./ai-button-OLXkMbrf.js";import"./ai-disclaimer-DriqMGyG.js";import{M as X}from"./mock-adapter-uhjSnHDA.js";function Z(){W(B)}const ee=":host{display:block;height:100%}";var ae=Object.defineProperty,te=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},$=(e,a,s,h)=>{for(var d=h>1?void 0:h?te(a,s):a,n=e.length-1,t;n>=0;n--)(t=e[n])&&(d=(h?t(a,s,d):t(d))||d);return h&&d&&ae(a,s,d),d},I=(e,a,s)=>a.has(e)||E("Cannot "+s),m=(e,a,s)=>(I(e,a,"read from private field"),s?s.call(e):a.get(e)),u=(e,a,s)=>a.has(e)?E("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,s),r=(e,a,s)=>(I(e,a,"access private method"),s),x,v,y,o,T,D,M,k,q,z,c;const oe="forge-ai-sidebar-chat";let b=class extends P{constructor(){super(...arguments),u(this,o),this.open=!1,this.expanded=!1,u(this,x,_()),u(this,v,_()),u(this,y,p`
    <slot
      @forge-ai-chatbot-expand=${r(this,o,k)}
      @forge-ai-chatbot-minimize=${r(this,o,q)}></slot>
  `)}render(){return p`
      ${Q(this.expanded,()=>p`
          <forge-ai-modal
            ${w(m(this,v))}
            ?open=${this.open&&this.expanded}
            @forge-ai-modal-fullscreen-change=${r(this,o,M)}
            @forge-ai-modal-close=${r(this,o,z)}>
            ${m(this,y)}
          </forge-ai-modal>
        `,()=>p`
          <forge-ai-sidebar
            ${w(m(this,x))}
            ?open=${this.open&&!this.expanded}
            @forge-ai-sidebar-open=${r(this,o,T)}
            @forge-ai-sidebar-close=${r(this,o,D)}>
            ${m(this,y)}
          </forge-ai-sidebar>
        `)}
    `}show(){this.open=!0,r(this,o,c).call(this,"forge-ai-sidebar-chat-open")}close(){this.expanded&&(this.expanded=!1,r(this,o,c).call(this,"forge-ai-sidebar-chat-collapse")),this.open=!1,r(this,o,c).call(this,"forge-ai-sidebar-chat-close")}toggle(){this.open?this.close():this.show()}expand(){this.expanded||(this.expanded=!0,r(this,o,c).call(this,"forge-ai-sidebar-chat-expand"))}collapse(){this.expanded&&(this.expanded=!1,r(this,o,c).call(this,"forge-ai-sidebar-chat-collapse"))}};x=new WeakMap;v=new WeakMap;y=new WeakMap;o=new WeakSet;T=function(){this.open=!0,r(this,o,c).call(this,"forge-ai-sidebar-chat-open")};D=function(){this.open=!1,r(this,o,c).call(this,"forge-ai-sidebar-chat-close")};M=function(e){const{isFullscreen:a}=e.detail;a&&!this.expanded?(this.expanded=!0,r(this,o,c).call(this,"forge-ai-sidebar-chat-expand")):!a&&this.expanded&&(this.expanded=!1,r(this,o,c).call(this,"forge-ai-sidebar-chat-collapse"))};k=function(){this.expanded=!this.expanded,this.expanded?r(this,o,c).call(this,"forge-ai-sidebar-chat-expand"):r(this,o,c).call(this,"forge-ai-sidebar-chat-collapse")};q=function(){this.close()};z=function(){this.collapse()};c=function(e){const a=new CustomEvent(e,{bubbles:!0,composed:!0});this.dispatchEvent(a)};b.styles=O(ee);$([S({type:Boolean})],b.prototype,"open",2);$([S({type:Boolean})],b.prototype,"expanded",2);b=$([J(oe)],b);const{action:i}=__STORYBOOK_MODULE_ACTIONS__;G();K();j();Z();L.define([F,H,R,U,N,Y,V]);const ie="forge-ai-sidebar-chat",re={title:"AI Components/Form Factors/Sidebar",component:ie,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},open:{control:{type:"boolean"},description:"Controls whether the sidebar chat is open"},expanded:{control:{type:"boolean"},description:"Controls whether the chat is displayed in an expanded modal state"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{open:!0,expanded:!1,fileUpload:"off",placeholder:"Ask a question..."},render:e=>{const a=new X({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),s=n=>{i("forge-ai-sidebar-chat-expand")(n);const t=n.target.querySelector("forge-ai-chatbot");t&&(t.expanded=!0)},h=n=>{i("forge-ai-sidebar-chat-collapse")(n);const t=n.target.querySelector("forge-ai-chatbot");t&&(t.expanded=!1)},d=p`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${i("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${i("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${s}
        @forge-ai-sidebar-chat-collapse=${h}>
        <forge-ai-chatbot
          .adapter=${a}
          file-upload=${e.fileUpload}
          ?expanded=${e.expanded}
          placeholder=${e.placeholder}
          show-expand-button
          show-minimize-button
          minimize-icon="panel"
          @forge-ai-chatbot-connected=${i("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${i("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${i("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${i("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${i("forge-ai-chatbot-tool-call")}
          @forge-ai-chatbot-error=${i("forge-ai-chatbot-error")}
          @forge-ai-chatbot-clear=${i("forge-ai-chatbot-clear")}
          @forge-ai-chatbot-info=${i("forge-ai-chatbot-info")}>
        </forge-ai-chatbot>
      </forge-ai-sidebar-chat>
    `;return p`
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

        <div slot="body-right">${d}</div>
      </forge-scaffold>
    `}},f={},g={args:{open:!0},render:function(e){const a=t=>{i("forge-ai-disclaimer-agree")(t);const l=t.target?.closest("forge-ai-sidebar-chat"),C=l?.querySelector("forge-ai-disclaimer");if(C&&l){C.remove();const A=document.createElement("forge-ai-chatbot");A.setAttribute("show-minimize-button",""),l.appendChild(A)}},s=t=>{i("forge-ai-disclaimer-disagree")(t),t.target?.closest("forge-ai-sidebar-chat")?.close()},h=t=>{i("forge-ai-sidebar-chat-expand")(t);const l=t.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!0)},d=t=>{i("forge-ai-sidebar-chat-collapse")(t);const l=t.target.querySelector("forge-ai-chatbot");l&&(l.expanded=!1)},n=p`
      <forge-ai-sidebar-chat
        ?open=${e.open}
        ?expanded=${e.expanded}
        @forge-ai-sidebar-chat-open=${i("forge-ai-sidebar-chat-open")}
        @forge-ai-sidebar-chat-close=${i("forge-ai-sidebar-chat-close")}
        @forge-ai-sidebar-chat-expand=${h}
        @forge-ai-sidebar-chat-collapse=${d}>
        <forge-ai-disclaimer @forge-ai-disclaimer-agree=${a} @forge-ai-disclaimer-disagree=${s}>
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
    `;return p`
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

        <div slot="body-right">${n}</div>
      </forge-scaffold>
    `}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"{}",...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const se=["Demo","WithDisclaimer"],xe=Object.freeze(Object.defineProperty({__proto__:null,Demo:f,WithDisclaimer:g,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{xe as A};
