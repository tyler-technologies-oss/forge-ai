import{x as c}from"./iframe-BE0vYhhu.js";import"./ai-chatbot-Ba5xPMZv.js";import"./ai-message-thread-G7IWXvIc.js";import"./utils-B0W8KtS_.js";import"./ai-empty-state-DNPp5zeb.js";import"./ai-suggestions-D913ntDt.js";import"./ai-voice-input-BXoGT79c.js";import{M as d}from"./mock-adapter-CGsAFG5D.js";import{l as I,s as _}from"./mock-agents-Cm47oyNv.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,C="forge-ai-chatbot",E={title:"AI Components/Primitives/Chatbot",component:C,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=i("forge-ai-chatbot-connected"),a=i("forge-ai-chatbot-disconnected"),n=i("forge-ai-chatbot-message-sent"),r=i("forge-ai-chatbot-message-received"),s=i("forge-ai-chatbot-tool-call"),l=i("forge-ai-chatbot-error"),w=i("forge-ai-chatbot-expand"),h=i("forge-ai-chatbot-minimize"),m=i("forge-ai-chatbot-clear"),v=i("forge-ai-chatbot-export"),S=i("forge-ai-chatbot-info"),T=i("forge-ai-chatbot-response-feedback");return c`
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
          @forge-ai-chatbot-connected=${o}
          @forge-ai-chatbot-disconnected=${a}
          @forge-ai-chatbot-message-sent=${n}
          @forge-ai-chatbot-message-received=${r}
          @forge-ai-chatbot-tool-call=${s}
          @forge-ai-chatbot-error=${l}
          @forge-ai-chatbot-expand=${w}
          @forge-ai-chatbot-minimize=${h}
          @forge-ai-chatbot-clear=${m}
          @forge-ai-chat-header-export=${v}
          @forge-ai-chatbot-info=${S}
          @forge-ai-chatbot-response-feedback=${$=>T($.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},g={},p={render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
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
          @forge-ai-chatbot-connected=${i("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${i("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${i("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${i("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${i("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},u={render:t=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],o=new d({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),a=n=>{i("forge-ai-chatbot-tool-call")(n.detail)};return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${o}
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
          @forge-ai-chatbot-tool-call=${a}>
        </forge-ai-chatbot>
      </div>
    `}},f={args:{showMinimizeButton:!0},render:t=>{const e="ai-chatbot-thread-state",o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const r=localStorage.getItem(e);if(r)try{const s=JSON.parse(r);n.setThreadState(s)}catch(s){console.error("Failed to restore thread state:",s)}n.addEventListener("forge-ai-chatbot-message-received",()=>{const s=n.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),n.addEventListener("forge-ai-chatbot-message-sent",()=>{const s=n.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${o}
          .suggestions=${a}
          placeholder=${t.placeholder}
          title-text="Persistent Chat"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${i("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${i("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${i("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},b={render:t=>{const e=new D;return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${e}
          .suggestions=${[{text:"Text then tool",value:"text-then-tool"},{text:"Tool then text",value:"tool-then-text"},{text:"Text, tool, text",value:"text-tool-text"},{text:"Alternating",value:"alternating"},{text:"Multiple tools",value:"multiple-tools"},{text:"Slow sequential tools",value:"slow-sequential"},{text:"Multiple text chunks",value:"multiple-text"}]}
          placeholder=${t.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=${t.enableReactions}>
        </forge-ai-chatbot>
      </div>
    `}};class D extends d{#o=2e3;#a=2e3;#n=500;#s=50;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const a=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),a.includes("text-then-tool")||a==="text then tool"?this.#i():a.includes("tool-then-text")||a==="tool then text"?this.#r():a.includes("text-tool-text")||a==="text, tool, text"?this.#l():a.includes("alternating")?this.#c():a.includes("multiple-tools")||a==="multiple tools"?this.#d():a.includes("slow-sequential")||a==="slow sequential tools"?this.#h():(a.includes("multiple-text")||a==="multiple text chunks")&&this.#m()}sendToolResult(e,o){this._emitToolResult({toolCallId:e,result:o,message:{id:this.#e(),role:"tool",content:JSON.stringify(o),timestamp:Date.now(),status:"complete",toolCallId:e}})}#i(){const e=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(e),this.#t(e,"Let me check the weather for you.",()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:o,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#a)})},this.#o)}#r(){const e=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(e),this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:o,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const a=this.#e();this._emitMessageStart(a),this.#t(a,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)},this.#o)}#l(){const e=this.#e(),o=this.#e(),a=this.#e(),n=this.#e();setTimeout(()=>{this._emitMessageStart(e),this.#t(e,"Let me gather that information for you.",()=>{this._emitToolCallStart({id:o,messageId:e,name:"fetchUserData"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"fetchUserData",args:{userId:"abc123"}}),this._emitToolResult({toolCallId:o,result:{name:"Jane Smith",role:"Admin"},message:{id:e,role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:e,name:"queryPermissions"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"queryPermissions",args:{role:"Admin"}}),this._emitToolResult({toolCallId:a,result:{canEdit:!0,canDelete:!0},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:n,messageId:e,name:"loadDashboard"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"loadDashboard",args:{view:"summary"}}),this._emitToolResult({toolCallId:n,result:{widgets:5,lastUpdated:"2024-01-15"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this.#t(e,"Done! I found the user profile, verified permissions, and loaded the dashboard. Everything is ready for you.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)},this.#a)},this.#a)})},this.#o)}#c(){const e=this.#e(),o=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(e),this.#t(e,"First, let me check the weather.",()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:o,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageStart(e),this.#t(e,"Now let me search the database for related info.",()=>{this._emitToolCallStart({id:a,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:a,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageStart(e),this.#t(e,"All done! I found the information you need.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)})},this.#a)})},this.#o)}#d(){const e=this.#e(),o=this.#e(),a=this.#e(),n=this.#e();setTimeout(()=>{this._emitMessageStart(e),this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:o,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:a,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:n,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#a)},this.#a)},this.#a)},this.#o)}#h(){const o=(n,r,s)=>{let l=0;const w=()=>{if(l<r.length){const h=r[l],m=this.#e();this._emitToolCallStart({id:m,messageId:n,name:h.name}),setTimeout(()=>{this._emitToolCallEnd({id:m,messageId:n,name:h.name,args:h.args}),this._emitToolResult({toolCallId:m,result:h.result,message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:m}}),l++,w()},2500)}else s()};w()},a=this.#e();setTimeout(()=>{this._emitMessageStart(a),this.#t(a,"I'll help you with that comprehensive analysis. Let me gather the necessary data first.",()=>{this._emitMessageEnd(a);const n=this.#e();o(n,[{name:"fetchUserProfile",args:{userId:"12345"},result:{name:"John Doe",role:"Admin"}},{name:"queryDatabase",args:{table:"orders"},result:{count:47,total:"$12,450"}},{name:"loadPermissions",args:{role:"Admin"},result:{canEdit:!0,canDelete:!0}},{name:"fetchAccountSettings",args:{userId:"12345"},result:{theme:"dark",notifications:!0}},{name:"loadRecentActivity",args:{limit:20},result:{activities:20,lastLogin:"2024-01-15"}},{name:"queryInventory",args:{warehouse:"main"},result:{items:1250,lowStock:12}},{name:"fetchPaymentMethods",args:{userId:"12345"},result:{cards:2,defaultCard:"Visa ****4242"}},{name:"loadShippingAddresses",args:{userId:"12345"},result:{addresses:3,defaultAddress:"Home"}}],()=>{const r=this.#e();this.#t(r,"Great, I found the user data and permissions. Now let me analyze the trends and generate your report.",()=>{this._emitMessageEnd(r);const s=this.#e();o(s,[{name:"generateAnalyticsReport",args:{format:"pdf",range:"30d"},result:{url:"/reports/analytics.pdf"}}],()=>{const l=this.#e();this.#t(l,"All done! Here's what I found: John Doe has admin privileges with 47 orders totaling $12,450. The analytics report has been generated and is ready for download.",()=>{this._emitMessageEnd(l),this._updateState({isRunning:!1}),this._emitRunFinished()})})})})})},this.#o)}#m(){const e=this.#e();setTimeout(()=>{this._emitMessageStart(e),this.#t(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(o),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#n)})},this.#n)})},this.#o)}#t(e,o,a){const n=o.split(" ");let r=0;const s=()=>{r<n.length?(this._emitMessageDelta(e,(r===0?"":" ")+n[r]),r++,setTimeout(s,this.#s)):a()};s()}#e(){return Math.random().toString(36).slice(2,11)}}const x={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=t.agentListSize==="large"?I:_,a=i("forge-ai-chatbot-agent-change");return c`
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
          .agents=${o}
          placeholder=${t.placeholder}
          title-text=${t.titleText}
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-agent-change=${n=>a(n.detail)}>
        </forge-ai-chatbot>
      </div>
    `}},y={args:{enableReactions:!0},render:t=>{const e="ai-chatbot-feedback-state",o=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const n=document.querySelector("forge-ai-chatbot");if(!n)return;const r=localStorage.getItem(e);if(r)try{const s=JSON.parse(r);n.setThreadState(s)}catch(s){console.error("Failed to restore thread state:",s),n.setThreadState({messages:a})}else n.setThreadState({messages:a});n.addEventListener("forge-ai-chatbot-response-feedback",()=>{const s=n.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),n.addEventListener("forge-ai-chatbot-message-received",()=>{const s=n.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),n.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${o}
          placeholder=${t.placeholder}
          title-text="Feedback Persistence"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?enable-reactions=${t.enableReactions}
          @forge-ai-chatbot-response-feedback=${i("forge-ai-chatbot-response-feedback")}>
        </forge-ai-chatbot>
      </div>
    `}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MixedResponseAdapter();
    const suggestions = [{
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
      text: 'Slow sequential tools',
      value: 'slow-sequential'
    }, {
      text: 'Multiple text chunks',
      value: 'multiple-text'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=\${args.enableReactions}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const M=["Demo","WithSuggestions","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence"],P=Object.freeze(Object.defineProperty({__proto__:null,Demo:g,MixedResponses:b,WithAgents:x,WithFeedbackPersistence:y,WithPersistence:f,WithSuggestions:p,WithTools:u,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{P as A,g as D};
