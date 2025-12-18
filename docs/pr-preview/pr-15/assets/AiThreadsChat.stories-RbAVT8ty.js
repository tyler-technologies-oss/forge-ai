import{x as i}from"./iframe-B1oXUyRT.js";import{M as p}from"./mock-adapter-MuFwfiLK.js";import"./ai-threads-sRztBuup.js";import"./ai-chatbot-Bz-zHjOh.js";import"./ai-message-thread-BZkZvzSh.js";import"./utils-C_XXmvvR.js";import"./preload-helper-PPVm8Dsz.js";import"./custom-element-UsVr97OX.js";import"./property-Dce-1ARY.js";import"./state-C3-NtP5L.js";import"./query-assigned-elements-lTLKWxFL.js";import"./base-DVmwUFg0.js";import"./ref-Ca8PJ0LR.js";import"./class-map-BLxvsbS_.js";import"./when-CI7b_ccM.js";import"./ai-attachment-Oz1J0udM.js";import"./tooltip-DPla4Umx.js";import"./query-BpjciUlk.js";import"./overlay-DfBBBYkF.js";import"./ai-chat-header-B5gD_Wfb.js";import"./ai-icon-LPs0pb_W.js";import"./utils-BGBq21po.js";import"./ai-gradient-container-C8fQUv3s.js";import"./ai-dropdown-menu-gmB8JKi1.js";import"./if-defined-CV7Xsc6Z.js";import"./popover-Cxlhz_7n.js";import"./ai-modal-CyIcqrQ4.js";import"./ai-agent-info-B-5WGUeW.js";import"./ai-chat-interface-ClE8YndB.js";import"./ai-file-picker-DSSnsnn1.js";import"./ai-prompt-Dph-depj.js";import"./ai-suggestions-DOQdlXTP.js";import"./ai-voice-input-KWvXrVD5.js";import"./ai-empty-state-CEKpS_5K.js";import"./ai-error-message-Du6t08SH.js";import"./ai-response-message-D8gCaEXV.js";import"./ai-actions-toolbar-D2DV7opP.js";import"./ai-thinking-indicator-BqDnwXOZ.js";import"./ai-user-message-D8HiFs8Y.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,s="forge-ai-threads",z={title:"AI Components/Form Factors/Threads",component:s,argTypes:{adapter:{control:!1,description:"The adapter for communication with the AI service"},fileUpload:{control:{type:"select"},options:["on","off"],description:"Enable file upload functionality"},placeholder:{control:"text",description:"Placeholder text for input"}},args:{fileUpload:"off",placeholder:"Ask a question..."},render:o=>{const r=new p({simulateStreaming:!0,simulateTools:!1,streamingDelay:50,responseDelay:500}),a=[{id:"thread-1",title:"Getting started with AI",time:"10:30 AM",date:new Date(Date.now()-864e5)},{id:"thread-2",title:"Data analysis question",time:"2:15 PM",date:new Date(Date.now()-36e5)},{id:"thread-3",title:"How do I implement authentication?",time:"4:45 PM",date:new Date}];return i`
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
