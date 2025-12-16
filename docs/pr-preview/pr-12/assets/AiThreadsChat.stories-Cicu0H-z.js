import{x as i}from"./iframe-DbrHixjF.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-DqSzhqJr.js";import"./ai-chatbot-BjZHdDB0.js";import"./ai-message-thread-BmAwP02J.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Dhv-IVv5.js";import"./state-BF3dmPxn.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-G83lTk0F.js";import"./class-map-DPnk8bQC.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D5yRQmTL.js";import"./tooltip-Coiv3R1u.js";import"./query-BpjciUlk.js";import"./overlay-AYWZBku2.js";import"./ai-chat-header-C8KQ2F8A.js";import"./ai-icon-C4nTfEcM.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CK0_hOss.js";import"./ai-dropdown-menu-D7vDh3C_.js";import"./if-defined-DKD7hlu1.js";import"./popover-COcLiQQK.js";import"./ai-modal-DZ5JEG6T.js";import"./ai-agent-info-vOOoHhkg.js";import"./ai-chat-interface-DnewRd13.js";import"./ai-file-picker-CbkiZ9q-.js";import"./ai-prompt-D_-_lLW-.js";import"./ai-suggestions-CA82FD74.js";import"./ai-voice-input-CjpK6hMh.js";import"./ai-empty-state-DFDfjWJO.js";import"./ai-error-message-CSzGjAvY.js";import"./ai-response-message-BhNhXrf2.js";import"./ai-actions-toolbar-D2JyKT2I.js";import"./ai-thinking-indicator-QpEbtD2-.js";import"./ai-user-message-B_209JaT.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-disconnected=${t("forge-ai-chatbot-disconnected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-clear=${t("forge-ai-chatbot-clear")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}>
          </forge-ai-chatbot>
        </forge-ai-threads>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
