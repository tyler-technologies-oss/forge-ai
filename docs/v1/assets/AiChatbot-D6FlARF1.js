import{j as e,M as r,T as o,C as a}from"./blocks-w_Pp9baK.js";import{useMDXComponents as i}from"./index-DKIApKMC.js";import{C as c}from"./CustomArgTypes-CHXY-D2X.js";import{A as l,D as d}from"./AiChatbot.stories-BV9OQq1f.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DD6s76Jt.js";import"./utils-BcVRbqrP.js";import"./ai-chatbot-base-Cj76UBcR.js";import"./property-Bc2L6Lfo.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-Dzg8Kyx2.js";import"./custom-element-UsVr97OX.js";import"./ref-BXuWK9B6.js";import"./class-map-CxP-NbxC.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B9FiagKu.js";import"./ai-spinner-BLYhYWDI.js";import"./tooltip-BHG3W31V.js";import"./overlay-DUi4pOzV.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CbmjabqH.js";import"./ai-icon-7Vj3PVzK.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BW_4typY.js";import"./ai-dropdown-menu-Dn875ui_.js";import"./query-assigned-nodes-CfogLvjY.js";import"./if-defined-CYyUW0IP.js";import"./popover-C7KKH-mP.js";import"./ai-dropdown-menu-item-CMXPuxC8.js";import"./ai-modal-u7QmjeDa.js";import"./ai-agent-info-BxHJWI25.js";import"./ai-agent-selector-Cx9NBTCM.js";import"./ai-chat-interface-CCDm2-0R.js";import"./ai-prompt-Dtyn4vlm.js";import"./ai-conversations-panel-DBHeXBm3.js";import"./ai-edit-thread-B6-Nsbzm.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-BHWDdGLK.js";import"./ai-message-thread-DV9Cbw82.js";import"./ai-response-message-toolbar-B-0K9udc.js";import"./ai-empty-state-E0vuGhw_.js";import"./ai-error-message-ChjrM9EQ.js";import"./ai-response-message-Dg5w2sEP.js";import"./ai-thinking-indicator-Bs0vqKYw.js";import"./ai-user-message-BKBZxmmr.js";import"./ai-user-message-toolbar-h91Zx_6_.js";import"./ai-suggestions-tRAyK9F5.js";import"./ai-voice-input-B4AroyRO.js";import"./ai-artifact-BhSfdh6J.js";import"./mock-agents-Cm47oyNv.js";import"./scaffold-yR_xQJ6E.js";import"./split-button-r7vOs2_J.js";import"./index-DgkwfHI5.js";import"./index-C4wfgG_V.js";function s(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`,e.jsx(c,{})]})}function he(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{he as default};
