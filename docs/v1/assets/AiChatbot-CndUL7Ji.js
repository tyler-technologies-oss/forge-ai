import{j as e,M as r,T as o,C as a}from"./blocks-DyxQ5h-6.js";import{useMDXComponents as i}from"./index-Dpp0QbRa.js";import{C as c}from"./CustomArgTypes-BFn1GFq2.js";import{A as l,D as d}from"./AiChatbot.stories-oV3s2ezM.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Zcg0BVm6.js";import"./utils-MZ-Apu34.js";import"./ai-chatbot-base-CW9EDohY.js";import"./property-BwdZQfVj.js";import"./mock-adapter-DymPxr2h.js";import"./markdown-C0nyZhUE.js";import"./ai-chatbot-_1tXP1Ou.js";import"./custom-element-UsVr97OX.js";import"./class-map-DiAfL0Hh.js";import"./ref-C44v86zn.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DLm2hDpi.js";import"./ai-spinner-BmIi6t8a.js";import"./tooltip-D2YWuTc5.js";import"./overlay-BozJNug4.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-6yKCWjyb.js";import"./ai-icon-h0OKGan7.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-wJLAmrRD.js";import"./ai-dropdown-menu-CHj1KAHe.js";import"./query-assigned-nodes-38n7MnEB.js";import"./if-defined-B6Pmx3Zn.js";import"./popover-DBDlbPqH.js";import"./ai-dropdown-menu-item-CjAFJb_S.js";import"./ai-modal-De63d5qd.js";import"./ai-agent-info-xzAg_x0f.js";import"./ai-agent-selector-CPUj_l8D.js";import"./ai-chat-interface-CcpsKL1t.js";import"./ai-prompt-Bm6Gs2Jp.js";import"./ai-conversations-panel-DPcOlOdM.js";import"./ai-edit-thread-uPP8YqLG.js";import"./infinite-scroll-controller-5t8GywO2.js";import"./ai-file-picker-kialF_tK.js";import"./ai-message-thread-DGj-5SCm.js";import"./ai-response-message-toolbar-DOwuhBFk.js";import"./ai-empty-state-5CBsPnmE.js";import"./ai-error-message-C9FaSZU8.js";import"./ai-response-message-_HJIXmN3.js";import"./ai-thinking-indicator-CkyYaPr3.js";import"./ai-user-message-DIUScw3i.js";import"./ai-user-message-toolbar-BeVwLqRW.js";import"./ai-suggestions-FpB68h0c.js";import"./ai-voice-input-BXWE5HB9.js";import"./ai-artifact-0KSxA5kS.js";import"./mock-agents-Cm47oyNv.js";import"./scaffold-U0d4Qd0C.js";import"./split-button-3yg9u6t_.js";import"./index-BlIyWhMg.js";import"./index-DHdTq9Yu.js";function s(n){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
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
