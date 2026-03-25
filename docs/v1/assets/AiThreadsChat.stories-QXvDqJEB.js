import{x as i}from"./iframe-25JXVMg8.js";import{M as p}from"./mock-adapter-BYw0QxWR.js";import"./ai-threads-BOc9e6v1.js";import"./ai-chatbot-base-D7kYPtRI.js";import"./ai-chatbot-CP_1y9r6.js";import"./ai-message-thread-BOVQn3a4.js";import"./utils-BojVjD0a.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BFBLbj5Y.js";import"./base-CJ2JMN1G.js";import"./query-assigned-elements-65KzeySa.js";import"./ref-DIvevwX6.js";import"./class-map-Bw4r2oPm.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BIyvxpEf.js";import"./ai-spinner-DxFZHhzm.js";import"./tooltip-By131VTo.js";import"./overlay-BUCftl3D.js";import"./ai-chat-header-B2LWQX5J.js";import"./ai-icon-BFmasaSk.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Cot99-sN.js";import"./ai-dropdown-menu-BsgLSSzf.js";import"./if-defined-BzxE7JR_.js";import"./popover-DwB7-cex.js";import"./ai-dropdown-menu-item-BPdcgwvD.js";import"./ai-modal-0jrZmkDw.js";import"./ai-agent-info-BdOijDs7.js";import"./ai-agent-selector-B12w_VFk.js";import"./ai-chat-interface-D7d3vpi_.js";import"./ai-file-picker-_Bj5B8iQ.js";import"./ai-prompt-Bh5Y3GYi.js";import"./ai-suggestions-BZb52axw.js";import"./ai-voice-input-NFG1KUJm.js";import"./ai-response-message-toolbar-BERS8PYi.js";import"./ai-empty-state-CwraqQ_I.js";import"./ai-error-message-BXTdmAdw.js";import"./ai-response-message-D4Kuekr6.js";import"./ai-thinking-indicator-BnCCss2U.js";import"./ai-user-message-CjQ_WIAu.js";import"./ai-user-message-toolbar-e7F93Oy0.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",V={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
