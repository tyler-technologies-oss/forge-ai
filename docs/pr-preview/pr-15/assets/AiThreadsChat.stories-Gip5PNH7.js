import{x as i}from"./iframe-CfQlROM4.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-C4c5atHh.js";import"./ai-chatbot-BxzpiyPs.js";import"./ai-message-thread-D6LOL0HB.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-EiR40qxP.js";import"./state-Cz3mr3Fh.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Cz360Nqv.js";import"./class-map-gjh-9Lpf.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DGdJu8Lc.js";import"./tooltip-DLO27Blg.js";import"./query-BpjciUlk.js";import"./overlay-BoxUyvdG.js";import"./ai-chat-header-Ct8OB0ut.js";import"./ai-icon-Clg-61bP.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C3_34ewQ.js";import"./ai-dropdown-menu-CymSkePy.js";import"./if-defined-BCewG4nU.js";import"./popover-C3Hl7Mmf.js";import"./ai-modal-B9LAM0FR.js";import"./ai-agent-info-Dzh-AuLF.js";import"./ai-chat-interface-Chf76imf.js";import"./ai-file-picker-D2lREYib.js";import"./ai-prompt-KnD1xWDX.js";import"./ai-suggestions-W_vFgwVn.js";import"./ai-voice-input-C_-Sqx8K.js";import"./ai-empty-state-VY_R4Q1j.js";import"./ai-error-message-CCLOnsCD.js";import"./ai-response-message-Cc7XA5sY.js";import"./ai-actions-toolbar-CHXbavHq.js";import"./ai-thinking-indicator-D4b6lUfn.js";import"./ai-user-message-BXPc8EMm.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
