import{x as i}from"./iframe-CCgbJ9v0.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-BOBkqSQr.js";import"./ai-chatbot-BT8xdabO.js";import"./ai-message-thread-BGeSMQty.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BmDoqPsk.js";import"./state-C9BD_Ybu.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DGTRTKb_.js";import"./class-map-BfUl9s2u.js";import"./when-CI7b_ccM.js";import"./ai-attachment-1veM77fV.js";import"./tooltip-FkF5UpHt.js";import"./query-BpjciUlk.js";import"./overlay-f86YzmiU.js";import"./ai-chat-header-CUaz-_gV.js";import"./ai-icon-CHG83Dc5.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D1ab0dhO.js";import"./ai-dropdown-menu-Kev5oa6S.js";import"./if-defined-CpgHE6cZ.js";import"./popover-DQugguDS.js";import"./ai-modal-swvdXdkS.js";import"./ai-agent-info-CPakuPP5.js";import"./ai-chat-interface-COQiE_z8.js";import"./ai-file-picker-zJ9JwrHW.js";import"./ai-prompt-D1nQMvrq.js";import"./ai-suggestions-kxQjxpmn.js";import"./ai-voice-input-coZFWJx6.js";import"./ai-empty-state-BFI-_Dyo.js";import"./ai-error-message-Dl7oYzhb.js";import"./ai-response-message-1xPYDuAA.js";import"./ai-actions-toolbar-Okbxgxd1.js";import"./ai-thinking-indicator-CG9M0c6u.js";import"./ai-user-message-CcQXxuyG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
