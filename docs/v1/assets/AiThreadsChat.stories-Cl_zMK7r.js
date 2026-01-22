import{x as i}from"./iframe-BL5phHeD.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-CpQxNBWJ.js";import"./ai-chatbot-BySAZf8F.js";import"./ai-message-thread-NRMrjQLQ.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-BdjiIkW6.js";import"./base-B8d6FZuD.js";import"./query-assigned-elements-Cl_O1bRA.js";import"./ref-BEtLNhAL.js";import"./class-map-COe3R8E1.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Cev1ZRHg.js";import"./ai-spinner-Cj5eYr2P.js";import"./tooltip-CPC3zrks.js";import"./overlay-DlfV8xm7.js";import"./ai-chat-header-D9B4g44C.js";import"./ai-icon-Z7Hv6b9A.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-r2h4OD4a.js";import"./ai-dropdown-menu-Bs8SrijO.js";import"./if-defined-DZyUOKVm.js";import"./popover-ViNDPdHe.js";import"./ai-dropdown-menu-item-COZ8Ydsn.js";import"./ai-modal-COHIfd3V.js";import"./ai-agent-info-ChlNgt1B.js";import"./ai-chat-interface-CVbcmz7j.js";import"./ai-file-picker-DRhS2hTN.js";import"./ai-prompt-fE1gbQ3v.js";import"./ai-suggestions-C0Vy5WKy.js";import"./ai-voice-input-T-aaeGeY.js";import"./ai-actions-toolbar-C4kzshAT.js";import"./ai-empty-state-DQEKHPyb.js";import"./ai-error-message-BMMLmvqp.js";import"./ai-response-message-BDhpa78-.js";import"./ai-thinking-indicator-B63JsHlw.js";import"./ai-user-message-C0-lDvbG.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const J=["Demo"];export{e as Demo,J as __namedExportsOrder,z as default};
