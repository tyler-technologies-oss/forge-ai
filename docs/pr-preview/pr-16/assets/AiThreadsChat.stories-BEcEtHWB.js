import{x as i}from"./iframe-ChBR0OdL.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-rG_wPo76.js";import"./ai-chatbot-DXWTgXFX.js";import"./ai-message-thread-BXFDhhrk.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-An_hAqPB.js";import"./state-DBa3zFtX.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-JZhNjHLN.js";import"./class-map-F_iTMB7Q.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DO2xZIgT.js";import"./tooltip-elV5hzC_.js";import"./query-BpjciUlk.js";import"./overlay--Z4FyIOZ.js";import"./ai-chat-header-QH63FhrI.js";import"./ai-icon-Co_Djz_f.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Da8v3erH.js";import"./ai-dropdown-menu-BFstItDO.js";import"./if-defined-DwExMdDT.js";import"./popover-DwUgfIbg.js";import"./ai-modal-224SNCtK.js";import"./ai-agent-info-rY-Lngp-.js";import"./ai-chat-interface-DDuRmzvq.js";import"./ai-file-picker-BkLFB-E8.js";import"./ai-prompt-CTiXk6oB.js";import"./ai-suggestions-B5prX5NB.js";import"./ai-voice-input-C-or2yke.js";import"./ai-empty-state-BEvpWWWa.js";import"./ai-error-message-ujE7-bSK.js";import"./ai-response-message-mpQLDwi8.js";import"./ai-actions-toolbar-DH_stfwe.js";import"./ai-thinking-indicator-CKiPcmJU.js";import"./ai-user-message-RXNlTJKE.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
