import{x as p}from"./iframe-BvshHYB0.js";import"./ai-chatbot-B7Z7xjis.js";import{M as m}from"./mock-adapter-_zUjDDpK.js";import"./ai-empty-state-BcCpNoNS.js";import"./ai-suggestions-DZdce_pM.js";import"./ai-voice-input-B-7XT_L_.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,y="forge-ai-chatbot",S={title:"AI Components/Primitives/Chatbot",component:y,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},enableFileUpload:{control:"boolean",description:"Enable file upload functionality"},enableVoiceInput:{control:"boolean",description:"Enable voice input functionality"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"}},args:{placeholder:"Ask a question...",enableFileUpload:!1,enableVoiceInput:!1,showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1},render:t=>{const a=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=e("forge-ai-chatbot-connected"),i=e("forge-ai-chatbot-disconnected"),o=e("forge-ai-chatbot-message-sent"),s=e("forge-ai-chatbot-message-received"),n=e("forge-ai-chatbot-tool-call"),b=e("forge-ai-chatbot-error"),f=e("forge-ai-chatbot-expand"),u=e("forge-ai-chatbot-minimize"),x=e("forge-ai-chatbot-clear"),$=e("forge-ai-chatbot-export"),v=e("forge-ai-chatbot-info");return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${t.placeholder}
          ?enable-file-upload=${t.enableFileUpload}
          ?enable-voice-input=${t.enableVoiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${r}
          @forge-ai-chatbot-disconnected=${i}
          @forge-ai-chatbot-message-sent=${o}
          @forge-ai-chatbot-message-received=${s}
          @forge-ai-chatbot-tool-call=${n}
          @forge-ai-chatbot-error=${b}
          @forge-ai-chatbot-expand=${f}
          @forge-ai-chatbot-minimize=${u}
          @forge-ai-chatbot-clear=${x}
          @forge-ai-chat-header-export=${$}
          @forge-ai-chatbot-info=${v}>
        </forge-ai-chatbot>
      </div>
    `}},c={},l={render:t=>{const a=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${a}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${t.placeholder}
          @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},d={render:t=>{const a=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],r=new m({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:a}),i=o=>{e("forge-ai-chatbot-tool-call")(o.detail)};return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot .adapter=${r} placeholder=${t.placeholder} @forge-ai-chatbot-tool-call=${i}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    `}},g={render:t=>{const a="ai-chatbot-thread-state",r=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const o=document.querySelector("forge-ai-chatbot");if(!o)return;const s=localStorage.getItem(a);if(s)try{const n=JSON.parse(s);o.setThreadState(n)}catch(n){console.error("Failed to restore thread state:",n)}o.addEventListener("forge-ai-chatbot-message-received",()=>{const n=o.getThreadState();localStorage.setItem(a,JSON.stringify(n))}),o.addEventListener("forge-ai-chatbot-message-sent",()=>{const n=o.getThreadState();localStorage.setItem(a,JSON.stringify(n))}),o.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(a)})},0),p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${r}
          .suggestions=${i}
          placeholder=${t.placeholder}
          show-minimize-button
          @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}>
          <span slot="header-title">Persistent Chat</span>
        </forge-ai-chatbot>
      </div>
    `}},h={args:{enableVoiceInput:!0},render:t=>{const a=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=e("forge-ai-chatbot-connected"),i=e("forge-ai-chatbot-disconnected"),o=e("forge-ai-chatbot-message-sent"),s=e("forge-ai-chatbot-message-received"),n=e("forge-ai-chatbot-tool-call"),b=e("forge-ai-chatbot-error"),f=e("forge-ai-chatbot-expand"),u=e("forge-ai-chatbot-minimize"),x=e("forge-ai-chatbot-clear"),$=e("forge-ai-chatbot-export"),v=e("forge-ai-chatbot-info");return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">

        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${t.placeholder}
          ?enable-file-upload=${t.enableFileUpload}
          ?enable-voice-input=${t.enableVoiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${r}
          @forge-ai-chatbot-disconnected=${i}
          @forge-ai-chatbot-message-sent=${o}
          @forge-ai-chatbot-message-received=${s}
          @forge-ai-chatbot-tool-call=${n}
          @forge-ai-chatbot-error=${b}
          @forge-ai-chatbot-expand=${f}
          @forge-ai-chatbot-minimize=${u}
          @forge-ai-chatbot-clear=${x}
          @forge-ai-chat-header-export=${$}
          @forge-ai-chatbot-info=${v}>
        </forge-ai-chatbot>
      </div>
    `}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'Help me write an email',
      value: 'email'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }, {
      text: 'Plan a meeting',
      value: 'meeting'
    }, {
      text: 'Summarize a document',
      value: 'summarize'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const tools: ToolDefinition[] = [{
      name: 'getCurrentWeather',
      displayName: 'Get Current Weather',
      description: 'Get the current weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string',
            description: 'The city and state, e.g. San Francisco, CA'
          }
        },
        required: ['location']
      }
    }, {
      name: 'getUserInput',
      displayName: 'Get User Input',
      description: 'Prompts the user for input using a native dialog',
      parameters: {
        type: 'object',
        properties: {
          prompt: {
            type: 'string',
            description: 'The message to show the user'
          }
        },
        required: ['prompt']
      }
    }];
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: true,
      streamingDelay: 50,
      responseDelay: 500,
      tools
    });
    const onToolCall = (e: CustomEvent) => {
      action('forge-ai-chatbot-tool-call')(e.detail);
    };
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} @forge-ai-chatbot-tool-call=\${onToolCall}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-thread-state';
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'What is TypeScript?',
      value: 'typescript'
    }, {
      text: 'Explain web components',
      value: 'webcomponents'
    }, {
      text: 'How do I use localStorage?',
      value: 'localstorage'
    }] as Suggestion[];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const state = JSON.parse(saved);
          chatbot.setThreadState(state);
        } catch (error) {
          console.error('Failed to restore thread state:', error);
        }
      }
      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-message-sent', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-clear', () => {
        localStorage.removeItem(STORAGE_KEY);
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          show-minimize-button
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}>
          <span slot="header-title">Persistent Chat</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    enableVoiceInput: true
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onConnected = action('forge-ai-chatbot-connected');
    const onDisconnected = action('forge-ai-chatbot-disconnected');
    const onMessageSent = action('forge-ai-chatbot-message-sent');
    const onMessageReceived = action('forge-ai-chatbot-message-received');
    const onToolCall = action('forge-ai-chatbot-tool-call');
    const onError = action('forge-ai-chatbot-error');
    const onExpand = action('forge-ai-chatbot-expand');
    const onMinimize = action('forge-ai-chatbot-minimize');
    const onClear = action('forge-ai-chatbot-clear');
    const onExport = action('forge-ai-chatbot-export');
    const onInfo = action('forge-ai-chatbot-info');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">

        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          ?enable-file-upload=\${args.enableFileUpload}
          ?enable-voice-input=\${args.enableVoiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${onConnected}
          @forge-ai-chatbot-disconnected=\${onDisconnected}
          @forge-ai-chatbot-message-sent=\${onMessageSent}
          @forge-ai-chatbot-message-received=\${onMessageReceived}
          @forge-ai-chatbot-tool-call=\${onToolCall}
          @forge-ai-chatbot-error=\${onError}
          @forge-ai-chatbot-expand=\${onExpand}
          @forge-ai-chatbot-minimize=\${onMinimize}
          @forge-ai-chatbot-clear=\${onClear}
          @forge-ai-chat-header-export=\${onExport}
          @forge-ai-chatbot-info=\${onInfo}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...h.parameters?.docs?.source}}};const w=["Demo","WithSuggestions","WithTools","WithPersistence","WithVoiceInput"],M=Object.freeze(Object.defineProperty({__proto__:null,Demo:c,WithPersistence:g,WithSuggestions:l,WithTools:d,WithVoiceInput:h,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{M as A,c as D};
