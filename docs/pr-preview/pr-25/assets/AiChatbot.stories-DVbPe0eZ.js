import{x as l}from"./iframe-DyjsB23L.js";import"./ai-chatbot-BErCRJEN.js";import"./ai-message-thread-D9tRHvZw.js";import{g as f}from"./utils-Dod8vlOP.js";import"./ai-empty-state-B65UJj7O.js";import"./ai-suggestions-DEYhDPl1.js";import"./ai-voice-input-I4sSXQKO.js";import{M as c}from"./mock-adapter-DPRgB_9-.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__;class v extends c{constructor(e={}){super(e)}sendMessage(e){this._updateState({isRunning:!0});const t=f();e[e.length-1]?.role==="tool"?this.#a(t,e):this.#t(t)}sendToolResult(e,t,o){const a=f(),i=t;this.#n(a,i.denied??!1)}#t(e){const t=f();setTimeout(()=>{this._emitMessageStart(e),setTimeout(()=>{this._emitToolCall({id:t,messageId:e,name:"deleteRecords",args:{count:5}})},300)},500)}#a(e,t){const o=t[t.length-1];let a=!1;try{a=JSON.parse(o.content).denied===!0}catch{a=!1}this.#n(e,a)}#n(e,t){this._emitMessageStart(e);const a=(t?"Understood. I will not delete the user records. Let me know if you need anything else.":"Done! I have deleted the 5 user records as requested.").split(" ");a.forEach((i,r)=>{setTimeout(()=>{this._emitMessageDelta(e,(r===0?"":" ")+i),r===a.length-1&&setTimeout(()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1})},50)},500+r*50)})}}const S="forge-ai-chatbot",C={title:"AI Components/Primitives/Chatbot",component:S,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:n=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),t=s("forge-ai-chatbot-connected"),o=s("forge-ai-chatbot-disconnected"),a=s("forge-ai-chatbot-message-sent"),i=s("forge-ai-chatbot-message-received"),r=s("forge-ai-chatbot-tool-call"),b=s("forge-ai-chatbot-error"),x=s("forge-ai-chatbot-expand"),y=s("forge-ai-chatbot-minimize"),T=s("forge-ai-chatbot-clear"),w=s("forge-ai-chatbot-export"),$=s("forge-ai-chatbot-info");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-gradient-container>
          <forge-ai-chatbot
            .adapter=${e}
            placeholder=${n.placeholder}
            title-text=${n.titleText}
            file-upload=${n.fileUpload}
            voice-input=${n.voiceInput}
            debug-command=${n.debugCommand}
            ?show-expand-button=${n.showExpandButton}
            ?show-minimize-button=${n.showMinimizeButton}
            ?expanded=${n.expanded}
            ?enable-reactions=${n.enableReactions}
            .minimizeIcon=${n.minimizeIcon}
            .disclaimerText=${n.disclaimerText}
            @forge-ai-chatbot-connected=${t}
            @forge-ai-chatbot-disconnected=${o}
            @forge-ai-chatbot-message-sent=${a}
            @forge-ai-chatbot-message-received=${i}
            @forge-ai-chatbot-tool-call=${r}
            @forge-ai-chatbot-error=${b}
            @forge-ai-chatbot-expand=${x}
            @forge-ai-chatbot-minimize=${y}
            @forge-ai-chatbot-clear=${T}
            @forge-ai-chat-header-export=${w}
            @forge-ai-chatbot-info=${$}>
            <span slot="empty-state-heading">How can I help you today?</span>
            <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
          </forge-ai-chatbot>
        </forge-ai-gradient-container>
      </div>
    `}},d={},h={render:n=>{const e=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${e}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"},{text:"Plan a meeting",value:"meeting"},{text:"Summarize a document",value:"summarize"}]}
          placeholder=${n.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${n.fileUpload}
          voice-input=${n.voiceInput}
          ?show-expand-button=${n.showExpandButton}
          ?show-minimize-button=${n.showMinimizeButton}
          ?expanded=${n.expanded}
          ?enable-reactions=${n.enableReactions}
          .minimizeIcon=${n.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${s("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${s("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},m={render:n=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],t=new c({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),o=a=>{s("forge-ai-chatbot-tool-call")(a.detail)};return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${n.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${n.fileUpload}
          voice-input=${n.voiceInput}
          ?show-expand-button=${n.showExpandButton}
          ?show-minimize-button=${n.showMinimizeButton}
          ?expanded=${n.expanded}
          ?enable-reactions=${n.enableReactions}
          .minimizeIcon=${n.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${o}>
        </forge-ai-chatbot>
      </div>
    `}},p={args:{showMinimizeButton:!0},render:n=>{const e="ai-chatbot-thread-state",t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");if(!a)return;const i=localStorage.getItem(e);if(i)try{const r=JSON.parse(i);a.setThreadState(r)}catch(r){console.error("Failed to restore thread state:",r)}a.addEventListener("forge-ai-chatbot-message-received",()=>{const r=a.getThreadState();localStorage.setItem(e,JSON.stringify(r))}),a.addEventListener("forge-ai-chatbot-message-sent",()=>{const r=a.getThreadState();localStorage.setItem(e,JSON.stringify(r))}),a.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),l`
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
          placeholder=${n.placeholder}
          title-text="Persistent Chat"
          file-upload=${n.fileUpload}
          voice-input=${n.voiceInput}
          ?show-expand-button=${n.showExpandButton}
          ?show-minimize-button=${n.showMinimizeButton}
          ?expanded=${n.expanded}
          ?enable-reactions=${n.enableReactions}
          .minimizeIcon=${n.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},u={render:n=>{const e=[{name:"deleteRecords",displayName:"Delete Records",description:"Delete records from the database",parameters:{type:"object",properties:{count:{type:"number",description:"Number of records to delete"}},required:["count"]},handler:({args:o})=>({deleted:o.count,success:!0})}],t=new v({simulateStreaming:!0,streamingDelay:50,responseDelay:500,tools:e});return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Tool Confirmation Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send any message to trigger a confirmation prompt. Tools with handlers automatically require confirmation
            unless they have <code>skipConfirmation: true</code>. Click Confirm or Deny to see the different responses.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${n.placeholder}
          title-text="AI Assistant with Confirmation"
          file-upload=${n.fileUpload}
          voice-input=${n.voiceInput}
          ?show-expand-button=${n.showExpandButton}
          ?show-minimize-button=${n.showMinimizeButton}
          ?expanded=${n.expanded}
          ?enable-reactions=${n.enableReactions}
          .minimizeIcon=${n.minimizeIcon}
          @forge-ai-chatbot-connected=${s("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${s("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${s("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-tool-call=${s("forge-ai-chatbot-tool-call")}>
          <span slot="empty-state-heading">Tool Confirmation Demo</span>
          <span slot="empty-state-message">Send any message to see the confirmation flow in action.</span>
        </forge-ai-chatbot>
      </div>
    `}},g={render:n=>{const e=new I;return l`
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
          placeholder=${n.placeholder}
          title-text="Mixed Responses"
          debug-mode
          ?enable-reactions=${n.enableReactions}
          @forge-ai-chatbot-tool-call=${a=>{setTimeout(()=>{a.target.submitToolResult(a.detail.toolCallId,{success:!0,data:"Mock result"})},500)}}>
        </forge-ai-chatbot>
      </div>
    `}};class I extends c{#t=300;#a=30;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const o=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),o.includes("text-only")||o==="text only"?this.#n():o.includes("tool-only")||o==="tool only"?this.#s():o.includes("text-then-tool")||o==="text then tool"?this.#i():o.includes("tool-then-text")||o==="tool then text"?this.#r():o.includes("text-tool-text")||o==="text, tool, text"?this.#l():o.includes("alternating")?this.#c():o.includes("multiple-tools")||o==="multiple tools"?this.#d():o.includes("multiple-text")||o==="multiple text chunks"?this.#h():this.#n()}sendToolResult(e,t){this._emitToolResult({toolCallId:e,result:t,message:{id:this.#e(),role:"tool",content:JSON.stringify(t),timestamp:Date.now(),status:"complete",toolCallId:e}})}#n(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is a text-only response with no tool calls. The entire response is just plain text content.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})}#s(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"New York"}}),this._emitToolResult({toolCallId:t,result:{temperature:72,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)}#i(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),this.#o(e,"Let me check the weather for you.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:t,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)})}#r(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:t,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const o=this.#e();this._emitMessageStart(o),this.#o(o,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)}#l(){const e=this.#e(),t=this.#e();this._emitMessageStart(e),this.#o(e,"I will look up the weather information now.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:t,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const o=this.#e();this._emitMessageStart(o),this.#o(o,"The weather looks great! Expect clear skies and mild temperatures.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})}#c(){const e=this.#e(),t=this.#e(),o=this.#e();this._emitMessageStart(e),this.#o(e,"First, let me check the weather.",()=>{setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:t,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}});const a=this.#e();this._emitMessageStart(a),this.#o(a,"Now let me search the database for related info.",()=>{setTimeout(()=>{this._emitToolCallStart({id:o,messageId:a,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:a,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:o,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const i=this.#e();this._emitMessageStart(i),this.#o(i,"All done! I found the information you need.",()=>{this._emitMessageEnd(i),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})},this.#t)},this.#t)})}#d(){const e=this.#e(),t=this.#e(),o=this.#e(),a=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:t,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:t,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:t,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:t}}),this._emitToolCallStart({id:o,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:o,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:a,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)},this.#t)},this.#t)}#h(){const e=this.#e();this._emitMessageStart(e),this.#o(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e);const t=this.#e();this._emitMessageStart(t),this.#o(t,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(t);const o=this.#e();this._emitMessageStart(o),this.#o(o,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})})})}#o(e,t,o){const a=t.split(" ");let i=0;const r=()=>{i<a.length?(this._emitMessageDelta(e,(i===0?"":" ")+a[i]),i++,setTimeout(r,this.#a)):o()};setTimeout(r,this.#t)}#e(){return Math.random().toString(36).slice(2,11)}}d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const _=["Demo","WithSuggestions","WithTools","WithPersistence","WithConfirmation","MixedResponses"],B=Object.freeze(Object.defineProperty({__proto__:null,Demo:d,MixedResponses:g,WithConfirmation:u,WithPersistence:p,WithSuggestions:h,WithTools:m,__namedExportsOrder:_,default:C},Symbol.toStringTag,{value:"Module"}));export{B as A,d as D};
