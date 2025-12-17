import{x as p}from"./iframe-CJ1HM2fh.js";import"./ai-chatbot-Cj02Ea8X.js";import"./ai-message-thread-Be4Qumad.js";import"./utils-C_XXmvvR.js";import"./ai-empty-state-Da9ekMtc.js";import"./ai-suggestions-YN3oCiHt.js";import"./ai-voice-input-BOTckuvJ.js";import{M as m}from"./mock-adapter-MuFwfiLK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,v="forge-ai-chatbot",w={title:"AI Components/Primitives/Chatbot",component:v,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},headerTitle:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"}},args:{placeholder:"Ask a question...",headerTitle:"AI Assistant",fileUpload:"off",voiceInput:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1},render:e=>{const a=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=t("forge-ai-chatbot-connected"),s=t("forge-ai-chatbot-disconnected"),o=t("forge-ai-chatbot-message-sent"),h=t("forge-ai-chatbot-message-received"),n=t("forge-ai-chatbot-tool-call"),g=t("forge-ai-chatbot-error"),u=t("forge-ai-chatbot-expand"),b=t("forge-ai-chatbot-minimize"),f=t("forge-ai-chatbot-clear"),$=t("forge-ai-chatbot-export"),x=t("forge-ai-chatbot-info");return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-gradient-container>
          <forge-ai-chatbot
            .adapter=${a}
            placeholder=${e.placeholder}
            file-upload=${e.fileUpload}
            voice-input=${e.voiceInput}
            ?show-expand-button=${e.showExpandButton}
            ?show-minimize-button=${e.showMinimizeButton}
            ?expanded=${e.expanded}
            ?enable-reactions=${e.enableReactions}
            .minimizeIcon=${e.minimizeIcon}
            @forge-ai-chatbot-connected=${i}
            @forge-ai-chatbot-disconnected=${s}
            @forge-ai-chatbot-message-sent=${o}
            @forge-ai-chatbot-message-received=${h}
            @forge-ai-chatbot-tool-call=${n}
            @forge-ai-chatbot-error=${g}
            @forge-ai-chatbot-expand=${u}
            @forge-ai-chatbot-minimize=${b}
            @forge-ai-chatbot-clear=${f}
            @forge-ai-chat-header-export=${$}
            @forge-ai-chatbot-info=${x}>
            ${e.headerTitle?p`<span slot="header-title">${e.headerTitle}</span>`:""}
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
          </forge-ai-chatbot>
        </forge-ai-gradient-container>
      </div>
    `}},r={},c={render:e=>{const a=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${a}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}>
          <span slot="header-title">AI Assistant with Suggestions</span>
        </forge-ai-chatbot>
      </div>
    `}},l={render:e=>{const a=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],i=new m({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:a}),s=o=>{t("forge-ai-chatbot-tool-call")(o.detail)};return p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${i}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-tool-call=${s}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    `}},d={args:{showMinimizeButton:!0},render:e=>{const a="ai-chatbot-thread-state",i=new m({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),s=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const o=document.querySelector("forge-ai-chatbot");if(!o)return;const h=localStorage.getItem(a);if(h)try{const n=JSON.parse(h);o.setThreadState(n)}catch(n){console.error("Failed to restore thread state:",n)}o.addEventListener("forge-ai-chatbot-message-received",()=>{const n=o.getThreadState();localStorage.setItem(a,JSON.stringify(n))}),o.addEventListener("forge-ai-chatbot-message-sent",()=>{const n=o.getThreadState();localStorage.setItem(a,JSON.stringify(n))}),o.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(a)})},0),p`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${i}
          .suggestions=${s}
          placeholder=${e.placeholder}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}>
          <span slot="header-title">Persistent Chat</span>
        </forge-ai-chatbot>
      </div>
    `}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-disconnected=\${action('forge-ai-chatbot-disconnected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}>
          <span slot="header-title">AI Assistant with Suggestions</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-tool-call=\${onToolCall}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimizeButton: true
  },
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
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}>
          <span slot="header-title">Persistent Chat</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const y=["Demo","WithSuggestions","WithTools","WithPersistence"],M=Object.freeze(Object.defineProperty({__proto__:null,Demo:r,WithPersistence:d,WithSuggestions:c,WithTools:l,__namedExportsOrder:y,default:w},Symbol.toStringTag,{value:"Module"}));export{M as A,r as D};
