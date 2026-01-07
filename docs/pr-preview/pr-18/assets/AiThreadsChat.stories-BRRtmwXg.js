import{x as i}from"./iframe-DjbbAuUw.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-3_hm-v4p.js";import"./ai-chatbot-DmJCqJwm.js";import"./ai-message-thread-DYOxnDob.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-mQJOEROL.js";import"./state-Dcyyn2ed.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-frdxzFZp.js";import"./class-map-CVl0mB9Z.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DMYETaJL.js";import"./tooltip-CciXlSM4.js";import"./query-BpjciUlk.js";import"./overlay-BrPuaGzy.js";import"./ai-chat-header-BZA3Tsyw.js";import"./ai-icon-DoWFu0CI.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bhu5mP1v.js";import"./ai-dropdown-menu-BtnMxQkE.js";import"./if-defined-CHS95E2B.js";import"./popover-CK36w-wY.js";import"./ai-modal-CCfVVGX6.js";import"./ai-agent-info-_FEjYixJ.js";import"./ai-chat-interface-CsOqOyvP.js";import"./ai-file-picker-DQrHRI57.js";import"./ai-prompt-A3ZmUgOz.js";import"./ai-suggestions-Dah8Phav.js";import"./ai-voice-input-DailobZf.js";import"./ai-empty-state-BwkoG9q3.js";import"./ai-error-message-bopXRDLk.js";import"./ai-response-message-5sM5cCYp.js";import"./ai-actions-toolbar-BOZ1TidA.js";import"./ai-thinking-indicator-Do4-3479.js";import"./ai-user-message-qbAA-AwU.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
