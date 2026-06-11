import{x as i}from"./iframe-DB95LTDC.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-DrK4JFoG.js";import"./ai-chatbot-base-BvmIRIN_.js";import"./ai-chatbot-DlpMkr1x.js";import"./ai-message-thread-DqbXZeiX.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-YahTr4XG.js";import"./base-CxgC55wn.js";import"./query-assigned-elements-f8PG123e.js";import"./ref-noIQmjwS.js";import"./class-map-EbJ_EA23.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BWnAdePR.js";import"./ai-spinner-B2f-_K8S.js";import"./tooltip-B8cSLeVu.js";import"./overlay-CHQld4R7.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-CJio-LHv.js";import"./ai-icon-BA6-VsKw.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bk-ntbZX.js";import"./ai-dropdown-menu-BzuCfwuL.js";import"./if-defined-BAQTZVfE.js";import"./popover-CRuC9n24.js";import"./query-assigned-nodes-BT1-iFiQ.js";import"./ai-dropdown-menu-item-Dvb5WKOU.js";import"./ai-modal-CuWoVLQq.js";import"./ai-agent-info-CZo7txb5.js";import"./ai-agent-selector-nxtzmH1W.js";import"./ai-chat-interface-CK4nZuBq.js";import"./ai-conversations-panel-ULnjS9Bx.js";import"./ai-file-picker-BNEIsjWS.js";import"./ai-prompt-DTE789n9.js";import"./ai-suggestions-DbWBfxES.js";import"./ai-voice-input-BfcdQiWz.js";import"./ai-response-message-toolbar-78RXgp25.js";import"./ai-empty-state-D6GT7BBq.js";import"./ai-error-message-C9xI9Zbq.js";import"./ai-response-message-DKrejEZa.js";import"./ai-thinking-indicator-B299Gn6Y.js";import"./ai-user-message-Bum4BUYC.js";import"./ai-user-message-toolbar-qMy5ZcRB.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const tt=["Demo"];export{e as Demo,tt as __namedExportsOrder,Z as default};
