import{x as c}from"./iframe-CCWsMM7d.js";import"./ai-message-thread-B4QtgsHi.js";import"./ai-suggestions-DPm5Gj5M.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,d="forge-ai-message-thread",u={title:"AI Components/Primitives/Message Thread",component:d,argTypes:{enableReactions:{control:"boolean",description:"Enable thumbs up/down reaction buttons on assistant messages"},showThinking:{control:"boolean",description:"Show thinking indicator when AI is processing"},autoScroll:{control:{type:"select"},options:["off","on"],description:"Automatically emit scroll-request when content changes",defaultValue:"on"}},args:{enableReactions:!1,showThinking:!1,autoScroll:"on"},render:o=>{const s=[{type:"message",data:{id:"msg-1",role:"user",content:"Hello! Can you help me understand web components?",timestamp:Date.now()-6e4,status:"complete"}},{type:"message",data:{id:"msg-2",role:"assistant",content:`Of course! Web Components are a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

The main technologies are:
- **Custom Elements**: Define new HTML elements
- **Shadow DOM**: Encapsulated styles and markup
- **HTML Templates**: Reusable markup patterns`,timestamp:Date.now()-55e3,status:"complete"}},{type:"message",data:{id:"msg-3",role:"user",content:"Can you show me a tool call example?",timestamp:Date.now()-3e4,status:"complete"}},{type:"toolCall",data:{id:"tool-1",messageId:"msg-4",name:"search_documentation",args:{query:"web components tool call example"},status:"complete",type:"client",result:{found:!0}}},{type:"message",data:{id:"msg-4",role:"assistant",content:"I've searched the documentation and found some examples for you!",timestamp:Date.now()-2e4,status:"complete"}}],a=new Map([["search_documentation",{name:"search_documentation",displayName:"Search Documentation",description:"Search through documentation"}]]),n=e("forge-ai-message-thread-copy"),r=e("forge-ai-message-thread-resend"),i=e("forge-ai-message-thread-thumbs-up"),m=e("forge-ai-message-thread-thumbs-down"),l=e("forge-ai-message-thread-scroll-request");return c`
      <div
        style="width: 100%; height: 600px; max-width: 800px; margin: 0 auto; border: 1px solid #ccc; overflow-y: auto;">
        <forge-ai-message-thread
          .messageItems=${s}
          .tools=${a}
          ?enable-reactions=${o.enableReactions}
          ?show-thinking=${o.showThinking}
          auto-scroll=${o.autoScroll}
          @forge-ai-message-thread-copy=${n}
          @forge-ai-message-thread-resend=${r}
          @forge-ai-message-thread-thumbs-up=${i}
          @forge-ai-message-thread-thumbs-down=${m}
          @forge-ai-message-thread-scroll-request=${l}>
        </forge-ai-message-thread>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const p=["Demo"],w=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:p,default:u},Symbol.toStringTag,{value:"Module"}));export{w as A,t as D};
