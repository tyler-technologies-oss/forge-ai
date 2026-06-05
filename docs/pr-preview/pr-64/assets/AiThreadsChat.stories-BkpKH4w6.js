import{x as i}from"./iframe-uGLD-tBn.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CryIf1bo.js";import"./ai-chatbot-base-gyns9Ko2.js";import"./ai-chatbot-D7Uouzx8.js";import"./ai-message-thread-DACOB24B.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CAiA-T5o.js";import"./base-Z5d63sI5.js";import"./query-assigned-elements-Qawe_BUo.js";import"./ref-DKxFVojP.js";import"./class-map-lbcmFTqR.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D4i4zixn.js";import"./ai-spinner-DpRsv9jS.js";import"./tooltip-VTiRL8da.js";import"./overlay-GBEMx1gD.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-B5atUPaO.js";import"./ai-icon-tfdFLywo.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CaTMwm4Y.js";import"./ai-dropdown-menu-BxNSWOn4.js";import"./if-defined-CPoyYKTr.js";import"./popover-Bumc-Pne.js";import"./query-assigned-nodes-DRut4E5e.js";import"./ai-dropdown-menu-item-BLtNmY7E.js";import"./ai-modal-ydmrnMgO.js";import"./ai-agent-info-CgAs8-Nm.js";import"./ai-agent-selector-D4l9kpt0.js";import"./ai-chat-interface-De7iCfj_.js";import"./ai-file-picker-cFuPBqoq.js";import"./ai-prompt-BaP6Cv9V.js";import"./ai-suggestions-3Q-JTrlm.js";import"./ai-voice-input-CHhIFrZ0.js";import"./ai-response-message-toolbar-D92fhyNq.js";import"./ai-empty-state-vB7pGjJ6.js";import"./ai-error-message-jCf8eTvg.js";import"./ai-response-message-C900u20n.js";import"./ai-thinking-indicator-BxYM94tB.js";import"./ai-user-message-D_KQR5nf.js";import"./ai-user-message-toolbar-DVWKub2_.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
