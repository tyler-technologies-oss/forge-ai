import{x as i}from"./iframe-BIx9BwVY.js";import{M as p}from"./mock-adapter-CGsAFG5D.js";import"./ai-threads-Cw8zpxpT.js";import"./ai-chatbot-C5e4_gFA.js";import"./ai-message-thread-DkrX3NY3.js";import"./utils-B0W8KtS_.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-OahQc6Un.js";import"./base--lj9z53V.js";import"./query-assigned-elements-BIs2HVNp.js";import"./ref-EqwN2kiR.js";import"./class-map-CR2QuX2a.js";import"./when-CI7b_ccM.js";import"./ai-attachment-zL30hjf9.js";import"./ai-spinner-Cd5512NZ.js";import"./tooltip-0yjNB8x8.js";import"./overlay-BdKo0n5J.js";import"./ai-chat-header-DoFb6CBB.js";import"./ai-icon-p3P9XCPa.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-CgqfH3le.js";import"./ai-dropdown-menu-C_-tziB-.js";import"./if-defined-CjC_2JUY.js";import"./popover-BWcVNxNS.js";import"./ai-dropdown-menu-item-CkfCq4ax.js";import"./ai-modal-BQyrgk3u.js";import"./ai-agent-info-Cw7Ac1kj.js";import"./ai-agent-selector-Ds6w4z1M.js";import"./ai-chat-interface-C129ZcWC.js";import"./ai-file-picker-XX1vviDH.js";import"./ai-prompt-BaVcR74-.js";import"./ai-suggestions-DNaMCIKW.js";import"./ai-voice-input-D4dczc_K.js";import"./ai-response-message-toolbar-C4elGK5-.js";import"./ai-empty-state-BHFMVmNB.js";import"./ai-error-message-P7C2egib.js";import"./ai-response-message-BjKklwZt.js";import"./ai-thinking-indicator-i2aeStNO.js";import"./ai-user-message-DjXNi0R0.js";import"./ai-user-message-toolbar-BV444c9c.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",Q={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
