import{x as i}from"./iframe-DRsxbJNB.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-BPG4wl68.js";import"./ai-chatbot-D4HWpUjX.js";import"./ai-message-thread-DZQ_UdKb.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-qDaXtDqy.js";import"./base-C9-k6wjM.js";import"./query-assigned-elements-CniTRTVF.js";import"./ref-BwyghMc-.js";import"./class-map-BLXmuMr-.js";import"./when-CI7b_ccM.js";import"./ai-attachment-vVg3N8Im.js";import"./ai-spinner-l889ZGM9.js";import"./tooltip-DnUH9d7M.js";import"./overlay-C-Qx8c3y.js";import"./ai-chat-header-BT421IfC.js";import"./ai-icon-D4MkhF2S.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-Bq0RX4Qj.js";import"./ai-dropdown-menu-DRfNWSOk.js";import"./if-defined-e0FTBLaf.js";import"./popover-DEJ20mui.js";import"./ai-dropdown-menu-item-D7Wfp1_7.js";import"./ai-modal-7gEEOzSO.js";import"./ai-agent-info-DOztzTRE.js";import"./ai-agent-selector-ovUhEP3w.js";import"./ai-chat-interface-CpGhMhlk.js";import"./ai-file-picker-lmPf-hCs.js";import"./ai-prompt-DB5y7RAQ.js";import"./ai-suggestions-BAteF82d.js";import"./ai-voice-input-CjLCpqVm.js";import"./ai-response-message-toolbar-CXYl2UEI.js";import"./ai-empty-state-P7b1h4V4.js";import"./ai-error-message-CjbJdMBm.js";import"./ai-response-message-D8ArWeOZ.js";import"./ai-thinking-indicator-yyYQ-CIq.js";import"./ai-user-message-D0BTWYkG.js";import"./ai-user-message-toolbar-CVvd0-iU.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
