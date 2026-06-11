import{x as i}from"./iframe-GiqNzQun.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-BAlTXoqi.js";import"./ai-chatbot-base-uz99cS5Z.js";import"./ai-chatbot-CM6NjYji.js";import"./ai-message-thread-NKuOFlGT.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-gC0ztlDB.js";import"./base-BH6EXoOn.js";import"./query-assigned-elements-yetPixop.js";import"./ref-CJyPIwcc.js";import"./class-map-CLalyKrP.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CBHVW0Sc.js";import"./ai-spinner-7v2suwOo.js";import"./tooltip-CPgv0Rzm.js";import"./overlay-CIVnpdFK.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BAjMbYbI.js";import"./ai-icon-BaPFS3-9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CDDTiO_e.js";import"./ai-dropdown-menu-5Ogaynac.js";import"./if-defined-CRG0ZRUD.js";import"./popover-D2cErdjY.js";import"./query-assigned-nodes-ByzUbdf1.js";import"./ai-dropdown-menu-item-BdBGNFF-.js";import"./ai-modal-slMruiQY.js";import"./ai-agent-info-CEb2tFHL.js";import"./ai-agent-selector-SCf0QO9Q.js";import"./ai-chat-interface-Bd9t4DDb.js";import"./ai-file-picker-C8jcuppI.js";import"./ai-prompt-BCSVPntb.js";import"./ai-suggestions-BoW50oSa.js";import"./ai-voice-input-BJ9SATBf.js";import"./ai-response-message-toolbar-CtFY9xNZ.js";import"./ai-empty-state-Cou2wOD_.js";import"./ai-error-message-CK75mH1D.js";import"./ai-response-message-JX2OxTtc.js";import"./ai-thinking-indicator-BV4en9Xb.js";import"./ai-user-message-BuxsRh3S.js";import"./ai-user-message-toolbar-1kUOaA2A.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
