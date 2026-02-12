import{x as i}from"./iframe-CCWsMM7d.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Bhfm3Snw.js";import"./ai-chatbot-CsBoXxJb.js";import"./ai-message-thread-B4QtgsHi.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BBKQEB1X.js";import"./base-8b12zp7J.js";import"./query-assigned-elements-wG5JqJX0.js";import"./ref-Bdh8BJ3W.js";import"./class-map-CmGZPI76.js";import"./when-CI7b_ccM.js";import"./ai-attachment-CqfcxrRQ.js";import"./ai-spinner-DYKUrOUQ.js";import"./tooltip-D4j8dW04.js";import"./overlay-DeX3q-AB.js";import"./ai-chat-header-Dm9seQfX.js";import"./ai-icon-BBRd7_fJ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DTeYDIA3.js";import"./ai-dropdown-menu-D6owgupQ.js";import"./if-defined-DErItRzL.js";import"./popover-D34ZNWT6.js";import"./ai-dropdown-menu-item-6b9KrcIv.js";import"./ai-modal-B59zR3V8.js";import"./ai-agent-info-RGWL2qpm.js";import"./ai-agent-selector-BHwlvbkc.js";import"./ai-chat-interface-DnZT2ajC.js";import"./ai-file-picker-27kosksN.js";import"./ai-prompt-CCEcOO_b.js";import"./ai-suggestions-DPm5Gj5M.js";import"./ai-voice-input-Br6U9Lud.js";import"./ai-response-message-toolbar-D7EeVY30.js";import"./ai-empty-state-DcOxngfx.js";import"./ai-error-message-Tei9IAOk.js";import"./ai-response-message-B4btXO6j.js";import"./ai-thinking-indicator-62vovZsN.js";import"./ai-user-message-Bpc9fM_G.js";import"./ai-user-message-toolbar-BxcJ6FoG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
