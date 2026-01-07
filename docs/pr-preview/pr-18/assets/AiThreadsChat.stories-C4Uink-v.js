import{x as i}from"./iframe-GNzhD2Ck.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-BEG7_ZhI.js";import"./ai-chatbot-DKJvB_46.js";import"./ai-message-thread-D5ivodu_.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-ChmmcbfD.js";import"./state-ChLroZol.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BL4iZHvw.js";import"./class-map-DPJq6ALq.js";import"./when-CI7b_ccM.js";import"./ai-attachment-SGL4L586.js";import"./tooltip-BNb_t-64.js";import"./query-BpjciUlk.js";import"./overlay-8702Boo3.js";import"./ai-chat-header-BKU--1wH.js";import"./ai-icon-Cf8Z1m4j.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DGNLYb1z.js";import"./ai-dropdown-menu-0F0guHXR.js";import"./if-defined-BXHqwLRm.js";import"./popover-D6X_axv8.js";import"./ai-modal-Cjr4Qj9P.js";import"./ai-agent-info-D3NK2AAp.js";import"./ai-chat-interface-CHsqiEIn.js";import"./ai-file-picker-DTFU9ZmS.js";import"./ai-prompt--lM5AwS1.js";import"./ai-suggestions-DkTXO_Wo.js";import"./ai-voice-input-Dy7tqLlM.js";import"./ai-empty-state-Bwp-shXZ.js";import"./ai-error-message-CSzueFiV.js";import"./ai-response-message-Dq4MOxoX.js";import"./ai-actions-toolbar-CN2xGea3.js";import"./ai-thinking-indicator-Bos9om4Q.js";import"./ai-user-message-CqVy6oeW.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
