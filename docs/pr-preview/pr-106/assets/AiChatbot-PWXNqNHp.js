import{j as e,M as r,T as a,C as s}from"./blocks-BpClKaU0.js";import{useMDXComponents as o}from"./index-CDRGIbzR.js";import{C as c}from"./CustomArgTypes-C_Trkh1G.js";import{A as l,D as d,C as p}from"./AiChatbot.stories-C43VwIMK.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B3wVpGbw.js";import"./utils-qCOiSbr7.js";import"./ai-chatbot-base-L97n06IJ.js";import"./property-CiFKxx_M.js";import"./agent-adapter-BpTdLjYO.js";import"./utils-CwmN9dOd.js";import"./ai-chatbot-yessJll3.js";import"./custom-element-UsVr97OX.js";import"./ref-Cxpt2iWo.js";import"./class-map-Ct52J7it.js";import"./when-CI7b_ccM.js";import"./ai-attachment-C6CTGAN9.js";import"./ai-spinner-CM-LLkvm.js";import"./tooltip-B2N7lJ3N.js";import"./overlay-2dUuaf8E.js";import"./floating-ui.dom-alButkyJ.js";import"./ai-chat-header-D1b5yB7H.js";import"./ai-icon-CZqQybJb.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bc5sG72k.js";import"./ai-dropdown-menu-8dlhhS5S.js";import"./query-assigned-nodes-BHJ3KLGX.js";import"./if-defined-AzmMqBG3.js";import"./popover-l21m8cNx.js";import"./ai-dropdown-menu-item-D0ZKZXpx.js";import"./ai-modal-CpLT7w5H.js";import"./ai-agent-info-BjKN1cQy.js";import"./ai-agent-selector-Ch_YgEp8.js";import"./ai-chat-interface-CrtYVEDZ.js";import"./ai-prompt-Dj5m4Dqa.js";import"./ai-conversations-panel-DMB4YZmD.js";import"./ai-edit-thread-DU08xpTF.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-C7lJAySu.js";import"./ai-message-thread-tnoN-1yu.js";import"./ai-response-message-toolbar-GtjY-9nh.js";import"./ai-thinking-indicator--oRtY9nz.js";import"./ai-client-message-C_YNYVpK.js";import"./ai-empty-state-C63x5xcj.js";import"./ai-error-message-CGA3URf4.js";import"./ai-response-message-DXjul9by.js";import"./ai-user-message-CBDGs2aG.js";import"./ai-user-message-toolbar-T9YpFL1O.js";import"./ai-suggestions-D5uu2bV7.js";import"./ai-voice-input-DId5l-v-.js";import"./ai-artifact-Bz63rFMw.js";import"./mock-adapter-BpgeerXX.js";import"./mock-agents-Cm47oyNv.js";import"./scaffold-Bq9kM0xl.js";import"./split-button-BPIRGG5g.js";import"./index-DYMkezL7.js";import"./index-ClJewB8x.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(a,{}),`
`,e.jsx(t.p,{children:"The AI Chatbot component provides a complete, self-contained chat interface that allows for any protocol implementation using an adapter pattern. It handles message rendering, streaming responses, tool execution, and file attachments."}),`
`,e.jsx(s,{of:d}),`
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
`,e.jsx(s,{of:p}),`
`,e.jsx(t.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Escape"}),": Abort the current streaming response"]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{})]})}function xe(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{xe as default};
