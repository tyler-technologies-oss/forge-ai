import{x as i}from"./iframe-DiGPE8Ub.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-B5154Lju.js";import"./ai-chatbot-CwG9aak6.js";import"./ai-message-thread-1mQ0LJrv.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-NBZ-G4gc.js";import"./state-Bx_ZuA2R.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-DlL8SIVM.js";import"./class-map-DAZGrwoX.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DAWn9p8I.js";import"./tooltip-DrSiY4r_.js";import"./query-BpjciUlk.js";import"./overlay-JcowT9iZ.js";import"./ai-chat-header-DHNZ0ILS.js";import"./ai-icon-Donf2wYa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Dw8mY2QO.js";import"./ai-dropdown-menu-DKJyCCFf.js";import"./if-defined-BGdL9ol3.js";import"./popover-CWEycCX5.js";import"./ai-modal-C4pDoKY_.js";import"./ai-agent-info-hQdOHUEC.js";import"./ai-chat-interface-C7leRxmw.js";import"./ai-file-picker-CxV2KPrl.js";import"./ai-prompt-B8ws3gM7.js";import"./ai-suggestions-DteSpPhF.js";import"./ai-voice-input-lPjAinZ4.js";import"./ai-empty-state-3_qxlLKI.js";import"./ai-error-message-D-yNQfi5.js";import"./ai-response-message-BE3Ku6Pd.js";import"./ai-actions-toolbar-CDA41oXW.js";import"./ai-thinking-indicator-1B9_cxxx.js";import"./ai-user-message-D2IBbRXI.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
