import{x as i}from"./iframe-C6yLHJaW.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-C4oNEksh.js";import"./ai-chatbot-CPylIR2d.js";import"./ai-message-thread-CNyGohbP.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DJUhGJO9.js";import"./base-Cj5Szx13.js";import"./query-assigned-elements-C3kDGJ1i.js";import"./ref-LLAOaWEy.js";import"./class-map-CmWrXl8H.js";import"./when-CI7b_ccM.js";import"./ai-attachment-qA20rlHT.js";import"./ai-spinner-BCesSXe7.js";import"./tooltip-CfrmWiUA.js";import"./overlay-DVSR1Ofg.js";import"./ai-chat-header-DoelVMTt.js";import"./ai-icon-Dl9O9wKG.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DKqWsxNC.js";import"./ai-dropdown-menu-B0YW1qD1.js";import"./if-defined-7znUiy2v.js";import"./popover-C1nsSmlm.js";import"./ai-dropdown-menu-item-CQVscBVK.js";import"./ai-modal-BAug-PIV.js";import"./ai-agent-info-DxAsrPg5.js";import"./ai-chat-interface-BMHRubVK.js";import"./ai-file-picker-BHr51wvT.js";import"./ai-prompt-DuKKRCTx.js";import"./ai-suggestions-DyxL6Ek8.js";import"./ai-voice-input-Cg327jN9.js";import"./ai-response-message-toolbar-QW1IrdLY.js";import"./ai-empty-state-Boj7zuTF.js";import"./ai-error-message-B4vgmvnV.js";import"./ai-response-message-Ck1N5TPU.js";import"./ai-thinking-indicator-DJKHRvN-.js";import"./ai-user-message-DFuBSXvA.js";import"./ai-user-message-toolbar-CFYdc8C8.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
