import{x as d}from"./iframe-B3wVpGbw.js";import"./ai-message-thread-tnoN-1yu.js";import"./ai-chatbot-base-L97n06IJ.js";import"./ai-chatbot-yessJll3.js";import{A as g}from"./agent-adapter-BpTdLjYO.js";import{g as i}from"./utils-CwmN9dOd.js";const h="forge-ai-tool-call-indicator",u=new Map([["getCurrentWeather",{name:"getCurrentWeather",displayName:"Get current weather"}],["lookup_case",{name:"lookup_case",displayName:"Case lookup"}]]),p=[{id:"tool-1",messageId:"message-1",name:"getCurrentWeather",args:{location:"San Francisco"},result:{temperature:68,condition:"Sunny"},status:"complete",type:"agent",startTimestamp:1e3,endTimestamp:1420},{id:"tool-2",messageId:"message-1",name:"lookup_case",args:{caseId:"CASE-123"},result:{message:"Case not found"},status:"error",type:"agent",startTimestamp:1420,endTimestamp:2210}];class C extends g{#e="case-lookup-demo-thread";get threadId(){return this.#e}set threadId(n){this.#e=n}async connect(){this._updateState({isConnected:!0})}async disconnect(){this._updateState({isConnected:!1})}sendMessage(n){this._updateState({isRunning:!0}),this._emitRunStarted();const e=i(),o=i(),r="lookup_case",l={caseId:"CASE-123"};this._emitMessageStart(e),this._emitMessageDelta(e,"I'll look that case up for you."),this._emitMessageEnd(e),setTimeout(()=>{this._emitToolCallStart({id:o,messageId:e,name:r}),this._emitToolCallArgs({id:o,messageId:e,name:r,argsBuffer:JSON.stringify(l),partialArgs:l}),this._emitToolCallEnd({id:o,messageId:e,name:r,args:l}),this._emitToolCall({id:o,messageId:e,name:r,args:l}),setTimeout(()=>{const m={message:"Case not found"};this._emitToolResult({toolCallId:o,result:m,isError:!0,message:{id:i(),role:"tool",content:JSON.stringify(m),timestamp:Date.now(),status:"error",toolCallId:o}}),this._updateState({isRunning:!1}),this._emitRunFinished()},700)},500)}sendToolResult(){}abort(){this._updateState({isRunning:!1})}}const f={title:"AI Components/Primitives/Tool Call Indicator",component:h,tags:["autodocs"]},t={render:()=>d`
    <forge-ai-tool-call-indicator .tools=${u} .toolCalls=${p}> </forge-ai-tool-call-indicator>
  `},a={render:()=>d`
    <forge-ai-tool-call-indicator debug-mode .tools=${u} .toolCalls=${p}> </forge-ai-tool-call-indicator>
  `},s={render:()=>{const c=new C;return d`
      <forge-ai-chatbot .adapter=${c} .tools=${[{name:"lookup_case",displayName:"Case lookup"}]} debug-mode placeholder="Ask about a case">
      </forge-ai-chatbot>
    `}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <forge-ai-tool-call-indicator .tools=${tools} .toolCalls=${toolCalls}> </forge-ai-tool-call-indicator>\n  `\n}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <forge-ai-tool-call-indicator debug-mode .tools=${tools} .toolCalls=${toolCalls}> </forge-ai-tool-call-indicator>\n  `\n}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const adapter = new CaseLookupFailureAdapter();
    const chatTools: ToolDefinition[] = [{
      name: 'lookup_case',
      displayName: 'Case lookup'
    }];
    return html\`
      <forge-ai-chatbot .adapter=\${adapter} .tools=\${chatTools} debug-mode placeholder="Ask about a case">
      </forge-ai-chatbot>
    \`;
  }
}`,...s.parameters?.docs?.source}}};const _=["Demo","DebugMode","FailedToolCallFromAdapter"],I=Object.freeze(Object.defineProperty({__proto__:null,DebugMode:a,Demo:t,FailedToolCallFromAdapter:s,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{I as A,t as D,s as F,a};
