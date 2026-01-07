import{x as n}from"./iframe-DjbbAuUw.js";import"./ai-threads-3_hm-v4p.js";import{M as d}from"./mock-adapter-MuFwfiLK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c=[{id:"1",title:"Getting Started with AI",time:"2:30 PM",date:new Date("2024-01-15")},{id:"2",title:"Code Review Discussion",time:"10:45 AM",date:new Date("2024-01-14")},{id:"3",title:"Project Planning",time:"4:15 PM",date:new Date("2024-01-13")},{id:"4",title:"Bug Investigation",time:"9:20 AM",date:new Date("2024-01-12")},{id:"5",title:"Feature Development",time:"1:00 PM",date:new Date("2024-01-11")}],h="forge-ai-threads",g={title:"AI Components/Primitives/Threads",component:h,argTypes:{threads:{control:"object",description:"Array of threads to display in the navigation list"}},args:{threads:c},render:o=>{const s=new d({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),i=a=>{e("forge-ai-threads-clear-history")(a);const r=a.target;r&&(r.threads=[])};return n`
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
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const m=["Demo"],u=Object.freeze(Object.defineProperty({__proto__:null,Demo:t,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{u as A,t as D};
