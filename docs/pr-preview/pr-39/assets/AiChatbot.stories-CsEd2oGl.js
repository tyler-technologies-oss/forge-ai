import{x as l}from"./iframe-fPrcZ3VO.js";import"./ai-chatbot-CAXi5YD3.js";import"./ai-message-thread-CXOhDvXV.js";import"./utils-B0W8KtS_.js";import"./ai-empty-state-DIUqrVXt.js";import"./ai-suggestions-DJQeI3C2.js";import"./ai-voice-input-D3-EAzHY.js";import{M as c}from"./mock-adapter-CGsAFG5D.js";import{l as I,s as _}from"./mock-agents-Cm47oyNv.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,C="forge-ai-chatbot",E={title:"AI Components/Primitives/Chatbot",component:C,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:t=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=s("forge-ai-chatbot-connected"),o=s("forge-ai-chatbot-disconnected"),n=s("forge-ai-chatbot-message-sent"),r=s("forge-ai-chatbot-message-received"),i=s("forge-ai-chatbot-tool-call"),f=s("forge-ai-chatbot-error"),x=s("forge-ai-chatbot-expand"),y=s("forge-ai-chatbot-minimize"),v=s("forge-ai-chatbot-clear"),S=s("forge-ai-chatbot-export"),w=s("forge-ai-chatbot-info"),T=s("forge-ai-chatbot-response-feedback");return l`
      <div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${e}
          placeholder=${t.placeholder}
          title-text=${t.titleText}
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          debug-command=${t.debugCommand}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          .disclaimerText=${t.disclaimerText}
          @forge-ai-chatbot-connected=${a}
          @forge-ai-chatbot-disconnected=${o}
          @forge-ai-chatbot-message-sent=${n}
          @forge-ai-chatbot-message-received=${r}
          @forge-ai-chatbot-tool-call=${i}
          @forge-ai-chatbot-error=${f}
          @forge-ai-chatbot-expand=${x}
          @forge-ai-chatbot-minimize=${y}
          @forge-ai-chatbot-clear=${v}
          @forge-ai-chat-header-export=${S}
          @forge-ai-chatbot-info=${w}
          @forge-ai-chatbot-response-feedback=${$=>T($.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},d={},h={render:t=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${e}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${t.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${s("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${s("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},m={render:t=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],a=new c({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),o=n=>{s("forge-ai-chatbot-tool-call")(n.detail)};return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${t.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${o}>
        </forge-ai-chatbot>
      </div>
    `}},g={args:{showMinimizeButton:!0},render:t=>{const e="ai-chatbot-thread-state",a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const r=localStorage.getItem(e);if(r)try{const i=JSON.parse(r);n.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i)}n.addEventListener("forge-ai-chatbot-message-received",()=>{const i=n.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-message-sent",()=>{const i=n.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${a}
          .suggestions=${o}
          placeholder=${t.placeholder}
          title-text="Persistent Chat"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},p={render:t=>{const e=new M;return l`
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
          placeholder=${t.placeholder}
          title-text="Mixed Responses"
          debug-mode
          ?enable-reactions=${t.enableReactions}
          @forge-ai-chatbot-tool-call=${n=>{setTimeout(()=>{n.target.submitToolResult(n.detail.toolCallId,{success:!0,data:"Mock result"})},500)}}>
        </forge-ai-chatbot>
      </div>
    `}};class M extends c{#t=300;#n=30;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const o=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),o.includes("text-only")||o==="text only"?this.#o():o.includes("tool-only")||o==="tool only"?this.#s():o.includes("text-then-tool")||o==="text then tool"?this.#i():o.includes("tool-then-text")||o==="tool then text"?this.#r():o.includes("text-tool-text")||o==="text, tool, text"?this.#l():o.includes("alternating")?this.#c():o.includes("multiple-tools")||o==="multiple tools"?this.#d():o.includes("multiple-text")||o==="multiple text chunks"?this.#h():this.#o()}sendToolResult(e,a){this._emitToolResult({toolCallId:e,result:a,message:{id:this.#e(),role:"tool",content:JSON.stringify(a),timestamp:Date.now(),status:"complete",toolCallId:e}})}#o(){const e=this.#e();this._emitMessageStart(e),this.#a(e,"This is a text-only response with no tool calls. The entire response is just plain text content.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})}#s(){const e=this.#e(),a=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"New York"}}),this._emitToolResult({toolCallId:a,result:{temperature:72,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)}#i(){const e=this.#e(),a=this.#e();this._emitMessageStart(e),this.#a(e,"Let me check the weather for you.",()=>{setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:a,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)})}#r(){const e=this.#e(),a=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:a,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}});const o=this.#e();this._emitMessageStart(o),this.#a(o,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)}#l(){const e=this.#e(),a=this.#e();this._emitMessageStart(e),this.#a(e,"I will look up the weather information now.",()=>{setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:a,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}});const o=this.#e();this._emitMessageStart(o),this.#a(o,"The weather looks great! Expect clear skies and mild temperatures.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})}#c(){const e=this.#e(),a=this.#e(),o=this.#e();this._emitMessageStart(e),this.#a(e,"First, let me check the weather.",()=>{setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:a,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}});const n=this.#e();this._emitMessageStart(n),this.#a(n,"Now let me search the database for related info.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:n,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:n,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:o,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const r=this.#e();this._emitMessageStart(r),this.#a(r,"All done! I found the information you need.",()=>{this._emitMessageEnd(r),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})},this.#t)},this.#t)})}#d(){const e=this.#e(),a=this.#e(),o=this.#e(),n=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:a,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:o,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:o,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:n,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)},this.#t)},this.#t)}#h(){const e=this.#e();this._emitMessageStart(e),this.#a(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e);const a=this.#e();this._emitMessageStart(a),this.#a(a,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(a);const o=this.#e();this._emitMessageStart(o),this.#a(o,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})})})}#a(e,a,o){const n=a.split(" ");let r=0;const i=()=>{r<n.length?(this._emitMessageDelta(e,(r===0?"":" ")+n[r]),r++,setTimeout(i,this.#n)):o()};setTimeout(i,this.#t)}#e(){return Math.random().toString(36).slice(2,11)}}const u={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:t=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=t.agentListSize==="large"?I:_,o=s("forge-ai-chatbot-agent-change");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${e}
          .agents=${a}
          placeholder=${t.placeholder}
          title-text=${t.titleText}
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-agent-change=${n=>o(n.detail)}>
        </forge-ai-chatbot>
      </div>
    `}},b={args:{enableReactions:!0},render:t=>{const e="ai-chatbot-feedback-state",a=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const r=localStorage.getItem(e);if(r)try{const i=JSON.parse(r);n.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i),n.setThreadState({messages:o})}else n.setThreadState({messages:o});n.addEventListener("forge-ai-chatbot-response-feedback",()=>{const i=n.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-message-received",()=>{const i=n.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${a}
          placeholder=${t.placeholder}
          title-text="Feedback Persistence"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?enable-reactions=${t.enableReactions}
          @forge-ai-chatbot-response-feedback=${s("forge-ai-chatbot-response-feedback")}>
        </forge-ai-chatbot>
      </div>
    `}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['agentListSize', 'titleText']
    }
  },
  argTypes: {
    agentListSize: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Toggle between small (4) and large (50) agent lists'
    }
  },
  args: {
    agentListSize: 'small'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const agents = args.agentListSize === 'large' ? largeAgentList : smallAgentList;
    const onAgentChange = action('forge-ai-chatbot-agent-change');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          .agents=\${agents}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-agent-change=\${(e: CustomEvent) => onAgentChange(e.detail)}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    enableReactions: true
  },
  render: (args: any) => {
    const STORAGE_KEY = 'ai-chatbot-feedback-state';
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'What is TypeScript?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.',
      timestamp: Date.now() - 59000,
      status: 'complete',
      feedback: {
        type: 'positive'
      }
    }, {
      id: 'user-2',
      role: 'user',
      content: 'What are the benefits?',
      timestamp: Date.now() - 30000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: 'Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.',
      timestamp: Date.now() - 29000,
      status: 'complete',
      feedback: {
        type: 'negative',
        reason: 'Missing information about interfaces'
      }
    }];
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
          chatbot.setThreadState({
            messages: initialMessages
          });
        }
      } else {
        chatbot.setThreadState({
          messages: initialMessages
        });
      }
      chatbot.addEventListener('forge-ai-chatbot-response-feedback', () => {
        const state = chatbot.getThreadState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      });
      chatbot.addEventListener('forge-ai-chatbot-message-received', () => {
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
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Feedback Persistence"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-response-feedback=\${action('forge-ai-chatbot-response-feedback')}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...b.parameters?.docs?.source}}};const R=["Demo","WithSuggestions","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence"],N=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,MixedResponses:p,WithAgents:u,WithFeedbackPersistence:b,WithPersistence:g,WithSuggestions:h,WithTools:m,__namedExportsOrder:R,default:E},Symbol.toStringTag,{value:"Module"}));export{N as A,d as D};
