import{x as c}from"./iframe-BIx9BwVY.js";import"./ai-chatbot-C5e4_gFA.js";import"./ai-message-thread-DkrX3NY3.js";import"./utils-B0W8KtS_.js";import"./ai-empty-state-BHFMVmNB.js";import"./ai-suggestions-DNaMCIKW.js";import"./ai-voice-input-D4dczc_K.js";import{M as d}from"./mock-adapter-CGsAFG5D.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,E="forge-ai-chatbot",C={title:"AI Components/Primitives/Chatbot",component:E,argTypes:{placeholder:{control:"text",description:"Placeholder text for the input field"},titleText:{control:"text",description:"Custom title for the chatbot header"},fileUpload:{control:"select",options:["on","off"],description:"Enable file upload functionality"},voiceInput:{control:"select",options:["on","off"],description:"Enable voice input functionality"},debugCommand:{control:"select",options:["on","off"],description:"Show/hide debug mode slash command"},showExpandButton:{control:"boolean",description:"Show expand button in header"},showMinimizeButton:{control:"boolean",description:"Show minimize button in header"},expanded:{control:"boolean",description:"Expanded state (affects icon display)"},minimizeIcon:{control:"select",options:["default","panel"],description:"Minimize icon variant"},enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons"},disclaimerText:{control:"text",description:"Disclaimer text displayed below the prompt. Set to empty string to hide."}},args:{placeholder:"Ask a question...",titleText:"AI Assistant",fileUpload:"off",voiceInput:"on",debugCommand:"on",showExpandButton:!1,showMinimizeButton:!1,expanded:!1,minimizeIcon:"default",enableReactions:!1,disclaimerText:"AI can make mistakes. Always verify responses."},render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),n=o("forge-ai-chatbot-connected"),a=o("forge-ai-chatbot-disconnected"),i=o("forge-ai-chatbot-message-sent"),r=o("forge-ai-chatbot-message-received"),s=o("forge-ai-chatbot-tool-call"),f=o("forge-ai-chatbot-error"),x=o("forge-ai-chatbot-expand"),y=o("forge-ai-chatbot-minimize"),S=o("forge-ai-chatbot-clear"),v=o("forge-ai-chatbot-export"),w=o("forge-ai-chatbot-info"),T=o("forge-ai-chatbot-response-feedback");return c`
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
          @forge-ai-chatbot-connected=${n}
          @forge-ai-chatbot-disconnected=${a}
          @forge-ai-chatbot-message-sent=${i}
          @forge-ai-chatbot-message-received=${r}
          @forge-ai-chatbot-tool-call=${s}
          @forge-ai-chatbot-error=${f}
          @forge-ai-chatbot-expand=${x}
          @forge-ai-chatbot-minimize=${y}
          @forge-ai-chatbot-clear=${S}
          @forge-ai-chat-header-export=${v}
          @forge-ai-chatbot-info=${w}
          @forge-ai-chatbot-response-feedback=${$=>T($.detail)}>
          <span slot="empty-state-heading">How can I help you today?</span>
          <span slot="empty-state-message">Ask me anything or choose a suggestion below to get started.</span>
        </forge-ai-chatbot>
      </div>
    `}},l={},m={render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500});return c`
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
          @forge-ai-chatbot-connected=${o("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-disconnected=${o("forge-ai-chatbot-disconnected")}
          @forge-ai-chatbot-message-sent=${o("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${o("forge-ai-chatbot-message-received")}
          @forge-ai-chatbot-error=${o("forge-ai-chatbot-error")}>
        </forge-ai-chatbot>
      </div>
    `}},p={render:t=>{const e=[{name:"getCurrentWeather",displayName:"Get Current Weather",description:"Get the current weather for a location",parameters:{type:"object",properties:{location:{type:"string",description:"The city and state, e.g. San Francisco, CA"}},required:["location"]}},{name:"getUserInput",displayName:"Get User Input",description:"Prompts the user for input using a native dialog",parameters:{type:"object",properties:{prompt:{type:"string",description:"The message to show the user"}},required:["prompt"]}}],n=new d({simulateStreaming:!0,simulateTools:!0,streamingDelay:50,responseDelay:500,tools:e}),a=i=>{o("forge-ai-chatbot-tool-call")(i.detail)};return c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <forge-ai-chatbot
          .adapter=${n}
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
    `}},g={args:{showMinimizeButton:!0},render:t=>{const e="ai-chatbot-thread-state",n=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{text:"What is TypeScript?",value:"typescript"},{text:"Explain web components",value:"webcomponents"},{text:"How do I use localStorage?",value:"localstorage"}];return setTimeout(()=>{const i=document.querySelector("forge-ai-chatbot");if(!i)return;const r=localStorage.getItem(e);if(r)try{const s=JSON.parse(r);i.setThreadState(s)}catch(s){console.error("Failed to restore thread state:",s)}i.addEventListener("forge-ai-chatbot-message-received",()=>{const s=i.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),i.addEventListener("forge-ai-chatbot-message-sent",()=>{const s=i.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),i.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Thread Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            Chat messages are automatically saved to localStorage. Refresh the page to see the conversation restored.
            Use the clear button in the header to reset.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${n}
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
          @forge-ai-chatbot-connected=${o("forge-ai-chatbot-connected")}
          @forge-ai-chatbot-message-sent=${o("forge-ai-chatbot-message-sent")}
          @forge-ai-chatbot-message-received=${o("forge-ai-chatbot-message-received")}>
        </forge-ai-chatbot>
      </div>
    `}},h={render:t=>{const e=new I;return c`
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
          @forge-ai-chatbot-tool-call=${i=>{setTimeout(()=>{i.target.submitToolResult(i.detail.toolCallId,{success:!0,data:"Mock result"})},500)}}>
        </forge-ai-chatbot>
      </div>
    `}};class I extends d{#t=300;#i=30;constructor(){super({simulateStreaming:!0,simulateTools:!0})}sendMessage(e){this._updateState({isRunning:!0});const a=e[e.length-1]?.content?.toLowerCase()||"";this._emitRunStarted(),a.includes("text-only")||a==="text only"?this.#a():a.includes("tool-only")||a==="tool only"?this.#o():a.includes("text-then-tool")||a==="text then tool"?this.#s():a.includes("tool-then-text")||a==="tool then text"?this.#r():a.includes("text-tool-text")||a==="text, tool, text"?this.#c():a.includes("alternating")?this.#d():a.includes("multiple-tools")||a==="multiple tools"?this.#l():a.includes("multiple-text")||a==="multiple text chunks"?this.#m():this.#a()}sendToolResult(e,n){this._emitToolResult({toolCallId:e,result:n,message:{id:this.#e(),role:"tool",content:JSON.stringify(n),timestamp:Date.now(),status:"complete",toolCallId:e}})}#a(){const e=this.#e();this._emitMessageStart(e),this.#n(e,"This is a text-only response with no tool calls. The entire response is just plain text content.",()=>{this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()})}#o(){const e=this.#e(),n=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"New York"}}),this._emitToolResult({toolCallId:n,result:{temperature:72,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)}#s(){const e=this.#e(),n=this.#e();this._emitMessageStart(e),this.#n(e,"Let me check the weather for you.",()=>{setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Chicago"}}),this._emitToolResult({toolCallId:n,result:{temperature:65,conditions:"cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)})}#r(){const e=this.#e(),n=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Boston"}}),this._emitToolResult({toolCallId:n,result:{temperature:58,conditions:"partly cloudy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}});const a=this.#e();this._emitMessageStart(a),this.#n(a,"Based on the weather data, it looks sunny today!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)}#c(){const e=this.#e(),n=this.#e();this._emitMessageStart(e),this.#n(e,"I will look up the weather information now.",()=>{setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Seattle"}}),this._emitToolResult({toolCallId:n,result:{temperature:55,conditions:"rainy"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}});const a=this.#e();this._emitMessageStart(a),this.#n(a,"The weather looks great! Expect clear skies and mild temperatures.",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})}#d(){const e=this.#e(),n=this.#e(),a=this.#e();this._emitMessageStart(e),this.#n(e,"First, let me check the weather.",()=>{setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Denver"}}),this._emitToolResult({toolCallId:n,result:{temperature:70,conditions:"clear"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}});const i=this.#e();this._emitMessageStart(i),this.#n(i,"Now let me search the database for related info.",()=>{setTimeout(()=>{this._emitToolCallStart({id:a,messageId:i,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:i,name:"searchDatabase",args:{query:"weather history"}}),this._emitToolResult({toolCallId:a,result:{records:42,summary:"Historical data found"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}});const r=this.#e();this._emitMessageStart(r),this.#n(r,"All done! I found the information you need.",()=>{this._emitMessageEnd(r),this._updateState({isRunning:!1}),this._emitRunFinished()})},this.#t)},this.#t)})},this.#t)},this.#t)})}#l(){const e=this.#e(),n=this.#e(),a=this.#e(),i=this.#e();this._emitMessageStart(e),setTimeout(()=>{this._emitToolCallStart({id:n,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:n,messageId:e,name:"getCurrentWeather",args:{location:"Miami"}}),this._emitToolResult({toolCallId:n,result:{temperature:85,conditions:"humid"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:n}}),this._emitToolCallStart({id:a,messageId:e,name:"searchDatabase"}),setTimeout(()=>{this._emitToolCallEnd({id:a,messageId:e,name:"searchDatabase",args:{query:"forecast"}}),this._emitToolResult({toolCallId:a,result:{records:15,summary:"Forecast data available"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:a}}),this._emitToolCallStart({id:i,messageId:e,name:"getCurrentWeather"}),setTimeout(()=>{this._emitToolCallEnd({id:i,messageId:e,name:"getCurrentWeather",args:{location:"Orlando"}}),this._emitToolResult({toolCallId:i,result:{temperature:82,conditions:"sunny"},message:{id:this.#e(),role:"tool",content:"",timestamp:Date.now(),status:"complete",toolCallId:i}}),this._emitMessageEnd(e),this._updateState({isRunning:!1}),this._emitRunFinished()},this.#t)},this.#t)},this.#t)},this.#t)}#m(){const e=this.#e();this._emitMessageStart(e),this.#n(e,"This is the first text chunk of the response.",()=>{this._emitMessageEnd(e);const n=this.#e();this._emitMessageStart(n),this.#n(n,"Here is another text chunk that follows immediately.",()=>{this._emitMessageEnd(n);const a=this.#e();this._emitMessageStart(a),this.#n(a,"And finally, a third text chunk to complete the response!",()=>{this._emitMessageEnd(a),this._updateState({isRunning:!1}),this._emitRunFinished()})})})}#n(e,n,a){const i=n.split(" ");let r=0;const s=()=>{r<i.length?(this._emitMessageDelta(e,(r===0?"":" ")+i[r]),r++,setTimeout(s,this.#i)):a()};setTimeout(s,this.#t)}#e(){return Math.random().toString(36).slice(2,11)}}const u={parameters:{controls:{include:["agentListSize","titleText"]}},argTypes:{agentListSize:{control:"select",options:["small","large"],description:"Toggle between small (4) and large (50) agent lists"}},args:{agentListSize:"small"},render:t=>{const e=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),n=[{id:"general",name:"General Assistant",description:"Versatile helper for everyday tasks and questions"},{id:"code-review",name:"Code Review Assistant",description:"Analyzes code for best practices and issues"},{id:"docs",name:"Documentation Helper",description:"Generates and maintains technical documentation"},{id:"devops",name:"DevOps Engineer",description:"CI/CD pipelines and infrastructure automation"}],a=[{id:"general",name:"General Assistant",description:"Versatile helper for everyday tasks and questions"},{id:"code-review",name:"Code Review Assistant",description:"Analyzes code for best practices and issues"},{id:"docs",name:"Documentation Helper",description:"Generates and maintains technical documentation"},{id:"database",name:"Database Expert",description:"SQL optimization and schema design"},{id:"devops",name:"DevOps Engineer",description:"CI/CD pipelines and infrastructure automation"},{id:"security",name:"Security Analyst",description:"Security risks and mitigation strategies"},{id:"api",name:"API Designer",description:"RESTful API design and documentation"},{id:"testing",name:"Testing Specialist",description:"Unit tests and test strategies"},{id:"performance",name:"Performance Optimizer",description:"Application performance analysis"},{id:"accessibility",name:"Accessibility Auditor",description:"WCAG compliance and inclusive design"},{id:"ux",name:"UX Researcher",description:"User experience insights and usability"},{id:"data-science",name:"Data Scientist",description:"Data analysis and machine learning"},{id:"cloud",name:"Cloud Architect",description:"Scalable cloud infrastructure design"},{id:"mobile",name:"Mobile Developer",description:"iOS and Android development"},{id:"frontend",name:"Frontend Expert",description:"Modern frontend frameworks and CSS"},{id:"backend",name:"Backend Specialist",description:"Server-side architecture and APIs"},{id:"microservices",name:"Microservices Guru",description:"Distributed service architectures"},{id:"graphql",name:"GraphQL Expert",description:"GraphQL APIs and query optimization"},{id:"typescript",name:"TypeScript Wizard",description:"Advanced TypeScript patterns"},{id:"git",name:"Git Specialist",description:"Git workflows and branching strategies"},{id:"kubernetes",name:"Kubernetes Admin",description:"Container orchestration and Helm charts"},{id:"terraform",name:"Terraform Expert",description:"Infrastructure as code"},{id:"monitoring",name:"Monitoring Specialist",description:"Observability and logging solutions"},{id:"messaging",name:"Message Queue Expert",description:"Kafka and event-driven architectures"},{id:"caching",name:"Redis Specialist",description:"Caching strategies and optimization"},{id:"search",name:"Elasticsearch Expert",description:"Full-text search and ELK stack"},{id:"auth",name:"OAuth Specialist",description:"Authentication and identity management"},{id:"realtime",name:"WebSocket Expert",description:"Real-time communication systems"},{id:"pwa",name:"PWA Developer",description:"Progressive web apps and offline support"},{id:"webcomponents",name:"Web Components Expert",description:"Custom elements and shadow DOM"},{id:"css",name:"CSS Architect",description:"Design systems and scalable styling"},{id:"animation",name:"Animation Specialist",description:"CSS animations and micro-interactions"},{id:"seo",name:"SEO Optimizer",description:"Search optimization and structured data"},{id:"i18n",name:"Localization Expert",description:"Internationalization and RTL support"},{id:"pdf",name:"PDF Generator",description:"Document generation and print styles"},{id:"email",name:"Email Template Designer",description:"HTML email templates"},{id:"payments",name:"Payment Integration",description:"Secure payment processing"},{id:"geo",name:"Geolocation Expert",description:"Maps and location-based services"},{id:"video",name:"Video Streaming Specialist",description:"HLS, WebRTC, and video processing"},{id:"image",name:"Image Processing Expert",description:"Image optimization and CDN strategies"},{id:"notifications",name:"Notification System Designer",description:"Push notifications and alerts"},{id:"workflow",name:"Workflow Automation",description:"Business process automation"},{id:"reports",name:"Report Generator",description:"Dynamic reporting and visualization"},{id:"audit",name:"Audit Logger",description:"Compliance logging and data governance"},{id:"ratelimit",name:"Rate Limiting Expert",description:"API throttling and abuse prevention"},{id:"features",name:"Feature Flag Manager",description:"Feature toggles and A/B testing"},{id:"config",name:"Config Management",description:"Environment and secrets management"},{id:"errors",name:"Error Handling Expert",description:"Error boundaries and retry strategies"},{id:"legacy",name:"Legacy Code Modernizer",description:"Refactoring and migration planning"},{id:"erp",name:"ERP Agent",description:"Enterprise resource planning software"}],i=t.agentListSize==="large"?a:n,r=o("forge-ai-chatbot-agent-change");return c`
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
          .agents=${i}
          placeholder=${t.placeholder}
          title-text=${t.titleText}
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?show-expand-button=${t.showExpandButton}
          ?show-minimize-button=${t.showMinimizeButton}
          ?expanded=${t.expanded}
          ?enable-reactions=${t.enableReactions}
          .minimizeIcon=${t.minimizeIcon}
          @forge-ai-chatbot-agent-change=${s=>r(s.detail)}>
        </forge-ai-chatbot>
      </div>
    `}},b={args:{enableReactions:!0},render:t=>{const e="ai-chatbot-feedback-state",n=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"user-1",role:"user",content:"What is TypeScript?",timestamp:Date.now()-6e4,status:"complete"},{id:"assistant-1",role:"assistant",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.",timestamp:Date.now()-59e3,status:"complete",feedback:{type:"positive"}},{id:"user-2",role:"user",content:"What are the benefits?",timestamp:Date.now()-3e4,status:"complete"},{id:"assistant-2",role:"assistant",content:"Key benefits include: better IDE support with autocompletion and refactoring, catching errors at compile time rather than runtime, improved code documentation through types, and easier maintenance of large codebases.",timestamp:Date.now()-29e3,status:"complete",feedback:{type:"negative",reason:"Missing information about interfaces"}}];return setTimeout(()=>{const i=document.querySelector("forge-ai-chatbot");if(!i)return;const r=localStorage.getItem(e);if(r)try{const s=JSON.parse(r);i.setThreadState(s)}catch(s){console.error("Failed to restore thread state:",s),i.setThreadState({messages:a})}else i.setThreadState({messages:a});i.addEventListener("forge-ai-chatbot-response-feedback",()=>{const s=i.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),i.addEventListener("forge-ai-chatbot-message-received",()=>{const s=i.getThreadState();localStorage.setItem(e,JSON.stringify(s))}),i.addEventListener("forge-ai-chatbot-clear",()=>{localStorage.removeItem(e)})},0),c`
      <div style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto;">
        <div style="margin-bottom: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
          <strong>Feedback Persistence Demo</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px;">
            This demo shows pre-loaded messages with feedback state. The first response has thumbs up, the second has
            thumbs down. Give feedback on new responses and refresh to see it persist.
          </p>
        </div>
        <forge-ai-chatbot
          .adapter=${n}
          placeholder=${t.placeholder}
          title-text="Feedback Persistence"
          file-upload=${t.fileUpload}
          voice-input=${t.voiceInput}
          ?enable-reactions=${t.enableReactions}
          @forge-ai-chatbot-response-feedback=${o("forge-ai-chatbot-response-feedback")}>
        </forge-ai-chatbot>
      </div>
    `}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    const smallAgentList = [{
      id: 'general',
      name: 'General Assistant',
      description: 'Versatile helper for everyday tasks and questions'
    }, {
      id: 'code-review',
      name: 'Code Review Assistant',
      description: 'Analyzes code for best practices and issues'
    }, {
      id: 'docs',
      name: 'Documentation Helper',
      description: 'Generates and maintains technical documentation'
    }, {
      id: 'devops',
      name: 'DevOps Engineer',
      description: 'CI/CD pipelines and infrastructure automation'
    }];
    const largeAgentList = [{
      id: 'general',
      name: 'General Assistant',
      description: 'Versatile helper for everyday tasks and questions'
    }, {
      id: 'code-review',
      name: 'Code Review Assistant',
      description: 'Analyzes code for best practices and issues'
    }, {
      id: 'docs',
      name: 'Documentation Helper',
      description: 'Generates and maintains technical documentation'
    }, {
      id: 'database',
      name: 'Database Expert',
      description: 'SQL optimization and schema design'
    }, {
      id: 'devops',
      name: 'DevOps Engineer',
      description: 'CI/CD pipelines and infrastructure automation'
    }, {
      id: 'security',
      name: 'Security Analyst',
      description: 'Security risks and mitigation strategies'
    }, {
      id: 'api',
      name: 'API Designer',
      description: 'RESTful API design and documentation'
    }, {
      id: 'testing',
      name: 'Testing Specialist',
      description: 'Unit tests and test strategies'
    }, {
      id: 'performance',
      name: 'Performance Optimizer',
      description: 'Application performance analysis'
    }, {
      id: 'accessibility',
      name: 'Accessibility Auditor',
      description: 'WCAG compliance and inclusive design'
    }, {
      id: 'ux',
      name: 'UX Researcher',
      description: 'User experience insights and usability'
    }, {
      id: 'data-science',
      name: 'Data Scientist',
      description: 'Data analysis and machine learning'
    }, {
      id: 'cloud',
      name: 'Cloud Architect',
      description: 'Scalable cloud infrastructure design'
    }, {
      id: 'mobile',
      name: 'Mobile Developer',
      description: 'iOS and Android development'
    }, {
      id: 'frontend',
      name: 'Frontend Expert',
      description: 'Modern frontend frameworks and CSS'
    }, {
      id: 'backend',
      name: 'Backend Specialist',
      description: 'Server-side architecture and APIs'
    }, {
      id: 'microservices',
      name: 'Microservices Guru',
      description: 'Distributed service architectures'
    }, {
      id: 'graphql',
      name: 'GraphQL Expert',
      description: 'GraphQL APIs and query optimization'
    }, {
      id: 'typescript',
      name: 'TypeScript Wizard',
      description: 'Advanced TypeScript patterns'
    }, {
      id: 'git',
      name: 'Git Specialist',
      description: 'Git workflows and branching strategies'
    }, {
      id: 'kubernetes',
      name: 'Kubernetes Admin',
      description: 'Container orchestration and Helm charts'
    }, {
      id: 'terraform',
      name: 'Terraform Expert',
      description: 'Infrastructure as code'
    }, {
      id: 'monitoring',
      name: 'Monitoring Specialist',
      description: 'Observability and logging solutions'
    }, {
      id: 'messaging',
      name: 'Message Queue Expert',
      description: 'Kafka and event-driven architectures'
    }, {
      id: 'caching',
      name: 'Redis Specialist',
      description: 'Caching strategies and optimization'
    }, {
      id: 'search',
      name: 'Elasticsearch Expert',
      description: 'Full-text search and ELK stack'
    }, {
      id: 'auth',
      name: 'OAuth Specialist',
      description: 'Authentication and identity management'
    }, {
      id: 'realtime',
      name: 'WebSocket Expert',
      description: 'Real-time communication systems'
    }, {
      id: 'pwa',
      name: 'PWA Developer',
      description: 'Progressive web apps and offline support'
    }, {
      id: 'webcomponents',
      name: 'Web Components Expert',
      description: 'Custom elements and shadow DOM'
    }, {
      id: 'css',
      name: 'CSS Architect',
      description: 'Design systems and scalable styling'
    }, {
      id: 'animation',
      name: 'Animation Specialist',
      description: 'CSS animations and micro-interactions'
    }, {
      id: 'seo',
      name: 'SEO Optimizer',
      description: 'Search optimization and structured data'
    }, {
      id: 'i18n',
      name: 'Localization Expert',
      description: 'Internationalization and RTL support'
    }, {
      id: 'pdf',
      name: 'PDF Generator',
      description: 'Document generation and print styles'
    }, {
      id: 'email',
      name: 'Email Template Designer',
      description: 'HTML email templates'
    }, {
      id: 'payments',
      name: 'Payment Integration',
      description: 'Secure payment processing'
    }, {
      id: 'geo',
      name: 'Geolocation Expert',
      description: 'Maps and location-based services'
    }, {
      id: 'video',
      name: 'Video Streaming Specialist',
      description: 'HLS, WebRTC, and video processing'
    }, {
      id: 'image',
      name: 'Image Processing Expert',
      description: 'Image optimization and CDN strategies'
    }, {
      id: 'notifications',
      name: 'Notification System Designer',
      description: 'Push notifications and alerts'
    }, {
      id: 'workflow',
      name: 'Workflow Automation',
      description: 'Business process automation'
    }, {
      id: 'reports',
      name: 'Report Generator',
      description: 'Dynamic reporting and visualization'
    }, {
      id: 'audit',
      name: 'Audit Logger',
      description: 'Compliance logging and data governance'
    }, {
      id: 'ratelimit',
      name: 'Rate Limiting Expert',
      description: 'API throttling and abuse prevention'
    }, {
      id: 'features',
      name: 'Feature Flag Manager',
      description: 'Feature toggles and A/B testing'
    }, {
      id: 'config',
      name: 'Config Management',
      description: 'Environment and secrets management'
    }, {
      id: 'errors',
      name: 'Error Handling Expert',
      description: 'Error boundaries and retry strategies'
    }, {
      id: 'legacy',
      name: 'Legacy Code Modernizer',
      description: 'Refactoring and migration planning'
    }, {
      id: 'erp',
      name: 'ERP Agent',
      description: 'Enterprise resource planning software'
    }];
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
}`,...b.parameters?.docs?.source}}};const A=["Demo","WithSuggestions","WithTools","WithPersistence","MixedResponses","WithAgents","WithFeedbackPersistence"],L=Object.freeze(Object.defineProperty({__proto__:null,Demo:l,MixedResponses:h,WithAgents:u,WithFeedbackPersistence:b,WithPersistence:g,WithSuggestions:m,WithTools:p,__namedExportsOrder:A,default:C},Symbol.toStringTag,{value:"Module"}));export{L as A,l as D};
