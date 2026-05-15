import{x as i}from"./iframe-C4mdDn9Y.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-Ce3aAtcx.js";import"./ai-chatbot-base-D43s_qgf.js";import"./ai-chatbot-BiH2xWc6.js";import"./ai-message-thread-DyXdaZ2M.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-NzPqMbXC.js";import"./base-DHNLVSaA.js";import"./query-assigned-elements-BiD3bhpw.js";import"./ref-CyiPM2l-.js";import"./class-map-CcQbpdgR.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DJ0f_FLY.js";import"./ai-spinner-DzLNQ0Qf.js";import"./tooltip-bdkyhvIv.js";import"./overlay-gu5xjfW6.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-DqNLOugn.js";import"./ai-icon-CEwlG43J.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CZ3a0no8.js";import"./ai-dropdown-menu-GtgczIyb.js";import"./if-defined-DJ5LmFOo.js";import"./popover-Itcoq9px.js";import"./query-assigned-nodes-Dh8cSk_H.js";import"./ai-dropdown-menu-item-FQEu0p5x.js";import"./ai-modal-BVvEXfJ5.js";import"./ai-agent-info-DjTggdWM.js";import"./ai-agent-selector-B2QF39wk.js";import"./ai-chat-interface-A3waB8hB.js";import"./ai-file-picker-CoQuDzh8.js";import"./ai-prompt-1UcuVey0.js";import"./ai-suggestions-DhuDL4ci.js";import"./ai-voice-input-D1uR9vMi.js";import"./ai-response-message-toolbar-iscLBqaP.js";import"./ai-empty-state-EdSBI-lB.js";import"./ai-error-message-Cczya-6K.js";import"./ai-response-message-P27eyLSE.js";import"./ai-thinking-indicator-Cj-Lsu-1.js";import"./ai-user-message-CwHEQlF7.js";import"./ai-user-message-toolbar-C7dxAteZ.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
