import{j as e,M as r,T as s,C as a}from"./blocks-2xU0dCkE.js";import{useMDXComponents as o}from"./index-B52_wQbQ.js";import{C as h}from"./CustomArgTypes-D35Tmwkl.js";import{A as c,W as l}from"./AiChatbotLauncher.stories-DijUUE2X.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Bi-1nWkR.js";import"./utils-BX4gMDEK.js";import"./ref-CVnE5sLo.js";import"./class-map-DveZVzB6.js";import"./property-D-A3RxM9.js";import"./ai-chatbot-launcher-tc2i0__i.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-Bm3YU0xt.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-edit-thread-DyfjTsPy.js";import"./ai-dropdown-menu-Cg8aOUr3.js";import"./query-assigned-nodes-DDrXrDde.js";import"./if-defined-bUPqGoPe.js";import"./popover-DJM4l3dC.js";import"./overlay-XfBHk16S.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-D-LARChW.js";import"./ai-attachment-CEUExzD5.js";import"./ai-spinner-B4hfIXY7.js";import"./tooltip-DIYC_qFg.js";import"./ai-chat-header-C7m8Unnd.js";import"./ai-icon-DYcDW-Aq.js";import"./ai-gradient-container-DgMkJLwY.js";import"./ai-modal-_MO_XFb_.js";import"./ai-agent-info-BgyO98Wo.js";import"./ai-agent-selector-BnzlQgjK.js";import"./ai-file-picker-BurVGbAS.js";import"./ai-message-thread-DFLAELmc.js";import"./ai-response-message-toolbar-C_C2KBw8.js";import"./ai-thinking-indicator-Bsew6VLy.js";import"./ai-client-message-BKv0r0f7.js";import"./ai-empty-state-CJ9tRewS.js";import"./ai-error-message-2yrvom1t.js";import"./ai-response-message-C3eoJ6fN.js";import"./ai-user-message-BBaYNY-b.js";import"./ai-user-message-toolbar-NkuyuMKH.js";import"./ai-prompt-DFX7pkkA.js";import"./ai-suggestions-BlfpnYBl.js";import"./ai-voice-input-2E_JNXdX.js";import"./ai-threads-search-ipKW2V-Q.js";import"./mock-adapter-BpgeerXX.js";import"./scaffold-DVpO2ry8.js";import"./split-button-C20Isq5H.js";import"./index-La5R_XMd.js";import"./index-pRgal71M.js";function n(i){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
`,e.jsx(s,{}),`
`,e.jsx(t.p,{children:"The AI Chatbot Launcher provides a page-embedded chat experience featuring a centered welcome/hero view that transitions into a full conversation interface when the user sends their first message. It combines a visually engaging landing state with full chatbot functionality."}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Welcome view"}),": Centered hero layout with customizable icon, title, description, and suggestions"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Conversation view"}),": Full chat interface with header controls (clear, export, agent selection)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"History view"}),": Full-height chat history browser with search and infinite scroll, reached via the prompt bar's history button"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Animated transitions"}),": Smooth state changes between welcome, conversation, and history modes"]}),`
`]}),`
`,e.jsx(t.h2,{id:"when-to-use",children:"When to Use"}),`
`,e.jsx(t.p,{children:"Use the AI Chatbot Launcher when you want:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"A dedicated landing page or section for AI chat"}),`
`,e.jsx(t.li,{children:"A visually appealing entry point before conversation begins"}),`
`,e.jsx(t.li,{children:"Multi-agent support with header-based agent switching"}),`
`,e.jsx(t.li,{children:"Built-in welcome-to-conversation state management"}),`
`]}),`
`,e.jsxs(t.p,{children:["For inline embedded experiences without a welcome view, consider ",e.jsx(t.code,{children:"<forge-ai-chatbot>"}),". For floating/overlay patterns, use ",e.jsx(t.code,{children:"<forge-ai-floating-chat>"}),"."]}),`
`,e.jsx(t.h2,{id:"usage-patterns",children:"Usage Patterns"}),`
`,e.jsx(t.h3,{id:"welcome-mode-default",children:"Welcome Mode (Default)"}),`
`,e.jsx(t.p,{children:"Initial state displays a centered hero with icon, title, description, and optional suggestions. The prompt input is prominent and wrapped in a gradient container."}),`
`,e.jsx(t.h3,{id:"conversation-mode",children:"Conversation Mode"}),`
`,e.jsx(t.p,{children:"After sending the first message, transitions to a full chat interface with:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Header showing title, agent selector, and action buttons"}),`
`,e.jsx(t.li,{children:"Scrollable message thread"}),`
`,e.jsx(t.li,{children:"Bottom-anchored prompt area"}),`
`]}),`
`,e.jsx(t.h3,{id:"chat-history",children:"Chat History"}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"threads"})," (and optionally ",e.jsx(t.code,{children:"totalThreads"}),"/",e.jsx(t.code,{children:"threadsLoading"}),`) to show a history button in the prompt bar's bottom-left. Clicking it opens a "Chat history" popover with a preview of recent chats; a search field appears once there are more than 5 chats. "View all" transitions into a full-height history view (a new `,e.jsx(t.code,{children:"history"})," state alongside ",e.jsx(t.code,{children:"welcome"}),"/",e.jsx(t.code,{children:"conversation"}),") built on ",e.jsx(t.code,{children:"<forge-ai-threads-search>"}),", with a back button returning to the conversation (if one exists) or welcome view."]}),`
`,e.jsxs(t.p,{children:["Search and pagination are backed by ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-search"})," and ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-load-more"})," (same shape in both the popover and the full view), thread selection by ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-select"}),", and rename/delete reuse the existing ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-rename"}),"/",e.jsx(t.code,{children:"-thread-delete"})," events. See the ",e.jsx(t.code,{children:"WithHistory"})," story below for a full mock-backend wiring example."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(h,{})]})}function de(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{de as default};
