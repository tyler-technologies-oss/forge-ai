import{x as i}from"./iframe-PT5a9ywt.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-DM0Pka_C.js";import"./ai-chatbot-DuNZ0uI1.js";import"./ai-message-thread-Dlxif_MA.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CgCoiyTm.js";import"./base-Cru78AOW.js";import"./query-assigned-elements-ERaNNEoi.js";import"./ref-CENbtPfk.js";import"./class-map-DqKD0csf.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D1qrg8F2.js";import"./ai-spinner-Cezdc8Lt.js";import"./tooltip-CbUF8g7y.js";import"./overlay-CUoCBKHQ.js";import"./ai-chat-header-CynZlvKq.js";import"./ai-icon-BEx3F7lc.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CgKywzZM.js";import"./ai-dropdown-menu-CpIRx3F4.js";import"./if-defined-DMJsdw-v.js";import"./popover-y7VOmkUz.js";import"./ai-dropdown-menu-item-64y48x4T.js";import"./ai-modal-Do_Hw9gq.js";import"./ai-agent-info-CtxJGot-.js";import"./ai-agent-selector-Czq5zDvQ.js";import"./ai-chat-interface-DnQWatTz.js";import"./ai-file-picker-DYGLLIe3.js";import"./ai-prompt-BGV1bK5Q.js";import"./ai-suggestions-DOn3R_9l.js";import"./ai-voice-input-DUyp78E5.js";import"./ai-response-message-toolbar-Bh6smsPU.js";import"./ai-empty-state-DmpLOTJI.js";import"./ai-error-message-CAWnGVrl.js";import"./ai-response-message-u4PrZ7UB.js";import"./ai-thinking-indicator-B1pI2f6T.js";import"./ai-user-message-oRT0tU6f.js";import"./ai-user-message-toolbar-CXQyS_4A.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
