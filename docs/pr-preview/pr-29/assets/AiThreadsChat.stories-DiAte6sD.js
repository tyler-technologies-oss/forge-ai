import{x as i}from"./iframe-D4qW0ZVD.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-CgUlEek_.js";import"./ai-chatbot-BGhK0oND.js";import"./ai-message-thread-DvGMgfMV.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-70LwJpNn.js";import"./state-Bp27iwzH.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DeALGK8z.js";import"./class-map-tthV7hpZ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-xfxticcR.js";import"./ai-spinner-BSaLB5BL.js";import"./tooltip-BfER8WIb.js";import"./query-BpjciUlk.js";import"./overlay-BQFLzEpE.js";import"./ai-chat-header-BTiF_sc3.js";import"./ai-icon-CgQco358.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B_SV9Kqa.js";import"./ai-dropdown-menu-kHOOBHpA.js";import"./if-defined-Be4BIViB.js";import"./popover-BKC2NC1y.js";import"./ai-dropdown-menu-item-BLdqzuXu.js";import"./ai-modal-OcBu_87L.js";import"./ai-agent-info-BljudpOf.js";import"./ai-chat-interface-7EdenIt0.js";import"./ai-file-picker-3zaDoU_c.js";import"./ai-prompt-Cb7Yf3wt.js";import"./ai-suggestions-D5P8gbDC.js";import"./ai-voice-input-DTumPsXW.js";import"./ai-actions-toolbar-B7AV67b7.js";import"./ai-empty-state-BN7cqVZB.js";import"./ai-error-message-DkKb9SiD.js";import"./ai-response-message-ZZ9LUmlo.js";import"./ai-thinking-indicator-DXPJpEQz.js";import"./ai-user-message-D4XG4Pbk.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const V=["Demo"];export{e as Demo,V as __namedExportsOrder,Q as default};
