import{x as i}from"./iframe-4PSpynT3.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-BqqvR_-_.js";import"./ai-chatbot-base-DoL15kDo.js";import"./ai-chatbot-BRZ9vpeM.js";import"./ai-message-thread-LQSY_-Bc.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-DDgNQfxw.js";import"./base-DEhi61ki.js";import"./query-assigned-elements-BQQxo_v9.js";import"./ref-DzHNudZC.js";import"./class-map-DNOv9QtK.js";import"./when-CI7b_ccM.js";import"./ai-attachment-BDwvY6Hr.js";import"./ai-spinner-BY0xbpzF.js";import"./tooltip-BQOqhZxr.js";import"./overlay-Bk48A2Mo.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-XVAmzwNw.js";import"./ai-icon-CwWMCvm9.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-D2oG_4Yj.js";import"./ai-dropdown-menu-DBnDtsw-.js";import"./if-defined--LWskl4_.js";import"./popover-qPAgfF95.js";import"./query-assigned-nodes-BN3gESMJ.js";import"./ai-dropdown-menu-item-DAaYG3AM.js";import"./ai-modal-Bd_LQOAw.js";import"./ai-agent-info-NETovMlz.js";import"./ai-agent-selector-CdW9PAzk.js";import"./ai-chat-interface-BtjQdAwo.js";import"./ai-conversations-panel-aRX1u15a.js";import"./ai-file-picker-CSR0QbJh.js";import"./ai-prompt-AaVAqr0d.js";import"./ai-suggestions-CQFnaGm0.js";import"./ai-voice-input-BkMgMtN_.js";import"./ai-response-message-toolbar-CiRRigH_.js";import"./ai-empty-state-HQUDL9Jf.js";import"./ai-error-message-BSLQzoIX.js";import"./ai-response-message-DwVGRnbJ.js";import"./ai-thinking-indicator-BUcx9z_j.js";import"./ai-user-message-CIffA0aZ.js";import"./ai-user-message-toolbar-DxQDffiV.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",createdAt:new Date(Date.now()-864e5).toISOString(),messageCount:5},{id:"thread-2",title:"Data analysis question",createdAt:new Date(Date.now()-36e5).toISOString(),messageCount:12},{id:"thread-3",title:"How do I implement authentication?",createdAt:new Date().toISOString(),messageCount:3}];return i`
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
