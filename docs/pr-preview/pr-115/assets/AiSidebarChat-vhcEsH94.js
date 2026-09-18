import{j as t,M as n,T as a}from"./blocks-DFzjyAHZ.js";import{useMDXComponents as r}from"./index-DZCre-9C.js";import{C as s}from"./CustomArgTypes-DPNG_UV_.js";import{A as c}from"./AiSidebarChat.stories-CjSmAcbd.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-By603Nsb.js";import"./utils-Cm3OEPRV.js";import"./scaffold-0xrHut-s.js";import"./class-map-DsbDrzhk.js";import"./custom-element-UsVr97OX.js";import"./property-CdT5RBQX.js";import"./ref-BYLGVZvf.js";import"./query-BF20hjgF.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./split-button-Tjg4UlBE.js";import"./query-assigned-elements-B3bS3otO.js";import"./query-assigned-nodes-oqnR_ODv.js";import"./if-defined-CwtBGSjY.js";import"./ai-sidebar-Ba5XDB-C.js";import"./when-CI7b_ccM.js";import"./index-Cv9V-Z6H.js";import"./ai-modal-LRx8v0Eb.js";import"./utils-DIqd7FWX.js";import"./ai-button-pEULrZQZ.js";import"./ai-icon-Df9r9uEO.js";import"./ai-gradient-container-Cp9H0ukt.js";import"./ai-disclaimer-B1fabGrh.js";import"./ai-chatbot-base-n2M0sSsf.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./ai-chatbot-D93elF3k.js";import"./ai-attachment-DrQXVPh2.js";import"./ai-spinner-D7ST0Oah.js";import"./tooltip-BI4NsDdo.js";import"./overlay-CBW0DHbB.js";import"./ai-chat-header-CwhSt-cI.js";import"./ai-dropdown-menu-BvLUVNVR.js";import"./popover-Dmz3ZhBx.js";import"./ai-dropdown-menu-item-CQnMePxk.js";import"./ai-agent-info-CdbX_iMM.js";import"./ai-agent-selector-BRIgonMS.js";import"./ai-chat-interface-xxhs_f8g.js";import"./ai-prompt-Zcpaw8s8.js";import"./ai-conversations-panel-DKbQ1i0G.js";import"./ai-edit-thread-B68NrIqQ.js";import"./ai-error-message-wG-_9GAd.js";import"./ai-file-picker-B6fmFCK-.js";import"./ai-message-thread-CJbILeOj.js";import"./ai-response-message-toolbar-CQQO-AVS.js";import"./ai-thinking-indicator--A7yteib.js";import"./ai-client-message-BJ4Nfg26.js";import"./ai-empty-state-DOfxSCJ4.js";import"./ai-response-message-DAnPVDpe.js";import"./ai-user-message-BSpaa9Mp.js";import"./ai-user-message-toolbar-BlCMsiqF.js";import"./ai-suggestions-DLH4LRt-.js";import"./ai-voice-input-ZbynZQKl.js";import"./mock-adapter-D0dkxTL5.js";function e(i){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
`,t.jsx(a,{children:"AI Sidebar Chat"}),`
`,t.jsxs(o.p,{children:["The AI Sidebar Chat component is a form factor component that positions a slotted chatbot in a sidebar or fullscreen modal. It manages positioning and expand/collapse state while delegating all chat functionality to the slotted ",t.jsx(o.code,{children:"ai-chatbot"})," component. When expanded, the chat is displayed in a fullscreen modal. When collapsed, it's displayed in a sidebar."]}),`
`,t.jsx(o.h2,{id:"features",children:"Features"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Composition-based"}),": Accepts slotted chatbot component for maximum flexibility"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Built-in event handling"}),": Manages open/close events and expand/collapse interactions"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Dual display modes"}),": Sidebar for normal view, fullscreen modal when expanded"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Direct chatbot access"}),": Exposes slotted chatbot via ",t.jsx(o.code,{children:"chatbot"})," property for programmatic control"]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.strong,{children:"Event bubbling"}),": All chatbot events bubble through unchanged"]}),`
`]}),`
`,t.jsx(o.h2,{id:"when-to-use",children:"When to Use"}),`
`,t.jsx(o.p,{children:"Use the AI Sidebar Chat component when you want:"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsx(o.li,{children:"A sidebar container for your chatbot that can expand to fullscreen"}),`
`,t.jsx(o.li,{children:"Standard sidebar positioning without custom logic"}),`
`,t.jsx(o.li,{children:"Built-in modal transition for expanded view"}),`
`,t.jsx(o.li,{children:"Direct control over the chatbot configuration"}),`
`]}),`
`,t.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<forge-ai-sidebar-chat>
  <forge-ai-chatbot .adapter="\\\${adapter}" file-upload="on"> </forge-ai-chatbot>
</forge-ai-sidebar-chat>
`})}),`
`,t.jsx(o.h3,{id:"programmatic-control",children:"Programmatic Control"}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-javascript",children:`const sidebarChat = document.querySelector('forge-ai-sidebar-chat');

// Control form factor
sidebarChat.show();
sidebarChat.close();
sidebarChat.expand(); // Switch to fullscreen modal
sidebarChat.collapse(); // Return to sidebar

// Access slotted chatbot
const chatbot = sidebarChat.chatbot;
chatbot.sendMessage('Hello!');
`})}),`
`,t.jsx(o.h2,{id:"api",children:"API"}),`
`,t.jsx(s,{})]})}function xt(i={}){const{wrapper:o}={...r(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{xt as default};
