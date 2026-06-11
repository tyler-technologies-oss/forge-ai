import{x as i}from"./iframe-boZttW5h.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-UwhTAQVo.js";import"./ai-chatbot-base-CM1PuzkP.js";import"./ai-chatbot-CKKyjYkQ.js";import"./ai-message-thread-CDcqcYoA.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CKnGtieo.js";import"./base-COdTFAzF.js";import"./query-assigned-elements-Cg_nHf0G.js";import"./ref-yYvB2Wix.js";import"./class-map-DFaA-xoF.js";import"./when-CI7b_ccM.js";import"./ai-attachment-B4xWW_t7.js";import"./ai-spinner-D0OY7eLI.js";import"./tooltip-BzaluZe0.js";import"./overlay-BHxevneA.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DQDKeQLO.js";import"./ai-icon-CQqqez4_.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-ts9efKS5.js";import"./ai-dropdown-menu-D3oZmxJ3.js";import"./if-defined-d-BwdnlZ.js";import"./popover-CYHpYuZG.js";import"./query-assigned-nodes-BbGQX-u7.js";import"./ai-dropdown-menu-item-ClORNUDp.js";import"./ai-modal-CNip-4Uj.js";import"./ai-agent-info-ayXtjZtY.js";import"./ai-agent-selector-DYrwQxO_.js";import"./ai-chat-interface-DqBeC9S2.js";import"./ai-file-picker-BK1ZpVhW.js";import"./ai-prompt-CH0NukvK.js";import"./ai-suggestions-BXcCJXRi.js";import"./ai-voice-input-jXvbwKyd.js";import"./ai-response-message-toolbar-DEI5WNNj.js";import"./ai-empty-state-Dpikh2Cd.js";import"./ai-error-message-0x4ReU_v.js";import"./ai-response-message-DSeg4kek.js";import"./ai-thinking-indicator-T26cn7tp.js";import"./ai-user-message-DBJdGvCE.js";import"./ai-user-message-toolbar-JHvgni9D.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Z=["Demo"];export{e as Demo,Z as __namedExportsOrder,X as default};
