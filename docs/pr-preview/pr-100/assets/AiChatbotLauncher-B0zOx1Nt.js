import{j as e,M as a,T as s,C as n}from"./blocks-Cq_s8mW4.js";import{useMDXComponents as i}from"./index-BWjv3K9s.js";import{C as h}from"./CustomArgTypes-CCbojtDc.js";import{A as d,W as l,N as c,T as p,a as m}from"./AiChatbotLauncher.stories-LTEbLI-1.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CMqpidyD.js";import"./utils-BgDgMwuK.js";import"./ref-BdCVDbx1.js";import"./class-map-Cee3Ru6l.js";import"./ai-chatbot-launcher-Da4ZMCnf.js";import"./custom-element-UsVr97OX.js";import"./property-UTg6fKn8.js";import"./query-LLfzfoTQ.js";import"./when-CI7b_ccM.js";import"./ai-chatbot-base-BrDMhVeQ.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./ai-message-thread-DtDkmlMJ.js";import"./utils-CwmN9dOd.js";import"./if-defined-BFRCVrxJ.js";import"./ai-response-message-toolbar-C_crbQKk.js";import"./tooltip-DFWELXDf.js";import"./overlay-BMdxoq9W.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-C3kSoxY5.js";import"./ai-spinner-Dm874uye.js";import"./ai-thinking-indicator-C00m-hLm.js";import"./ai-empty-state-B_cao-nv.js";import"./ai-client-message-DlOgtkXx.js";import"./ai-error-message-BPEQWjjZ.js";import"./query-assigned-nodes-CfOzAFon.js";import"./ai-response-message-C8iE1417.js";import"./ai-user-message-DdD9-QWH.js";import"./ai-user-message-toolbar-DnRMaBm9.js";import"./agent-adapter-CiODA7QC.js";import"./ai-edit-thread-CS1XnJH-.js";import"./ai-dropdown-menu-DtTuPzYM.js";import"./query-assigned-elements-DsZdSlp5.js";import"./utils-DIqd7FWX.js";import"./ai-dropdown-menu-item-D7_dEO6j.js";import"./ai-attachment-DY5kbVEd.js";import"./ai-chat-header-DklFpnTd.js";import"./ai-icon-idzaSzy8.js";import"./ai-gradient-container-DYIxxphU.js";import"./ai-modal-CiIFraxs.js";import"./ai-agent-info-C9WH-Bfd.js";import"./ai-agent-selector-Pyd8ON0z.js";import"./ai-file-picker-5eOjqAq6.js";import"./ai-prompt-DB5Ws98_.js";import"./ai-suggestions-C1Xh4d2x.js";import"./ai-voice-input-26zFn7Xu.js";import"./ai-threads-search-Cx3aVD91.js";import"./mock-adapter-BIlxH578.js";import"./scaffold-lc0pEJCI.js";import"./split-button-xc5wDH8P.js";import"./index-DKifQyxm.js";import"./index-DdFF2aj8.js";function o(r){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
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
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"showHistoryButton"})," to put a history button in the prompt bar's bottom-left, and ",e.jsx(t.code,{children:"threads"})," (plus optionally ",e.jsx(t.code,{children:"totalThreads"}),"/",e.jsx(t.code,{children:"threadsLoading"}),') to populate it. Clicking it opens a "Chat history" popover with a preview of recent chats; a search field appears once there are more than 5 chats. "View all" transitions into a full-height history view (a new ',e.jsx(t.code,{children:"history"})," state alongside ",e.jsx(t.code,{children:"welcome"}),"/",e.jsx(t.code,{children:"conversation"}),") built on ",e.jsx(t.code,{children:"<forge-ai-threads-search>"}),", with a back button returning to the conversation (if one exists) or welcome view."]}),`
`,e.jsxs(t.p,{children:["Visibility is yours to decide, matching ",e.jsx(t.code,{children:"showConversationsButton"})," on ",e.jsx(t.code,{children:"<forge-ai-chatbot>"})," — the component never infers it from whether chats are loaded. An empty ",e.jsx(t.code,{children:"threads"}),' shows "No chats yet" in the popover rather than removing the entry point, so a user with no history still sees where their history will live.']}),`
`,e.jsxs(t.p,{children:["Search and pagination are backed by ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-search"})," and ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-load-more"})," (same shape in both the popover and the full view), thread selection by ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-select"}),", and rename/delete reuse the existing ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-rename"}),"/",e.jsx(t.code,{children:"-thread-delete"})," events. See the ",e.jsx(t.code,{children:"WithHistory"})," story below for a full mock-backend wiring example."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(t.p,{children:'With no chats the popover shows "No chats yet", and a search with no matches shows "No chats found".'}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"owning-thread-selection",children:"Owning Thread Selection"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-select"})," is cancelable. By default the component commits the selection itself — it sets ",e.jsx(t.code,{children:"selectedThreadId"})," and moves to the conversation view as soon as the thread is clicked. That is fine when a thread is always available locally, but if you load threads from a server the load can fail, and the component will already be showing a thread it never opened."]}),`
`,e.jsxs(t.p,{children:["Call ",e.jsx(t.code,{children:"preventDefault()"})," to take ownership of both commitments. The component then changes nothing, and you commit once your load resolves:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`launcher.addEventListener('forge-ai-chatbot-launcher-thread-select', async evt => {
  evt.preventDefault();
  launcher.threadsError = undefined;
  launcher.threadsLoading = true;

  try {
    const messages = await api.loadThread(evt.detail.id);
    launcher.selectedThreadId = evt.detail.id;
    // setThreadState transitions to the conversation view on its own once it has messages.
    await launcher.setThreadState({ threadId: evt.detail.id, messages }, { skipAnimation: true });
  } catch (error) {
    // Nothing to undo - selectedThreadId and the view state were never touched.
    launcher.threadsError = error.message || 'Could not open that chat.';
  } finally {
    launcher.threadsLoading = false;
  }
});
`})}),`
`,e.jsxs(t.p,{children:["Do ",e.jsx(t.strong,{children:"not"})," call ",e.jsx(t.code,{children:"startConversation()"})," before the load. Transitioning up front means a failed load has to walk the user back to the welcome view, which reads as a flicker. Let ",e.jsx(t.code,{children:"setThreadState()"})," perform the transition when it succeeds, and surface the failure in place — the history button's error badge and the popover's retry are already wired to ",e.jsx(t.code,{children:"threadsError"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"handling-a-failed-history-load",children:"Handling a Failed History Load"}),`
`,e.jsxs(t.p,{children:["An empty ",e.jsx(t.code,{children:"threads"}),' array on its own reads as "no chats yet", so a failed load would otherwise be indistinguishable from a user with no history. Set ',e.jsx(t.code,{children:"threadsError"})," to a message: the history button picks up an error badge so the failure is visible with the popover closed, and the popover and full history view show the message with a ",e.jsx(t.strong,{children:"Retry"})," button in place of the empty state."]}),`
`,e.jsxs(t.p,{children:["If chats are already loaded the list stays visible, and the message renders as a compact single line with a ",e.jsx(t.strong,{children:"Retry"})," instead of the banner. Where it sits depends on what failed: a failure that arrives while a page is in flight is a pagination failure, so it reads at the bottom of the list where the load-more spinner would have appeared. Any other failure — a rejected thread selection, for instance — is not tied to the end of the list, so it sits above it."]}),`
`,e.jsxs(t.p,{children:["Retry dispatches ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-thread-retry"}),". It is a plain notification — re-request the chats, and clear ",e.jsx(t.code,{children:"threadsError"})," once the load succeeds. An error supersedes ",e.jsx(t.code,{children:"threadsLoading"}),", so the two never render together."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`launcher.threadsError = 'Could not load your chat history.';

launcher.addEventListener('forge-ai-chatbot-launcher-thread-retry', async () => {
  launcher.threadsError = undefined;
  launcher.threadsLoading = true;
  try {
    launcher.threads = await api.loadThreads();
  } catch (error) {
    launcher.threadsError = error.message || 'Could not load your chat history.';
  } finally {
    launcher.threadsLoading = false;
  }
});
`})}),`
`,e.jsxs(t.p,{children:["Always fall back to your own copy rather than assigning ",e.jsx(t.code,{children:"error.message"}),' directly — an empty message reads as "no error" and hides the badge along with the retry.']}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"moving-between-views",children:"Moving Between Views"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"viewState"})," is read-only; each view has a method that navigates to it. ",e.jsx(t.code,{children:"startConversation()"})," and ",e.jsx(t.code,{children:"showHistory()"})," move to the conversation and full history views, and ",e.jsx(t.code,{children:"showWelcome()"})," returns to the welcome view. All three change only the view — use ",e.jsx(t.code,{children:"startNewChat()"})," when the conversation itself should be reset, since it also clears messages, nulls ",e.jsx(t.code,{children:"selectedThreadId"}),", and resets the adapter's thread."]}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(h,{})]})}function we(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(o,{...r})}):o(r)}export{we as default};
