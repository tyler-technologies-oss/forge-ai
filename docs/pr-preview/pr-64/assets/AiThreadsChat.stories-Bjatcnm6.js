import{x as i}from"./iframe-DAVA31Ry.js";import{M as p}from"./mock-adapter-uhjSnHDA.js";import"./ai-threads-D7vy-f1C.js";import"./ai-chatbot-base-CLJEpk-B.js";import"./ai-chatbot-DTPHYPSX.js";import"./ai-message-thread-BY-xEhve.js";import"./utils-CX_NQepL.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Ci5cb0YB.js";import"./base-BQmOCDTJ.js";import"./query-assigned-elements-B3RrTpnp.js";import"./ref-DVdmAuCL.js";import"./class-map-D_CpSgbw.js";import"./when-CI7b_ccM.js";import"./ai-attachment-JSiF01dq.js";import"./ai-spinner-BaeH4v6b.js";import"./tooltip-BdKQ5xTi.js";import"./overlay-CkZxs_bL.js";import"./floating-ui.dom-C0FiGihr.js";import"./ai-chat-header-A0RwQRfB.js";import"./ai-icon-D_EHd4xX.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-B7Gvg6JV.js";import"./ai-dropdown-menu-CHD8qOCD.js";import"./if-defined-C4n3Vrem.js";import"./popover-CJCigjM0.js";import"./query-assigned-nodes-LIr9byj5.js";import"./ai-dropdown-menu-item-GKpTwDaJ.js";import"./ai-modal-DzE4WjHC.js";import"./ai-agent-info-DwSATuRM.js";import"./ai-agent-selector-B1bOPCy0.js";import"./ai-chat-interface-38fIqMeq.js";import"./ai-file-picker-C2f9L0Kg.js";import"./ai-prompt-CuiuTE--.js";import"./ai-suggestions-BkAuU-4u.js";import"./ai-voice-input-w0oxHLLg.js";import"./ai-response-message-toolbar-DEzr-9iD.js";import"./ai-empty-state-8-I_HhVw.js";import"./ai-error-message-CvELQ2uN.js";import"./ai-response-message-Dz_qFrZv.js";import"./ai-thinking-indicator-bmCqBi7v.js";import"./ai-user-message-BqtHFGIf.js";import"./ai-user-message-toolbar-TyNFsKKA.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m="forge-ai-threads",X={title:"AI Components/Form Factors/Threads",component:m,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
