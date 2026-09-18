import{x as l}from"./iframe-By603Nsb.js";import{n as B}from"./ref-BYLGVZvf.js";import"./ai-chatbot-base-n2M0sSsf.js";import"./ai-chatbot-D93elF3k.js";import"./ai-message-thread-CJbILeOj.js";import"./utils-B4bbHXKC.js";import"./ai-empty-state-DOfxSCJ4.js";import"./ai-suggestions-DLH4LRt-.js";import"./ai-voice-input-ZbynZQKl.js";import{d as H}from"./ai-steps-DuSvy5Ie.js";import{M as c}from"./mock-adapter-D0dkxTL5.js";import{l as q,s as F}from"./mock-agents-Cm47oyNv.js";import{I as Y,t as J,a as Q}from"./scaffold-0xrHut-s.js";import"./split-button-Tjg4UlBE.js";import{d as j}from"./index-C--J1RNS.js";import{d as K}from"./index-CyASXAcs.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,V="forge-ai-chatbot",X={title:"AI Components/Primitives/Chatbot",component:V,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},exportOption:{control:"select",options:["on","off"],description:"Control export option visibility"},clearOption:{control:"select",options:["on","off"],description:'Control clear-conversation option visibility. "off" hides it entirely.'},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},showConversationsButton:{control:"boolean",description:"Show conversations button in header"},showThreadRename:{control:"boolean",description:"Show rename option in conversations panel"},showThreadDelete:{control:"boolean",description:"Show delete option in conversations panel"},threadsLoading:{control:"boolean",description:"Show a loading indicator in the conversations panel while recent chats are loading"},threadsError:{control:"text",description:"Message describing a failed thread load. Shown with a retry button in the conversations panel instead of its empty state or loading indicator"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."},contextItems:{control:"object",description:"Context items to display as chips above the input",table:{type:{summary:"ContextItem[]"},category:"Properties"}}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",exportOption:"on",clearOption:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",showConversationsButton:!1,showThreadRename:!0,showThreadDelete:!0,threadsLoading:!1,enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses.",contextItems:[]},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o={name:"Staff Assistant",version:"1.3.5",identifier:"agent-49ff3a19-6986-43e9-a255-7bcdd40cbdc0",threadId:"7cbc1ec3-6fd1-4c13-a737-fc3d9f9ec2baf"},a=n("forge-ai-chatbot-connected"),s=n("forge-ai-chatbot-disconnected"),r=n("forge-ai-chatbot-message-sent"),i=n("forge-ai-chatbot-message-received"),d=n("forge-ai-chatbot-tool-call"),h=n("forge-ai-chatbot-error"),p=n("forge-ai-chatbot-expand"),g=n("forge-ai-chatbot-minimize"),L=n("forge-ai-chatbot-clear"),P=n("forge-ai-chatbot-export"),G=n("forge-ai-chatbot-info"),U=n("forge-ai-chatbot-response-feedback"),N=n("forge-ai-chatbot-context-remove");return l`
      <div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${t}
          .agentInfo=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          debug-command=${e.debugCommand}
          export-option=${e.exportOption}
          clear-option=${e.clearOption}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?show-conversations-button=${e.showConversationsButton}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          ?threads-loading=${e.threadsLoading}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          .disclaimerText=${e.disclaimerText}
          .contextItems=${e.contextItems}
          @forge-ai-chatbot-connected=${a}
          @forge-ai-chatbot-disconnected=${s}
          @forge-ai-chatbot-message-sent=${r}
          @forge-ai-chatbot-message-received=${i}
          @forge-ai-chatbot-tool-call=${d}
          @forge-ai-chatbot-error=${h}
          @forge-ai-chatbot-expand=${p}
          @forge-ai-chatbot-minimize=${g}
          @forge-ai-chatbot-clear=${L}
          @forge-ai-chat-header-export=${P}
          @forge-ai-chatbot-info=${G}
          @forge-ai-chatbot-response-feedback=${O=>U(O.detail)}
          @forge-ai-chatbot-context-remove=${O=>N(O.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},b={},f={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div style="width: 100%; height: 800px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${[{text:"Help me write an email",value:"email"},{text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",value:"lorem-ipsum"},{text:"Create a presentation",value:"presentation"},{text:"Write some code",value:"code"}]}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Suggestions"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${n("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${n("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${n("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${n("forge-ai-chatbot-error")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},y={args:{fileUpload:"on"},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"1",label:"Customer ID: 12345",removable:!1},{id:"2",label:"Project: Phoenix"},{id:"3",label:"Order #78901"}],a=n("forge-ai-chatbot-context-remove");return l`
      <div style="height: 600px; max-width: 420px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .contextItems=${o}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Context"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${n("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${n("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${n("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-context-remove=${s=>a(s.detail)}
          @forge-ai-chatbot-error=${n("forge-ai-chatbot-error")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything with the current context in mind.</span>
        </forge-ai-chatbot>
      </div>
    `}},w={render:e=>{const t=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],o=new c({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:t}),a=s=>{n("forge-ai-chatbot-tool-call")(s.detail)};return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${o}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Tools"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          debug-mode
          @forge-ai-chatbot-tool-call=${a}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},x={args:{showMinimizeButton:!0},render:e=>{const t="ai-chatbot-thread-state",o=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const s=document.querySelector("forge-ai-chatbot");if(!s)return;const r=localStorage.getItem(t);if(r)try{const i=JSON.parse(r);s.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i)}s.addEventListener("forge-ai-chatbot-message-received",()=>{const i=s.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),s.addEventListener("forge-ai-chatbot-message-sent",()=>{const i=s.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),s.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),l`
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
          placeholder=${e.placeholder}
          title-text="Persistent Chat"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${n("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${n("forge-ai-chatbot-message-received")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},$={render:e=>{const t=new Z;return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .suggestions=${[{text:"Text then tool",value:"text-then-tool"},{text:"Tool then text",value:"tool-then-text"},{text:"Text, tool, text",value:"text-tool-text"},{text:"Alternating",value:"alternating"},{text:"Multiple tools",value:"multiple-tools"},{text:"Slow sequential tools",value:"slow-sequential"},{text:"Multiple text chunks",value:"multiple-text"},{text:"Text then gap",value:"text-then-gap"},{text:"Tool then gap then tool",value:"tool-gap-tool"},{text:"Tool then gap then text",value:"tool-gap-text"},{text:"Step gap (thinking between steps)",value:"step-gap"}]}
          placeholder=${e.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=${e.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}};class Z extends c{#o=2e3;#a=2e3;#s=500;#n=2e3;#i=50;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(t){this._updateState({isRunning:!0});const a=t[t.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),a.includes("text-then-tool")||a==="text then tool"?this.#r():a.includes("tool-then-text")||a==="tool then text"?this.#l():a.includes("text-tool-text")||a==="text, tool, text"?this.#c():a.includes("alternating")?this.#d():a.includes("multiple-tools")||a==="multiple tools"?this.#h():a.includes("slow-sequential")||a==="slow sequential tools"?this.#p():a.includes("multiple-text")||a==="multiple text chunks"?this.#f():a.includes("text-then-gap")||a==="text then gap"?this.#g():a.includes("tool-gap-tool")||a==="tool then gap then tool"?this.#u():a.includes("tool-gap-text")||a==="tool then gap then text"?this.#b():(a.includes("step-gap")||a==="step gap (thinking between steps)")&&this.#m()}sendToolResult(t,o){this._emitToolResult({toolCallId:t,result:o,message:{id:this.#e(),role:"tool",content:JSON.stringify(o),timestamp:Date.now(),status:"complete",toolCallId:t}})}#r(){const t=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me check the weather for you.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:o,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#a)})},this.#o)}#l(){const t=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:o,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}});const a=this.#e();this._emitMessageStart(a),this.#t(a,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)},this.#o)}#c(){const t=this.#e(),o=this.#e(),a=this.#e(),s=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me gather that information for you.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"fetchUserData"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"fetchUserData",args:{userId:"abc123"}}),this._emitToolResult({toolCallId:o,result:{name:"Jane Smith",role:"Admin"},message:{id:t,role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:t,name:"queryPermissions"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"queryPermissions",args:{role:"Admin"}}),this._emitToolResult({toolCallId:a,result:{canEdit:!0,canDelete:!0},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:s,messageId:t,name:"loadDashboard"}),setTimeout(()=>{this._emitToolCallEnd({id:s,messageId:t,name:"loadDashboard",args:{view:"summary"}}),this._emitToolResult({toolCallId:s,result:{widgets:5,lastUpdated:"2024-01-15"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:s}}),this.#t(t,"Done! I found the user profile, verified permissions, and loaded the dashboard. Everything is ready for you.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)},this.#a)},this.#a)})},this.#o)}#d(){const t=this.#e(),o=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"First, let me check the weather.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:o,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitMessageStart(t),this.#t(t,"Now let me search the database for related info.",()=>{this._emitToolCallStart({id:a,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:a,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitMessageStart(t),this.#t(t,"All done! I found the information you need.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)})},this.#a)})},this.#o)}#h(){const t=this.#e(),o=this.#e(),a=this.#e(),s=this.#e();setTimeout(()=>{this._emitMessageStart(t),this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:o,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),this._emitToolCallStart({id:a,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:a,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:s,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:s,messageId:t,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:s,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:s}}),this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#a)},this.#a)},this.#a)},this.#o)}#p(){const o=(s,r,i)=>{let d=0;const h=()=>{if(d<r.length){const p=r[d],g=this.#e();this._emitToolCallStart({id:g,messageId:s,name:p.name}),setTimeout(()=>{this._emitToolCallEnd({id:g,messageId:s,name:p.name,args:p.args}),this._emitToolResult({toolCallId:g,result:p.result,message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:g}}),d++,h()},2500)}else i()};h()},a=this.#e();setTimeout(()=>{this._emitMessageStart(a),this.#t(a,"I'll help you with that comprehensive analysis. Let me gather the necessary data first.",()=>{this._emitMessageEnd(a);const s=this.#e();o(s,[{name:"fetchUserProfile",args:{userId:"12345"},result:{name:"John Doe",role:"Admin"}},{name:"queryDatabase",args:{table:"orders"},result:{count:47,total:"$12,450"}},{name:"loadPermissions",args:{role:"Admin"},result:{canEdit:!0,canDelete:!0}},{name:"fetchAccountSettings",args:{userId:"12345"},result:{theme:"dark",notifications:!0}},{name:"loadRecentActivity",args:{limit:20},result:{activities:20,lastLogin:"2024-01-15"}},{name:"queryInventory",args:{warehouse:"main"},result:{items:1250,lowStock:12}},{name:"fetchPaymentMethods",args:{userId:"12345"},result:{cards:2,defaultCard:"Visa ****4242"}},{name:"loadShippingAddresses",args:{userId:"12345"},result:{addresses:3,defaultAddress:"Home"}}],()=>{const r=this.#e();this.#t(r,"Great, I found the user data and permissions. Now let me analyze the trends and generate your report.",()=>{this._emitMessageEnd(r);const i=this.#e();o(i,[{name:"generateAnalyticsReport",args:{format:"pdf",range:"30d"},result:{url:"/reports/analytics.pdf"}}],()=>{const d=this.#e();this.#t(d,"All done! Here's what I found: John Doe has admin privileges with 47 orders totaling $12,450. The analytics report has been generated and is ready for download.",()=>{this._emitMessageEnd(d),this._updateState({isRunning:!1}),this._emitRunFinished()})})})})})},this.#o)}#g(){const o=this.#e();setTimeout(()=>{this._emitMessageStart(o),this.#t(o,"Here is a first thought. Now watch for a gap with no active tool.",()=>{this._emitMessageEnd(o),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"And here is more after the gap.",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},3e3)})},this.#o)}#m(){const o=this.#e();setTimeout(()=>{this._emitMessageStart(o),this.#t(o,"Let me look into that for you.",()=>{this._emitStepFinished("step-0"),setTimeout(()=>{this._emitStepStarted("step-1"),this.#t(o," Based on what I found, here is the answer.",()=>{this._emitMessageEnd(o),this._updateState({isRunning:!1}),this._emitRunFinished()})},3e3)})},this.#o)}#u(){const t=this.#e(),o=this.#e(),a=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me check the weather and look up the forecast history.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:o,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),setTimeout(()=>{this._emitToolCallStart({id:a,messageId:t,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:t,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:a,result:{records:30,summary:"Forecast data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this.#t(t,"It's currently rainy and 55°F in Seattle, with matching historical trends.",()=>{this._emitMessageEnd(t),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#a)},this.#n)},this.#a)})},this.#o)}#b(){const t=this.#e(),o=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"Let me pull up the current weather for you.",()=>{this._emitToolCallStart({id:o,messageId:t,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:o,messageId:t,name:"getCurrentWeather",args:{location:"Austin"}}),this._emitToolResult({toolCallId:o,result:{temperature:92,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:o}}),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"Based on the data I gathered, here is your summary.",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#n)},this.#a)})},this.#o)}#f(){const t=this.#e();setTimeout(()=>{this._emitMessageStart(t),this.#t(t,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(t),setTimeout(()=>{const o=this.#e();this._emitMessageStart(o),this.#t(o,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(o),setTimeout(()=>{const a=this.#e();this._emitMessageStart(a),this.#t(a,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#s)})},this.#s)})},this.#o)}#t(t,o,a){const s=o.split(" ");let r=0;const i=()=>{r<s.length?(this._emitMessageDelta(t,(r===0?"":" ")+s[r]),r++,setTimeout(i,this.#i)):a()};i()}#e(){return Math.random().toString(36).slice(2,11)}}const v={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=e.agentListSize==="large"?q:F,a=n("forge-ai-chatbot-agent-change");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Agent Selector Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Click on the header title to see the agent selector dropdown. Use the "agentListSize" control to toggle
            between a small list (4 agents) and a large list (50 agents) which shows the search filter.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          .agents=${o}
          placeholder=${e.placeholder}
          title-text=${e.titleText}
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          ?expanded=${e.expanded}
          ?enable-reactions=${e.enableReactions}
          .minimizeIcon=${e.minimizeIcon}
          @forge-ai-chatbot-agent-change=${s=>a(s.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},T={args:{enableReactions:!0},render:e=>{const t="ai-chatbot-feedback-state",o=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const s=document.querySelector("forge-ai-chatbot");if(!s)return;const r=localStorage.getItem(t);if(r)try{const i=JSON.parse(r);s.setThreadState(i)}catch(i){console.error("Failed to restore thread state:",i),s.setThreadState({messages:a})}else s.setThreadState({messages:a});s.addEventListener("forge-ai-chatbot-response-feedback",()=>{const i=s.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),s.addEventListener("forge-ai-chatbot-message-received",()=>{const i=s.getThreadState();localStorage.setItem(t,JSON.stringify(i))}),s.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(t)})},0),l`
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
          placeholder=${e.placeholder}
          title-text="Feedback Persistence"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-response-feedback=${n("forge-ai-chatbot-response-feedback")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},S={args:{showMinimizeButton:!0,showExpandButton:!0},render:e=>{K(),j(),Y.define([J,Q]);const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Chatbot with Custom Actions"
          ?show-expand-button=${e.showExpandButton}
          ?show-minimize-button=${e.showMinimizeButton}
          @forge-ai-chatbot-connected=${n("forge-ai-chatbot-connected")}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},C={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500,tools:[H]}),o={id:"tool-1",messageId:"assistant-1",name:"displayDataTable",status:"complete",type:"client",args:{title:"Q4 2024 Sales Report",headers:["Region","Product","Units Sold","Revenue","Growth"],rows:[["North","Widget Pro",1250,"$125,000","+15%"],["South","Widget Pro",890,"$89,000","+8%"],["East","Widget Basic",2100,"$84,000","+22%"],["West","Widget Basic",1750,"$70,000","+12%"],["North","Widget Enterprise",45,"$225,000","+35%"],["South","Widget Enterprise",32,"$160,000","+18%"],["East","Widget Pro",980,"$98,000","+10%"],["West","Widget Pro",1100,"$110,000","+14%"],["North","Widget Basic",1800,"$72,000","+20%"],["South","Widget Basic",1450,"$58,000","+11%"],["East","Widget Enterprise",28,"$140,000","+25%"],["West","Widget Enterprise",38,"$190,000","+30%"],["North","Gadget Plus",650,"$97,500","+18%"],["South","Gadget Plus",520,"$78,000","+9%"],["East","Gadget Plus",780,"$117,000","+24%"],["West","Gadget Plus",690,"$103,500","+16%"],["North","Gadget Basic",2200,"$66,000","+28%"],["South","Gadget Basic",1950,"$58,500","+19%"],["East","Gadget Basic",2450,"$73,500","+32%"],["West","Gadget Basic",2100,"$63,000","+21%"]]}},a=[{id:"user-1",role:"user",content:"Can you show me the Q4 sales data?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"Here's the Q4 2024 sales report broken down by region and product:",timestamp:Date.now()-59e3,status:"complete",toolCalls:[o],children:[{type:"text",messageId:"assistant-1",content:"Here's the Q4 2024 sales report broken down by region and product:",status:"complete"},{type:"toolCall",data:o},{type:"text",messageId:"assistant-2",content:"Is there anything else you would like to know?",status:"complete"}]}];return setTimeout(()=>{const s=document.querySelector("forge-ai-chatbot");s&&s.setThreadState({messages:a})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Data Table Demo"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-tool-call=${n("forge-ai-chatbot-tool-call")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},I={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"user-1",role:"user",content:`Here's the data you requested:

| Product | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|---------|----------|----------|----------|----------|
| Widget A | $45,000 | $52,000 | $48,000 | $61,000 |
| Widget B | $32,000 | $38,000 | $41,000 | $39,000 |
| Widget C | $28,000 | $31,000 | $35,000 | $42,000 |`,timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`Thanks for sharing that data! I've analyzed the quarterly trends and here's a comparison with last year:

| Product | This Year Total | Last Year Total | Growth |
|---------|----------------|-----------------|--------|
| Widget A | $206,000 | $180,000 | +14.4% |
| Widget B | $150,000 | $145,000 | +3.4% |
| Widget C | $136,000 | $115,000 | +18.3% |
| **Total** | **$492,000** | **$440,000** | **+11.8%** |

Key insights:
- Widget A shows strongest absolute growth
- Widget C has the highest growth percentage
- All products show positive year-over-year growth`,timestamp:Date.now()-59e3,status:"complete"},{id:"user-2",role:"user",content:"Can you show me the team roster?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:`Here's the current team roster with contact information:

| Name | Department | Email | Extension | Location |
|------|------------|-------|-----------|----------|
| Sarah Johnson | Engineering | sarah.j@company.com | 5421 | Building A |
| Michael Chen | Product | michael.c@company.com | 5422 | Building B |
| Emily Rodriguez | Design | emily.r@company.com | 5423 | Building A |
| James Wilson | Marketing | james.w@company.com | 5424 | Building C |
| Lisa Anderson | Sales | lisa.a@company.com | 5425 | Building B |
| David Martinez | Operations | david.m@company.com | 5426 | Building C |`,timestamp:Date.now()-29e3,status:"complete"}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");a&&a.setThreadState({messages:o})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Markdown Tables Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows markdown tables rendered in both user messages and assistant responses. Tables support all
            standard markdown table syntax including alignment and formatting.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Markdown Tables Demo"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},D={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3},{id:"thread-4",title:"Lit reactive controllers explained",createdAt:new Date(Date.now()-2160*60*1e3).toISOString(),messageCount:12},{id:"thread-5",title:"CSS Grid vs Flexbox comparison",createdAt:new Date(Date.now()-2880*60*1e3).toISOString(),messageCount:6}],a=n("forge-ai-chatbot-thread-select"),s=n("forge-ai-chatbot-new-chat"),r=n("forge-ai-chatbot-conversations-open"),i=n("forge-ai-chatbot-conversations-close"),d=n("forge-ai-chatbot-thread-rename"),h=n("forge-ai-chatbot-thread-delete");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${o}
          ?show-conversations-button=${!0}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          placeholder=${e.placeholder}
          title-text="AI Assistant with History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${p=>a(p.detail)}
          @forge-ai-chatbot-new-chat=${s}
          @forge-ai-chatbot-conversations-open=${r}
          @forge-ai-chatbot-conversations-close=${i}
          @forge-ai-chatbot-thread-rename=${p=>d(p.detail)}
          @forge-ai-chatbot-thread-delete=${p=>h(p.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},k={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=n("forge-ai-chatbot-thread-select"),a=n("forge-ai-chatbot-new-chat"),s=n("forge-ai-chatbot-conversations-open"),r=n("forge-ai-chatbot-conversations-close"),i=n("forge-ai-chatbot-thread-rename"),d=n("forge-ai-chatbot-thread-delete");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${[]}
          ?show-conversations-button=${!0}
          ?show-thread-rename=${e.showThreadRename}
          ?show-thread-delete=${e.showThreadDelete}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Empty History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${h=>o(h.detail)}
          @forge-ai-chatbot-new-chat=${a}
          @forge-ai-chatbot-conversations-open=${s}
          @forge-ai-chatbot-conversations-close=${r}
          @forge-ai-chatbot-thread-rename=${h=>i(h.detail)}
          @forge-ai-chatbot-thread-delete=${h=>d(h.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},A={args:{threadsLoading:!0},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=n("forge-ai-chatbot-conversations-open"),a=n("forge-ai-chatbot-conversations-close");return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${t}
          .threads=${[]}
          ?show-conversations-button=${!0}
          ?threads-loading=${e.threadsLoading}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Loading History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-conversations-open=${o}
          @forge-ai-chatbot-conversations-close=${a}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},m={args:{threadsError:"Could not load your chats."},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15}];let a=null;return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          ${B(s=>{a=s})}
          .adapter=${t}
          .threads=${[]}
          .threadsError=${e.threadsError}
          ?show-conversations-button=${!0}
          placeholder=${e.placeholder}
          title-text="AI Assistant with Failed History"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-retry=${()=>{n("forge-ai-chatbot-thread-retry")(),a&&(a.threadsError=void 0,a.threadsLoading=!0,setTimeout(()=>{a.threads=o,a.threadsLoading=!1,n("retry succeeded")({threads:o.length})},800))}}
          @forge-ai-chatbot-thread-select=${s=>n("forge-ai-chatbot-thread-select")(s.detail)}
          @forge-ai-chatbot-conversations-open=${n("forge-ai-chatbot-conversations-open")}
          @forge-ai-chatbot-conversations-close=${n("forge-ai-chatbot-conversations-close")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},u={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"thread-1",title:"TypeScript best practices",createdAt:new Date(Date.now()-7200*1e3).toISOString(),messageCount:8},{id:"thread-2",title:"Web component architecture",createdAt:new Date(Date.now()-300*60*1e3).toISOString(),messageCount:15},{id:"thread-3",title:"How to use localStorage?",createdAt:new Date(Date.now()-1440*60*1e3).toISOString(),messageCount:3}],a=new Set;let s=null;return l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          ${B(r=>{s=r})}
          .adapter=${t}
          .threads=${o}
          ?show-conversations-button=${!0}
          placeholder=${e.placeholder}
          title-text="AI Assistant"
          file-upload=${e.fileUpload}
          voice-input=${e.voiceInput}
          ?enable-reactions=${e.enableReactions}
          @forge-ai-chatbot-thread-select=${async r=>{n("forge-ai-chatbot-thread-select")(r.detail),r.preventDefault();const{id:i}=r.detail;if(s.threadsError=void 0,s.threadsLoading=!0,await new Promise(d=>setTimeout(d,600)),s.threadsLoading=!1,!a.has(i)){a.add(i),s.threadsError="403 Forbidden - access to this chat was revoked",n("host load failed")({id:i,error:s.threadsError,selectedThreadId:s?.selectedThreadId});return}s.selectedThreadId=i,n("host commit")({id:i,selectedThreadId:s?.selectedThreadId})}}
          @forge-ai-chatbot-thread-retry=${()=>{n("forge-ai-chatbot-thread-retry")(),s.threadsError=void 0}}
          @forge-ai-chatbot-conversations-open=${n("forge-ai-chatbot-conversations-open")}
          @forge-ai-chatbot-conversations-close=${n("forge-ai-chatbot-conversations-close")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},E={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),s=[{id:"user-1",role:"user",content:"Show me the regional breakdown and the deploy command.",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`Here's the full regional revenue breakdown. This table is wider than the chat, so it becomes a keyboard-focusable scroll region:

| Region | Q1 Revenue | Q2 Revenue | Q3 Revenue | Q4 Revenue | YoY Growth | Market Share | Notes |
|--------|-----------|-----------|-----------|-----------|-----------|-------------|-------|
| North America Central | $1,250,000 | $1,340,000 | $1,410,000 | $1,580,000 | +18.2% | 34.5% | Strongest performing region this fiscal year |
| Europe Middle East Africa | $980,000 | $1,020,000 | $1,110,000 | $1,240,000 | +12.4% | 27.1% | Steady growth across all product lines |
| Asia Pacific Region | $760,000 | $840,000 | $920,000 | $1,050,000 | +24.8% | 22.9% | Fastest growing region driven by emerging markets |

And here's the deploy command as a single long line — the code block scrolls horizontally instead of wrapping:

\`\`\`bash
docker run --rm -it --name my-very-long-container-name -e "DATABASE_URL=postgres://user:password@some-very-long-hostname.example.com:5432/mydatabase" -v /host/path/to/data:/container/path/to/data --network my-custom-bridge-network my-registry.example.com/my-org/my-image:latest --flag-one --flag-two --flag-three
\`\`\``,timestamp:Date.now()-59e3,status:"complete"}];return setTimeout(()=>{const r=document.querySelector("forge-ai-chatbot");r&&r.setThreadState({messages:s})},0),l`
      <div style="width: 100%; height: 600px; max-width: 520px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Overflowing Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The wide table and long code block overflow horizontally. They become focusable scroll regions
            (<code>role="region"</code>, <code>tabindex="0"</code>, <code>aria-label</code>). Press <kbd>Tab</kbd> to
            focus them and use arrow keys to scroll. Content that fits gets no tab stop.
          </p>
        </div>
        <forge-ai-chatbot .adapter=${t} placeholder=${e.placeholder} title-text="Overflowing Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},M={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500,tools:[H]}),o={id:"tool-links-1",messageId:"assistant-2",name:"displayDataTable",status:"complete",type:"client",args:{title:"Team Resources",headers:["Name","Email","Docs"],rows:[["Sarah Johnson","sarah.j@company.com","https://docs.company.com/sarah"],["Michael Chen","michael.c@company.com","https://docs.company.com/michael"],["Emily Rodriguez","emily.r@company.com","www.company.com/emily"],["Priya Patel","priya.p@company.com",`<a href="https://docs.company.com/priya">Priya's docs</a>`]]}},a=[{id:"user-1",role:"user",content:"Where can I find the docs and who do I contact?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:`You can find everything at https://docs.company.com and email support@company.com with questions. Bare links also work inside markdown tables:

| Resource | Link |
|----------|------|
| API Reference | https://api.company.com/reference |
| Support | support@company.com |
| Homepage | www.company.com |`,timestamp:Date.now()-59e3,status:"complete"},{id:"assistant-2",role:"assistant",content:"And here it is rendered via the data-table tool — links in those cells are clickable too:",timestamp:Date.now()-58e3,status:"complete",toolCalls:[o],children:[{type:"text",messageId:"assistant-2",content:"And here it is rendered via the data-table tool — links in those cells are clickable too:",status:"complete"},{type:"toolCall",data:o}]}];return setTimeout(()=>{const s=document.querySelector("forge-ai-chatbot");s&&s.setThreadState({messages:a})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Linkified Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Bare URLs and email addresses are automatically turned into clickable links in prose, markdown table cells,
            and data-table tool cells. Data-table cells also render raw
            <code>&lt;a&gt;</code> anchors emitted by the agent. Links open in a new tab with
            <code>rel="noreferrer noopener"</code>.
          </p>
        </div>
        <forge-ai-chatbot .adapter=${t} placeholder=${e.placeholder} title-text="Linkified Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},R={args:{clearOption:"off"},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{id:"user-1",role:"user",content:"What is a web component?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"Web components are a set of web platform APIs that let you create reusable, encapsulated custom HTML elements.",timestamp:Date.now()-59e3,status:"complete"}];return setTimeout(()=>{const a=document.querySelector("forge-ai-chatbot");a&&a.setThreadState({messages:o})},0),l`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Clear Option Off Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Even though messages are present, <code>clear-option="off"</code> suppresses the "Clear chat" action in the
            header options menu. Set the <code>clearOption</code> control back to "on" to restore the default behavior.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Clear Option Off"
          clear-option=${e.clearOption}
          @forge-ai-chatbot-clear=${n("forge-ai-chatbot-clear")}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},_={parameters:{controls:{include:["headerTitleColor"]}},argTypes:{headerTitleColor:{control:"color",description:"Header title color (--forge-ai-chatbot-header-title-color)"}},args:{headerTitleColor:"#6200ee"},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return l`
      <style>
        .branded-title-chatbot {
          --forge-ai-chatbot-header-title-color: ${e.headerTitleColor};
        }
      </style>
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Branded Header Title Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The header title color is themed via the <code>--forge-ai-chatbot-header-title-color</code>
            custom property to match tenant branding.
          </p>
        </div>
        <forge-ai-chatbot
          class="branded-title-chatbot"
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text="Tenant Branded Assistant">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},W={parameters:{controls:{include:["iconShape"]}},argTypes:{iconShape:{control:"select",options:["0px (square)","8px (rounded)","50% (circular)"],description:"Shape of header and empty state icons (--forge-ai-chatbot-icon-shape)"}},args:{iconShape:"0px (square)"},render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),o=[{text:"Tell me about Tyler products",value:"products"},{text:"How can I get support?",value:"support"},{text:"Learn about Forge components",value:"forge"}],a=e.iconShape?.split(" ")[0]||"0px",s="https://cdn.forge.tylertech.com/v1/images/branding/tyler/talking-t-logo.svg";return l`
      <style>
        .branded-chatbot {
          --forge-ai-chatbot-icon-shape: ${a};
        }
      </style>
      <div style="width: 100%; height: 700px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          class="branded-chatbot"
          .adapter=${t}
          .suggestions=${o}
          placeholder="Ask Tyler AI anything..."
          title-text="Tyler AI Assistant">
          <img
            slot="icon"
            src="${s}"
            alt="Tyler Technologies Logo"
            style="width: 36px; height: 36px; display: block;" />

          <img
            slot="empty-state-icon"
            src="${s}"
            alt="Tyler Technologies"
            style="width: 200px; height: 200px; display: block;" />

          <span slot="empty-state-heading">
            <strong>Welcome to Tyler AI Assistant</strong>
          </span>

          <span slot="empty-state-message">
            Get instant answers to your questions about Tyler Technologies <b>products and services</b>. <br /><br />
            Need personalized help?
            <a href="#contact" style="color: #4A90E2; text-decoration: underline;">Contact our support team</a>
          </span>
        </forge-ai-chatbot>
      </div>
    `}},z={render:e=>{const t=new c({simulateStreaming:!0,simulateTools:!1,streamingDelay:150,responseDelay:800}),o=a=>{const s=document.querySelector("forge-ai-chatbot");s&&a(s)};return l`
      <div>
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Client Messages Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send a message, then click a button below while the reply is streaming - client messages never touch the
            live response, so the reply keeps streaming normally underneath. Session Expired includes a "Refresh" action
            button.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>o(a=>a.addClientMessage({id:"session-expired",kind:"error",header:"Session expired",content:"Your session expired. Please refresh the page to re-authenticate.",actions:[{id:"refresh",label:"Refresh",onClick:()=>n("refresh-clicked")()}]}))}>
              Show session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>o(a=>a.removeClientMessage("session-expired"))}>
              Dismiss session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>o(a=>a.addClientMessage({id:"indexing",kind:"info",header:"Indexing",content:"Indexing 3 uploaded documents..."}))}>
              Show indexing (info)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>o(a=>a.addClientMessage({id:"indexing",kind:"success",content:"Finished indexing 3 documents."}))}>
              Show indexing done (success, upsert)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=${()=>o(a=>a.addClientMessage({content:"Switched to Research Assistant"}))}>
              Show agent switch (text)
            </button>
          </div>
        </div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=${t}
          placeholder=${e.placeholder}
          title-text=${e.titleText}>
        </forge-ai-chatbot>
      </div>
    `}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      value: 'lorem-ipsum'
    }, {
      text: 'Create a presentation',
      value: 'presentation'
    }, {
      text: 'Write some code',
      value: 'code'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 800px; max-width: 800px; margin: 0 auto;">
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fileUpload: 'on'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const contextItems: ContextItem[] = [{
      id: '1',
      label: 'Customer ID: 12345',
      removable: false
    }, {
      id: '2',
      label: 'Project: Phoenix'
    }, {
      id: '3',
      label: 'Order #78901'
    }];
    const onContextRemove = action('forge-ai-chatbot-context-remove');
    return html\`
      <div style="height: 600px; max-width: 420px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .contextItems=\${contextItems}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Context"
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
          @forge-ai-chatbot-context-remove=\${(evt: CustomEvent) => onContextRemove(evt.detail)}
          @forge-ai-chatbot-error=\${action('forge-ai-chatbot-error')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything with the current context in mind.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...x.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
    }, {
      text: 'Text then gap',
      value: 'text-then-gap'
    }, {
      text: 'Tool then gap then tool',
      value: 'tool-gap-tool'
    }, {
      text: 'Tool then gap then text',
      value: 'tool-gap-text'
    }, {
      text: 'Step gap (thinking between steps)',
      value: 'step-gap'
    }] as Suggestion[];
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder=\${args.placeholder}
          title-text="Mixed Responses"
          ?enable-reactions=\${args.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...$.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...v.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimizeButton: true,
    showExpandButton: true
  },
  render: (args: any) => {
    defineIconButtonComponent();
    defineIconComponent();
    IconRegistry.define([tylIconHistory, tylIconSettings]);
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Chatbot with Custom Actions"
          ?show-expand-button=\${args.showExpandButton}
          ?show-minimize-button=\${args.showMinimizeButton}
          @forge-ai-chatbot-connected=\${action('forge-ai-chatbot-connected')}>
          <forge-icon-button slot="header-actions" density="medium" aria-label="History">
            <forge-icon name="history"></forge-icon>
          </forge-icon-button>
          <forge-icon-button slot="header-actions" density="medium" aria-label="Settings">
            <forge-icon name="settings"></forge-icon>
          </forge-icon-button>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500,
      tools: [displayDataTableTool]
    });
    const dataTableToolCall: ToolCall = {
      id: 'tool-1',
      messageId: 'assistant-1',
      name: 'displayDataTable',
      status: 'complete',
      type: 'client',
      args: {
        title: 'Q4 2024 Sales Report',
        headers: ['Region', 'Product', 'Units Sold', 'Revenue', 'Growth'],
        rows: [['North', 'Widget Pro', 1250, '$125,000', '+15%'], ['South', 'Widget Pro', 890, '$89,000', '+8%'], ['East', 'Widget Basic', 2100, '$84,000', '+22%'], ['West', 'Widget Basic', 1750, '$70,000', '+12%'], ['North', 'Widget Enterprise', 45, '$225,000', '+35%'], ['South', 'Widget Enterprise', 32, '$160,000', '+18%'], ['East', 'Widget Pro', 980, '$98,000', '+10%'], ['West', 'Widget Pro', 1100, '$110,000', '+14%'], ['North', 'Widget Basic', 1800, '$72,000', '+20%'], ['South', 'Widget Basic', 1450, '$58,000', '+11%'], ['East', 'Widget Enterprise', 28, '$140,000', '+25%'], ['West', 'Widget Enterprise', 38, '$190,000', '+30%'], ['North', 'Gadget Plus', 650, '$97,500', '+18%'], ['South', 'Gadget Plus', 520, '$78,000', '+9%'], ['East', 'Gadget Plus', 780, '$117,000', '+24%'], ['West', 'Gadget Plus', 690, '$103,500', '+16%'], ['North', 'Gadget Basic', 2200, '$66,000', '+28%'], ['South', 'Gadget Basic', 1950, '$58,500', '+19%'], ['East', 'Gadget Basic', 2450, '$73,500', '+32%'], ['West', 'Gadget Basic', 2100, '$63,000', '+21%']]
      }
    };
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Can you show me the Q4 sales data?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: "Here's the Q4 2024 sales report broken down by region and product:",
      timestamp: Date.now() - 59000,
      status: 'complete',
      toolCalls: [dataTableToolCall],
      children: [{
        type: 'text',
        messageId: 'assistant-1',
        content: "Here's the Q4 2024 sales report broken down by region and product:",
        status: 'complete'
      }, {
        type: 'toolCall',
        data: dataTableToolCall
      }, {
        type: 'text',
        messageId: 'assistant-2',
        content: 'Is there anything else you would like to know?',
        status: 'complete'
      }]
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Data Table Demo"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-tool-call=\${action('forge-ai-chatbot-tool-call')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: \`Here's the data you requested:

| Product | Q1 Sales | Q2 Sales | Q3 Sales | Q4 Sales |
|---------|----------|----------|----------|----------|
| Widget A | $45,000 | $52,000 | $48,000 | $61,000 |
| Widget B | $32,000 | $38,000 | $41,000 | $39,000 |
| Widget C | $28,000 | $31,000 | $35,000 | $42,000 |\`,
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`Thanks for sharing that data! I've analyzed the quarterly trends and here's a comparison with last year:

