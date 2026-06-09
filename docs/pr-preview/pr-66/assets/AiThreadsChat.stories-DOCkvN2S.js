import{x as i}from"./iframe-Bzg3eSx7.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-FLMfL-Ok.js";import"./ai-chatbot-base-CcKm0SaU.js";import"./ai-chatbot-CDnjdD7l.js";import"./ai-message-thread-Dpl4zJKU.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-L1VQaxJ8.js";import"./base-DBm01n6a.js";import"./query-assigned-elements-C1ZMYiRj.js";import"./ref-Cej_tsEZ.js";import"./class-map-C93NKAy1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DJtjLKBz.js";import"./ai-spinner-d2K2mt9w.js";import"./tooltip-CY5Nmxwi.js";import"./query-DYFSVnSo.js";import"./overlay-C3QoBmeO.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BEmdFzfO.js";import"./ai-icon-5rONBAOt.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DNR4Mb8N.js";import"./ai-dropdown-menu-DALFiTtK.js";import"./if-defined-BuO9s47s.js";import"./popover-B6k78PCI.js";import"./query-assigned-nodes-ZrX1e5NJ.js";import"./ai-dropdown-menu-item-CJaTMuZi.js";import"./ai-modal-CCyElXqT.js";import"./ai-agent-info-DsJooe7g.js";import"./ai-agent-selector-CZ5mnDAf.js";import"./ai-chat-interface-6zq-ZiRx.js";import"./ai-conversations-panel-8lHlgJQG.js";import"./ai-file-picker-B1o7YWew.js";import"./ai-prompt-Dn4ih3-X.js";import"./ai-suggestions-DCVAuiLL.js";import"./ai-voice-input-CyBDIpvC.js";import"./ai-response-message-toolbar-DrkBlCyq.js";import"./ai-empty-state-CFTdoh_E.js";import"./ai-error-message-DaAG7VB5.js";import"./ai-response-message-CXFK39n3.js";import"./ai-thinking-indicator-CeqgGPRC.js";import"./ai-user-message-CRBqQCuo.js";import"./ai-user-message-toolbar-D1J0VIBW.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",tt={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const et=["Demo"];export{e as Demo,et as __namedExportsOrder,tt as default};
