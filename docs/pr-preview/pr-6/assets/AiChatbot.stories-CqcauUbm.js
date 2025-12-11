import{x as h}from"./iframe-DDWPZmOE.js";import"./ai-chatbot-C0gljCg4.js";import{M as p}from"./mock-adapter-BN0uINtG.js";import"./ai-empty-state-CrMHvV0x.js";import"./ai-suggestions-B3X4csks.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,y="forge-ai-chatbot",S={title:"AI Components/Primitives/Chatbot",component:y,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},enableFileUpload:{control:"boolean",description:"Enable file upload functionality"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"}},args:{placeholder:"Ask a question...",enableFileUpload:!1,showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1},render:t=>{const o=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),r=e("forge-ai-chatbot-connected"),s=e("forge-ai-chatbot-disconnected"),a=e("forge-ai-chatbot-message-sent"),g=e("forge-ai-chatbot-message-received"),n=e("forge-ai-chatbot-tool-call"),m=e("forge-ai-chatbot-error"),u=e("forge-ai-chatbot-expand"),b=e("forge-ai-chatbot-minimize"),f=e("forge-ai-chatbot-clear"),x=e("forge-ai-chatbot-export"),v=e("forge-ai-chatbot-info");return h`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${o}
          placeholder=${t.placeholder}
          ?enable-file-upload=${t.enableFileUpload}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${r}
          @forge-ai-chatbot-disconnected=${s}
          @forge-ai-chatbot-message-sent=${a}
          @forge-ai-chatbot-message-received=${g}
          @forge-ai-chatbot-tool-call=${n}
          @forge-ai-chatbot-error=${m}
          @forge-ai-chatbot-expand=${u}
          @forge-ai-chatbot-minimize=${b}
          @forge-ai-chatbot-clear=${f}
          @forge-ai-chat-header-export=${x}
          @forge-ai-chatbot-info=${v}>
        </forge-ai-chatbot>
      </div>
    `}},i={},c={render:t=>{const o=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return h`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${o}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${t.placeholder}
          @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},l={render:t=>{const o=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],r=new p({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:o}),s=a=>{e("forge-ai-chatbot-tool-call")(a.detail)};return h`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot .adapter=${r} placeholder=${t.placeholder} @forge-ai-chatbot-tool-call=${s}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    `}},d={render:t=>{const o="ai-chatbot-thread-state",r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),s=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");if(!a)return;const g=localStorage.getItem(o);if(g)try{const n=JSON.parse(g);a.setThreadState(n)}catch(n){console.error("Failed to restore thread state:",n)}a.addEventListener("forge-ai-chatbot-message-received",()=>{const n=a.getThreadState();localStorage.setItem(o,JSON.stringify(n))}),a.addEventListener("forge-ai-chatbot-message-sent",()=>{const n=a.getThreadState();localStorage.setItem(o,JSON.stringify(n))}),a.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(o)})},0),h`
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
          .suggestions=${s}
          placeholder=${t.placeholder}
          show-minimize-button
          @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}>
          <span slot="header-title">Persistent Chat</span>
        </forge-ai-chatbot>
      </div>
    `}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} @forge-ai-chatbot-tool-call=\${onToolCall}>
          <span slot="header-title">AI Assistant with Tools</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const $=["Demo","WithSuggestions","WithTools","WithPersistence"],z=Object.freeze(Object.defineProperty({__proto__:null,Demo:i,WithPersistence:d,WithSuggestions:c,WithTools:l,__namedExportsOrder:$,default:S},Symbol.toStringTag,{value:"Module"}));export{z as A,i as D};
