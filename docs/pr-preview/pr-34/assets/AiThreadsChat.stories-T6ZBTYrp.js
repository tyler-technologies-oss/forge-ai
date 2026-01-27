import{x as i}from"./iframe-D_DovT5y.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-6pPBko2n.js";import"./ai-chatbot-CwbD-OPL.js";import"./ai-message-thread-D-ZSNqKw.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-D403KRej.js";import"./base-ft7MLERX.js";import"./query-assigned-elements-DLlctzc_.js";import"./ref-BgnmHvmO.js";import"./class-map-CsOxxmBD.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BOhwNwzI.js";import"./ai-spinner-D8vq3p42.js";import"./tooltip-Djn416Ho.js";import"./overlay-q3ZC-rTW.js";import"./ai-chat-header-BNUKNKWy.js";import"./ai-icon-DkvgCKpO.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DUAvJWOJ.js";import"./ai-dropdown-menu-CaQ6KWWv.js";import"./if-defined-vUAuC5zN.js";import"./popover-B1ZruTNh.js";import"./ai-dropdown-menu-item-D4KPfba7.js";import"./ai-modal-DDR8hi7I.js";import"./ai-agent-info-DI-nX8_o.js";import"./ai-agent-selector-2KId3UkQ.js";import"./ai-chat-interface-Dd-zVAxE.js";import"./ai-file-picker-DiAV_e8X.js";import"./ai-prompt-D56PhfRX.js";import"./ai-suggestions-nhqUlBX2.js";import"./ai-voice-input-DKKMMfF8.js";import"./ai-response-message-toolbar-DWOVJ0RP.js";import"./ai-empty-state-D9Nzv8bH.js";import"./ai-error-message-CfC3g_M1.js";import"./ai-response-message-CHQR9iIf.js";import"./ai-thinking-indicator-CDM8ao8h.js";import"./ai-user-message--47UuNc-.js";import"./ai-user-message-toolbar-BcoGX5xN.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
