import{x as n}from"./iframe-q7zFl5ll.js";import"./ai-threads-CWXE96Ev.js";import{M as d}from"./mock-adapter-uhjSnHDA.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c=[{id:"1",title:"Getting Started with AI",createdAt:"2024-01-15T14:30:00Z",messageCount:5},{id:"2",title:"Code Review Discussion",createdAt:"2024-01-14T10:45:00Z",messageCount:12},{id:"3",title:"Project Planning",createdAt:"2024-01-13T16:15:00Z",messageCount:8},{id:"4",title:"Bug Investigation",createdAt:"2024-01-12T09:20:00Z",messageCount:3},{id:"5",title:"Feature Development",createdAt:"2024-01-11T13:00:00Z",messageCount:15}],g="forge-ai-threads",h={title:"AI Components/Primitives/Threads",component:g,argTypes:{threads:{control:"object",description:"Array of threads to display in the navigation list"}},args:{threads:c},render:o=>{const s=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=a=>{e("forge-ai-threads-clear-history")(a);const r=a.target;r&&(r.threads=[])};return n`
      <div style="height: 600px;">
        <forge-ai-threads
          .threads=${o.threads}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${i}>
          <forge-ai-chatbot
            .adapter=${s}
            show-expand-button
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const m=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{u as A,t as D};