| Product | This Year Total | Last Year Total | Growth |
|---------|----------------|-----------------|--------|
| Widget A | $206,000 | $180,000 | +14.4% |
| Widget B | $150,000 | $145,000 | +3.4% |
| Widget C | $136,000 | $115,000 | +18.3% |
| **Total** | **$492,000** | **$440,000** | **+11.8%** |

Key insights:
- Widget A shows strongest absolute growth
- Widget C has the highest growth percentage
- All products show positive year-over-year growth\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }, {
      id: 'user-2',
      role: 'user',
      content: 'Can you show me the team roster?',
      timestamp: Date.now() - 30000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: \`Here's the current team roster with contact information:

| Name | Department | Email | Extension | Location |
|------|------------|-------|-----------|----------|
| Sarah Johnson | Engineering | sarah.j@company.com | 5421 | Building A |
| Michael Chen | Product | michael.c@company.com | 5422 | Building B |
| Emily Rodriguez | Design | emily.r@company.com | 5423 | Building A |
| James Wilson | Marketing | james.w@company.com | 5424 | Building C |
| Lisa Anderson | Sales | lisa.a@company.com | 5425 | Building B |
| David Martinez | Operations | david.m@company.com | 5426 | Building C |\`,
      timestamp: Date.now() - 29000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Markdown Tables Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows markdown tables rendered in both user messages and assistant responses. Tables support all
            standard markdown table syntax including alignment and formatting.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Markdown Tables Demo"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 3
    }, {
      id: 'thread-4',
      title: 'Lit reactive controllers explained',
      createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
      messageCount: 12
    }, {
      id: 'thread-5',
      title: 'CSS Grid vs Flexbox comparison',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 6
    }];
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const onThreadRename = action('forge-ai-chatbot-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-thread-delete');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${threads}
          ?show-conversations-button=\${true}
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => onThreadSelect(e.detail)}
          @forge-ai-chatbot-new-chat=\${onNewChat}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}
          @forge-ai-chatbot-thread-rename=\${(e: CustomEvent) => onThreadRename(e.detail)}
          @forge-ai-chatbot-thread-delete=\${(e: CustomEvent) => onThreadDelete(e.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onThreadSelect = action('forge-ai-chatbot-thread-select');
    const onNewChat = action('forge-ai-chatbot-new-chat');
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    const onThreadRename = action('forge-ai-chatbot-thread-rename');
    const onThreadDelete = action('forge-ai-chatbot-thread-delete');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${[]}
          ?show-conversations-button=\${true}
          ?show-thread-rename=\${args.showThreadRename}
          ?show-thread-delete=\${args.showThreadDelete}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Empty History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => onThreadSelect(e.detail)}
          @forge-ai-chatbot-new-chat=\${onNewChat}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}
          @forge-ai-chatbot-thread-rename=\${(e: CustomEvent) => onThreadRename(e.detail)}
          @forge-ai-chatbot-thread-delete=\${(e: CustomEvent) => onThreadDelete(e.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    threadsLoading: true
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const onConversationsOpen = action('forge-ai-chatbot-conversations-open');
    const onConversationsClose = action('forge-ai-chatbot-conversations-close');
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=\${adapter}
          .threads=\${[]}
          ?show-conversations-button=\${true}
          ?threads-loading=\${args.threadsLoading}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Loading History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-conversations-open=\${onConversationsOpen}
          @forge-ai-chatbot-conversations-close=\${onConversationsClose}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...A.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    threadsError: 'Could not load your chats.'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }];
    let chatbot: AiChatbotComponent | null = null;
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          \${ref(el => {
      chatbot = el as AiChatbotComponent;
    })}
          .adapter=\${adapter}
          .threads=\${[]}
          .threadsError=\${args.threadsError}
          ?show-conversations-button=\${true}
          placeholder=\${args.placeholder}
          title-text="AI Assistant with Failed History"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-retry=\${() => {
      action('forge-ai-chatbot-thread-retry')();
      if (!chatbot) {
        return;
      }
      chatbot.threadsError = undefined;
      chatbot.threadsLoading = true;
      setTimeout(() => {
        chatbot!.threads = threads;
        chatbot!.threadsLoading = false;
        action('retry succeeded')({
          threads: threads.length
        });
      }, 800);
    }}
          @forge-ai-chatbot-thread-select=\${(e: CustomEvent) => action('forge-ai-chatbot-thread-select')(e.detail)}
          @forge-ai-chatbot-conversations-open=\${action('forge-ai-chatbot-conversations-open')}
          @forge-ai-chatbot-conversations-close=\${action('forge-ai-chatbot-conversations-close')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...m.parameters?.docs?.source},description:{story:`A failed conversations load. The panel shows the error with a retry instead of its "no chats yet"
empty state, so the failure is not mistaken for an empty history. Retry succeeds.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const threads = [{
      id: 'thread-1',
      title: 'TypeScript best practices',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      messageCount: 8
    }, {
      id: 'thread-2',
      title: 'Web component architecture',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      messageCount: 15
    }, {
      id: 'thread-3',
      title: 'How to use localStorage?',
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      messageCount: 3
    }];
    const attemptedThreadIds = new Set<string>();
    let chatbot: AiChatbotComponent | null = null;
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          \${ref(el => {
      chatbot = el as AiChatbotComponent;
    })}
          .adapter=\${adapter}
          .threads=\${threads}
          ?show-conversations-button=\${true}
          placeholder=\${args.placeholder}
          title-text="AI Assistant"
          file-upload=\${args.fileUpload}
          voice-input=\${args.voiceInput}
          ?enable-reactions=\${args.enableReactions}
          @forge-ai-chatbot-thread-select=\${async (e: CustomEvent) => {
      action('forge-ai-chatbot-thread-select')(e.detail);
      e.preventDefault();
      const {
        id
      } = e.detail;
      chatbot!.threadsError = undefined;
      chatbot!.threadsLoading = true;
      await new Promise(resolve => setTimeout(resolve, 600));
      chatbot!.threadsLoading = false;
      if (!attemptedThreadIds.has(id)) {
        attemptedThreadIds.add(id);
        // Nothing to undo - selectedThreadId was never touched.
        chatbot!.threadsError = '403 Forbidden - access to this chat was revoked';
        action('host load failed')({
          id,
          error: chatbot!.threadsError,
          selectedThreadId: chatbot?.selectedThreadId
        });
        return;
      }
      chatbot!.selectedThreadId = id;
      action('host commit')({
        id,
        selectedThreadId: chatbot?.selectedThreadId
      });
    }}
          @forge-ai-chatbot-thread-retry=\${() => {
      action('forge-ai-chatbot-thread-retry')();
      chatbot!.threadsError = undefined;
    }}
          @forge-ai-chatbot-conversations-open=\${action('forge-ai-chatbot-conversations-open')}
          @forge-ai-chatbot-conversations-close=\${action('forge-ai-chatbot-conversations-close')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...u.parameters?.docs?.source},description:{story:"The host rejects the select by calling preventDefault(), then owns the commit. The first thread\nclicked always fails to load, so `selectedThreadId` must stay untouched; clicking the same thread\nagain succeeds and the host commits it.",...u.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const wideTable = \`| Region | Q1 Revenue | Q2 Revenue | Q3 Revenue | Q4 Revenue | YoY Growth | Market Share | Notes |
|--------|-----------|-----------|-----------|-----------|-----------|-------------|-------|
| North America Central | $1,250,000 | $1,340,000 | $1,410,000 | $1,580,000 | +18.2% | 34.5% | Strongest performing region this fiscal year |
| Europe Middle East Africa | $980,000 | $1,020,000 | $1,110,000 | $1,240,000 | +12.4% | 27.1% | Steady growth across all product lines |
| Asia Pacific Region | $760,000 | $840,000 | $920,000 | $1,050,000 | +24.8% | 22.9% | Fastest growing region driven by emerging markets |\`;
    const longCode = \`\\\`\\\`\\\`bash
docker run --rm -it --name my-very-long-container-name -e "DATABASE_URL=postgres://user:password@some-very-long-hostname.example.com:5432/mydatabase" -v /host/path/to/data:/container/path/to/data --network my-custom-bridge-network my-registry.example.com/my-org/my-image:latest --flag-one --flag-two --flag-three
\\\`\\\`\\\`\`;
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Show me the regional breakdown and the deploy command.',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`Here's the full regional revenue breakdown. This table is wider than the chat, so it becomes a keyboard-focusable scroll region:\\n\\n\${wideTable}\\n\\nAnd here's the deploy command as a single long line — the code block scrolls horizontally instead of wrapping:\\n\\n\${longCode}\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 520px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Overflowing Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The wide table and long code block overflow horizontally. They become focusable scroll regions
            (<code>role="region"</code>, <code>tabindex="0"</code>, <code>aria-label</code>). Press <kbd>Tab</kbd> to
            focus them and use arrow keys to scroll. Content that fits gets no tab stop.
          </p>
        </div>
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} title-text="Overflowing Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500,
      tools: [displayDataTableTool]
    });
    const linkTableToolCall: ToolCall = {
      id: 'tool-links-1',
      messageId: 'assistant-2',
      name: 'displayDataTable',
      status: 'complete',
      type: 'client',
      args: {
        title: 'Team Resources',
        headers: ['Name', 'Email', 'Docs'],
        rows: [['Sarah Johnson', 'sarah.j@company.com', 'https://docs.company.com/sarah'], ['Michael Chen', 'michael.c@company.com', 'https://docs.company.com/michael'], ['Emily Rodriguez', 'emily.r@company.com', 'www.company.com/emily'], ['Priya Patel', 'priya.p@company.com', '<a href="https://docs.company.com/priya">Priya\\'s docs</a>']]
      }
    };
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'Where can I find the docs and who do I contact?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: \`You can find everything at https://docs.company.com and email support@company.com with questions. Bare links also work inside markdown tables:

| Resource | Link |
|----------|------|
| API Reference | https://api.company.com/reference |
| Support | support@company.com |
| Homepage | www.company.com |\`,
      timestamp: Date.now() - 59000,
      status: 'complete'
    }, {
      id: 'assistant-2',
      role: 'assistant',
      content: 'And here it is rendered via the data-table tool — links in those cells are clickable too:',
      timestamp: Date.now() - 58000,
      status: 'complete',
      toolCalls: [linkTableToolCall],
      children: [{
        type: 'text',
        messageId: 'assistant-2',
        content: 'And here it is rendered via the data-table tool — links in those cells are clickable too:',
        status: 'complete'
      }, {
        type: 'toolCall',
        data: linkTableToolCall
      }]
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Linkified Content Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Bare URLs and email addresses are automatically turned into clickable links in prose, markdown table cells,
            and data-table tool cells. Data-table cells also render raw
            <code>&lt;a&gt;</code> anchors emitted by the agent. Links open in a new tab with
            <code>rel="noreferrer noopener"</code>.
          </p>
        </div>
        <forge-ai-chatbot .adapter=\${adapter} placeholder=\${args.placeholder} title-text="Linkified Content">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    clearOption: 'off'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const initialMessages: ChatMessage[] = [{
      id: 'user-1',
      role: 'user',
      content: 'What is a web component?',
      timestamp: Date.now() - 60000,
      status: 'complete'
    }, {
      id: 'assistant-1',
      role: 'assistant',
      content: 'Web components are a set of web platform APIs that let you create reusable, encapsulated custom HTML elements.',
      timestamp: Date.now() - 59000,
      status: 'complete'
    }];
    setTimeout(() => {
      const chatbot = document.querySelector('forge-ai-chatbot') as any;
      if (!chatbot) return;
      chatbot.setThreadState({
        messages: initialMessages
      });
    }, 0);
    return html\`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Clear Option Off Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Even though messages are present, <code>clear-option="off"</code> suppresses the "Clear chat" action in the
            header options menu. Set the <code>clearOption</code> control back to "on" to restore the default behavior.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Clear Option Off"
          clear-option=\${args.clearOption}
          @forge-ai-chatbot-clear=\${action('forge-ai-chatbot-clear')}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...R.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['headerTitleColor']
    }
  },
  argTypes: {
    headerTitleColor: {
      control: 'color',
      description: 'Header title color (--forge-ai-chatbot-header-title-color)'
    }
  },
  args: {
    headerTitleColor: '#6200ee'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    return html\`
      <style>
        .branded-title-chatbot {
          --forge-ai-chatbot-header-title-color: \${args.headerTitleColor};
        }
      </style>
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Branded Header Title Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            The header title color is themed via the <code>--forge-ai-chatbot-header-title-color</code>
            custom property to match tenant branding.
          </p>
        </div>
        <forge-ai-chatbot
          class="branded-title-chatbot"
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text="Tenant Branded Assistant">
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ['iconShape']
    }
  },
  argTypes: {
    iconShape: {
      control: 'select',
      options: ['0px (square)', '8px (rounded)', '50% (circular)'],
      description: 'Shape of header and empty state icons (--forge-ai-chatbot-icon-shape)'
    }
  },
  args: {
    iconShape: '0px (square)'
  },
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 50,
      responseDelay: 500
    });
    const suggestions = [{
      text: 'Tell me about Tyler products',
      value: 'products'
    }, {
      text: 'How can I get support?',
      value: 'support'
    }, {
      text: 'Learn about Forge components',
      value: 'forge'
    }] as Suggestion[];
    const iconShapeValue = args.iconShape?.split(' ')[0] || '0px';
    const tylerLogo = 'https://cdn.forge.tylertech.com/v1/images/branding/tyler/talking-t-logo.svg';
    return html\`
      <style>
        .branded-chatbot {
          --forge-ai-chatbot-icon-shape: \${iconShapeValue};
        }
      </style>
      <div style="width: 100%; height: 700px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          class="branded-chatbot"
          .adapter=\${adapter}
          .suggestions=\${suggestions}
          placeholder="Ask Tyler AI anything..."
          title-text="Tyler AI Assistant">
          <img
            slot="icon"
            src="\${tylerLogo}"
            alt="Tyler Technologies Logo"
            style="width: 36px; height: 36px; display: block;" />

          <img
            slot="empty-state-icon"
            src="\${tylerLogo}"
            alt="Tyler Technologies"
            style="width: 200px; height: 200px; display: block;" />

          <span slot="empty-state-heading">
            <strong>Welcome to Tyler AI Assistant</strong>
          </span>

          <span slot="empty-state-message">
            Get instant answers to your questions about Tyler Technologies <b>products and services</b>. <br /><br />
            Need personalized help?
            <a href="#contact" style="color: #4A90E2; text-decoration: underline;">Contact our support team</a>
          </span>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const adapter = new MockAdapter({
      simulateStreaming: true,
      simulateTools: false,
      streamingDelay: 150,
      responseDelay: 800
    });
    const withChatbot = (fn: (chatbot: any) => void): void => {
      const chatbot = document.querySelector('forge-ai-chatbot');
      if (chatbot) {
        fn(chatbot);
      }
    };
    return html\`
      <div>
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Client Messages Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Send a message, then click a button below while the reply is streaming - client messages never touch the
            live response, so the reply keeps streaming normally underneath. Session Expired includes a "Refresh" action
            button.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'session-expired',
      kind: 'error',
      header: 'Session expired',
      content: 'Your session expired. Please refresh the page to re-authenticate.',
      actions: [{
        id: 'refresh',
        label: 'Refresh',
        onClick: () => action('refresh-clicked')()
      }]
    }))}>
              Show session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.removeClientMessage('session-expired'))}>
              Dismiss session expired
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'indexing',
      kind: 'info',
      header: 'Indexing',
      content: 'Indexing 3 uploaded documents...'
    }))}>
              Show indexing (info)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      id: 'indexing',
      kind: 'success',
      content: 'Finished indexing 3 documents.'
    }))}>
              Show indexing done (success, upsert)
            </button>
            <button
              type="button"
              class="forge-button forge-button--outlined"
              @click=\${() => withChatbot(chatbot => chatbot.addClientMessage({
      content: 'Switched to Research Assistant'
    }))}>
              Show agent switch (text)
            </button>
          </div>
        </div>
        <forge-ai-chatbot
          style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;"
          .adapter=\${adapter}
          placeholder=\${args.placeholder}
          title-text=\${args.titleText}>
        </forge-ai-chatbot>
      </div>
    \`;
  }
}`,...z.parameters?.docs?.source}}};const ee=["Demo","WithSuggestions","WithContextItems","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence","WithHeaderActions","WithDataTableTool","MarkdownTables","WithConversationHistory","WithEmptyConversationHistory","WithLoadingConversationHistory","WithConversationHistoryError","ThreadSelectRejection","OverflowingContent","LinkifiedContent","ClearOptionOff","BrandedHeaderTitle","Branded","ClientMessages"],fe=Object.freeze(Object.defineProperty({__proto__:null,Branded:W,BrandedHeaderTitle:_,ClearOptionOff:R,ClientMessages:z,Demo:b,LinkifiedContent:M,MarkdownTables:I,MixedResponses:$,OverflowingContent:E,ThreadSelectRejection:u,WithAgents:v,WithContextItems:y,WithConversationHistory:D,WithConversationHistoryError:m,WithDataTableTool:C,WithEmptyConversationHistory:k,WithFeedbackPersistence:T,WithHeaderActions:S,WithLoadingConversationHistory:A,WithPersistence:x,WithSuggestions:f,WithTools:w,__namedExportsOrder:ee,default:X},Symbol.toStringTag,{value:"Module"}));export{fe as A,z as C,b as D,u as T,m as W};
