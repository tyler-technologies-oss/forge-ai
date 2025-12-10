import{x as i}from"./iframe-BIfW55ej.js";import{M as s}from"./mock-adapter-_zUjDDpK.js";import"./ai-threads-B0FlSYGB.js";import"./ai-chatbot-TgHiLdb_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-enSWHQpW.js";import"./state-BYjqUiWz.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ai-modal-D5oNZQ8Y.js";import"./class-map-C91l-MRH.js";import"./query-BpjciUlk.js";import"./utils-BGBq21po.js";import"./when-CI7b_ccM.js";import"./ai-attachment-kOOR7sOZ.js";import"./tooltip-DYhntqMt.js";import"./overlay-B1iC2F5M.js";import"./ai-chat-header-CnUK66ZK.js";import"./ai-icon-CcGAWgYg.js";import"./ai-gradient-container-CEUF3uMZ.js";import"./ai-dropdown-menu-DY04BLgN.js";import"./if-defined-DluspHiy.js";import"./popover-C0-ZmK-D.js";import"./ai-agent-info-CNpeBjlj.js";import"./ai-chat-interface-BtknQEMO.js";import"./ai-empty-state-DyQ-7-5R.js";import"./ai-error-message-kqMh9D6s.js";import"./ai-file-picker-BC5KBmem.js";import"./ai-prompt-DM-pEmXU.js";import"./ai-response-message-BxrHbAM2.js";import"./ai-actions-toolbar-sudobJdF.js";import"./ai-suggestions-DZPkuUg5.js";import"./ai-thinking-indicator-CmJDzwaB.js";import"./ai-user-message-uYvcqiCv.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,c="forge-ai-threads",N={title:"AI Components/Form Factors/Threads",component:c,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},enableFileUpload:{control:{type:"boolean"},description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{enableFileUpload:!1,placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${e("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${e("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${e("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            ?enable-file-upload=${o.enableFileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${e("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${e("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${e("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${e("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${e("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${e("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${e("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${e("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const R=["Demo"];export{t as Demo,R as __namedExportsOrder,N as default};
