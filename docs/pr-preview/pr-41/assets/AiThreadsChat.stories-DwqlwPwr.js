import{x as i}from"./iframe-GZAYv1Yb.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-4w1GwQiq.js";import"./ai-chatbot-BAvLwQph.js";import"./ai-message-thread-1_L05nOT.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CMUkMVKW.js";import"./base-B_pE4d0X.js";import"./query-assigned-elements-gsFBIrzJ.js";import"./ref-whij1_1H.js";import"./class-map-DDfAjbBG.js";import"./when-CI7b_ccM.js";import"./ai-attachment-3Nwa8x0E.js";import"./ai-spinner-LhhOdse-.js";import"./tooltip-BchShRF0.js";import"./overlay-BBn0o4JB.js";import"./ai-chat-header-CWElIwV7.js";import"./ai-icon-BxfSF3eq.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C0LPlcS6.js";import"./ai-dropdown-menu-CgBa-HVB.js";import"./if-defined-_cimMUI5.js";import"./popover-OCWGufd3.js";import"./ai-dropdown-menu-item-BpU7xSLf.js";import"./ai-modal-e9Zpy7Os.js";import"./ai-agent-info-DgjhDAdS.js";import"./ai-agent-selector-kfYZ-Mz0.js";import"./ai-chat-interface-DVagRs8Y.js";import"./ai-file-picker-CI7Qk_UP.js";import"./ai-prompt-B26LibdR.js";import"./ai-suggestions-BIsOkV-e.js";import"./ai-voice-input-B7E6eQwu.js";import"./ai-response-message-toolbar-BZ9eTdqC.js";import"./ai-empty-state-ChHtMEgu.js";import"./ai-error-message-t4_V8jZ3.js";import"./ai-response-message-PO8RuHQA.js";import"./ai-thinking-indicator-Q_0TF3J5.js";import"./ai-user-message-D2GgkzYI.js";import"./ai-user-message-toolbar-BoStb6Sc.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
