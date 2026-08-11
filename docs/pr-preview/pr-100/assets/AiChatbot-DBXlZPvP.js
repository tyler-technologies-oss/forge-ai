import{j as e,M as r,T as o,C as a}from"./blocks-XSgIOzBr.js";import{useMDXComponents as i}from"./index-BBhWSdBn.js";import{C as c}from"./CustomArgTypes-BsBPTET5.js";import{A as l,D as d}from"./AiChatbot.stories-DP-0IjjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CT8aTrUD.js";import"./utils-Cp678McA.js";import"./ai-chatbot-base-CWYaAuSG.js";import"./provide-Bxw6gKTd.js";import"./consume-D3B5J4hk.js";import"./property-BYN9SZug.js";import"./ai-message-thread-CwqhL2dx.js";import"./custom-element-UsVr97OX.js";import"./class-map-DqaYJRwU.js";import"./when-CI7b_ccM.js";import"./markdown-CtLA8yAF.js";import"./if-defined-Ctqvb-ON.js";import"./ai-response-message-toolbar-BwlSm175.js";import"./tooltip-CW0bSAwg.js";import"./overlay-CkC9bm_E.js";import"./floating-ui.dom-alButkyJ.js";import"./popover-C31U5eWB.js";import"./ref-kKaXfD1S.js";import"./ai-spinner-CbunOA-Q.js";import"./ai-thinking-indicator-1U5Ry1f2.js";import"./ai-empty-state-B8rhv3e3.js";import"./ai-error-message-D1Ga38or.js";import"./ai-response-message-CnZ_638a.js";import"./ai-user-message-CMqBaTZX.js";import"./ai-user-message-toolbar-bdzNKp7D.js";import"./mock-adapter-6zZ6n2sP.js";import"./ai-chatbot-DKovxT-G.js";import"./ai-attachment-ZtYpr-6d.js";import"./ai-chat-header-B5KievFi.js";import"./ai-icon-B_MpfO3w.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CKrFco1R.js";import"./ai-dropdown-menu-CF8QeNYI.js";import"./query-assigned-nodes-Bae88zyY.js";import"./ai-dropdown-menu-item-CISMvfun.js";import"./ai-modal-TqbNCh2K.js";import"./ai-agent-info-BrzqVyJE.js";import"./ai-agent-selector-BDdhk9WV.js";import"./ai-chat-interface-CjGxkuME.js";import"./ai-prompt-Dkiq_vL3.js";import"./ai-conversations-panel-MZL5s_XE.js";import"./ai-edit-thread-04tCXzP7.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-8c3pAnbZ.js";import"./ai-suggestions-D00Es9-w.js";import"./ai-voice-input-D704c7Ra.js";import"./ai-artifact-BAu65XLl.js";import"./mock-agents-Cm47oyNv.js";import"./scaffold-BhZ0tNEP.js";import"./split-button-B-qhQz7B.js";import"./index-CCTJ_GFi.js";import"./index-CkDSFluF.js";function s(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
`,e.jsx(c,{})]})}function ue(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{ue as default};
