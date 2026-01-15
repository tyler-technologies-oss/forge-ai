import{x as i}from"./iframe-DVvegsSV.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-DOj6SR5Q.js";import"./ai-chatbot-Biubk9EZ.js";import"./ai-message-thread-DPLxRo2Q.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-NIB-rxFw.js";import"./state-M7AvoR4m.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-5JgcO0gQ.js";import"./class-map-CF9fNlJl.js";import"./when-CI7b_ccM.js";import"./ai-attachment-kcgmXQzL.js";import"./ai-spinner-Dxkd0m5M.js";import"./tooltip-CtnbKiml.js";import"./query-BpjciUlk.js";import"./overlay-CeYxJMz2.js";import"./ai-chat-header-CpAj2ypB.js";import"./ai-icon-30D0uXvQ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D3TH0WmQ.js";import"./ai-dropdown-menu-DIn-s0jX.js";import"./ai-dropdown-menu-item-C_Pyg8hi.js";import"./popover-BpSMpjdM.js";import"./ai-modal-COD9yC0X.js";import"./ai-agent-info-C17029A3.js";import"./ai-chat-interface-SaJRIPaj.js";import"./ai-file-picker-CTs0tuF6.js";import"./ai-prompt-BTmAu1mp.js";import"./ai-suggestions-B92NvFv5.js";import"./ai-voice-input-Clri770n.js";import"./ai-actions-toolbar-C9mCqC5V.js";import"./ai-empty-state-Dc8NC-Yz.js";import"./ai-error-message-DAm2ff2J.js";import"./ai-response-message-D0oKuAb4.js";import"./ai-thinking-indicator-k9Y0Pu_4.js";import"./ai-user-message-DqKAJoJP.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
