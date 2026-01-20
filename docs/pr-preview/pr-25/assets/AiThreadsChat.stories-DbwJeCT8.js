import{x as i}from"./iframe-D_CQ533w.js";import{M as p}from"./mock-adapter-DPRgB_9-.js";import"./ai-threads-C_vIcAvX.js";import"./ai-chatbot-CyoluQHR.js";import"./ai-message-thread-BxFHijwj.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DoNaKfKL.js";import"./state-B2Sbo-dO.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-B5FtZVqr.js";import"./class-map-CRuDjv9w.js";import"./when-CI7b_ccM.js";import"./ai-attachment-dt5aqhKd.js";import"./ai-spinner-BITnczLS.js";import"./tooltip-BOXgG4b2.js";import"./query-BpjciUlk.js";import"./overlay-Dz-9Ekgd.js";import"./ai-chat-header-4IbvkFJv.js";import"./ai-icon-B2q3LnG-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-BsH_cIY-.js";import"./ai-dropdown-menu-BiqPrhI7.js";import"./if-defined-DP6wAIsK.js";import"./popover-BnQrRjpQ.js";import"./ai-dropdown-menu-item-BG4Dlmyf.js";import"./ai-modal-BXmAtTm8.js";import"./ai-agent-info-BXq_YI9P.js";import"./ai-chat-interface-Dv6kMrUq.js";import"./ai-file-picker-PRuds7m0.js";import"./ai-prompt-0VIKEpg9.js";import"./ai-suggestions-GSTpajyA.js";import"./ai-voice-input-C9Im4vmM.js";import"./ai-actions-toolbar-DYJjp-uX.js";import"./ai-empty-state-Ca9t310G.js";import"./ai-error-message-Bbw9uy6U.js";import"./ai-response-message-DMurpqQy.js";import"./ai-thinking-indicator-B_2tGrnw.js";import"./ai-user-message-BTaEcVvZ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
