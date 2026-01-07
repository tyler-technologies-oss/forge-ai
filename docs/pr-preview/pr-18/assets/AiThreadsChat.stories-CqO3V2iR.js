import{x as i}from"./iframe-ByyJzBMk.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-BSfqogHe.js";import"./ai-chatbot-9B5YRPDI.js";import"./ai-message-thread-a_t95Hyn.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-oUh8d3TD.js";import"./state-BBAtTJdC.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-tKQL7aS9.js";import"./class-map-wsdujM9B.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D-nw34WP.js";import"./tooltip-Bo6N1IWz.js";import"./query-BpjciUlk.js";import"./overlay-DSZ7dmZg.js";import"./ai-chat-header-CcXr4C9f.js";import"./ai-icon-Dts86pdX.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DWBeRYgX.js";import"./ai-dropdown-menu-DX7jdQwm.js";import"./if-defined-C8I3QQB2.js";import"./popover-COGGf6gN.js";import"./ai-modal-D8kRSbtZ.js";import"./ai-agent-info-DZxgwuF1.js";import"./ai-chat-interface-YltHeZ3I.js";import"./ai-file-picker-mmr6iIUJ.js";import"./ai-prompt-DuTEakxb.js";import"./ai-suggestions-BE4xyxxY.js";import"./ai-voice-input-BfuV5dBo.js";import"./ai-empty-state-CdAUUhl_.js";import"./ai-error-message-642KfKDt.js";import"./ai-response-message-DGW9vNHd.js";import"./ai-actions-toolbar-DL5YdrBb.js";import"./ai-thinking-indicator-Ckv5w71M.js";import"./ai-user-message-D2p1oRVy.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
