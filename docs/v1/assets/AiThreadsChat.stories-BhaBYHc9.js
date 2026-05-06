import{x as i}from"./iframe-BY4xH5B9.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-D6ETs91e.js";import"./ai-chatbot-base-BPOe1L8S.js";import"./ai-chatbot-C7Dt-KZ6.js";import"./ai-message-thread-DZ48dntC.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CsH5N9k4.js";import"./base-BAC4RtfJ.js";import"./query-assigned-elements-BKlCAXBb.js";import"./ref-BVVj9Qtm.js";import"./class-map-BcT1EwzQ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DsKJUI5i.js";import"./ai-spinner-BzlDjYyR.js";import"./tooltip-CVrsYiEt.js";import"./overlay-Bo0d5rDm.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-t-wy5xbc.js";import"./ai-icon-Bu7xthq6.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CqJCCRzf.js";import"./ai-dropdown-menu-CSVWeO-5.js";import"./if-defined-BK7tIy0K.js";import"./popover-CDQEp3E6.js";import"./query-assigned-nodes-CkHC3pb2.js";import"./ai-dropdown-menu-item-CMnUnw28.js";import"./ai-modal-gXTR5y8I.js";import"./ai-agent-info-BmjP579k.js";import"./ai-agent-selector-DAbdLuvQ.js";import"./ai-chat-interface-yq9OtalR.js";import"./ai-file-picker-C4HGuyil.js";import"./ai-prompt-Cg7k0VED.js";import"./ai-suggestions-DvameRC7.js";import"./ai-voice-input-DBssvdMX.js";import"./ai-response-message-toolbar-CQmBBrdu.js";import"./ai-empty-state-DgakzO37.js";import"./ai-error-message-BYu4ZSh3.js";import"./ai-response-message-BpkcdCXx.js";import"./ai-thinking-indicator-C7vOxsJ2.js";import"./ai-user-message-DAGum1TK.js";import"./ai-user-message-toolbar-nTdPAVIf.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
