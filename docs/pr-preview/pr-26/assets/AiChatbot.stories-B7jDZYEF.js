import{x as u}from"./iframe-DMENHs4Z.js";import"./ai-chatbot-BFYXsqDj.js";import"./ai-message-thread-D3S-Xm37.js";import"./utils-Dod8vlOP.js";import"./ai-empty-state-BJUwv42O.js";import"./ai-suggestions-B_xU38ZC.js";import"./ai-voice-input-BDk1qJXi.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,w="forge-ai-chatbot",v={title:"AI Components/Primitives/Chatbot",component:w,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:a=>{const e=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),t=s("forge-ai-chatbot-connected"),o=s("forge-ai-chatbot-disconnected"),n=s("forge-ai-chatbot-message-sent"),i=s("forge-ai-chatbot-message-received"),r=s("forge-ai-chatbot-tool-call"),g=s("forge-ai-chatbot-error"),f=s("forge-ai-chatbot-expand"),x=s("forge-ai-chatbot-minimize"),b=s("forge-ai-chatbot-clear"),y=s("forge-ai-chatbot-export"),T=s("forge-ai-chatbot-info");return u`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-gradient-container>
          <forge-ai-chatbot
            .adapter=${e}
            placeholder=${a.placeholder}
            title-text=${a.titleText}
            file-upload=${a.fileUpload}
            voice-input=${a.voiceInput}
            debug-command=${a.debugCommand}
            ?show-expand-button=${a.showExpandButton}
            ?show-minimize-button=${a.showMinimizeButton}
            ?expanded=${a.expanded}
            ?enable-reactions=${a.enableReactions}
            .minimizeIcon=${a.minimizeIcon}
            .disclaimerText=${a.disclaimerText}
            @forge-ai-chatbot-connected=${t}
            @forge-ai-chatbot-disconnected=${o}
            @forge-ai-chatbot-message-sent=${n}
            @forge-ai-chatbot-message-received=${i}
            @forge-ai-chatbot-tool-call=${r}
            @forge-ai-chatbot-error=${g}
            @forge-ai-chatbot-expand=${f}
            @forge-ai-chatbot-minimize=${x}
            @forge-ai-chatbot-clear=${b}
            @forge-ai-chat-header-export=${y}
            @forge-ai-chatbot-info=${T}>
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
          </forge-ai-chatbot>
        </forge-ai-gradient-container>
      </div>
    `}},l={},c={render:a=>{const e=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return u`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${e}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${a.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${a.fileUpload}
          voice-input=${a.voiceInput}
          ?show-expand-button=${a.showExpandButton}
          ?show-minimize-button=${a.showMinimizeButton}
          ?expanded=${a.expanded}
          ?enable-reactions=${a.enableReactions}
          .minimizeIcon=${a.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${s("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${s("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},d={render:a=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],t=new p({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),o=n=>{s("forge-ai-chatbot-tool-call")(n.detail)};return u`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${a.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${a.fileUpload}
          voice-input=${a.voiceInput}
          ?show-expand-button=${a.showExpandButton}
          ?show-minimize-button=${a.showMinimizeButton}
          ?expanded=${a.expanded}
          ?enable-reactions=${a.enableReactions}
          .minimizeIcon=${a.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${o}>
        </forge-ai-chatbot>
      </div>
    `}},h={args:{showMinimizeButton:!0},render:a=>{const e="ai-chatbot-thread-state",t=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const i=localStorage.getItem(e);if(i)try{const r=JSON.parse(i);n.setThreadState(r)}catch(r){console.error("Failed to restore thread state:",r)}n.addEventListener("forge-ai-chatbot-message-received",()=>{const r=n.getThreadState();localStorage.setItem(e,JSON.stringify(r))}),n.addEventListener("forge-ai-chatbot-message-sent",()=>{const r=n.getThreadState();localStorage.setItem(e,JSON.stringify(r))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),u`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${o}
          placeholder=${a.placeholder}
          title-text="Persistent Chat"
          file-upload=${a.fileUpload}
          voice-input=${a.voiceInput}
          ?show-expand-button=${a.showExpandButton}
          ?show-minimize-button=${a.showMinimizeButton}
          ?expanded=${a.expanded}
          ?enable-reactions=${a.enableReactions}
          .minimizeIcon=${a.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},m={render:a=>{const e=new $;return u`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Mixed Response Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click a suggestion to see different response patterns. Each pattern demonstrates how text and tool calls are
            grouped within a single assistant response.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${e}
          .suggestions=${[{text:"Text only",value:"text-only"},{text:"Tool only",value:"tool-only"},{text:"Text then tool",value:"text-then-tool"},{text:"Tool then text",value:"tool-then-text"},{text:"Text, tool, text",value:"text-tool-text"},{text:"Alternating",value:"alternating"},{text:"Multiple tools",value:"multiple-tools"},{text:"Multiple text chunks",value:"multiple-text"}]}
          .tools=${[{name:"getCurrentWeather",displayName:"Get Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string"}},required:["location"]}},{name:"searchDatabase",displayName:"Search Database",description:"Search the database for records",parameters:{type:"object",properties:{query:{type:"string"}},required:["query"]}}]}
          placeholder=${a.placeholder}
          title-text="Mixed Responses"
          debug-mode
          ?enable-reactions=${a.enableReactions}
          @forge-ai-chatbot-tool-call=${n=>{setTimeout(()=>{n.target.submitToolResult(n.detail.toolCallId,{success:!0,data:"Mock result"})},500)}}>
        </forge-ai-chatbot>
      </div>
    `}};class $ extends p{#t=300;#n=30;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const o=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),o.includes("text-only")||o==="text only"?this.#a():o.includes("tool-only")||o==="tool only"?this.#s():o.includes("text-then-tool")||o==="text then tool"?this.#i():o.includes("tool-then-text")||o==="tool then text"?this.#r():o.includes("text-tool-text")||o==="text, tool, text"?this.#l():o.includes("alternating")?this.#c():o.includes("multiple-tools")||o==="multiple tools"?this.#d():o.includes("multiple-text")||o==="multiple text chunks"?this.#h():this.#a()}sendToolResult(e,t){this._emitToolResult({toolCallId:e,result:t,message:{id:this.#e(),role:"tool",content:JSON.stringify(t),timestamp:Date.now(),status:"complete",toolCallId:e}})}#a(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is a text-only response with no tool calls. The entire response is just plain text content.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})}#s(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"New York"}}),this._emitToolResult({toolCallId:t,result:{temperature:72,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)}#i(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),this.#o(e,"Let me check the weather for you.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:t,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)})}#r(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:t,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const o=this.#e();this._emitMessageStart(o),this.#o(o,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)}#l(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),this.#o(e,"I will look up the weather information now.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:t,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const o=this.#e();this._emitMessageStart(o),this.#o(o,"The weather looks great! Expect clear skies and mild temperatures.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})}#c(){const e=this.#e(),t=this.#e(),o=this.#e();this._emitMessageStart(e),this.#o(e,"First, let me check the weather.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:t,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const n=this.#e();this._emitMessageStart(n),this.#o(n,"Now let me search the database for related info.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:n,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:n,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:o,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const i=this.#e();this._emitMessageStart(i),this.#o(i,"All done! I found the information you need.",()=>{this._emitMessageEnd(i),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})},this.#t)},this.#t)})}#d(){const e=this.#e(),t=this.#e(),o=this.#e(),n=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:t,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitToolCallStart({id:o,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:o,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:n,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)},this.#t)},this.#t)}#h(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e);const t=this.#e();this._emitMessageStart(t),this.#o(t,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(t);const o=this.#e();this._emitMessageStart(o),this.#o(o,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})})})}#o(e,t,o){const n=t.split(" ");let i=0;const r=()=>{i<n.length?(this._emitMessageDelta(e,(i===0?"":" ")+n[i]),i++,setTimeout(r,this.#n)):o()};setTimeout(r,this.#t)}#e(){return Math.random().toString(36).slice(2,11)}}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          title-text="AI Assistant with Suggestions"
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
          title-text="AI Assistant with Tools"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=\${onToolCall}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
          title-text="Persistent Chat"
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
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MixedResponseAdapter();
    const suggestions = [{
      text: 'Text only',
      value: 'text-only'
    }, {
      text: 'Tool only',
      value: 'tool-only'
    }, {
      text: 'Text then tool',
      value: 'text-then-tool'
    }, {
      text: 'Tool then text',
      value: 'tool-then-text'
    }, {
      text: 'Text, tool, text',
      value: 'text-tool-text'
    }, {
      text: 'Alternating',
      value: 'alternating'
    }, {
      text: 'Multiple tools',
      value: 'multiple-tools'
    }, {
      text: 'Multiple text chunks',
      value: 'multiple-text'
    }] as Suggestion[];
    const tools: ToolDefinition[] = [{
      name: 'getCurrentWeather',
      displayName: 'Get Weather',
      description: 'Get the current weather for a location',
      parameters: {
        type: 'object',
        properties: {
          location: {
            type: 'string'
          }
        },
        required: ['location']
      }
    }, {
      name: 'searchDatabase',
      displayName: 'Search Database',
      description: 'Search the database for records',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string'
          }
        },
        required: ['query']
      }
    }];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Mixed Response Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click a suggestion to see different response patterns. Each pattern demonstrates how text and tool calls are
            grouped within a single assistant response.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          .tools=\${tools}
          placeholder=\${args.placeholder}
          title-text="Mixed Responses"
          debug-mode
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-tool-call=\${(e: CustomEvent) => {
      setTimeout(() => {
        const chatbot = e.target as any;
        chatbot.submitToolResult(e.detail.toolCallId, {
          success: true,
          data: 'Mock result'
        });
      }, 500);
    }}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source}}};const S=["Demo","WithSuggestions","WithTools","WithPersistence","MixedResponses"],A=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,MixedResponses:m,WithPersistence:h,WithSuggestions:c,WithTools:d,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{A,l as D};
