import{j as e,M as r,T as o,C as s}from"./blocks-Doz6OgrD.js";import{useMDXComponents as i}from"./index-Rz9zF6f9.js";import{C as d}from"./CustomArgTypes-Bzwslfuw.js";import{A as l,D as c,C as h,T as p,W as m}from"./AiChatbot.stories-Xx7GrulO.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-RRnsZQGs.js";import"./utils-Cwf4fDTu.js";import"./ref-D94Gb322.js";import"./class-map-DbpK6gRv.js";import"./ai-chatbot-base-DuDVO0Y3.js";import"./property-TwXTZb3z.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-5e-vvs4p.js";import"./custom-element-UsVr97OX.js";import"./when-CI7b_ccM.js";import"./utils-DIqd7FWX.js";import"./ai-attachment-BdSrwaZe.js";import"./ai-spinner-B24YL9KZ.js";import"./tooltip-DNefRKJS.js";import"./query-BSUsQcO2.js";import"./overlay-OE7BYOon.js";import"./floating-ui.dom-CHtvoTQ1.js";import"./ai-chat-header-9jz2_nkN.js";import"./ai-icon-CXpivbd_.js";import"./ai-gradient-container-dXHKhEkY.js";import"./ai-dropdown-menu-BHt4BoIB.js";import"./query-assigned-elements-CbIKkRRA.js";import"./if-defined-JVCyC3He.js";import"./popover-DcHJkMR2.js";import"./query-assigned-nodes-Cpd6AYdi.js";import"./ai-dropdown-menu-item--DfSoXpi.js";import"./ai-modal-Ct2nR55q.js";import"./ai-agent-info-Cr9fmLmo.js";import"./ai-agent-selector-DDAAGI6D.js";import"./ai-chat-interface-D9_jsDe7.js";import"./ai-prompt-S0USwoCX.js";import"./ai-conversations-panel-BJsU2VCP.js";import"./ai-edit-thread-DntubQvC.js";import"./ai-error-message-PO7j5vW9.js";import"./ai-file-picker-iH4eKtbm.js";import"./ai-message-thread-BLV6tWto.js";import"./ai-response-message-toolbar-DZEq7cSD.js";import"./ai-thinking-indicator-CF9HmCHP.js";import"./ai-client-message-acWAAD8c.js";import"./ai-empty-state-CzfEfi2o.js";import"./ai-response-message-nwNUaBTc.js";import"./ai-user-message-CVapkouO.js";import"./ai-user-message-toolbar-oxPP8veV.js";import"./ai-suggestions-BihwA9Rh.js";import"./ai-voice-input-CWKEPF1h.js";import"./ai-artifact-CMkzi1G3.js";import"./mock-adapter-BpgeerXX.js";import"./mock-agents-Cm47oyNv.js";import"./scaffold-CqUsJtDT.js";import"./split-button-CtxBLhCa.js";import"./index-Cd592fEl.js";import"./index-7WzzMbpu.js";function a(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(o,{}),`
`,e.jsx(t.p,{children:"The AI Chatbot component provides a complete, self-contained chat interface that allows for any protocol implementation using an adapter pattern. It handles message rendering, streaming responses, tool execution, and file attachments."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"features",children:"Features"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Adapter Pattern"}),": Abstract communication layer for any protocol implementation"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Streaming Support"}),": Real-time message streaming with visual indicators"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tool Execution"}),": Client-side tool registration and execution"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Markdown Rendering"}),": Rich text formatting with code blocks, lists, and links"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"File Attachments"}),": Optional file upload capability"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Client Context"}),": Inject application context into conversations"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Event-Driven"}),": Comprehensive event system for integration"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"User Reactions"}),": Optional thumbs up/down feedback buttons"]}),`
`]}),`
`,e.jsx(t.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { AgUiAdapter, generateId } from '@tylertech/forge-ai';

const adapter = new AgUiAdapter(
  {
    url: 'https://api.example.com/api/agents/your-agent-id',
    credentials: 'include'
  },
  generateId('thread')
);

const chatbot = document.createElement('forge-ai-chatbot');
chatbot.adapter = adapter;
document.body.appendChild(chatbot);
`})}),`
`,e.jsx(t.h2,{id:"with-tools",children:"With Tools"}),`
`,e.jsx(t.p,{children:"Register client-side tools for the agent to execute:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const tools = [
  {
    name: 'getCurrentWeather',
    description: 'Get the current weather for a location',
    parameters: {
      type: 'object',
      properties: {
        location: { type: 'string' }
      },
      required: ['location']
    }
  }
];

chatbot.tools = tools;

chatbot.addEventListener('forge-ai-chatbot-tool-call', async e => {
  const { toolName, arguments: args, respond } = e.detail;

  if (toolName === 'getCurrentWeather') {
    const weather = await fetchWeather(args.location);
    await respond(weather);
  }
});
`})}),`
`,e.jsx(t.h2,{id:"creating-a-custom-adapter",children:"Creating a Custom Adapter"}),`
`,e.jsxs(t.p,{children:["Extend the ",e.jsx(t.code,{children:"AgentAdapter"})," class for custom protocols:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { AgentAdapter, type ChatMessage, type FileAttachment } from '@tylertech/forge-ai';

class CustomAdapter extends AgentAdapter {
  public async connect(): Promise<void> {
    // Initialize connection
    this.updateState({ isConnected: true });
  }

  public async disconnect(): Promise<void> {
    // Clean up connection
    this.updateState({ isConnected: false });
  }

  public sendMessage(messages: ChatMessage[], attachments?: FileAttachment[]): void {
    // Send message and emit events back
    this.updateState({ isRunning: true });

    const messageId = 'msg-' + Date.now();

    // Start message
    this.emitMessageStart(messageId);

    // Stream content
    this.emitMessageDelta(messageId, 'Hello');
    this.emitMessageDelta(messageId, ' World');

    // End message
    this.emitMessageEnd(messageId);
    this.updateState({ isRunning: false });
  }

  public sendToolResult(toolCallId: string, result: unknown): void {
    // Handle tool result response
  }

  public abort(): void {
    // Cancel ongoing requests
    this.updateState({ isRunning: false });
  }
}

// Usage
const adapter = new CustomAdapter();
`})}),`
`,e.jsx(t.h3,{id:"protected-methods-for-subclasses",children:"Protected Methods for Subclasses"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"emitMessageStart(messageId: string)"}),": Signal start of new message"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"emitMessageDelta(messageId: string, delta: string)"}),": Stream content chunk"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"emitMessageEnd(messageId: string)"}),": Signal message complete"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"emitToolCall(event: ToolCallEvent)"}),": Request tool execution"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"emitError(message: string)"}),": Signal error occurred"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"updateState(updates: Partial<AdapterState>)"}),": Update connection/running state"]}),`
`]}),`
`,e.jsx(t.h2,{id:"client-messages",children:"Client Messages"}),`
`,e.jsxs(t.p,{children:["Use ",e.jsx(t.code,{children:"addClientMessage()"})," / ",e.jsx(t.code,{children:"removeClientMessage()"}),` to show host-driven status messages (session
expiry, upload progress, agent-switch banners) in the thread without touching the conversation the
adapter sees. They're safe to call at any time, including while a response is streaming.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`const id = chatbot.addClientMessage({
  kind: 'error',
  header: 'Session expired',
  content: 'Your session expired. Please refresh the page to re-authenticate.',
  actions: [{ id: 'refresh', label: 'Refresh', onClick: () => location.reload() }]
});

// Later, once your own logic determines it's no longer relevant:
chatbot.removeClientMessage(id);

// Pass the same id again to upsert (replace) rather than stack a new message:
chatbot.addClientMessage({ id: 'upload-status', kind: 'info', content: 'Uploading...' });
chatbot.addClientMessage({ id: 'upload-status', kind: 'success', content: 'Upload complete.' });
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"kind"})," is one of ",e.jsx(t.code,{children:"'text' | 'info' | 'warning' | 'error' | 'success'"})," (default ",e.jsx(t.code,{children:"'text'"}),`, matching the
plain italic system-message style). Removal is never automatic - forge-ai has no way to know when a
host-specific condition (e.g. "session recovered") has been satisfied, so call `,e.jsx(t.code,{children:"removeClientMessage"}),`
from your own event handling.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h2,{id:"conversation-history",children:"Conversation History"}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"threads"})," (and optionally ",e.jsx(t.code,{children:"threadsLoading"}),") to populate the conversations panel, shown when ",e.jsx(t.code,{children:"showConversationsButton"})," is set."]}),`
`,e.jsx(t.h3,{id:"owning-thread-selection",children:"Owning Thread Selection"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"forge-ai-chatbot-thread-select"})," is cancelable. By default the component sets ",e.jsx(t.code,{children:"selectedThreadId"})," itself as soon as a thread is clicked, which means a server load that later fails leaves the panel highlighting a thread that never opened. Call ",e.jsx(t.code,{children:"preventDefault()"})," to own the commit instead:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`chatbot.addEventListener('forge-ai-chatbot-thread-select', async evt => {
  evt.preventDefault();
  chatbot.threadsError = undefined;
  chatbot.threadsLoading = true;

  try {
    const messages = await api.loadThread(evt.detail.id);
    chatbot.selectedThreadId = evt.detail.id;
    await chatbot.setThreadState({ threadId: evt.detail.id, messages });
  } catch (error) {
    // Nothing to undo - selectedThreadId was never touched.
    chatbot.threadsError = error.message || 'Could not open that chat.';
  } finally {
    chatbot.threadsLoading = false;
  }
});
`})}),`
`,e.jsxs(t.p,{children:["The conversations panel closes either way, so the user is not left staring at a list while the load runs. Set ",e.jsx(t.code,{children:"threadsError"})," on failure rather than reverting anything: the conversations button picks up an error badge so the failure is still visible with the panel closed, and reopening the panel shows the message with a ",e.jsx(t.strong,{children:"Retry"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h3,{id:"handling-a-failed-history-load",children:"Handling a Failed History Load"}),`
`,e.jsxs(t.p,{children:["Set ",e.jsx(t.code,{children:"threadsError"})," to a message when a thread load fails. The conversations panel shows it with a ",e.jsx(t.strong,{children:"Retry"}),' button in place of its "no chats yet" empty state, so a failure is not mistaken for an empty history.']}),`
`,e.jsxs(t.p,{children:["If threads are already loaded the list stays visible, and the message renders as a compact single line with a ",e.jsx(t.strong,{children:"Retry"})," instead of the banner. Where it sits depends on what failed: a failure that arrives while a page is in flight is a pagination failure, so it reads at the bottom of the list where the load-more spinner would have appeared. Any other failure — a rejected thread selection, for instance — is not tied to the end of the list, so it sits above it."]}),`
`,e.jsxs(t.p,{children:["Retry dispatches ",e.jsx(t.code,{children:"forge-ai-chatbot-thread-retry"})," — a plain notification. Re-request the threads and clear ",e.jsx(t.code,{children:"threadsError"})," once the load succeeds. An error supersedes ",e.jsx(t.code,{children:"threadsLoading"}),", so the two never render together. Always fall back to your own copy rather than assigning ",e.jsx(t.code,{children:"error.message"}),' directly — an empty message reads as "no error" and hides the badge along with the retry.']}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(t.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Escape"}),": Abort the current streaming response"]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{})]})}function ye(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{ye as default};
