import{x as i}from"./iframe-B7fMi3CI.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-XccYLQ9O.js";import"./ai-chatbot-iOqCbWRH.js";import"./ai-message-thread-CS7vVRba.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DZ5AtTLR.js";import"./state-CM3bThIi.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-C-ZSk2Bt.js";import"./class-map-BKYdFRHi.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DK8WlKfQ.js";import"./tooltip-IL2KGDPu.js";import"./query-BpjciUlk.js";import"./overlay-Dx5GW9hS.js";import"./ai-chat-header-D8Fsz3yz.js";import"./ai-icon-DQ7o7Dy4.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CFabSPZz.js";import"./ai-dropdown-menu-D1FcEhBl.js";import"./if-defined-CnSEQywT.js";import"./popover-CnTc4y9M.js";import"./ai-modal-pkgPYzpb.js";import"./ai-agent-info-T0NjxBfi.js";import"./ai-chat-interface-BlaKhL1r.js";import"./ai-file-picker-_yyd6nwt.js";import"./ai-prompt-CTfMN5s-.js";import"./ai-suggestions-BMw6v-fK.js";import"./ai-voice-input-CA_lo1bB.js";import"./ai-empty-state-BQcH6Cvr.js";import"./ai-error-message-cFSpepac.js";import"./ai-response-message-CeySeLyE.js";import"./ai-actions-toolbar-Dq3kEuRT.js";import"./ai-thinking-indicator-DZ0X3HJO.js";import"./ai-user-message-CbteqzWl.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
