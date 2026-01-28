import{x as i}from"./iframe-KGBrpkIK.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CO4_4-N_.js";import"./ai-chatbot-Bxv0e0Bz.js";import"./ai-message-thread-CKGIVvdZ.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BrNOBJsK.js";import"./base-DTUdKVvG.js";import"./query-assigned-elements-3D_WHrDR.js";import"./ref-C_NepP5M.js";import"./class-map-Cj4OHHXc.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BnLxKm8A.js";import"./ai-spinner-YFwWckx1.js";import"./tooltip-mjH3BvN9.js";import"./overlay-yC3iEjX2.js";import"./ai-chat-header-Bsswwnyw.js";import"./ai-icon-B5YfOTPm.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-PP8MvqDh.js";import"./ai-dropdown-menu-D81DZh3I.js";import"./if-defined-BRZutZYD.js";import"./popover-CMsMHwde.js";import"./ai-dropdown-menu-item-B3sUfDyx.js";import"./ai-modal-30kZiD40.js";import"./ai-agent-info-HyPDkmNh.js";import"./ai-chat-interface-DBW3Kyqs.js";import"./ai-file-picker-BHtHs7lE.js";import"./ai-prompt-DRIeivbP.js";import"./ai-suggestions-h8aD6upo.js";import"./ai-voice-input-ViYrMmfu.js";import"./ai-response-message-toolbar-DPyzOUBT.js";import"./ai-empty-state-Dc8ZfeBx.js";import"./ai-error-message-c8Kw51xB.js";import"./ai-response-message-COFC2vwi.js";import"./ai-thinking-indicator-BVhwVWsX.js";import"./ai-user-message-e4tqV6Ol.js";import"./ai-user-message-toolbar-uTVB8tPO.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
