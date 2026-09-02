import{j as e,M as r,T as s,C as a}from"./blocks-DVOqpP8H.js";import{useMDXComponents as o}from"./index-t9llu-Gf.js";import{C as h}from"./CustomArgTypes-CUoWFSvL.js";import{A as c,W as l}from"./AiChatbotLauncher.stories-DBbPw0yJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMrRvUvX.js";import"./utils-BiNMEL_Y.js";import"./ref-BY6Vyj7F.js";import"./class-map-BKDB7sSQ.js";import"./property-QGRfNHL6.js";import"./ai-chatbot-launcher-Db5WAhBn.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-CTc-XLdp.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-edit-thread-4XIAgKeN.js";import"./ai-dropdown-menu-FFpeK-Mt.js";import"./query-assigned-nodes-CKxVThWi.js";import"./if-defined-DHt2KXOo.js";import"./popover-ChcxWc5U.js";import"./overlay-GUKprEb7.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-CLjPJgC_.js";import"./ai-attachment-BP5Browv.js";import"./ai-spinner-Bx6d6WT6.js";import"./tooltip-LXXh0UOH.js";import"./ai-chat-header-DSM_K5as.js";import"./ai-icon-H39y9dMV.js";import"./ai-gradient-container-DIUMC8Ne.js";import"./ai-modal-CgWV1Zw-.js";import"./ai-agent-info-CYSKNNcp.js";import"./ai-agent-selector-Cl1v7wAs.js";import"./ai-file-picker-B5q_l1-g.js";import"./ai-message-thread-C83tVUlV.js";import"./ai-response-message-toolbar-DZmyH8uS.js";import"./ai-thinking-indicator-D6sKnIXS.js";import"./ai-client-message-BnPPeXYo.js";import"./ai-empty-state-CGPrbDYx.js";import"./ai-error-message-D6U-084Y.js";import"./ai-response-message-DhF-XEif.js";import"./ai-user-message-Gxslol3q.js";import"./ai-user-message-toolbar-CYWedd92.js";import"./ai-prompt-DrcpaA9J.js";import"./ai-suggestions-VPbUdTpD.js";import"./ai-voice-input-d3U_0Sn9.js";import"./ai-threads-search-D_3gafiI.js";import"./mock-adapter-BpgeerXX.js";import"./scaffold-DP-DX86o.js";import"./split-button-BM6__-OF.js";import"./index-DZlBAsjL.js";import"./index-BiqmItcT.js";function n(i){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
