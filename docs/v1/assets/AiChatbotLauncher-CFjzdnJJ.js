import{j as e,M as r,T as s,C as a}from"./blocks-B1EsKxXs.js";import{useMDXComponents as o}from"./index-P89lMxvl.js";import{C as h}from"./CustomArgTypes-CuZitMlP.js";import{A as c,W as l}from"./AiChatbotLauncher.stories-iZ4XcWSN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CADuIDkh.js";import"./utils-DFuhqIoU.js";import"./ref-WNweeo31.js";import"./class-map-lxKQWI2x.js";import"./property-D1A7vE6P.js";import"./ai-chatbot-launcher-C7pDHr6B.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-COlPhqop.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-edit-thread-BHAaE5vs.js";import"./ai-dropdown-menu-w3IhAWpG.js";import"./query-assigned-nodes-DuXvx4mS.js";import"./if-defined-DqyJVthq.js";import"./popover-Ct5fZSUJ.js";import"./overlay-BK9yFc7r.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-DlZC2t7i.js";import"./ai-attachment-a2O7_tMU.js";import"./ai-spinner-DPF0Ecuu.js";import"./tooltip-BaYlHZuv.js";import"./ai-chat-header-1wXRb5Sv.js";import"./ai-icon-YaVCEgEj.js";import"./ai-gradient-container-SjTC3hZA.js";import"./ai-modal-BhsABjza.js";import"./ai-agent-info-DlkgZ-HL.js";import"./ai-agent-selector-DhnJCaeY.js";import"./ai-file-picker-C7E-0pRb.js";import"./ai-message-thread-BlF4XE16.js";import"./ai-response-message-toolbar-KzBcozAV.js";import"./ai-thinking-indicator-BEp1fhiI.js";import"./ai-client-message-rQsx8zFI.js";import"./ai-empty-state-BnS6U1d1.js";import"./ai-error-message-DhZi8Lt1.js";import"./ai-response-message-BTlvxeX1.js";import"./ai-user-message-DSgABtbI.js";import"./ai-user-message-toolbar-mqgRxP6I.js";import"./ai-prompt-CeVCu0Of.js";import"./ai-suggestions-CbE1dL_G.js";import"./ai-voice-input-C-BllxmB.js";import"./ai-threads-search-Bw5qH9oy.js";import"./mock-adapter-BpgeerXX.js";import"./scaffold-HMTDwZcG.js";import"./split-button-23WjStn0.js";import"./index-zzCUcU4X.js";import"./index-B_SxObfp.js";function n(i){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c}),`
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
