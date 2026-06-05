import{x as i}from"./iframe-8UPTGfWp.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-B0BnjeYt.js";import"./ai-chatbot-base-C_pyZPQ4.js";import"./ai-chatbot-DQmgGQyb.js";import"./ai-message-thread-C1xAPReg.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-B2GkyXrM.js";import"./base-LoiOX2zq.js";import"./query-assigned-elements-CDKYbwvR.js";import"./ref-lHttI-ZF.js";import"./class-map-BEP5G1KZ.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Dewq3KNG.js";import"./ai-spinner-0vRu4QNY.js";import"./tooltip-BJcs8whp.js";import"./overlay-BjlH-H0e.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CJwtGDbD.js";import"./ai-icon-DogaPA1E.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-GUGjtyZX.js";import"./ai-dropdown-menu-CWUcDiJy.js";import"./if-defined-CPPpTuln.js";import"./popover-BuWSMNFZ.js";import"./query-assigned-nodes-CRRkHBNC.js";import"./ai-dropdown-menu-item-Dwa2IXIB.js";import"./ai-modal-Dc3pKMcd.js";import"./ai-agent-info-BEkPzi2K.js";import"./ai-agent-selector-C9gfaWX3.js";import"./ai-chat-interface-CTPn9lAK.js";import"./ai-file-picker-X2KjCa9t.js";import"./ai-prompt-1VZNsTyH.js";import"./ai-suggestions-BoT21NDX.js";import"./ai-voice-input-rcNaCwBr.js";import"./ai-response-message-toolbar-4Earc_Lg.js";import"./ai-empty-state-BheQIbqc.js";import"./ai-error-message-BqAn-bI3.js";import"./ai-response-message-4Qgorz1J.js";import"./ai-thinking-indicator-YZUtZNTl.js";import"./ai-user-message-DpgUQCXn.js";import"./ai-user-message-toolbar-BIMsyBIm.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
