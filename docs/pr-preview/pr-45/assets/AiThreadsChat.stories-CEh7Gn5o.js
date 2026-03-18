import{x as i}from"./iframe-CoMPIM91.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DHJRczVT.js";import"./ai-chatbot-base-DdA7RpEI.js";import"./ai-chatbot-22PR-bz2.js";import"./ai-message-thread-m8c5PQ11.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C0lsaYZZ.js";import"./base-CCAwxvzI.js";import"./query-assigned-elements-aplBxFom.js";import"./ref-B-Kt-SMS.js";import"./class-map-CTWgf-Zu.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D6JoiZgK.js";import"./ai-spinner-DgK5o1vX.js";import"./tooltip-BFdfihOC.js";import"./overlay-DudO7o-1.js";import"./ai-chat-header-BvsR12b5.js";import"./ai-icon-Dy2PngP-.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CWQ22KG7.js";import"./ai-dropdown-menu-D2HbBPDv.js";import"./if-defined-Dho57mOc.js";import"./popover-CM47TLlL.js";import"./ai-dropdown-menu-item-CaVjZ5GL.js";import"./ai-modal-BkSwHBAz.js";import"./ai-agent-info-C2qlhKUA.js";import"./ai-agent-selector-2BLtgZw1.js";import"./ai-chat-interface-CsoBdqYa.js";import"./ai-file-picker-UB5wOOJv.js";import"./ai-prompt-xvcy4u3p.js";import"./ai-suggestions-B8YFs54m.js";import"./ai-voice-input-Bz6-HKLR.js";import"./ai-response-message-toolbar-BavCFFay.js";import"./ai-empty-state-BcYzebvG.js";import"./ai-error-message-BBbblm8K.js";import"./ai-response-message-Co8Jp9wU.js";import"./ai-thinking-indicator-Daa5GHNB.js";import"./ai-user-message-CgqU-cTi.js";import"./ai-user-message-toolbar-BMUp2NPX.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
