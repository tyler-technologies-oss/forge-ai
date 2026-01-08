import{x as i}from"./iframe-DRrdbGcc.js";import{M as p}from"./mock-adapter-BdCNJp5x.js";import"./ai-threads-DP_Z6a1X.js";import"./ai-chatbot-BdUACkEV.js";import"./ai-message-thread-DtBy5lMR.js";import"./utils-Dod8vlOP.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-CRatXcNh.js";import"./state-DB8zZvfK.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-BA4WsFZe.js";import"./class-map-CzD29Udj.js";import"./when-CI7b_ccM.js";import"./ai-attachment-DFDBmHIh.js";import"./ai-spinner-Bj9BSRbm.js";import"./tooltip-DhA4vRlZ.js";import"./query-BpjciUlk.js";import"./overlay-vXHU0OUn.js";import"./ai-chat-header-B4LTsdF1.js";import"./ai-icon-CIMFkGUd.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-DfvGZ68z.js";import"./ai-dropdown-menu-vfVLqysl.js";import"./ai-dropdown-menu-item-DtRXoZnL.js";import"./popover-DDGmOCev.js";import"./ai-modal-DEEeFng5.js";import"./ai-agent-info-YaRLUcYU.js";import"./ai-chat-interface-DAmBr4m5.js";import"./ai-file-picker-gj1HWB3H.js";import"./ai-prompt-K4yFLkUk.js";import"./ai-suggestions-Cty-kXiX.js";import"./ai-voice-input-BIosXLQB.js";import"./ai-empty-state-fu2ezad_.js";import"./ai-error-message-BvdN07EL.js";import"./ai-response-message-CD78aW1v.js";import"./ai-actions-toolbar-C_r7ugvT.js";import"./ai-thinking-indicator-R3An_2Yr.js";import"./ai-user-message-DSnj7amj.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",J={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
    `}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const Q=["Demo"];export{e as Demo,Q as __namedExportsOrder,J as default};
