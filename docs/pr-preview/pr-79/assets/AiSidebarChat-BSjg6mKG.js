import{j as t,M as n,T as a}from"./blocks-84l8xxke.js";import{useMDXComponents as r}from"./index-CY5KufPK.js";import{C as s}from"./CustomArgTypes-BxGTyOaL.js";import{A as c}from"./AiSidebarChat.stories-BuMxbjOx.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D5fv_1AB.js";import"./utils-Bikz1eRQ.js";import"./scaffold-CVJO_vhH.js";import"./class-map-lONZxvbY.js";import"./property-BD5bClhK.js";import"./custom-element-UsVr97OX.js";import"./ref-DJOzsRji.js";import"./floating-ui.dom-C0FiGihr.js";import"./split-button-BNwslMPs.js";import"./query-assigned-nodes-4n7Z-nG0.js";import"./ai-sidebar-BNn_RltB.js";import"./when-CI7b_ccM.js";import"./index-CK83FVhL.js";import"./ai-modal-CIQTKjRA.js";import"./utils-BGBq21po.js";import"./ai-button-QGAxNavF.js";import"./ai-icon-AOs2vmLy.js";import"./ai-gradient-container-B19-TFvA.js";import"./ai-disclaimer-gEbTWUhS.js";import"./ai-chatbot-base-kxzWJ7e-.js";import"./mock-adapter-B6avymXj.js";import"./utils-B8dv6FBY.js";import"./ai-chatbot-BpqSGkfB.js";import"./ai-attachment-B-DtQAkc.js";import"./ai-spinner-tBARMKOn.js";import"./tooltip-V0Zpw5rC.js";import"./overlay-D2_2zL4q.js";import"./ai-chat-header-DXWrJAEO.js";import"./ai-dropdown-menu-BQAriCgc.js";import"./if-defined-N2OJLAuP.js";import"./popover-UXI7KUCP.js";import"./ai-dropdown-menu-item-C_xTtCqq.js";import"./ai-agent-info-C155ExFK.js";import"./ai-agent-selector-DXj6251W.js";import"./ai-chat-interface-BZZV5n26.js";import"./ai-prompt-B5MO-jPs.js";import"./ai-conversations-panel-7cXm-K9p.js";import"./ai-edit-thread-C1nTSG9d.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BXIrur6a.js";import"./ai-message-thread-Dg9YxWo1.js";import"./ai-response-message-toolbar-Bx07Xbn9.js";import"./ai-empty-state-Bucn1NkC.js";import"./ai-error-message-D4gXur8r.js";import"./ai-response-message-BBuZ17HJ.js";import"./ai-thinking-indicator-Dpam8M9S.js";import"./ai-user-message-CtMEFATp.js";import"./ai-user-message-toolbar-MU07PgV_.js";import"./ai-suggestions-xZHEW9_h.js";import"./ai-voice-input-uPt90lIF.js";function i(e){const o={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(n,{of:c}),`
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
`,t.jsx(s,{})]})}function pt(e={}){const{wrapper:o}={...r(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(i,{...e})}):i(e)}export{pt as default};
