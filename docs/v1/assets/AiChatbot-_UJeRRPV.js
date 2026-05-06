import{j as e,M as r,T as o,C as a}from"./blocks-BLy_mcST.js";import{useMDXComponents as i}from"./index-DfXidIFW.js";import{C as c}from"./CustomArgTypes-B9H7LfG2.js";import{A as l,D as d}from"./AiChatbot.stories-BS_tFtSx.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C9phzLEP.js";import"./utils-BAnNUKvG.js";import"./ai-chatbot-base-CvHf5hKP.js";import"./property-m-J6qff4.js";import"./mock-adapter-BYw0QxWR.js";import"./utils-BojVjD0a.js";import"./ai-chatbot-DdMawAbA.js";import"./custom-element-UsVr97OX.js";import"./ref-gqbHHNDL.js";import"./class-map-3MfCNIMv.js";import"./base-Vz5TpuLf.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BUXTIceu.js";import"./ai-spinner-C3qn9KL4.js";import"./tooltip-BN6ykjCH.js";import"./overlay-CXUi99Tk.js";import"./ai-chat-header-CGOGG-5L.js";import"./ai-icon-CP9i2Cpb.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dm2BpTUo.js";import"./ai-dropdown-menu-DLKybbGT.js";import"./query-assigned-elements-D58BN_iA.js";import"./if-defined-B5NripEj.js";import"./popover-BOdtoD-p.js";import"./ai-dropdown-menu-item-B_Azgb1x.js";import"./ai-modal-DksJlSAZ.js";import"./ai-agent-info-BeSXdOK1.js";import"./ai-agent-selector-z71-_fRl.js";import"./ai-chat-interface-DU-8prit.js";import"./ai-file-picker-DR6272NG.js";import"./ai-message-thread-BTQOrl01.js";import"./ai-response-message-toolbar-CoMn0R4X.js";import"./ai-empty-state-CC0I3JbI.js";import"./ai-error-message-CIRMabRz.js";import"./ai-response-message-DUDeek9e.js";import"./ai-thinking-indicator-Mkc_eRPF.js";import"./ai-user-message-CNX0X0qG.js";import"./ai-user-message-toolbar-v11QQggR.js";import"./ai-prompt-CVWOOp1o.js";import"./ai-suggestions-Do0WGkA3.js";import"./ai-voice-input-BdjMmbMP.js";import"./ai-artifact-DS4RitJQ.js";import"./mock-agents-Cm47oyNv.js";function s(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(o,{}),`
`,e.jsx(t.p,{children:"The AI Chatbot component provides a complete, self-contained chat interface that allows for any protocol implementation using an adapter pattern. It handles message rendering, streaming responses, tool execution, and file attachments."}),`
`,e.jsx(a,{of:d}),`
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
`,e.jsx(t.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Escape"}),": Abort the current streaming response"]}),`
`]}),`
`,e.jsx(t.h2,{id:"api",children:"API"}),`
`,e.jsx(c,{})]})}function oe(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{oe as default};
