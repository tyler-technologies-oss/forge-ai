import{x as i}from"./iframe-q7zFl5ll.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-CWXE96Ev.js";import"./ai-chatbot-base-BA3dn5Mu.js";import"./ai-chatbot-BMJTqtZ7.js";import"./ai-message-thread-COKhkalx.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-C-NJNTwY.js";import"./base-DhM8NWrd.js";import"./query-assigned-elements-B3ZwPJKz.js";import"./ref-rF7lpWNc.js";import"./class-map-S7PEsLZ5.js";import"./when-CI7b_ccM.js";import"./ai-attachment-D5T3KRNy.js";import"./ai-spinner-DUdFWm8Z.js";import"./tooltip-BYqFfX8s.js";import"./overlay-00gSMfay.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BAEq67yG.js";import"./ai-icon-DXa0A8fI.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B7nIB30o.js";import"./ai-dropdown-menu-DC9a6YGp.js";import"./if-defined-CXPs97rB.js";import"./popover-BVcJo1lO.js";import"./query-assigned-nodes-NBhOExXB.js";import"./ai-dropdown-menu-item-MxPcYVOH.js";import"./ai-modal-JWbkwMNS.js";import"./ai-agent-info-CsYZg5LZ.js";import"./ai-agent-selector-BgMS2a-O.js";import"./ai-chat-interface-BLFmN0UH.js";import"./ai-conversations-panel-Bieb6jZS.js";import"./ai-file-picker-mqLqMzhH.js";import"./ai-prompt-HzXocerM.js";import"./ai-suggestions-BwM_qtXY.js";import"./ai-voice-input-Ww3_xAEZ.js";import"./ai-response-message-toolbar-B8o-cGEy.js";import"./ai-empty-state-lXvr6_D3.js";import"./ai-error-message-JYh-o4om.js";import"./ai-response-message-Bu4DXr_p.js";import"./ai-thinking-indicator-CdJykohP.js";import"./ai-user-message-DuhC8lRo.js";import"./ai-user-message-toolbar-Cm0KpNkp.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
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
