import{j as e,M as r,T as s,C as a}from"./blocks-h4-PBAW1.js";import{useMDXComponents as o}from"./index-BjXugjM0.js";import{C as h}from"./CustomArgTypes-CzUX8J-m.js";import{A as c,W as l}from"./AiChatbotLauncher.stories-DGhJWsRi.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DiOCH7Dj.js";import"./utils-DkDZKAQP.js";import"./ref-DgWQRCQ7.js";import"./class-map-dvwAE95Y.js";import"./property-B0F2CeGY.js";import"./ai-chatbot-launcher-QYuaeYKJ.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-VJAtgYHz.js";import"./mock-adapter-ph_xQ6k2.js";import"./markdown-CtLA8yAF.js";import"./ai-edit-thread-cZSVIDl_.js";import"./ai-dropdown-menu-C__67-my.js";import"./query-assigned-nodes-C1LoiU-7.js";import"./if-defined-gI1lzchr.js";import"./popover-BYFrxvpx.js";import"./overlay-WkS8ATbn.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-C9wGXfVG.js";import"./ai-attachment-CoSBFMO8.js";import"./ai-spinner-BQ73pPV9.js";import"./tooltip-C7ZPBmgU.js";import"./ai-chat-header-Dq4AC9JO.js";import"./ai-icon-CTg_hCHt.js";import"./ai-gradient-container-BxfRMC7S.js";import"./ai-modal-Dpj2sVQw.js";import"./ai-agent-info-eAzT3svC.js";import"./ai-agent-selector-y4kVowun.js";import"./ai-file-picker-B_82MM-o.js";import"./ai-message-thread-DLb8FPqC.js";import"./ai-response-message-toolbar-Bku-lA6p.js";import"./ai-thinking-indicator-BC8bkXZn.js";import"./ai-empty-state-B2idIC9j.js";import"./ai-error-message-Dth-O15t.js";import"./ai-response-message-SykWk7qj.js";import"./ai-user-message-C3QFQhX8.js";import"./ai-user-message-toolbar-B6uCF77o.js";import"./ai-prompt-B4mox89Q.js";import"./ai-suggestions-DGEDYS6q.js";import"./ai-voice-input-BJLUEodR.js";import"./ai-threads-search-DJHZpkS_.js";import"./scaffold-DT2z-NGc.js";import"./split-button-CTh06gCM.js";import"./index-DFJiSE3d.js";import"./index-Ce5YL2q0.js";function n(i){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
`,e.jsx(h,{})]})}function ce(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{ce as default};
