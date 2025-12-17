import{x as i}from"./iframe-CU9UeogD.js";import{M as p}from"./mock-adapter-CJcooZGU.js";import"./ai-threads-CuAXh9WR.js";import"./ai-chatbot-BBipSn8J.js";import"./ai-message-thread-DhHT6S8f.js";import"./utils-DYbogL2a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Cagi_dhv.js";import"./state-yc1BbiwK.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-CCP37llN.js";import"./class-map-BDHebbIr.js";import"./when-CI7b_ccM.js";import"./ai-attachment-6SVsUdTO.js";import"./tooltip-D8RRj3uc.js";import"./query-BpjciUlk.js";import"./overlay-NnCRIsLv.js";import"./ai-chat-header-D0FUQ0uO.js";import"./ai-icon-Ca9RD9J-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DiDRfPOc.js";import"./ai-dropdown-menu-BtThgJjJ.js";import"./if-defined-CwZzORmo.js";import"./popover-CSs2NCz8.js";import"./ai-modal-C5SDK6Zx.js";import"./ai-agent-info-vjjgr6NY.js";import"./ai-chat-interface-DlquQLkb.js";import"./ai-file-picker-D7rtuZT0.js";import"./ai-prompt-B0rSL8B8.js";import"./ai-suggestions-CiHy_I_H.js";import"./ai-voice-input-5u0kii25.js";import"./ai-empty-state-CFQMU_uy.js";import"./ai-error-message-D9wOcLT_.js";import"./ai-response-message-Cs7OnGzL.js";import"./ai-actions-toolbar-BifzaF_m.js";import"./ai-thinking-indicator-DmtRRhgp.js";import"./ai-user-message-H2tFEHdi.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
