import{j as t,M as n,T as a}from"./blocks-CgsA1aCY.js";import{useMDXComponents as r}from"./index-ClV3urAy.js";import{C as s}from"./CustomArgTypes-BP9KHRll.js";import{A as c}from"./AiSidebarChat.stories-pOAu0iHX.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CYpzolsh.js";import"./utils-C8GDOk2o.js";import"./scaffold-DTDxWivm.js";import"./class-map-17_4dlLb.js";import"./property-CqK3u29Y.js";import"./custom-element-UsVr97OX.js";import"./ref-BB4v-dJB.js";import"./floating-ui.dom-alButkyJ.js";import"./split-button-B3_KT1L6.js";import"./query-assigned-nodes-BHml-LBf.js";import"./if-defined-BsEdOuko.js";import"./ai-sidebar-CyiL5ESV.js";import"./when-CI7b_ccM.js";import"./index-yF8XyLxw.js";import"./ai-modal-91XQRbtZ.js";import"./utils-BGBq21po.js";import"./ai-button-CoglDTzO.js";import"./ai-icon-DGi160cB.js";import"./ai-gradient-container-y7IUFLz9.js";import"./ai-disclaimer-CPKpGOqt.js";import"./ai-chatbot-base-Cl1SUEaa.js";import"./agent-adapter-B7X4CC2Q.js";import"./markdown-CtLA8yAF.js";import"./ai-chatbot-xwv1JoT9.js";import"./ai-attachment-BmE2lFvl.js";import"./ai-spinner-vZDut5ln.js";import"./tooltip-DZwt6XP5.js";import"./overlay-d0qUY_fV.js";import"./ai-chat-header-UBqHTLji.js";import"./ai-dropdown-menu-BDGraPvu.js";import"./popover-CdwzAdza.js";import"./ai-dropdown-menu-item-Bk1xJQp_.js";import"./ai-agent-info-EwBsdKcD.js";import"./ai-agent-selector-BJhE5l_z.js";import"./ai-chat-interface-BZjSC7ON.js";import"./ai-prompt-CFDJKTXR.js";import"./ai-conversations-panel-BxrlN5k-.js";import"./ai-edit-thread-Cs1WgKHI.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-ewujCi5B.js";import"./ai-message-thread-yNYlCEn-.js";import"./ai-response-message-toolbar-BedfAKo6.js";import"./ai-thinking-indicator-DOFZSGFX.js";import"./ai-client-message-DYwNUNkG.js";import"./ai-empty-state-C0X1WTox.js";import"./ai-error-message-CDGUXHQX.js";import"./ai-response-message-wmYk5IJ_.js";import"./ai-user-message-ClponVCq.js";import"./ai-user-message-toolbar-CNSw_C05.js";import"./ai-suggestions-lvHOTQ_o.js";import"./ai-voice-input-DwKWv-41.js";import"./mock-adapter-BgvlmV5I.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function ht(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{ht as default};
