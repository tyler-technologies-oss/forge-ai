import{x as i}from"./iframe-DFS-TZpC.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DwWGthdX.js";import"./ai-chatbot-C42XbnjY.js";import"./ai-message-thread-4U0cmarB.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BCpGbkyv.js";import"./base-uNMStW-Q.js";import"./query-assigned-elements-DKFvIWmU.js";import"./ref-DKYe_LmX.js";import"./class-map-pVA_OGQF.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CGupDNaq.js";import"./ai-spinner-6M9CwI5P.js";import"./tooltip-D8FhisyU.js";import"./overlay-TnUOFzkn.js";import"./ai-chat-header-Eg8Tm-gP.js";import"./ai-icon-N02zDdX8.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DccHEp-5.js";import"./ai-dropdown-menu-DhMcC7J8.js";import"./if-defined-DY-W39Fz.js";import"./popover-BUMijWVD.js";import"./ai-dropdown-menu-item-hXlbq6Fp.js";import"./ai-modal-1Y5p_wuU.js";import"./ai-agent-info-Mu9UBnqp.js";import"./ai-agent-selector-Big2jV8L.js";import"./ai-chat-interface-4gYA7aV2.js";import"./ai-file-picker-FZSSOPpY.js";import"./ai-prompt-C8JMC1h9.js";import"./ai-suggestions-CU3VDrz1.js";import"./ai-voice-input-BzL4OUrx.js";import"./ai-response-message-toolbar-tMc_iWFg.js";import"./ai-empty-state-D3sxeYpJ.js";import"./ai-error-message-BDrMGWTp.js";import"./ai-response-message-Bb5CPt7U.js";import"./ai-thinking-indicator-DF5foFEF.js";import"./ai-user-message-B700YL8M.js";import"./ai-user-message-toolbar-CMhGWBZM.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
