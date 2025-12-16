import{x as i}from"./iframe-BhT7icML.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-pgZZNJ6b.js";import"./ai-chatbot-Bm_V95pm.js";import"./ai-message-thread-D89-JvmA.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CzNtAJFg.js";import"./state-Cxue3I3l.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BqUbGh4-.js";import"./class-map-BrZa2zwg.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CVphsu5v.js";import"./tooltip-BZn-wL07.js";import"./query-BpjciUlk.js";import"./overlay-BAZ1GyeC.js";import"./ai-chat-header-CRkx08o0.js";import"./ai-icon-Bmgs9TfV.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BAInoI47.js";import"./ai-dropdown-menu-BrY543k1.js";import"./if-defined-D7X9AwsH.js";import"./popover-BoLCd-1N.js";import"./ai-modal-Be_tuVNq.js";import"./ai-agent-info-BDjGy-LM.js";import"./ai-chat-interface-DL1Prrnn.js";import"./ai-file-picker-BL09GQCa.js";import"./ai-prompt-CehxtmSE.js";import"./ai-suggestions-DiKHrKZi.js";import"./ai-voice-input-wiUbu2sI.js";import"./ai-empty-state-CQE9YISW.js";import"./ai-error-message-DBZgV1cv.js";import"./ai-response-message-8XpzMy9w.js";import"./ai-actions-toolbar-DOf5aR5j.js";import"./ai-thinking-indicator-CcyyZdNr.js";import"./ai-user-message-1DcjgWIr.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
