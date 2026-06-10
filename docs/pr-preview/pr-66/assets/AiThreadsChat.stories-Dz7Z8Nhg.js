import{x as i}from"./iframe-DcAZW8iy.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-BenKxTpU.js";import"./ai-chatbot-base-DuG0gXXj.js";import"./ai-chatbot-BhpZuLGb.js";import"./ai-message-thread-BWo6rer0.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Ckz5hMyx.js";import"./base-BoTOs8pR.js";import"./query-assigned-elements-BaCIf_t7.js";import"./ref-1Hb-O-Tx.js";import"./class-map-CbcegUi9.js";import"./when-CI7b_ccM.js";import"./ai-attachment-pUp8SPqo.js";import"./ai-spinner-D6NUSPNm.js";import"./tooltip-BeKqHjlE.js";import"./overlay-CbmlEmpq.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-BPDAGfxM.js";import"./ai-icon-DRkMzXgZ.js";import"./utils-BGBq21po.js";import"./ai-gradient-container--FWSrnqp.js";import"./ai-dropdown-menu-Cnn7XMAl.js";import"./if-defined-gZBbtPMx.js";import"./popover-CeHIk7Gj.js";import"./query-assigned-nodes-Ba5g_8kl.js";import"./ai-dropdown-menu-item-Dpxybdz_.js";import"./ai-modal-Dzxgf5zd.js";import"./ai-agent-info-BzXRB4XK.js";import"./ai-agent-selector-BJbma9Vr.js";import"./ai-chat-interface-CMFYdm8v.js";import"./ai-conversations-panel-DJQwbpZ6.js";import"./ai-file-picker-dNycTFyl.js";import"./ai-prompt-DL4sousx.js";import"./ai-suggestions-Tr6A9d6y.js";import"./ai-voice-input-Ytzdnpam.js";import"./ai-response-message-toolbar-CaXh9NqB.js";import"./ai-empty-state-DDCykae_.js";import"./ai-error-message-Bpr0bZDw.js";import"./ai-response-message-6fdOzF17.js";import"./ai-thinking-indicator-DHSaecgx.js";import"./ai-user-message-koxRa6X1.js";import"./ai-user-message-toolbar-pvselRub.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",Z={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
