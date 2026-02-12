import{x as l}from"./iframe-CCWsMM7d.js";import"./ai-chatbot-CsBoXxJb.js";import"./ai-message-thread-B4QtgsHi.js";import{g as x}from"./utils-B0W8KtS_.js";import"./ai-empty-state-DcOxngfx.js";import"./ai-suggestions-DPm5Gj5M.js";import"./ai-voice-input-Br6U9Lud.js";import{M as c}from"./mock-adapter-CGsAFG5D.js";import{l as _,s as E}from"./mock-agents-Cm47oyNv.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__;class M extends c{constructor(e={}){super(e)}sendMessage(e){this._updateState({isRunning:!0});const o=x();e[e.length-1]?.role==="tool"?this.#a(o,e):this.#t(o)}sendToolResult(e,o,n){const a=x(),r=o;this.#n(a,r.denied??!1)}#t(e){const o=x();setTimeout(()=>{this._emitMessageStart(e),setTimeout(()=>{this._emitToolCall({id:o,messageId:e,name:"deleteRecords",args:{count:5}})},300)},500)}#a(e,o){const n=o[o.length-1];let a=!1;try{a=JSON.parse(n.content).denied===!0}catch{a=!1}this.#n(e,a)}#n(e,o){this._emitMessageStart(e);const a=(o?"Understood. I will not delete the user records. Let me know if you need anything else.":"Done! I have deleted the 5 user records as requested.").split(" ");a.forEach((r,i)=>{setTimeout(()=>{this._emitMessageDelta(e,(i===0?"":" ")+r),i===a.length-1&&setTimeout(()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},50)},500+i*50)})}}const R="forge-ai-chatbot",D={title:"AI Components/Primitives/Chatbot",component:R,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:t=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=s("forge-ai-chatbot-connected"),n=s("forge-ai-chatbot-disconnected"),a=s("forge-ai-chatbot-message-sent"),r=s("forge-ai-chatbot-message-received"),i=s("forge-ai-chatbot-tool-call"),y=s("forge-ai-chatbot-error"),w=s("forge-ai-chatbot-expand"),v=s("forge-ai-chatbot-minimize"),T=s("forge-ai-chatbot-clear"),S=s("forge-ai-chatbot-export"),$=s("forge-ai-chatbot-info"),I=s("forge-ai-chatbot-response-feedback");return l`
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
          @forge-ai-chatbot-disconnected=${n}
          @forge-ai-chatbot-message-sent=${a}
          @forge-ai-chatbot-message-received=${r}
          @forge-ai-chatbot-tool-call=${i}
          @forge-ai-chatbot-error=${y}
          @forge-ai-chatbot-expand=${w}
          @forge-ai-chatbot-minimize=${v}
          @forge-ai-chatbot-clear=${T}
          @forge-ai-chat-header-export=${S}
          @forge-ai-chatbot-info=${$}
          @forge-ai-chatbot-response-feedback=${C=>I(C.detail)}>
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
    `}},m={render:t=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],o=new c({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),n=a=>{s("forge-ai-chatbot-tool-call")(a.detail)};return l`
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
          @forge-ai-chatbot-tool-call=${n}>
        </forge-ai-chatbot>
      </div>
    `}},p={args:{showMinimizeButton:!0},render:t=>{const e="ai-chatbot-thread-state",o=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),n=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");if(!a)return;const r=localStorage.getItem(e);if(r)try{const i=JSON.parse(r);a.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i)}a.addEventListener("forge-ai-chatbot-message-received",()=>{const i=a.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),a.addEventListener("forge-ai-chatbot-message-sent",()=>{const i=a.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),a.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),l`
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
          .suggestions=${n}
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
    `}},g={render:t=>{const e=[{name:"deleteRecords",displayName:"Delete Records",description:"Delete records from the database",parameters:{type:"object",properties:{count:{type:"number",description:"Number of records to delete"}},required:["count"]},handler:({args:n})=>({deleted:n.count,success:!0})}],o=new M({simulateStreaming:!0,streamingDelay:50,responseDelay:500,tools:e});return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Tool Confirmation Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send any message to trigger a confirmation prompt. Tools with handlers automatically require confirmation
            unless they have <code>skipConfirmation: true</code>. Click Confirm or Deny to see the different responses.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${o}
          placeholder=${t.placeholder}
          title-text="AI Assistant with Confirmation"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${s("forge-ai-chatbot-tool-call")}>
          <span slot="empty-state-heading">Tool Confirmation Demo</span>
          <span slot="empty-state-message">Send any message to see the confirmation flow in action.</span>
        </forge-ai-chatbot>
      </div>
    `}},u={render:t=>{const e=new z;return l`
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
          @forge-ai-chatbot-tool-call=${a=>{setTimeout(()=>{a.target.submitToolResult(a.detail.toolCallId,{success:!0,data:"Mock result"})},500)}}>
        </forge-ai-chatbot>
      </div>
    `}};class z extends c{#t=300;#a=30;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const n=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),n.includes("text-only")||n==="text only"?this.#n():n.includes("tool-only")||n==="tool only"?this.#s():n.includes("text-then-tool")||n==="text then tool"?this.#i():n.includes("tool-then-text")||n==="tool then text"?this.#r():n.includes("text-tool-text")||n==="text, tool, text"?this.#l():n.includes("alternating")?this.#c():n.includes("multiple-tools")||n==="multiple tools"?this.#d():n.includes("multiple-text")||n==="multiple text chunks"?this.#h():this.#n()}sendToolResult(e,o){this._emitToolResult({toolCallId:e,result:o,message:{id:this.#e(),role:"tool",content:JSON.stringify(o),timestamp:Date.now(),status:"complete",toolCallId:e}})}#n(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is a text-only response with no tool calls. The entire response is just plain text content.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})}#s(){const e=this.#e(),o=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"New York"}}),this._emitToolResult({toolCallId:o,result:{temperature:72,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)}#i(){const e=this.#e(),o=this.#e();this._emitMessageStart(e),this.#o(e,"Let me check the weather for you.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:o,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)})}#r(){const e=this.#e(),o=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:o,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const n=this.#e();this._emitMessageStart(n),this.#o(n,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(n),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)}#l(){const e=this.#e(),o=this.#e();this._emitMessageStart(e),this.#o(e,"I will look up the weather information now.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:o,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const n=this.#e();this._emitMessageStart(n),this.#o(n,"The weather looks great! Expect clear skies and mild temperatures.",()=>{this._emitMessageEnd(n),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})}#c(){const e=this.#e(),o=this.#e(),n=this.#e();this._emitMessageStart(e),this.#o(e,"First, let me check the weather.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:o,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const a=this.#e();this._emitMessageStart(a),this.#o(a,"Now let me search the database for related info.",()=>{setTimeout(()=>{this._emitToolCallStart({id:n,messageId:a,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:a,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:n,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}});const r=this.#e();this._emitMessageStart(r),this.#o(r,"All done! I found the information you need.",()=>{this._emitMessageEnd(r),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})},this.#t)},this.#t)})}#d(){const e=this.#e(),o=this.#e(),n=this.#e(),a=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:o,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:n,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:n,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:a,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)},this.#t)},this.#t)}#h(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e);const o=this.#e();this._emitMessageStart(o),this.#o(o,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(o);const n=this.#e();this._emitMessageStart(n),this.#o(n,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(n),this._updateState({isRunning:!1}),this._emitRunFinished()})})})}#o(e,o,n){const a=o.split(" ");let r=0;const i=()=>{r<a.length?(this._emitMessageDelta(e,(r===0?"":" ")+a[r]),r++,setTimeout(i,this.#a)):n()};setTimeout(i,this.#t)}#e(){return Math.random().toString(36).slice(2,11)}}const f={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:t=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=t.agentListSize==="large"?_:E,n=s("forge-ai-chatbot-agent-change");return l`
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
          @forge-ai-chatbot-agent-change=${a=>n(a.detail)}>
        </forge-ai-chatbot>
      </div>
    `}},b={args:{enableReactions:!0},render:t=>{const e="ai-chatbot-feedback-state",o=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),n=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");if(!a)return;const r=localStorage.getItem(e);if(r)try{const i=JSON.parse(r);a.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i),a.setThreadState({messages:n})}else a.setThreadState({messages:n});a.addEventListener("forge-ai-chatbot-response-feedback",()=>{const i=a.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),a.addEventListener("forge-ai-chatbot-message-received",()=>{const i=a.getThreadState();localStorage.setItem(e,JSON.stringify(i))}),a.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),l`
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const tools: ToolDefinition<any>[] = [{
      name: 'deleteRecords',
      displayName: 'Delete Records',
      description: 'Delete records from the database',
      parameters: {
        type: 'object',
        properties: {
          count: {
            type: 'number',
            description: 'Number of records to delete'
          }
        },
        required: ['count']
      },
      handler: ({
        args
      }) => {
        return {
          deleted: args.count,
          success: true
        };
      }
    }];
    const adapter = new AutoInterceptMockAdapter({
      simulateStreaming: true,
      streamingDelay: 50,
      responseDelay: 500,
      tools
    });
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Tool Confirmation Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send any message to trigger a confirmation prompt. Tools with handlers automatically require confirmation
            unless they have <code>skipConfirmation: true</code>. Click Confirm or Deny to see the different responses.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Confirmation"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          ?expanded=\${args.expanded}
          ?enable-reactions=\${args.enableReactions}
          .minimizeIcon=\${args.minimizeIcon}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}
          @forge-ai-chatbot-message-sent=\${action('forge-ai-chatbot-message-sent')}
          @forge-ai-chatbot-message-received=\${action('forge-ai-chatbot-message-received')}
          @forge-ai-chatbot-tool-call=\${action('forge-ai-chatbot-tool-call')}>
          <span slot="empty-state-heading">Tool Confirmation Demo</span>
          <span slot="empty-state-message">Send any message to see the confirmation flow in action.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const k=["Demo","WithSuggestions","WithTools","WithPersistence","WithConfirmation","MixedResponses","WithAgents","WithFeedbackPersistence"],G=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,MixedResponses:u,WithAgents:f,WithConfirmation:g,WithFeedbackPersistence:b,WithPersistence:p,WithSuggestions:h,WithTools:m,__namedExportsOrder:k,default:D},Symbol.toStringTag,{value:"Module"}));export{G as A,d as D};
