import{x as i}from"./iframe-DmoIR2iB.js";import{M as s}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DpGwwmol.js";import"./ai-chatbot-launcher-4ge9M48M.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CX_NQepL.js";import"./custom-element-UsVr97OX.js";import"./property-D6A382qA.js";import"./class-map-BU13AwkM.js";import"./when-CI7b_ccM.js";import"./ai-edit-thread-CAmQIgA4.js";import"./ref-B-kmAuE0.js";import"./ai-dropdown-menu-DBsz8DKj.js";import"./query-assigned-nodes-C7uSgWhl.js";import"./if-defined-CFWMlw21.js";import"./popover-BOZz6asb.js";import"./overlay-ClAHEkU0.js";import"./floating-ui.dom-C0FiGihr.js";import"./utils-BGBq21po.js";import"./ai-dropdown-menu-item-B8BoH0oJ.js";import"./ai-icon-3I7GOKyv.js";import"./ai-gradient-container-C3K8sgUk.js";import"./ai-spinner-DAZ1JxI9.js";import"./ai-modal-D6OyedAn.js";import"./ai-chatbot-base-DGPLV8S_.js";import"./ai-attachment-COrDw-gj.js";import"./tooltip-C64AywiS.js";import"./ai-chat-header-kf7mosVz.js";import"./ai-agent-info-DVNpXHFu.js";import"./ai-agent-selector-Dg0lNMui.js";import"./ai-file-picker-BPryrTRl.js";import"./ai-message-thread-DglUOtXK.js";import"./ai-response-message-toolbar-BElaqM7C.js";import"./ai-empty-state-CpcL_dZH.js";import"./ai-error-message-DPho6nrL.js";import"./ai-response-message-2KcouTYJ.js";import"./ai-thinking-indicator-Beq0DU9e.js";import"./ai-user-message-CcsOO5w0.js";import"./ai-user-message-toolbar-D_KGZKjB.js";import"./ai-prompt-BnamSowA.js";import"./ai-suggestions-Ba70OfKR.js";import"./ai-voice-input-7zvWXtmN.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,p="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:p,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new s({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
      <div style="height: 600px; border: 1px solid var(--forge-theme-outline);">
        <forge-ai-threads
          .threads=${a}
          @forge-ai-threads-select=${t("forge-ai-threads-select")}
          @forge-ai-threads-new-chat=${t("forge-ai-threads-new-chat")}
          @forge-ai-threads-clear-history=${t("forge-ai-threads-clear-history")}>
          <forge-ai-chatbot-launcher
            .adapter=${r}
            file-upload=${o.fileUpload}
            placeholder=${o.placeholder}
            @forge-ai-chatbot-connected=${t("forge-ai-chatbot-connected")}
            @forge-ai-chatbot-message-sent=${t("forge-ai-chatbot-message-sent")}
            @forge-ai-chatbot-message-received=${t("forge-ai-chatbot-message-received")}
            @forge-ai-chatbot-tool-call=${t("forge-ai-chatbot-tool-call")}
            @forge-ai-chatbot-error=${t("forge-ai-chatbot-error")}
            @forge-ai-chatbot-info=${t("forge-ai-chatbot-info")}
            @forge-ai-chatbot-launcher-conversation-start=${t("forge-ai-chatbot-launcher-conversation-start")}>
          </forge-ai-chatbot-launcher>
        </forge-ai-threads>
      </div>
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const W=["Demo"];export{e as Demo,W as __namedExportsOrder,V as default};
