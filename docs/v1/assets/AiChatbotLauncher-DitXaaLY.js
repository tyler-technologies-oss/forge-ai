import{j as e,M as o,T as i,C as n}from"./blocks-Q4ZzO5rO.js";import{useMDXComponents as r}from"./index-3zsMKvlp.js";import{C as h}from"./CustomArgTypes-DQz4TS2F.js";import{A as d,W as c,N as l,T as p,a as x,b as j,C as u,c as m,d as v,e as g}from"./AiChatbotLauncher.stories-Bm19qrNm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B-4WNlme.js";import"./utils-BKRQpDGl.js";import"./ref-CNt6LH5j.js";import"./class-map-BLfFbYud.js";import"./ai-chatbot-launcher-BAZ0Jw39.js";import"./custom-element-UsVr97OX.js";import"./property-D_pGc9VD.js";import"./query-B8RXkDXg.js";import"./when-CI7b_ccM.js";import"./style-map-D4a7s9cM.js";import"./ai-canvas--_nKOyaC.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-B4bbHXKC.js";import"./context-provider-NnzmXA_k.js";import"./context-consumer-CIN_xSLl.js";import"./ai-message-thread-CnRplzs3.js";import"./if-defined-B6G-hQmN.js";import"./ai-response-message-toolbar-CPC3K6sd.js";import"./tooltip-DWgUX2-7.js";import"./overlay-D-F8moK_.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./popover-DhpKIMVF.js";import"./ai-artifact-card-CcdIXUhG.js";import"./ai-spinner-Dhxn4ay-.js";import"./ai-thinking-indicator-3PeP_JAx.js";import"./ai-client-message-DJeVkWFd.js";import"./ai-empty-state-DFszVBMg.js";import"./ai-error-message-DftA6ode.js";import"./query-assigned-nodes-CCyPOGnv.js";import"./ai-response-message-YsNGKITz.js";import"./ai-user-message-viNfMZx5.js";import"./ai-user-message-toolbar-CyKM73na.js";import"./ai-chat-header-DPQg6yNW.js";import"./ai-icon-DhzNX6Di.js";import"./utils-DIqd7FWX.js";import"./ai-gradient-container-PNXS-Dn8.js";import"./ai-dropdown-menu-Bl7AYk6q.js";import"./query-assigned-elements-jx61II49.js";import"./ai-dropdown-menu-item-Cm7aM4zd.js";import"./ai-modal-C8uGZSGW.js";import"./ai-agent-info-DptRB4Yk.js";import"./ai-agent-selector-D_hJ_BiL.js";import"./storage-utils-C8x8JGnW.js";import"./ai-edit-thread-C71kymEL.js";import"./ai-attachment-B-aditwk.js";import"./ai-file-picker-Ctdna4R2.js";import"./ai-prompt-CTxIR_Ar.js";import"./ai-suggestions-BaMur3W_.js";import"./ai-voice-input-Bac0_gYj.js";import"./ai-threads-search-k2mOpnsZ.js";import"./canvas-table-tool-B8CA6B7I.js";import"./scaffold-FKe3-qJs.js";import"./split-button-BlPjcY7E.js";import"./create-tool-renderer-BxivDorU.js";import"./mock-adapter-BpXd5o7R.js";import"./index-BiUZ51VK.js";import"./index-DYotEvv4.js";function s(a){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d}),`
`,e.jsx(i,{}),`
`,e.jsx(t.p,{children:"The AI Chatbot Launcher provides a page-embedded chat experience featuring a centered welcome/hero view that transitions into a full conversation interface when the user sends their first message. It combines a visually engaging landing state with full chatbot functionality."}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Welcome view"}),": Centered hero layout with customizable icon, title, description, and suggestions"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Conversation view"}),": Full chat interface with header controls (clear, export, agent selection)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"History view"}),`: Full-height chat history browser with search, infinite scroll, and a keyboard-accessible "Load more" action, reached via the prompt bar's history button`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Animated transitions"}),": Smooth state changes between welcome, conversation, and history modes"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Artifact canvas"}),": A panel beside the conversation for tool output or app-provided content, with the thread narrowing to a sidebar-style column"]}),`
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
`,e.jsx(n,{of:c}),`
`,e.jsx(t.p,{children:'With no chats the popover shows "No chats yet", and a search with no matches shows "No chats found".'}),`
`,e.jsx(n,{of:l}),`
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
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h3,{id:"moving-between-views",children:"Moving Between Views"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"viewState"})," is read-only; each view has a method that navigates to it. ",e.jsx(t.code,{children:"startConversation()"})," and ",e.jsx(t.code,{children:"showHistory()"})," move to the conversation and full history views, and ",e.jsx(t.code,{children:"showWelcome()"})," returns to the welcome view. All three change only the view — use ",e.jsx(t.code,{children:"startNewChat()"})," when the conversation itself should be reset, since it also clears messages, nulls ",e.jsx(t.code,{children:"selectedThreadId"}),", and resets the adapter's thread."]}),`
`,e.jsx(t.h3,{id:"artifact-canvas",children:"Artifact Canvas"}),`
`,e.jsxs(t.p,{children:["The canvas is a panel that opens to the right of the conversation for content that deserves more room than a message: a large table, a document, a chart, or later an MCP App. When it opens, the conversation animates into a sidebar-style column (",e.jsx(t.code,{children:"chatWidth"}),", 420px by default) and the canvas takes the remaining width. It is only available in the conversation view; leaving that view closes it."]}),`
`,e.jsx(t.h4,{id:"resizing",children:"Resizing"}),`
`,e.jsxs(t.p,{children:["A handle between the conversation and the canvas lets users drag, or use the left and right arrow keys, to choose how the width is split. The conversation never gets narrower than 360px, and the canvas keeps at least 320px while the launcher is wide enough. Resizing is on by default; set ",e.jsx(t.code,{children:'canvas-resizable="off"'})," to hide the handle and keep the conversation at ",e.jsx(t.code,{children:"chat-width"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"chatWidth"})," follows the user's drag and ",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-canvas-resize"})," fires with the new ",e.jsx(t.code,{children:"chatWidth"})," when a drag or key step finishes. Resized widths are saved per tab in ",e.jsx(t.code,{children:"sessionStorage"})," and shared across tabs through ",e.jsx(t.code,{children:"localStorage"}),", so the next launcher starts at the last width. A launcher given an explicit ",e.jsx(t.code,{children:"chat-width"})," attribute ignores the saved value."]}),`
`,e.jsx(t.h4,{id:"opening-the-canvas",children:"Opening the canvas"}),`
`,e.jsx(t.p,{children:"There are three ways to put content in the canvas."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"From your app."})," Call ",e.jsx(t.code,{children:"openCanvas()"})," while in the conversation view. Without ",e.jsx(t.code,{children:"content"})," the ",e.jsx(t.code,{children:"canvas"})," slot is shown; pass a ",e.jsx(t.code,{children:"Node"})," as ",e.jsx(t.code,{children:"content"})," to mount something built on the fly. ",e.jsx(t.code,{children:"title"})," overrides ",e.jsx(t.code,{children:"canvasTitle"})," for that content, and ",e.jsx(t.code,{children:"canvas-actions"})," adds buttons to the canvas header. ",e.jsx(t.code,{children:"closeCanvas()"})," and the ",e.jsx(t.code,{children:"canvasOpen"})," getter round out the API. Both open and close dispatch cancelable events (",e.jsx(t.code,{children:"forge-ai-chatbot-launcher-canvas-open"})," / ",e.jsx(t.code,{children:"-canvas-close"}),"); a close forced by leaving the conversation view is not cancelable."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`launcher.openCanvas({ title: 'Release notes' }); // shows the \`canvas\` slot
launcher.openCanvas({ title: 'Report', content: buildReportElement() });
launcher.closeCanvas();
`})}),`
`,e.jsx(n,{of:j}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"From a tool definition."})," Add a ",e.jsx(t.code,{children:"canvas"})," block to a tool that already has a ",e.jsx(t.code,{children:"renderer"}),". The two have different jobs: ",e.jsx(t.code,{children:"renderer"})," is the tool's inline UI in the thread, which can be any design you like, and ",e.jsx(t.code,{children:"canvas.renderer"})," draws the full artifact in the canvas. The host injects a ",e.jsx(t.code,{children:"canvas"})," object into the inline renderer, next to ",e.jsx(t.code,{children:"toolCall"}),', so it can show an "open" affordance only where one will work and toggle the canvas from its own UI (see below).']}),`
`,e.jsxs(t.p,{children:["The demo tool in ",e.jsx(t.code,{children:"stories/utils/canvas-table-tool.ts"})," shows the pattern. The agent sends a ",e.jsx(t.code,{children:"title"}),", a short ",e.jsx(t.code,{children:"summary"}),", and the table data. Inline, ",e.jsx(t.code,{children:"demo-table-overview-card"})," shows an overview with a preview of the first rows and a button that calls ",e.jsx(t.code,{children:"canvas.toggle()"}),". The button opens ",e.jsx(t.code,{children:"demo-canvas-table"}),', the full table, in the canvas, and reads "Close table" while that table is open. Without ',e.jsx(t.code,{children:"canvas.available"})," the button is not shown."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`const tableTool: ToolDefinition<TableArgs> = {
  name: 'displayTable',
  parameters: {/* title, summary, headers, rows */},
  renderer: createToolRenderer({ elementTag: 'my-table-overview' }),
  canvas: {
    renderer: createToolRenderer({ elementTag: 'my-table' }),
    title: toolCall => toolCall.args.title
  }
};
`})}),`
`,e.jsx(n,{of:u}),`
`,e.jsxs(t.p,{children:["If you would rather not build the inline UI, set ",e.jsx(t.code,{children:"inline: 'card'"})," and the thread shows a compact ",e.jsx(t.code,{children:"<forge-ai-artifact-card>"})," instead, built from the ",e.jsx(t.code,{children:"canvas"})," block's ",e.jsx(t.code,{children:"title"}),", ",e.jsx(t.code,{children:"subtitle"}),", ",e.jsx(t.code,{children:"icon"}),", and ",e.jsx(t.code,{children:"actionLabel"}),". Each is a static value or a function of the typed tool call, so the agent supplies them through whatever ",e.jsx(t.code,{children:"args"})," you expose (or your handler's ",e.jsx(t.code,{children:"result"}),"). The mapping is documented in full under ",e.jsx(t.a,{href:"?path=/docs/getting-started-client-side-tools--docs",children:"Getting Started → Client-Side Tools"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsxs(t.p,{children:["With ",e.jsx(t.code,{children:"open: 'auto'"})," the canvas also opens as soon as the tool call renders, and the thread shows the artifact card (the default ",e.jsx(t.code,{children:"inline"})," for ",e.jsx(t.code,{children:"auto"}),") to reopen or collapse it. Tool calls loaded from history never auto-open."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"card-while-open"})," keeps the tool's own renderer inline and swaps it for the artifact card only while that tool call is the one in the canvas. The card is marked ",e.jsx(t.code,{children:"active"})," for the duration, clicking it again collapses the canvas, and the renderer returns when the canvas closes. Use it when the inline UI would just duplicate the canvas."]}),`
`,e.jsx(n,{of:g}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"From a renderer component."})," Tool renderers receive a ",e.jsx(t.code,{children:"canvas"})," property (",e.jsx(t.code,{children:"ToolCanvas"}),") alongside ",e.jsx(t.code,{children:"toolCall"}),", and ",e.jsx(t.code,{children:"render"})," functions receive it as an optional second argument, ",e.jsx(t.code,{children:"render(toolCall, { canvas })"}),", which hosts always pass."]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Member"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"available"})}),e.jsxs(t.td,{children:["Whether the host can show this tool call in a canvas. False for tools without a ",e.jsx(t.code,{children:"canvas"})," config and in hosts without a canvas."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"isOpen"})}),e.jsx(t.td,{children:"Whether this tool call is the one currently in the canvas."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"open()"})}),e.jsxs(t.td,{children:["Shows this tool call in the canvas. Accepts ",e.jsx(t.code,{children:"{ title }"}),". Returns false if it could not."]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"close()"})}),e.jsx(t.td,{children:"Closes the canvas if it is showing this tool call."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.code,{children:"toggle()"})}),e.jsx(t.td,{children:"Closes the canvas when this tool call is open, otherwise opens it."})]})]})]}),`
`,e.jsxs(t.p,{children:["The host assigns a new ",e.jsx(t.code,{children:"canvas"})," object whenever ",e.jsx(t.code,{children:"available"})," or ",e.jsx(t.code,{children:"isOpen"})," changes, so declaring it as a reactive property re-renders the renderer:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`@property({ attribute: false }) public canvas?: ToolCanvas;

render() {
  if (!this.canvas?.available) {
    return nothing;
  }
  return html\`<button @click=\${() => this.canvas.toggle()}>\${this.canvas.isOpen ? 'Close table' : 'Open table'}</button>\`;
}
`})}),`
`,e.jsxs(t.p,{children:["The launcher creates a fresh instance of the tool's renderer (or ",e.jsx(t.code,{children:"canvas.renderer"})," when provided) for the canvas. That instance has ",e.jsx(t.code,{children:"presentation = 'canvas'"}),", and its ",e.jsx(t.code,{children:"canvas.isOpen"})," is always true. ",e.jsx(t.code,{children:"render"})," functions run once per change to ",e.jsx(t.code,{children:"toolCall"})," or ",e.jsx(t.code,{children:"canvas"}),", so they get a snapshot of ",e.jsx(t.code,{children:"isOpen"}),"; use an element renderer for UI that must track it. ",e.jsx(t.code,{children:"requestCanvasOpen(target, { toolCallId, toolName, title })"})," and ",e.jsx(t.code,{children:"requestCanvasClose"})," remain available for code outside a renderer and now return whether the host handled the request."]}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(h,{})]})}function We(a={}){const{wrapper:t}={...r(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(s,{...a})}):s(a)}export{We as default};
