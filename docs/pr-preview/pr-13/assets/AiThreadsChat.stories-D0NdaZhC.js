import{x as i}from"./iframe-BPHwXl7A.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-C1ekzuLQ.js";import"./ai-chatbot-ByLeSbtO.js";import"./ai-message-thread-CYuAtYig.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-mV6WkkQG.js";import"./state-Dbu_UCtJ.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CiMYUQCj.js";import"./class-map-Co5aW_rr.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CZkN-SCk.js";import"./tooltip-BetcsuBG.js";import"./query-BpjciUlk.js";import"./overlay-DnRThzok.js";import"./ai-chat-header-CqLEJliQ.js";import"./ai-icon-C6L3buz6.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DdzWz-bs.js";import"./ai-dropdown-menu-BGlpRA5v.js";import"./if-defined-DQnWEDmw.js";import"./popover-CpzSH4BN.js";import"./ai-modal-BU8wDXlC.js";import"./ai-agent-info-KK-gmiKS.js";import"./ai-chat-interface-B10j8Uit.js";import"./ai-file-picker-BYKmQKA3.js";import"./ai-prompt-C8vcpiW2.js";import"./ai-suggestions-Dg3l9ZLs.js";import"./ai-voice-input-BnpUbh8A.js";import"./ai-empty-state-BOJyY09-.js";import"./ai-error-message-BMXPQihQ.js";import"./ai-response-message-CAGnvurp.js";import"./ai-actions-toolbar-CKOq3cKU.js";import"./ai-thinking-indicator-BiTmJHtm.js";import"./ai-user-message-Cs2e6ZJe.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
